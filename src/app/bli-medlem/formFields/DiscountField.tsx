import { Checkbox } from '@/components/shadcn/checkbox';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Label } from '@/components/shadcn/label';
import { FormFieldProps } from '../page';

function DiscountField({ form }: FormFieldProps) {
  return (
    <FormField
      name="discount"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="discount" className="text-md">
            Vid betalning av hela träningsavgiften för hela terminen erbjuder vi 15% rabatt. <br />
            Vill du ta del av rabatten?
          </FormLabel>
          <FormControl>
            <div className="flex items-center space-x-2">
              <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(checked)} />
              <Label>Ja</Label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DiscountField;
