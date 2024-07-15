'use client';
import { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import { useForm } from 'react-hook-form';

function Contact() {
  const form = useForm()

  return(
   <Form>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    </Form>

  )
}

export default Contact;
