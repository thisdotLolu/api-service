'use client'

import React, { ReactNode } from 'react'
import {ThemeProvider} from 'next-themes'
import {SessionProvider} from 'next-auth/react'

type Props = {}

export default function Providers({children}: {children: ReactNode}) {
  return (
    <ThemeProvider 
    attribute='class'
    defaultTheme='system'
    enableSystem
    >
        <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}