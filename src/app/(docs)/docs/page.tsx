import DocumentationTabs from '@/components/DocumentationTabs'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { Metadata } from 'next'
import React from 'react'



export const metadata:Metadata = {
    title:"Fake API Service",
    description:'Make fake requests'
}

const page: React.FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
        <div className='flex flex-col items-center gap-6'>
            <LargeHeading
            className='text-white'
            >
                Making Requests
            </LargeHeading>
            <Paragraph
            className='text-white'
            >
                api/v1/similarity
            </Paragraph>

            <DocumentationTabs/>
        </div>
    </div>
  )
}

export default page