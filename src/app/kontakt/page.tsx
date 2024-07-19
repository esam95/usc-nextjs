"use client"
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form"
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      message: "",
    },
  })

  const { isDirty, isSubmitting, isSubmitSuccessful } = form.formState;
  const { fullName, emailAddress, message } = form.getValues()

  const postEmail = async () => {
    const response = await fetch('/api/contactEmail', {
      method: 'POST',
      body: JSON.stringify({
        fullName,
        emailAddress,
        message,
      }),
    });
    const data = await response.json();
    console.log('data :', data);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('values', { values });
    postEmail();
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log('Form submitted successfully');
      form.reset();
    }
  }, [form, isSubmitSuccessful, isSubmitting]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-3 pb-6">
      <Form {...form}>
        <Card className="max-w-xl w-full md:min-w-[70%] xl:min-w-[60rem]">
          <CardHeader>
            <CardTitle>Kontakta oss</CardTitle>
            <CardDescription>Vi besvarar alla dina frågor inom 24 timmar.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Name Field */}
              <NameField form={form} />
              
              {/* Emailadress Field */}
              <EmailAddressField form={form} />

              {/* Message Field */}
              <MessageField form={form} />

              <CardFooter className="flex md:justify-end">
                <Button
                  disabled={!isDirty || isSubmitting}
                  className="min-w-fit w-full md:w-auto"
                  type="submit"
                >
                  Skicka in
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </Form>
    </main>
  )
}
