"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/shadcn/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/form"
import { Input } from "@/components/shadcn/input"
import { formSchema } from "./schema/formSchema"

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Your name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Your message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!isDirty || isSubmitting}
          className="min-w-fit w-full md:w-auto"
          type="submit"
        >
          Skicka in
        </Button>
      </form>
    </Form>
  )
}
