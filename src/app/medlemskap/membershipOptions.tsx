export const membershipOptions = [
  {
    title: 'Ungdomar',
    price: '200 kr',
    age: '15 -17 år',
    description: ['Två gratis provträningar', 'Bindningstid, fem månader', '100kr medlemsavgift per termin'],
  },
  {
    title: 'Vuxna',
    price: '300 kr',
    age: '18+ år',
    description: ['Två gratis provträningar', 'Bindningstid, fem månader', '100kr medlemsavgift per termin'],
  },
  {
    title: 'Barn',
    price: '200 kr',
    age: '10 - 14 år',
    description: ['Bindningstid, fem månader', 'Tre gratis provträningar', '100 kr medlemsavgift per termin'],
  },
  {
    title: 'Enkel träning',
    price: '100 kr',
    age: 'Alla åldrar',
    description: [
      'Gäller vissa träningar beroende på individens erfarenhet av kampsport',
      'Gäller endast för pass med ledig plats',
      'Ingen medlemsavgift krävs',
      'Betalas på plats',
    ],
  },
  {
    title: 'Stödmedlem',
    price: '100kr / 300kr / 500kr',
    age: null,
    description: [
      'Välj en summa att stödja klubben med',
      'Genom att vara stödmedlem hjälper du till att främja klubbens syfte och mål.',
    ],
    route: '/stodmedlem',
  },
  {
    title: 'Fryshusets elever',
    price: 'Gratis',
    age: null,
    description: ['Gäller endast för fryshusets elever', 'Två gratis provträningar'],
  },
];
