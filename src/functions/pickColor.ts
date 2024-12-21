export const pickColor = (activity: string | null) => {
  return activity === 'Boxning' ? 'bg-orange-700'
  : activity === 'Fys' ? 'bg-stone-700'
  : activity === 'Grappling' ? 'bg-green-700'
  : activity === 'Brottning' ? 'bg-slate-700'
  : activity === 'Brottning\n(Öppen matta)' ? 'bg-slate-700'
  : activity === 'Boxning\n(Kvinnor)' ? 'bg-pink-700'
  : null
}