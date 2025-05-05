import { Checkbox } from '@/components/shadcn/checkbox';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '../schema/formSchema';
import Link from 'next/link';

type ConditionsFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

function ConditionsField({ form }: ConditionsFieldProps) {
  return (
    <FormField
      name="conditions"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md">
            Jag har läst och godkänner klubbens
            {" "}
            <Link
              href="/villkor" // Change this to the actual terms page
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >villkor</Link>. *</FormLabel>
          <FormControl>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <FormLabel>Ja</FormLabel>
          </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default ConditionsField;
