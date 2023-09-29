'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import Simplebar from 'simplebar-react'

const DocumentationTabs = () => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
        <TabsList>
            <TabsTrigger value='nodejs'>JavaScript</TabsTrigger>
            <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodejs'>
            <Simplebar></Simplebar>
        </TabsContent>
    </Tabs>
  )
}

export default DocumentationTabs