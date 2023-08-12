'use client'

import React, { useState } from 'react'
import Button from './ui/Button'
import { signOut } from 'next-auth/react'

type Props = {}

const SignOutButton = (props: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUserOut=async()=>{
        setIsLoading(true)

        try{
            await signOut()
        }catch(err){
            // toast({
            //     title:'Erro signing in',
            //     message:'Please try again later',
            //     type:err
            // })
        }
    }
  return (
   
    <Button
    onClick={signUserOut}
    isLoading={isLoading}
    >
        Sign Out
    </Button>
  )
}

export default SignOutButton;