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
import { personAbove18 } from '@/functions/personAbove18';
import { formSchema } from './schema/formSchema';
import { Loader2 } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/shadcn/card';

function BecomeMember() {
  const [hasComments, setHasComments] = useState(false);
  const [hasDiseases, setHasDiseases] = useState(false);
  const [needsGuardian, setNeedsGuardian] = useState(false);
  const [hasFriend, setHasFriend] = useState(false);
  const [loading, setLoading] = useState(true);
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
      trainingFrequency: '1-2',
      discount: false,
      comments: '',
      guardianName: '',
      guardianTelephone: '',
      friendReferal: false,
      friendsName: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (form.formState.isSubmitSuccessful) {
      console.log('values', { values });
      form.reset();
    }
  };

  const handlePersonNumber = (value: string) => {
    form.setValue('personnumber', value);
    const isAbove18 = personAbove18(value);
    setNeedsGuardian(!isAbove18);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-3 pb-6">
        <Form {...form}>
          <Card className="max-w-xl w-full md:min-w-fit">
            <CardHeader>
              <CardTitle>Registrera dig</CardTitle>
              <CardDescription>Var vänlig fyll i formuläret för att bli medlem</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(handleSubmit)}>
                {/* Name Field */}
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-md">För-och efternamn</FormLabel>
                        <FormControl>
                          <Input placeholder="Fyll i ditt namn *" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Personnumber field */}
                <FormField
                  name="personnumber"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-md">Personnummer</FormLabel>
                        <FormControl>
                          <Input
                            onChange={(e) => {
                              const value = e.target.value;
                              field.onChange(e);
                              handlePersonNumber(value);
                            }}
                            value={field.value}
                            maxLength={12}
                            placeholder="(ÅÅÅÅMMDDNNNN) *"
                          />
                        </FormControl>
                        <FormDescription>
                          Personnumret måste vara 12 siffror och skrivas utan mellanslag.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Guardian fields */}
                {form.watch('personnumber').length > 9 && needsGuardian && (
                  <>
                    <FormField
                      name="guardianName"
                      control={form.control}
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="text-md">Förmyndares namn</FormLabel>
                          <FormControl>
                            <Input placeholder="Fyll i förmyndares namn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      )}
                    />

                    <p>{form.watch('personnumber').length}</p>

                    <FormField
                      name="guardianTelephone"
                      control={form.control}
                      render={({ field }) => (
                        <div className="form-item">
                          <FormLabel className="text-md">Förmyndares telefonnummer</FormLabel>
                          <FormControl>
                            <Input placeholder="Fyll i förmyndares telefonnummer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </div>
                      )}
                    />
                  </>
                )}

                {/* Email address field */}
                <FormField
                  name="emailAddress"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-md">E-post</FormLabel>
                        <FormControl>
                          <Input placeholder="Fyll i din mejladress *" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Telephone field */}
                <FormField
                  name="telephone"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-md">Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="Fyll i ditt telefonnummer *" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Address field */}
                <FormField
                  name="adress"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-md">Adress</FormLabel>
                        <FormControl>
                          <Input placeholder="Fyll i din gatuadress" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* Postal code field */}
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

                {/* Gender field */}
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

                {/* Sports field */}
                <FormField
                  name="sports"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Vilken idrott vill du börja på? *</FormLabel>
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

                {/* Training Frequency */}
                <FormField
                  name="trainingFrequency"
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

                {/* FriendReferal Field */}
                <FormField
                  name="friendReferal"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="friendReferal" className="text-md">
                        Vill du värva en vän?
                      </FormLabel>
                      <FormDescription>
                        För varje vän du har med dig får du 10% rabatt under första terminen.
                      </FormDescription>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked: boolean) => {
                              field.onChange(checked);
                              setHasFriend(checked);
                            }}
                          />
                          <Label>Ja</Label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {hasFriend && (
                  <FormField
                    name="friendsName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea placeholder="Skriv namnet på din vän samt telefonnummer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Discount Field */}
                <FormField
                  name="discount"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="discount" className="text-md">
                        Vid betalning av hela träningsavgiften för hela terminen erbjuder vi 15% rabatt. Vill
                        du ta del av rabatten?
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

                {/* Disease field */}
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

                {/* Comments field */}
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

                <CardFooter className="flex justify-end">
                  <Button type="submit">Skicka in</Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </Form>
      </main>
    </>
  );
}

export default BecomeMember;
