export const pickColor = (activity: string | null) => {
  return activity === 'Boxning' ? 'bg-orange-700'
  : activity === 'Fys' ? 'bg-stone-700'
  : null
}