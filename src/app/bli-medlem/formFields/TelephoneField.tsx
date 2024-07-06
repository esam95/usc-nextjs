import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { FormFieldProps } from '../page';

function TelephoneField({ form }: FormFieldProps) {
  return (
    <FormField
      name="telephone"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">Telefon</FormLabel>
            <FormControl>
              <Input placeholder="Fyll i ditt telefonnummer *" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default TelephoneField;
