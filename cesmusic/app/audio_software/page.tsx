'use client'

import { Suspense } from 'react'

import PagePattern from '../component/pagePattern'
import WhichPage from '../enum/WhichPage'

export default function AudioSoftwarePage() {

    return(
        <div>            
            <Suspense fallback={<div>Loading...</div>}>
                <PagePattern
                    welcomeText={"🤘Olá!"}
                    whichPage={WhichPage.audio_software}
                />
            </Suspense>
        </div>
    )
}

