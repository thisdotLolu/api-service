import type {Metadata} from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export const metadata: Metadata = {
  title:'Fake API Service | Home',
  description: 'Make fake requests'
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading size='lg' className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-600'>
              Make Fake requests 
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left dark:text-white'>
          Test your frontends with backend functionality {' '}
          </Paragraph>


          <Button>
          <Link 
          className='text-white dark:text-slate-700'
          href='/login'>
          Get Started
          </Link>
          </Button>
          
          <div className='relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
            priority
            className='img-shadow'
            quality={100}
            style={{objectFit:'contain'}}
            fill
            src='/api.avif'
            alt='api'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
