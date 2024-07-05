'use client';

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/shadcn/form';
import { Input } from '@/components/shadcn/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/shadcn/button';
import { Checkbox } from '@/components/shadcn/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/radio-group';

const formSchema = z.object({
  name: z.string().min(2),
  emailAddress: z.string().email(),
  adress: z.string().optional(),
  postalCode: z.string().optional(),
  personnumber: z.string().min(10).optional(),
  telephone: z
    .string()
    .min(1, 'Please enter a telephone number')
    .refine((value) => !isNaN(Number(value)), {
      message: 'Använd ett giltigt format för telefonnummer',
    }),
  gender: z.enum(['man', 'woman', '']).optional(),
});

function BecomeMember() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      emailAddress: '',
      adress: '',
      postalCode: '',
      personnumber: '',
      telephone: '',
      gender: 'man',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('values', { values });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form className="flex flex-col gap-4 max-w-md w-full" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-md">För-och efternamn</FormLabel>
                  <FormControl>
                    <Input placeholder="Fyll i ditt namn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="emailAddress"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-md">E-post</FormLabel>
                  <FormControl>
                    <Input placeholder="Fyll i din e-post adress" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="telephone"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-md">Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="Fyll i ditt telefonnummer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="adress"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-md">Adress</FormLabel>
                  <FormControl>
                    <Input placeholder="Fyll i din adress" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="postalCode"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-md">Postnummer</FormLabel>
                  <FormControl>
                    <Input placeholder="Fyll i ditt postnummer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="gender"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Kön</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
                    <div className="flex gap-3">
                      <RadioGroupItem value="man" id="man" />
                      <label htmlFor="man" className="text-sm font-medium leading-none">
                        Man
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <RadioGroupItem value="woman" id="woman" />
                      <label htmlFor="woman" className="text-sm font-medium leading-none">
                        Kvinna
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Skicka
          </Button>
        </form>
      </Form>
    </main>
  );
}

export default BecomeMember;
