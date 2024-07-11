import { FormField, FormItem, FormControl, FormMessage } from '@/components/shadcn/form';
import { Textarea } from '@/components/shadcn/textarea';
import React from 'react';
import { FormFieldProps } from '../page';

function FriendNameFields({ form }: FormFieldProps) {
  return (
    <FormField
      name="friendsName"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea placeholder="Skriv namnet på din vän samt telefonnummer" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FriendNameFields;
