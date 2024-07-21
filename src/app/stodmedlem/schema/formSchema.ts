import * as z from 'zod';

export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Detta fält är obligatoriskt' })
      .min(2, { message: 'Namnet måste vara längre än 2 tecken' }),
    emailAddress: z
      .string()
      .min(1, { message: 'Detta fält är obligatoriskt' })
      .email({ message: 'Ange en giltig e-postadress' })
      .min(4, { message: 'Kan inte vara mindre än 4 tecken' }),
    
    amount: z
    .string()
    .min(1, { message: 'Detta fält är obligatoriskt' })
    .superRefine((val, ctx) => {
      if (isNaN(Number(val))) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Stödmängd kan endast innehålla siffror",
        });
      }
    
      else if (Number(val) <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Stödmängd måste vara över 0 kr`,
        });
      }
    }),
  })
 
