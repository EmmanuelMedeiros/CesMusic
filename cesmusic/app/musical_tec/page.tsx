'use client'

import PagePattern from '../component/pagePattern'

import { useSearchParams } from 'next/navigation'
import WhichPage from '../enum/WhichPage'

export default function MusicalTecnologyPage() {

    const searchParams = useSearchParams()
    const search = searchParams.get('page')

    return(
        <div>            
            <PagePattern
                welcomeText="🖐️ Tudo Bem?"
                linearGradient='linear-gradient(45deg, #EBEBEB, #A8DAE2, #E75757)'
                detailsColorA='#6AB8C5'
                detailsColorB='#E75757'
                whichPage={WhichPage.musical_tec}
            />
        </div>
    )
}

