import * as z from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Detta fält är obligatoriskt' })
    .min(2, { message: 'Namnet måste vara längre än 2 tecken' }),
  personnumber: z
  .string()
  .min(1, { message: 'Detta fält är obligatoriskt' })
  .min(12, { message: 'Kan inte vara mindre än 10 tecken' })
  // Check that no string characters are allowed
  .refine((value) => !isNaN(Number(value)), { message: 'Personnummer kan endast innehålla siffror' }),
  emailAddress: z
    .string()
    .min(1, { message: 'Detta fält är obligatoriskt' })
    .email({ message: 'Ange en giltig e-postadress' })
    .min(4, { message: 'Kan inte vara mindre än 4 tecken' }),

});
