import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import { FormFieldProps } from '../page';

function EmailAdressField({ form }: FormFieldProps) {
  return (
    <FormField
      name="emailAddress"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">E-post</FormLabel>
            <FormControl>
              <Input placeholder="Fyll i din mejladress *" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default EmailAdressField;
