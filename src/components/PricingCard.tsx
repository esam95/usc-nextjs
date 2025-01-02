import { Check, X } from 'lucide-react';
import { Button } from './shadcn/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './shadcn/card';

type PricingFeature = {
  text: string;
  included: boolean;
};

type PricingCardProps = {
  title: string;
  price: number | string;
  features: PricingFeature[];
  buttonClasses?: string;
  accentColor?: string;
};

export function PricingCard({
  title,
  price,
  features,
  buttonClasses = 'primary',
  accentColor = '#000',
}: PricingCardProps) {
  const renderPriceText = () => {
    if (title.toLowerCase() === 'enkel träning') {
      return (
        <span className='flex items-baseline text-3xl font-bold'>
          100 kr
          <span className='text-sm font-normal text-muted-foreground'>&nbsp; /träning</span>
        </span>
      );
    }
    if (title.toLowerCase() === 'stödmedlem') {
      return (
        <span className='flex items-baseline text-3xl font-bold'>
          100 / 300 / 500 kr
          <span className='text-sm font-normal text-muted-foreground'></span>
        </span>
      );
    }
    return (
      <span className='flex items-baseline text-3xl font-bold'>
        {price} kr
        <span className='text-sm font-normal text-muted-foreground'>&nbsp; /termin</span>
      </span>
    );
  };

  return (
    <Card className='relative w-[300px] overflow-hidden'>
      <div
        className='z-0 absolute right-0 top-0 h-full w-[150px] rounded-l-full'
        style={{ backgroundColor: accentColor, opacity: 0.1 }}
      />
      <CardHeader>
        <CardTitle className='flex flex-col'>
          <span className='text-xl font-semibold'>{title}</span>
          {renderPriceText()}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <ul className='space-y-2'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center gap-2'>
              {feature.included ? (
                <Check className='h-4 w-4' style={{ color: accentColor }} />
              ) : (
                <X className='h-4 w-4 text-muted-foreground' />
              )}
              <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className='flex flex-col gap-2'>
        <Button className={`z-50 w-full ${buttonClasses}`} style={{ backgroundColor: accentColor }}>
          Teckna medlemskap
        </Button>
      </CardFooter>
    </Card>
  );
}
