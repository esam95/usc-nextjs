export const pickColor = (activity: string | null) => {
  return activity === 'Boxning' ? 'bg-orange-700'
  : activity === 'Fys' ? 'bg-stone-700'
  : activity === 'BJJ' ? 'bg-emerald-700'
  : activity === 'Brottning' ? 'bg-slate-700'
  : activity === 'Brottning\n(Öppen matta)' ? 'bg-slate-700'
  : activity === 'Boxning\n(Kvinnor)' ? 'bg-pink-700'
  : activity === 'Brottning\n(Barn)' ? 'bg-blue-700'
  : null
}