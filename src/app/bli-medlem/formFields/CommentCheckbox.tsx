import { Checkbox } from '@/components/shadcn/checkbox';
import { FormItem, FormLabel, FormControl } from '@/components/shadcn/form';
import { Label } from '@/components/shadcn/label';

import React from 'react';
type CommentProps = {
  hasComments: boolean;
  setHasComments: (value: boolean) => void;
};

function CommentsCheckbox({ hasComments, setHasComments }: CommentProps) {
  return (
    <FormItem>
      <FormLabel htmlFor="comments" className="text-md">
        Har du övriga kommentarer?
      </FormLabel>
      <FormControl>
        <div className="flex items-center space-x-2">
          <Checkbox checked={hasComments} onCheckedChange={(checked: boolean) => setHasComments(checked)} />
          <Label>Ja</Label>
        </div>
      </FormControl>
    </FormItem>
  );
}

export default CommentsCheckbox;
