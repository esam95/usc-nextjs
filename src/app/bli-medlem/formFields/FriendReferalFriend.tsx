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
  setHasFriend: (value: boolean) => void;
};

function FriendReferalField({ form, setHasFriend }: FriendReferalProps) {
  return (
    <FormField
      name="friendReferal"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="friendReferal" className="text-md">
            Vill du värva en vän?
          </FormLabel>
          <FormDescription>
            För varje vän du har med dig får du 10% rabatt under första terminen.
          </FormDescription>
          <FormControl>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked: boolean) => {
                  field.onChange(checked);
                  setHasFriend(checked);
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

export default FriendReferalField;
