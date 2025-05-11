import { RadioGroup, RadioGroupItem } from '@/components/shadcn/radio-group';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '../schema/formSchema';
import getNextValidDate from '@/functions/disabledDates';
import { useEffect } from 'react';

type SportsFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  sports: string[];
  needsGuardian: boolean;
};

function SportsField({ form, sports, needsGuardian }: SportsFieldProps) {
  useEffect(() => {
    form.setValue('date', getNextValidDate(needsGuardian, form.watch('gender'), form.watch('sport')));
  }, [form.watch('sport'), form.watch('gender')]);
  
  return (
    <FormField
      name="sport"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md">Vilken idrott vill du börja på? *</FormLabel>
          <FormControl>
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
              {sports.map((sport) => (
                <FormItem key={sport} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={sport} />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {sport}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SportsField;
