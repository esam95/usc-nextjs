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
  const plugin = useRef(
    Autoplay({ delay: delayTime || 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-[1280px] px-1'
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
      opts={{
        loop: true,
        startIndex: 1,
      }}
    >
      <CarouselContent id='CarouselContent' className='w-full flex mx-0'>
        {images && images.length > 0
          ? images.map((image, index: number) => (
              <CarouselItem
                id='CarouselItem'
                key={index}
                className='w-full px-0 pl-1 md:basis-1/2 lg:basis-1/3'
              >
                <div id='wrapper' className='w-full pr-2'>
                  <Card id='Card' className='h-[32.5rem] w-full shadow-lg rounded-t-none lg:h-[37.5rem] '>
                    <CardContent className='h-2/3 w-full flex aspect-square items-center justify-center p-0'>
                      <Image
                        src={image.imgSrc}
                        alt={image.alt}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                        className='opacity-80'
                      />
                    </CardContent>
                    <div id='card-info'>
                      <CardHeader>
                        <CardTitle>{image.label}</CardTitle>
                        <CardDescription>{image.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className='flex justify-end'>
                        {/* <Link href={'/schema'}>
                          <Button>
                            Se schema
                            <ArrowRightIcon className='ml-2 h-4 w-4' />
                          </Button>
                        </Link> */}
                      </CardFooter>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))
          : // Fallback for no image passed as prop
            Array.from({ length: 5 }).map((_, index: number) => (
              <CarouselItem key={index} className='w-full'>
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
      <CarouselPrevious className='max-xl:hidden' />
      <CarouselNext className='max-xl:hidden' />
      <CarouselDots className='mt-6 lg:mt-9' />
    </Carousel>
  );
}

export default CarouselComponent;
