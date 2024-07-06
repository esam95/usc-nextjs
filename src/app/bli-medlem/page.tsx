'use client';
import { Form } from '@/components/shadcn/form';
import { useState } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/shadcn/button';
import { personAbove18 } from '@/functions/personAbove18';
import { formSchema } from './schema/formSchema';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/shadcn/card';
import NameField from './formFields/NameField';
import PersonNumberField from './formFields/PersonNumberField';
import GuardianNameField from './formFields/GuardianNameField';
import GuardianTelephoneField from './formFields/GuardianTelephone';
import EmailAdressField from './formFields/EmailAdressField';
import TelephoneField from './formFields/TelephoneField';
import AddressField from './formFields/AddressField';
import PostalCodeField from './formFields/PostalCodeField';
import GenderField from './formFields/GenderField';
import SportsField from './formFields/SportsField';
import TrainingFrequencyField from './formFields/TrainingFrequencyField';
import FriendReferalField from './formFields/FriendReferalFriend';
import FriendNameFields from './formFields/FriendNameFiels';
import DiscountField from './formFields/DiscountField';
import HasDiseaseCheckbox from './formFields/HasDiseaseCheckbox';
import DiseaseField from './formFields/DiseaseField';
import CommentsForm from './formFields/CommentsForm';
import CommentsCheckbox from './formFields/CommentCheckbox';

export type FormFieldProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

function BecomeMember() {
  const [hasComments, setHasComments] = useState(false);
  const [hasDiseases, setHasDiseases] = useState(false);
  const [needsGuardian, setNeedsGuardian] = useState(false);
  const [hasFriend, setHasFriend] = useState(false);
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
    console.log('values', { values });
    form.reset();
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
          <Card className="max-w-xl w-full md:min-w-[70%] xl:min-w-[68.75rem]">
            <CardHeader>
              <CardTitle>Registrera dig</CardTitle>
              <CardDescription>Var vänlig fyll i formuläret för att bli medlem</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(handleSubmit)}>
                {/* Name Field */}
                <NameField form={form} />

                {/* Personnumber field */}
                <PersonNumberField handlePersonNumber={handlePersonNumber} form={form} />

                {/* Guardian fields */}
                {form.watch('personnumber').length > 9 && needsGuardian && (
                  <>
                    <GuardianNameField form={form} />
                    <GuardianTelephoneField form={form} />
                  </>
                )}

                {/* Email address field */}
                <EmailAdressField form={form} />

                {/* Telephone field */}
                <TelephoneField form={form} />

                {/* Address field */}
                <AddressField form={form} />

                {/* Postal code field */}
                <PostalCodeField form={form} />

                {/* Gender field */}
                <GenderField form={form} />

                {/* Sports field */}
                <SportsField form={form} sports={sports} />

                {/* Training Frequency */}
                <TrainingFrequencyField form={form} />

                {/* FriendReferal Checkbox */}
                <FriendReferalField form={form} setHasFriend={setHasFriend} />
                {/* FriendReferal Field */}
                {hasFriend && <FriendNameFields form={form} />}

                {/* Discount Field */}
                <DiscountField form={form} />

                {/* HasDisease checkbox */}
                <HasDiseaseCheckbox
                  hasDiseases={hasDiseases}
                  setHasDiseases={(checked: boolean) => setHasDiseases(checked)}
                />
                {/* Disease field */}
                {hasDiseases && <DiseaseField form={form} />}

                {/* Comments field */}
                <CommentsCheckbox hasComments={hasComments} setHasComments={setHasComments} />
                {hasComments && <CommentsForm form={form} />}

                <CardFooter className="flex md:justify-end">
                  <Button className="min-w-fit w-full md:w-auto" type="submit">
                    Skicka in
                  </Button>
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
