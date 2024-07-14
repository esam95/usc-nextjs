import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';


const membershipOptions = [
  {
    title: "Ungdomar",
    price: "200kr",
    description: [
      "Perfekt för att prova, eller för enstaka designprojekt.",
      "15+",
      "Två gratis provträningar",
      "Bindningstid, fem månader.",
      "100kr medlemsavgift per termin.",
    ],
  },
  {
    title: "Vuxna",
    price: "300kr",
    description: [
      "Perfekt för den professionella webb- eller produktdesignen.",
      "18+",
      "Två gratis provträningar",
      "Bindningstid, fem månader.",
      "100kr medlemsavgift per termin.",
    ],
  },
  {
    title: "Barn",
    price: "200kr",
    description: [
      "Perfekt för byråer och produktteam.",
      "10+",
      "Bindningstid, fem månader.",
      "Tre gratis provträningar",
      "100kr medlemsavgift per termin.",
    ],
  },
  {
    title: "Enkel träning",
    price: "100kr",
    description: [
      "För alla.",
      "Gäller vissa träningar beroende på individens erfarenhet av kampsport.",
      "Gäller endast för pass med ledig plats.",
      "Ingen medlemsavgift krävs.",
      "Betalas på plats.",
    ],
  },
  {
    title: "Stödmedlem",
    price: "Valfri summa",
    description: [
      "För alla.",
      "Valfri summa får stödmedlemmarna stöda klubben med.",
    ],
  },
  {
    title: "Fryshusets elever",
    price: "0kr",
    description: [
      "Gäller endast för fryshusets elever.",
      "Två gratis provträningar.",
    ],
  },
];

const MembershipOptions = () => {
  return (
    <main className="flex flex-col items-center min-w-full py-8 px-4 mt-0 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <h1 className="font-extrabold tracking-tight lg:text-5xl mb-8 text-gray-700">Medlemsskap</h1>
      <section className="flex flex-wrap -mx-2">
        {membershipOptions.map((membership, index) =>
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <Card key={index} className="bg-white shadow-xl rounded-lg">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-6">
              <CardTitle className="text-3xl font-bold whitespace-nowrap">{membership.title}</CardTitle>
              <CardDescription className="text-secondary mt-2">
                {membership.price}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul>
              {membership.description.map((description, index) =>
                <li key={index}>
                  {description}
                </li>
              )}
              </ul>
            </CardContent>
          </Card>
        </div>
        )}
      </section>
    </main>
  );
};

export default MembershipOptions;
