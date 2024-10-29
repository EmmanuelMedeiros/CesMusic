'use client'

import PagePattern from '../component/pagePattern'

import WhichPage from '../enum/WhichPage'

export default function AudioSoftwarePage() {

    return(
        <div>            
            <PagePattern
                welcomeText={"🤘Olá!"}
                whichPage={WhichPage.audio_software}
            />
        </div>
    )
}

