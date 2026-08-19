export function pickColor(text: string | null) {
  const rules: Array<[string, string]> = [
    ['Öppenmatta', 'bg-[#2F6B5A]'],
    ['BJJ', 'bg-[#2F4A7D]'],
    ['MMA', 'bg-[#8B2F2F]'],
    ['Boxning\n(Sparring)', 'bg-[#8B2F2F]'],
    ['Boxning\n(MMA)', 'bg-[#8B2F2F]'],
    ['Boxning\n(Tjejer)', 'bg-[#8E4A6F]'],
    ['Boxning', 'bg-[#8B2F2F]'],
    ['Fys\n(Tjejer)', 'bg-[#8E4A6F]'],
    ['Brottarlekis', 'bg-[#C97A3D]'], // barn-vänlig orange, skiljer sig från vuxenbrottning
    ['Brott', 'bg-[#2F6B5A]'],
    ['Barn nybörjargruppen', 'bg-sky-500'],
    ['Barn tävlingsgruppen', 'bg-[#B79D4A]'],
    ['Grappling', 'bg-[#5B5F8D]'],
  ];

  const match = rules.find(([key]) => text?.includes(key));
  return match ? match[1] : null;
}