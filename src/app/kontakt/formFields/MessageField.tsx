import { FormField, FormItem, FormControl, FormMessage, FormLabel } from '@/components/shadcn/form';
import { Textarea } from '@/components/shadcn/textarea';
import { FormFieldProps } from '../page';

function MessageField({ form }: FormFieldProps) {
  return (
    <FormField
      name="message"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-md">Meddelande</FormLabel>
          <FormControl>
            <Textarea placeholder="Skriv ditt meddelande här" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default MessageField;
