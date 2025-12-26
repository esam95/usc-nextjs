export function pickColor(text: string) {
  const rules: Array<[string, string]> = [
    ['Öppenmatta', 'bg-[#2F6B5A]'],
    ['BJJ', 'bg-[#2F4A7D]'],
    ['MMA', 'bg-[#8B2F2F]'],
    ['Boxning\n(Sparring)', 'bg-[#8B2F2F]'],
    ['Boxning\n(MMA)', 'bg-[#8B2F2F]'],
    ['Boxning\n(Tjejer)', 'bg-[#8E4A6F]'],
    ['Fys\n(Tjejer)', 'bg-[#8E4A6F]'],
    ['Brott', 'bg-[#2F6B5A]'],
    ['Barn nybörjargruppen', 'bg-sky-500'],
    ['Barn tävlingsgruppen', 'bg-[#B79D4A]'],
    ['Gymnastik', 'bg-[#5B5F8D]'],
  ];

  const match = rules.find(([key]) => text?.includes(key));
  return match ? match[1] : null;
}
