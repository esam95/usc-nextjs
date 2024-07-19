import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { FormFieldProps } from '../page';

function AmountField({ form }: FormFieldProps) {
  return (
    <FormField
      name="amount"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">Stödmängd</FormLabel>
            <FormControl>
              <Input type='number' placeholder="Fyll i önskad mängd *" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default AmountField;
