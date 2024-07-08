import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/shadcn/input';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/shadcn/form';
import { formSchema } from '../schema/formSchema'; // Ensure the correct path to your schema file
import * as z from 'zod';

type PersonNumberFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  handlePersonNumber: (value: string) => void;
};

function PersonNumberField({ form, handlePersonNumber }: PersonNumberFieldProps) {
  return (
    <FormField
      name="personnumber"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">Personnummer</FormLabel>
            <FormControl>
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(e);
                  handlePersonNumber(value);
                }}
                value={field.value}
                maxLength={12}
                placeholder="(ÅÅÅÅMMDDNNNN) *"
              />
            </FormControl>
            <FormDescription>Personnumret måste vara 12 siffror och skrivas utan mellanslag.</FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default PersonNumberField;
