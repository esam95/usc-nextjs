import { FormField, FormItem, FormControl, FormMessage } from '@/components/shadcn/form';
import { Textarea } from '@/components/shadcn/textarea';
import React from 'react';
import { FormFieldProps } from '../page';

function DiscountCodeField({ form }: FormFieldProps) {
  return (
    <FormField
      name="discountCode"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea placeholder="Skriv din rabattkod här" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DiscountCodeField;
