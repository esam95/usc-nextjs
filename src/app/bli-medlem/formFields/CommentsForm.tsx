import { FormField, FormItem, FormControl, FormMessage } from '@/components/shadcn/form';
import { Textarea } from '@/components/shadcn/textarea';
import { FormFieldProps } from '../page';

function CommentsForm({ form }: FormFieldProps) {
  return (
    <FormField
      name="comments"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea placeholder="Skriv dina kommentarer här" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CommentsForm;
