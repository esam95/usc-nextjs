import { FormField, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '../schema/formSchema';
import { FormFieldProps } from '../page';

type GuardianNameFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

function GuardianNameField({ form }: FormFieldProps) {
  return (
    <FormField
      name="guardianName"
      control={form.control}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="text-md">Förmyndares namn</FormLabel>
          <FormControl>
            <Input placeholder="Fyll i förmyndares namn" {...field} />
          </FormControl>
          <FormMessage />
        </div>
      )}
    />
  );
}

export default GuardianNameField;
