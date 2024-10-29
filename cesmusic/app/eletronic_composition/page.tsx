'use client'

import PagePattern from '../component/pagePattern'
import WhichPage from '../enum/WhichPage'

export default function EletronicComposion() {

    return(
        <PagePattern
        welcomeText={"🖐️ Oi!"}
        whichPage={WhichPage.eletronic_composion}
    />
    )
}