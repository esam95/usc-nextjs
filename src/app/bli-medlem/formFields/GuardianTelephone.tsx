import { FormField, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { FormFieldProps } from '../page';

function GuardianTelephoneField({ form }: FormFieldProps) {
  return (
    <FormField
      name="guardianTelephone"
      control={form.control}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="text-md">Förmyndares telefonnummer</FormLabel>
          <FormControl>
            <Input placeholder="Fyll i förmyndares telefonnummer" {...field} />
          </FormControl>
          <FormMessage />
        </div>
      )}
    />
  );
}

export default GuardianTelephoneField;
