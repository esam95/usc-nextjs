import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './shadcn/card';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from './shadcn/button';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

type ImageProps = {
  imgSrc: StaticImageData;
  alt: string;
  description: string;
  label: string;
};

type Props = {
  images?: ImageProps[];
  delayTime?: number;
  id?: string;
};

export function CarouselComponent({ images, delayTime }: Props) {
  const plugin = useRef(Autoplay({ delay: delayTime || 2500, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-xs lg:min-w-[450px]'
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {images && images.length > 0
          ? images.map((image, index: number) => (
              <CarouselItem key={index} className='fixed-size'>
                <div id='wrapper' className=''>
                  <Card
                    className='min-h-[530px] h-[20%] w-full
                    rounded-b-xl shadow-lg '
                  >
                    <CardContent className='h-1/2 w-full flex aspect-square items-center justify-center p-0'>
                      <Image
                        src={image.imgSrc}
                        alt={image.alt}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                        className='rounded-t-lg opacity-80'
                      />
                    </CardContent>
                    <div id='card-info'>
                      <CardHeader>
                        <CardTitle>{image.label}</CardTitle>
                        <CardDescription>{image.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className='flex justify-end'>
                        <Link href={'/schema'}>
                          <Button>
                            Se schema
                            <ArrowRightIcon className='ml-2 h-4 w-4' />
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))
          : // Fallback for no image passed as prop
            Array.from({ length: 5 }).map((_, index: number) => (
              <CarouselItem key={index} className='fixed-size'>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselPrevious className='max-sm:hidden' />
      <CarouselNext className='max-sm:hidden' />
      <CarouselDots />
    </Carousel>
  );
}

export default CarouselComponent;
