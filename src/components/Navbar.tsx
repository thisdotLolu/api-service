import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import { buttonVariants } from './ui/Button'
import ThemeToggle from './ThemeToggle'

type Props = {}

const Navbar = async(props: Props) => {

    const session = await getServerSession()
  return (
    <div
    className='fixed backdrop-blur-sm bg-white/75 dark:bg-gray-950 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-gray-900 shadow-sm flex items-center justify-between'
    >
        <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
            <Link href='/'
            className={buttonVariants({variant:'link'})}
            >
            Fake Api Service
            </Link>

            <div className = 'md:hidden'>
                <ThemeToggle/>
            </div>

            <div className='hidden md:flex gap-4'>
                <ThemeToggle/>
                <Link href='/docs' className={buttonVariants({variant:'ghost'})}>
                    Docs
                </Link>

                {session? (
                    <>
                          <Link
                           className={buttonVariants({variant:'ghost'})}
                           href='/dashboard'
                           >
                            Launch App
                          </Link>
                          <SignOutButton/>
                    </>
                ) : <SignInButton/>}
            </div>
        </div>
    </div>
  )
}

export default Navbar;