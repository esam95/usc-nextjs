import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { FormFieldProps } from '../page';

function NameField({ form }: FormFieldProps) {
  return (
    <FormField
      name="fullName"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">För-och efternamn</FormLabel>
            <FormControl>
              <Input placeholder="Fyll i ditt namn *" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
export default NameField;
