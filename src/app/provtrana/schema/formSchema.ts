import * as z from 'zod';

export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Detta fält är obligatoriskt' })
      .min(2, { message: 'Namnet måste vara längre än 2 tecken' }),
    // emailAddress: z
    //   .string()
    //   .min(1, { message: 'Detta fält är obligatoriskt' })
    //   .email({ message: 'Ange en giltig e-postadress' })
    //   .min(4, { message: 'Kan inte vara mindre än 4 tecken' }),
    personnumber: z
      .string()
      .min(1, { message: 'Detta fält är obligatoriskt' })
      .min(12, { message: 'Kan inte vara mindre än 10 tecken' })
      // Check that no string characters are allowed
      .refine((value) => !isNaN(Number(value)), { message: 'Personnummer kan endast innehålla siffror' }),
    // telephone: z
    //   .string()
    //   .min(1, { message: 'Detta fält är obligatoriskt' })
    //   .refine((value) => !isNaN(Number(value)), {
    //     message: 'Telefonnummer kan endast innehålla siffror',
    //   }),
    gender: z.enum(['man', 'woman']),
    sport: z.enum(['Boxning', 'Olympisk brottning', 'BJJ', 'Fys & Kondition träningar']),
    date: z.date(),
    diseases: z.string().optional(),
    comments: z.string().optional(),
    guardianName: z.string().optional(),
    guardianTelephone: z.string().optional(),
    conditions: z.boolean().refine((val) => val === true, {
      message: "Du måste acceptera villkoren",
    }),  })
