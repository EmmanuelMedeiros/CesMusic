'use client'

import { Suspense } from 'react'


import PagePattern from '../component/pagePattern'
import WhichPage from '../enum/WhichPage'

export default function EletronicComposion() {

    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PagePattern
                welcomeText={"🖐️ Oi!"}
                whichPage={WhichPage.eletronic_composion}
                />
            </Suspense>
        </div>
    )
}