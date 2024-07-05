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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select';
import { Input } from '@/components/shadcn/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/shadcn/button';
import { Checkbox } from '@/components/shadcn/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/radio-group';
import { Textarea } from '@/components/shadcn/textarea';
import { Label } from '@/components/shadcn/label';

const formSchema = z.object({
  name: z
    .string()
    .min(2)
    .refine((value) => value.length < 3, {
      message: 'Namnet måste vara längre än 2 tecken',
    }),
  emailAddress: z.string().email(),
  adress: z.string().optional(),
  postalCode: z.string().optional(),
  personnumber: z.string().min(10).optional(),
  telephone: z
    .string()
    .min(1, 'Please enter a telephone number')
    // Check that no strings are allowed
    .refine((value) => !isNaN(Number(value)), {
      message: 'Använd ett giltigt format för telefonnummer',
    }),
  gender: z.enum(['man', 'woman', '']).optional(),
  sports: z.array(z.string()),
  diseases: z.string().optional(),
  trainingSessions: z.enum(['1-2', '3-4', '']).optional(),
  discount: z.boolean().optional(),
  comments: z.string().optional(),
});

function BecomeMember() {
  const [hasComments, setHasComments] = useState(false);
  const [hasDiseases, setHasDiseases] = useState(false);
  const sports = ['Boxning', 'Fristil brottning', 'Submission grappling / NoGi', 'Fys & Kondition träningar'];
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
      sports: [],
      diseases: '',
      trainingSessions: '1-2',
      discount: false,
      comments: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('values', { values });
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-12 pt-0">
        <h2 className="text-center mb-8">Fyll i formuläret för att bli medlem</h2>
        <Form {...form}>
          <form className="flex flex-col gap-5 max-w-md w-full" onSubmit={form.handleSubmit(handleSubmit)}>
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
                      <div className="flex gap-2">
                        <RadioGroupItem value="man" id="man" />
                        <label htmlFor="man" className="text-sm font-medium leading-none">
                          Man
                        </label>
                      </div>
                      <div className="flex gap-2">
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
            <FormField
              name="sports"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Vilken idrott vill du börja på?</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2">
                      {sports.map((sport) => (
                        <div key={sport} className="flex items-center gap-2">
                          <Checkbox
                            checked={field.value.includes(sport)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                field.onChange([...field.value, sport]);
                              } else {
                                field.onChange(field.value.filter((s) => s !== sport));
                              }
                            }}
                          />
                          <FormLabel>{sport}</FormLabel>
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="trainingSessions"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Hur många gånger i veckan kan du träna?</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Välj antal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Per vecka</SelectLabel>
                          <SelectItem value="1-2">1-2 gånger</SelectItem>
                          <SelectItem value="3-4">3-4 gånger</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="discount"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="discount" className="text-md">
                    Vid betalning av hela träningsavgiften för hela terminen erbjuder vi 15% rabatt. Vill du
                    ta del av rabatten?
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                      <Label>Ja</Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel className="text-md" htmlFor="diseases">
                Har du några sjukdomar/skador som vi bör känna till?
              </FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={hasDiseases}
                    onCheckedChange={(checked: boolean) => setHasDiseases(checked)}
                  />
                  <Label>Ja</Label>
                </div>
              </FormControl>
            </FormItem>
            {/* Diseases textarea (conditionally rendered) */}
            {hasDiseases && (
              <FormField
                name="diseases"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Skriv ditt meddelande här" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormItem>
              <FormLabel htmlFor="comments" className="text-md">
                Har du övriga kommentarer?
              </FormLabel>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={hasComments}
                    onCheckedChange={(checked: boolean) => setHasComments(checked)}
                  />
                  <Label>Ja</Label>
                </div>
              </FormControl>
            </FormItem>
            {hasComments && (
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
            )}
            <Button className="w-full" type="submit">
              Skicka
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}

export default BecomeMember;
