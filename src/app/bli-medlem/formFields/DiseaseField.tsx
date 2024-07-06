import { FormField, FormItem, FormControl, FormMessage } from '@/components/shadcn/form';
import { Textarea } from '@/components/shadcn/textarea';
import React from 'react';
import { FormFieldProps } from '../page';

function DiseaseField({ form }: FormFieldProps) {
  return (
    <FormField
      name="diseases"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea placeholder="Skriv ditt meddelande här" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DiseaseField;
