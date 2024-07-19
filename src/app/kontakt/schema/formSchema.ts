"use client"

import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  emailAddress: z.string().min(2).max(50),
  message: z.string().min(2).max(50),
})
