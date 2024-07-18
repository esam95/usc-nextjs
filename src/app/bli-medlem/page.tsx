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
import AddressField from './formFields/AddressField';
import CommentsCheckbox from './formFields/CommentCheckbox';
import CommentsForm from './formFields/CommentsForm';
import DiscountField from './formFields/DiscountField';
import DiseaseField from './formFields/DiseaseField';
import EmailAdressField from './formFields/EmailAdressField';
import FriendNameFields from './formFields/FriendNameFiels';
import FriendReferalField from './formFields/FriendReferalFriend';
import GenderField from './formFields/GenderField';
import GuardianNameField from './formFields/GuardianNameField';
import GuardianTelephoneField from './formFields/GuardianTelephone';
import HasDiseaseCheckbox from './formFields/HasDiseaseCheckbox';
import NameField from './formFields/NameField';
import PersonNumberField from './formFields/PersonNumberField';
import PostalCodeField from './formFields/PostalCodeField';
import SportsField from './formFields/SportsField';
import TelephoneField from './formFields/TelephoneField';
import TrainingFrequencyField from './formFields/TrainingFrequencyField';
import { formSchema } from './schema/formSchema';

export type FormFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

function BecomeMember() {
  const [hasComments, setHasComments] = useState(false);
  const [hasDiseases, setHasDiseases] = useState(false);
  const [needsGuardian, setNeedsGuardian] = useState(false);
  const [hasFriend, setHasFriend] = useState(false);
  const { toast } = useToast();
  const listOfSports = [
    'Boxning',
    'Fristil brottning',
    'Submission grappling / NoGi',
    'Fys & Kondition träningar',
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      emailAddress: '',
      address: '',
      postalCode: '',
      personnumber: '',
      telephone: '',
      gender: 'man',
      sports: [],
      diseases: '',
      trainingFrequency: '1-2',
      discount: false,
      comments: '',
      guardianName: '',
      guardianTelephone: '',
      friendReferal: false,
      friendsName: '',
    },
  });

  const formDataObject = form.getValues();
  const { isDirty, isSubmitting, isSubmitSuccessful, errors } = form.formState;

  const postEmail = async () => {
    try {
      const response = await fetch('/api/emails', {
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
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (error) {
      toast({
        title: 'Något blev fel!',
        description: 'Vi kunde tyvärr inte skicka ditt meddelande',
        variant: 'destructive',
      });
      console.error('Error:', error);
    }
  };

  const onSubmit = async () => {
    await postEmail();
  };

  const onError = (errors: FieldErrors) => {
    if (errors) {
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
    <div className="flex min-h-screen min-w-80 w-full flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl mb-8">
        <h1 className="text-center font-extrabold tracking-tight md:text-left lg:text-5xl text-gray-700">
          Ansökan om medlemskap
        </h1>
      </div>

      <Form {...form}>
        <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-6">
            <CardTitle className="text-2xl font-bold">Registrera dig</CardTitle>
            <CardDescription className="text-primary-foreground/70">
              Var vänlig fyll i formuläret för att bli medlem
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit, onError)}>
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

              {/* Email address field */}
              <EmailAdressField form={form} />

              {/* Telephone field */}
              <TelephoneField form={form} />

              {/* Address field */}
              <AddressField form={form} />

              {/* Postal code field */}
              <PostalCodeField form={form} />

              {/* Gender field */}
              <GenderField form={form} />

              {/* Sports field */}
              <SportsField form={form} sports={listOfSports} />

              {/* Training Frequency */}
              <TrainingFrequencyField form={form} />

              {/* FriendReferal Checkbox */}
              <FriendReferalField form={form} setHasFriend={setHasFriend} />
              {/* FriendReferal Field */}
              {hasFriend && <FriendNameFields form={form} />}

              {/* Discount Field */}
              <DiscountField form={form} />

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

              <CardFooter className="flex justify-end p-6">
                <Button
                  disabled={!isDirty || isSubmitting}
                  className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  type="submit"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
  );
}

export default BecomeMember;
