'use client';
import { Button } from '@/components/shadcn/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import { Form } from '@/components/shadcn/form';
import { useToast } from '@/components/shadcn/use-toast';
import { personAbove18 } from '@/functions/personAbove18';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FieldErrors, UseFormReturn, useForm } from 'react-hook-form';
import * as z from 'zod';
import CommentsCheckbox from './formFields/CommentCheckbox';
import CommentsForm from './formFields/CommentsForm';
import DiseaseField from './formFields/DiseaseField';
import GenderField from './formFields/GenderField';
import GuardianNameField from './formFields/GuardianNameField';
import GuardianTelephoneField from './formFields/GuardianTelephone';
import HasDiseaseCheckbox from './formFields/HasDiseaseCheckbox';
import NameField from './formFields/NameField';
import PersonNumberField from './formFields/PersonNumberField';
import SportsField from './formFields/SportsField';
import { formSchema } from './schema/formSchema';
import ConditionsField from './formFields/ConditionsField';
import DatePicker from './formFields/DatePicker';
import getNextValidDate from '@/functions/disabledDates';
import { listOfSports } from '@/constants/sports';

export type FormFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

function TrialSession() {
  const [hasComments, setHasComments] = useState(false);
  const [hasDiseases, setHasDiseases] = useState(false);
  const [needsGuardian, setNeedsGuardian] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      personnumber: '',
      gender: 'man',
      sport: 'Boxning',
      date: getNextValidDate(false, 'man', 'Boxning'),
      diseases: '',
      comments: '',
      guardianName: '',
      guardianTelephone: '',
      conditions: false,
    },
  });

  useEffect(() => {
    !needsGuardian ? form.setValue('sport', 'Boxning'): form.setValue('sport', 'Olympisk brottning');
  }, [needsGuardian]);

  const formDataObject = form.getValues();
  const { isDirty, isSubmitting, isSubmitSuccessful, errors } = form.formState;

  const postEmail = async () => {
    try {
      const response = await fetch('/api/sessionTrialEmail', {
        method: 'POST',
        body: JSON.stringify(formDataObject),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Check the api endpoint, status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Tack för din registrering!',
          description: 'Ditt meddelande har skickats',
          variant: 'success',
        });

        // Trigger Google Ads conversion tracking
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-11515902602/QvJlCNvJrfwZEIr1mvMq',
        });
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (error) {
      toast({
        title: 'Något blev fel!',
        description: 'Vi kunde tyvärr inte skicka ditt meddelande',
        variant: 'destructive',
      });
      console.error(error);
    }
  };

  const onSubmit = async () => {
    await postEmail();
  };

  const onError = (errors: FieldErrors) => {
    if (errors) {
      console.log(errors)
      toast({
        title: 'Något blev fel!',
        description: 'Vänligen fyll i alla obligatoriska fält',
        variant: 'destructive',
      });
    }
  };

  const handlePersonNumber = (value: string) => {
    form.setValue('personnumber', value);
    const isAbove18 = personAbove18(value);
    setNeedsGuardian(!isAbove18);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      form.reset();
    }
  }, [form, isSubmitSuccessful, isSubmitting, errors]);

  return (
    <>
      <span id='shift-navbar-color'>{/* Triggering change of navbar */}</span>
      <div className='mt-32 flex min-h-screen min-w-80 w-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-3xl mb-8'>
          <h1 className='text-center font-extrabold tracking-tight lg:text-5xl text-secondary-foreground'>
            Ansökan om provträning
          </h1>
        </div>

        <Form {...form}>
          <Card className='w-full max-w-3xl shadow-lg rounded-lg'>
            <CardHeader className='bg-secondary text-primary-foreground rounded-t-lg p-6'>
              <CardTitle className='text-secondary-foreground text-2xl font-bold'>Registrera din provträning</CardTitle>
              <CardDescription className='text-muted-foreground'>
                Var vänlig fyll i formuläret för att kunna provträna hos oss
              </CardDescription>
            </CardHeader>
            <CardContent className='p-6'>
              <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit, onError)}>
                {/* Name Field */}
                <NameField form={form} />

                {/* Personnumber field */}
                <PersonNumberField handlePersonNumber={handlePersonNumber} form={form} />

                {/* Guardian fields */}
                {form.watch('personnumber').length > 9 && needsGuardian && (
                  <>
                    <GuardianNameField form={form} />
                    <GuardianTelephoneField form={form} />
                  </>
                )}

                {/* Gender field */}
                <GenderField form={form} needsGuardian={needsGuardian} />

                {/* Sports field */}
                <SportsField
                  form={form}
                  sports={!needsGuardian ? form.watch('gender') === 'man' ? listOfSports.men : listOfSports.women: listOfSports.children}
                  needsGuardian={needsGuardian}
                />

                {/* Date field */}
                <DatePicker form={form} needsGuardian={needsGuardian} />

                {/* HasDisease checkbox */}
                <HasDiseaseCheckbox
                  hasDiseases={hasDiseases}
                  setHasDiseases={(checked) => setHasDiseases(checked)}
                />
                {/* Disease field */}
                {hasDiseases && <DiseaseField form={form} />}

                {/* Comments field */}
                <CommentsCheckbox hasComments={hasComments} setHasComments={setHasComments} />
                {hasComments && <CommentsForm form={form} />}

                {/* Conditions field */}
                <ConditionsField form={form}/>

                <CardFooter className='flex justify-end p-6'>
                  <Button
                    disabled={!isDirty || isSubmitting}
                    className='w-full md:w-auto bg-primary text-primary-foreground hover:bg-secondary-foreground hover:text-primary'
                    type='submit'
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Skickar..
                      </>
                    ) : (
                      'Skicka in'
                    )}
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </Form>
      </div>
    </>
  );
}

export default TrialSession;
