import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/radio-group';

import React from 'react';
import { FormFieldProps } from '../page';

function GenderField({ form }: FormFieldProps) {
  return (
    <FormField
      name="gender"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md">Kön</FormLabel>
          <FormControl>
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
              <div className="flex gap-2">
                <RadioGroupItem value="man" id="man" />
                <label htmlFor="man" className="text-sm font-medium leading-none">
                  Man
                </label>
              </div>
              <div className="flex gap-2">
                <RadioGroupItem value="woman" id="woman" />
                <label htmlFor="woman" className="text-sm font-medium leading-none">
                  Kvinna
                </label>
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default GenderField;
