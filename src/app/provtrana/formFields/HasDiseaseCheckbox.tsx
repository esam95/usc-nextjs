import { Checkbox } from '@/components/shadcn/checkbox';
import { FormItem, FormLabel, FormControl } from '@/components/shadcn/form';
import { Label } from '@/components/shadcn/label';
import { CheckedState } from '@radix-ui/react-checkbox';

type DiseaseProps = {
  hasDiseases: boolean;
  setHasDiseases: (value: boolean) => void;
};

function HasDiseaseCheckbox({ hasDiseases, setHasDiseases }: DiseaseProps) {
  return (
    <FormItem>
      <FormLabel className="text-md" htmlFor="diseases">
        Har du några sjukdomar/skador som vi bör känna till?
      </FormLabel>
      <FormControl>
        <div className="flex items-center space-x-2">
          <Checkbox checked={hasDiseases} onCheckedChange={(checked: boolean) => setHasDiseases(checked)} />
          <Label>Ja</Label>
        </div>
      </FormControl>
    </FormItem>
  );
}

export default HasDiseaseCheckbox;
