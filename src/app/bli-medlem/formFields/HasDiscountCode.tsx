import { Checkbox } from '@/components/shadcn/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/form';
import { Label } from '@/components/shadcn/label';
import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';
import { formSchema } from '../schema/formSchema';

type FriendReferalProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  setHasDiscountCode: (value: boolean) => void;
};

function HasDiscountCode({ form, setHasDiscountCode }: FriendReferalProps) {
  return (
    <FormField
      name="hasDiscountCode"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="hasDiscountCode" className="text-md">
            Har du en rabattkod?
          </FormLabel>
          <FormDescription>
            Ange din rabattkod ifall du har fått en
          </FormDescription>
          <FormControl>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked: boolean) => {
                  field.onChange(checked);
                  setHasDiscountCode(checked);
                }}
              />
              <Label>Ja</Label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default HasDiscountCode;
