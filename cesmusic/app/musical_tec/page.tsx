'use client'

import PagePattern from '../component/pagePattern'

import WhichPage from '../enum/WhichPage'

export default function MusicalTecnologyPage() {

    return(
        <div>            
            <PagePattern
                welcomeText="🖐️ Tudo Bem?"
/*                 linearGradient='linear-gradient(45deg, #EBEBEB, #A8DAE2, #E75757)'
                detailsColorA='#6AB8C5'
                detailsColorB='#E75757' */
                whichPage={WhichPage.musical_tec}
            />
        </div>
    )
}

