'use client'

import PagePattern from '../component/pagePattern'

import { useSearchParams } from 'next/navigation'
import WhichPage from '../enum/WhichPage'

export default function AudioSoftwarePage() {

    const searchParams = useSearchParams()
    const search = searchParams.get('page')

    return(
        <div>            
            <PagePattern
                welcomeText={"🤘Olá!"}
                linearGradient='linear-gradient(45deg, #D870DA, #44B6D5, #6BD167)'
                detailsColorA='#4EBDBA'
                detailsColorB='#D870DA'
                whichPage={WhichPage.audio_software}
            />
        </div>
    )
}

