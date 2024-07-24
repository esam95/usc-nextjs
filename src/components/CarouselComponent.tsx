// import * as React from 'react';
// import Autoplay from 'embla-carousel-autoplay';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/shadcn/carousel';
// import { Card, CardContent } from './shadcn/card';
// import { StaticImageData } from 'next/image';
// import Image from 'next/image';

// type Props = {
//   images?: StaticImageData[];
// };

// export function CarouselComponent({ images }: Props) {
//   const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className='w-full max-w-xs'
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {images?.map((image, index: number) => (
//           <CarouselItem key={index}>
//             <div className='p-1'>
//               <Card>
//                 <CardContent className='flex aspect-square items-center justify-center p-6'>
//                   {image ? (
//                     <Image src={image} className='text-4xl font-semibold' alt='' />
//                   ) : (
//                     <span className='text-4xl font-semibold'>{index + 1}</span>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn/carousel';
import { Card, CardContent } from './shadcn/card';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
  images?: StaticImageData[];
};

export function CarouselComponent({ images }: Props) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-xs'
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {images && images.length > 0
          ? images.map((image, index: number) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <Image
                        src={image}
                        alt={`Carousel image ${index + 1}`}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          : //Fallback for no image passed as prop
            Array.from({ length: 5 }).map((_, index: number) => (
              <CarouselItem key={index}>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselComponent;
