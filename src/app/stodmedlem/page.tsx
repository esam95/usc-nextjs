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
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { FieldErrors, UseFormReturn, useForm } from 'react-hook-form';
import * as z from 'zod';
import EmailAdressField from './formFields/EmailAdressField';
import NameField from './formFields/NameField';
import AmountField from './formFields/AmountField';
import { formSchema } from './schema/formSchema';
import PersonNumberField from './formFields/PersonNumberField';

export type FormFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

function BecomeSupportMember() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      personnumber: '',
      emailAddress: '',
      amount: '',
    },
  });

  const formDataObject = form.getValues();
  const { isDirty, isSubmitting, isSubmitSuccessful, errors } = form.formState;

  const postEmail = async () => {
    try {
      const response = await fetch('/api/stodmedlemEmail', {
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

  useEffect(() => {
    if (isSubmitSuccessful) {
      form.reset();
    }
  }, [form, isSubmitSuccessful, isSubmitting, errors]);

  return (
    <>
      <div
        id='stod-medlem-card'
        className='flex min-h-screen min-w-80 w-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-36'
      >
        <div className='w-full max-w-3xl mb-1'>
          <h1 className='text-center font-extrabold tracking-tight lg:text-5xl text-secondary-foreground'>
            Stödmedlem
          </h1>
        </div>

        <div className='w-full max-w-3xl mb-8 p-6'>
          <div className='text-lg leading-relaxed'>
            <h4 className='text-lg font-normal text-muted-foreground'>
              Genom att bli stödmedlem i vår kampsportsklubb hjälper du oss på många sätt.
            </h4>
            <br />

            <section className='mb-4'>
              <h5 className='text-secondary-foreground'>Stöd Våra Idrottare</h5>
              <p className='text-base text-muted-foreground'>
                Dina bidrag hjälper till att finansiera träning, utrustning och resekostnader för våra
                idrottare.
              </p>
            </section>

            <section className='mb-4'>
              <h5 className='text-secondary-foreground'>Förbättra Faciliteterna</h5>
              <p className='text-base text-muted-foreground'>
                Vi strävar efter att tillhandahålla de bästa faciliteterna för våra medlemmar, och ditt stöd
                hjälper oss att underhålla och förbättra vår träningsmiljö.
              </p>
            </section>

            <section className='mb-4'>
              <h5 className='text-secondary-foreground'>Engagera Gemenskapen</h5>
              <p className='text-base text-muted-foreground'>
                Ditt stöd gör det möjligt för oss att organisera evenemang och program som engagerar det
                lokala samhället och främjar sporten.
              </p>
            </section>

            <section className='mb-4'>
              <h5 className='text-secondary-foreground'>Exklusiva Förmåner</h5>
              <p className='text-base text-muted-foreground'>
                Som stödmedlem får du exklusiva uppdateringar, inbjudningar till speciella evenemang och
                rabatter på klubbens merchandise.
              </p>
            </section>
          </div>
        </div>

        <Form {...form}>
          <Card className='w-full max-w-3xl shadow-lg rounded-lg'>
            <CardHeader className='bg-secondary text-secondary-foreground rounded-t-lg p-6'>
              <CardTitle className='text-2xl font-bold'>Bli stödmedlem</CardTitle>
              <CardDescription className='text-secondary-foreground'>
                Du kan alltid swisha eller göra en banköverföring med valfri summa
              </CardDescription>
            </CardHeader>
            <CardContent className='p-6'>
              <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit, onError)}>
                {/* Name Field */}
                <NameField form={form} />

                {/* Name Field */}
                <PersonNumberField form={form} />

                {/* Email address field */}
                <EmailAdressField form={form} />

                {/* Amount field */}
                <AmountField form={form} />

                <CardFooter className='flex justify-end p-6'>
                  <Button
                    disabled={!isDirty || isSubmitting}
                    className='w-full md:w-auto bg-primary text-secondary-foreground hover:bg-primary/90'
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

export default BecomeSupportMember;
