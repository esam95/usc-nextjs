"use client"
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldErrors, UseFormReturn, useForm } from 'react-hook-form';
import { useToast } from '@/components/shadcn/use-toast';
import { Loader2 } from 'lucide-react';
import { z } from "zod"
import { Button } from "@/components/shadcn/button"
import { Form} from "@/components/shadcn/form"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shadcn/card';
import { formSchema } from "./schema/formSchema"
import NameField from "./formFields/NameField"
import MessageField from "./formFields/MessageField"
import EmailAddressField from "./formFields/EmailAddressField"

export type FormFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      message: "",
    },
  })

  const formDataObject = form.getValues();
  const { isDirty, isSubmitting, isSubmitSuccessful, errors } = form.formState;

  const postEmail = async () => {
    try {
      const response = await fetch('/api/contactEmail', {
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
    console.log(errors)
    console.log(formDataObject)
    if (errors) {
      toast({
        title: 'Något blev fel!',
        description: 'Vänligen fyll i alla obligatoriska fält',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful && !errors) {
      form.reset();
    }
  }, [form, isSubmitSuccessful, isSubmitting, errors]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-3 pb-6">
      <Form {...form}>
        <Card className="max-w-xl w-full md:min-w-[70%] xl:min-w-[60rem]">
          <CardHeader>
            <CardTitle>Kontakta oss</CardTitle>
            <CardDescription>Vi besvarar alla dina frågor inom 24 timmar.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit, onError)}>
              {/* Name Field */}
              <NameField form={form} />
              
              {/* Emailadress Field */}
              <EmailAddressField form={form} />

              {/* Message Field */}
              <MessageField form={form} />

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
    </main>
  )
}
