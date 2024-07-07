import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { FormFieldProps } from '../page';

function AddressField({ form }: FormFieldProps) {
  return (
    <FormField
      name="address"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">Adress</FormLabel>
            <FormControl>
              <Input placeholder="Fyll i din gatuadress" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default AddressField;
