import { Checkbox } from '@/components/shadcn/checkbox';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '../schema/formSchema';

type SportsFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  sports: string[];
};

function SportsField({ form, sports }: SportsFieldProps) {
  return (
    <FormField
      name="sports"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md">Vilken idrott vill du börja på? *</FormLabel>
          <FormControl>
            <div className="flex flex-col gap-2">
              {sports.map((sport) => (
                <div key={sport} className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value.includes(sport)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.onChange([...field.value, sport]);
                      } else {
                        field.onChange(field.value.filter((s) => s !== sport));
                      }
                    }}
                  />
                  <FormLabel>{sport}</FormLabel>
                </div>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SportsField;
