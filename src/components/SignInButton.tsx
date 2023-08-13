'use client'
import React, { useState } from 'react'
import Button from './ui/Button'
import { signIn } from 'next-auth/react'
import { toast } from './ui/Toast'
// import toast from 'react-hot-toast'


type Props = {}

const SignInButton = (props: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle=async()=>{
        setIsLoading(true)

        try{
            await signIn('google')
        }catch(err){
            toast({
                title:'Erro signing in',
                message:'Please try again later',
                type:'error'
            })
        }
    }
  return (
    <Button
    onClick={signInWithGoogle}
    isLoading={isLoading}
    >
        Sign In
    </Button>
  )
}


export default SignInButton;