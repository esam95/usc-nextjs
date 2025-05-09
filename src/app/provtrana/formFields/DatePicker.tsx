import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/popover"
import { Button } from "@/components/shadcn/button"
import { Calendar } from "@/components/shadcn/calendar"
import { CalendarIcon } from "lucide-react"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/form"
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '../schema/formSchema';
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { disabledDates } from "@/functions/disabledDates"
import { sv } from 'date-fns/locale';

type DatePickerProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  needsGuardian: boolean;
};

function DatePicker({ form, needsGuardian }: DatePickerProps) {
  return (
    <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-md">Vilket datum vill du provträna?</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: sv })
                      ) : (
                        <span>Välj ett datum</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      disabledDates(date, needsGuardian, form.watch('gender'), form.watch('sport'))
                    }
                    initialFocus
                    weekStartsOn={1}
                    locale={sv}
                  />
                </PopoverContent>
              </Popover>
              {/* <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
  );
}

export default DatePicker;
