'use client';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/shadcn/button';
import { Form } from '@/components/shadcn/form';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/shadcn/card';
import { formSchema } from './schema/formSchema';
import NameField from './formFields/NameField';
import MessageField from './formFields/MessageField';
import EmailAddressField from './formFields/EmailAddressField';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/shadcn/use-toast';

export type FormFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      emailAddress: '',
      message: '',
    },
  });

  const { toast } = useToast();
  const { isDirty, isSubmitting, isSubmitSuccessful, errors } = form.formState;
  const { name, emailAddress, message } = form.getValues();

  const postEmail = async () => {
    try {
      const response = await fetch('/api/contactEmail', {
        method: 'POST',
        body: JSON.stringify({
          name,
          emailAddress,
          message,
        }),
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
    <div className='mt-32 flex min-h-screen min-w-80 w-full flex-col items-center justify-center pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-3xl mb-8'>
        <h1 className='text-secondary-foreground text-center font-extrabold tracking-tight lg:text-5xl'>
          Kontakta oss
        </h1>
      </div>

      <Form {...form}>
        <Card className='w-full max-w-3xl shadow-lg rounded-lg'>
          <CardHeader className='bg-secondary text-primary-foreground rounded-t-lg p-6'>
            <CardTitle className='text-secondary-foreground text-2xl font-bold'>
              Har du funderingar?
            </CardTitle>
            <CardDescription className='text-muted-foreground'>
              Vi besvarar alla dina frågor inom 24 timmar.
            </CardDescription>
          </CardHeader>
          <CardContent className='p-6'>
            <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit, onError)}>
              {/* Name Field */}
              <NameField form={form} />

              {/* Emailadress Field */}
              <EmailAddressField form={form} />

              {/* Message Field */}
              <MessageField form={form} />

              <CardFooter className='flex justify-end p-6'>
                <Button
                  disabled={!isDirty || isSubmitting}
                  className='w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90'
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
  );
}
