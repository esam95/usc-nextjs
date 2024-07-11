import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { FormFieldProps } from '../page';

function PostalCodeField({ form }: FormFieldProps) {
  return (
    <FormField
      name="postalCode"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">Postnummer</FormLabel>
            <FormControl>
              <Input placeholder="Fyll i ditt postnummer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default PostalCodeField;
