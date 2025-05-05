import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/shadcn/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select';
import { FormFieldProps } from '../page';

function TrainingFrequencyField({ form }: FormFieldProps) {
  return (
    <FormField
      name='trainingFrequency'
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-md'>Hur många gånger i veckan kan du träna?</FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Välj antal' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Per vecka</SelectLabel>
                  <SelectItem value='1-2'>1-2 gånger</SelectItem>
                  <SelectItem value='3-4'>3-4 gånger</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TrainingFrequencyField;
