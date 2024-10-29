'use client'

import PagePattern from '../component/pagePattern'

import { useSearchParams } from 'next/navigation'
import WhichPage from '../enum/WhichPage'

export default function EletronicComposion() {

    const searchParams = useSearchParams()
    const search = searchParams.get('page')

    return(
        <PagePattern
        welcomeText={"🖐️ Oi!"}
        linearGradient='linear-gradient(45deg, #E0EFED, #83D79E, #EC9435)'
        detailsColorA='#EC9435'
        detailsColorB='#69D1C5'
        whichPage={WhichPage.eletronic_composion}
    />
    )
}