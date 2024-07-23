import backgroundImg from '../../public/img/background_img.webp';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <div className='absolute inset-0 z-0 h-full w-full'>
        <Image
          alt='background'
          src={backgroundImg}
          fill
          style={{
            objectFit: 'cover',
          }}
          quality={100}
          priority
          className='pointer-events-none'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen gap-8'>
        <h1 className='px-2 text-4xl font-extrabold text-secondary-foreground text-center drop-shadow-lg'>
          Upprustningen Sports Club
        </h1>
        <p className='text-xl text-foreground outline outline-4 outline-offset-8 outline-primary drop-shadow-md'>
          Välkommen
        </p>
      </div>
    </div>
  );
}
