'use client'

import Link from 'next/link'


import { CiPlay1 } from "react-icons/ci";

import { useEffect, useState } from 'react';

import stylesEletronic from '../styles/eletronicComposionPattern.module.css'
import stylesAudioSoftware from '../styles/eletronicComposionPattern.module.css'
import styleMusicalTecnology from '../styles/musicalTecnologyPattern.module.css'

import PaginationComponent from './paginationComponent';

import { useRouter, useSearchParams } from 'next/navigation';
import WhichPage from '../enum/WhichPage';

interface PatternProps {
    whichPage: WhichPage,
    welcomeText: string,
}


export default function PagePattern({whichPage, welcomeText}: PatternProps) {

    const router = useRouter()
    const params = useSearchParams()
    let currentStyle: any

    const actualPage:string|null = params.get('page')

    const [searching, setSearching] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(Number(actualPage))

    useEffect(() => {

        if(whichPage == WhichPage.audio_software) {
            router.push(`/audio_software?page=${currentPage.toString()}`)
        } else if(whichPage == WhichPage.musical_tec) {
            router.push(`/musical_tec?page=${currentPage.toString()}`)
        } else if(whichPage == WhichPage.eletronic_composion) {
            router.push(`/eletronic_composition?page=${currentPage.toString()}`)
        }
    }, [currentPage])

    const onHandleSearching = (element: any) => {

        if(element.target.value.trim() != "" && typeof element.target.value.trim() == "string") {
            setSearching(true)
        } else{
            setSearching(false)
        }
    }  

    const postList = [
        {
            title: 'TítuloA',
            textPreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi labore quae, minima necessitatibus facere quaerat eum itaque 
            voluptates qui laudantium dolore reprehenderit voluptate libero 
            omnis ad quod nulla! Culpa, sit.`,
            imagePreview: 'img',
            postOwner: 'nome sobrenome',
            createdAt: '28/07/2024',
            id: 1
        },
        {
            title: 'TítuloB',
            textPreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi labore quae, minima necessitatibus facere quaerat eum itaque 
            `,
            imagePreview: 'img',
            postOwner: 'teste dois da silva',
            createdAt: '28/07/2024',
            id: 2
        },
        {
            title: 'TítuloC',
            textPreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi labore quae, minima necessitatibus facere quaerat eum itaque 
            dasd asd fasdf asd ei jdasw `,
            imagePreview: 'img',
            postOwner: 'teste três da silva',
            createdAt: '28/07/2024',
            id: 3
        }
    ]

    const onHandlerGoToPost = () => {

        let page: string = ""

        if(whichPage == WhichPage.audio_software) {
            page = "audio_software"
        } else if(whichPage == WhichPage.musical_tec) {
            page = "musical_tec"
        } else if(whichPage == WhichPage.eletronic_composion) {
            page = "eletronic_composition"
        }

        sessionStorage.setItem('lastPage', `${page}?page=${currentPage.toString()}`)
        router.push(`/${page}/12345`)
    }

    if(whichPage === WhichPage.eletronic_composion) {
        currentStyle = stylesEletronic
    } else if(whichPage === WhichPage.audio_software) {
        currentStyle = stylesAudioSoftware
    } else {
        currentStyle = styleMusicalTecnology
    }

    const logoGradient: any = {
        '--logo-gradient': 'linear-gradient(45deg, #D870DA, #44B6D5, #6BD167)'
    }

    return(
            <div 
                style={logoGradient}
                className={currentStyle.container}>
                <div className={currentStyle.header}>
                    <Link href="/">
                        <h1 id={currentStyle.logo_text} className='font-semibold'>CesMusic</h1>
                    </Link>

                    <h2>{welcomeText}</h2>

                    <div className={currentStyle.input_block}>
                        <input 
                            onChange={(element) => onHandleSearching(element)}
                            type="text" 
                            name="search" 
                            id={currentStyle.search} 
                            placeholder="Pesquise alguma postagem aqui" 
                        />
                        
                        <button>
                            <CiPlay1 id={currentStyle.play} className={`text-xl transition-all duration-500 ${searching ? currentStyle.show : currentStyle.not_show}`}/>
                            <div id={currentStyle.circle} className={`${!searching ? currentStyle.show : currentStyle.not_show}`}></div>    
                        </button>

                    </div>

                </div>

                {postList.map((element, index) => (
                    <div className={`${currentStyle.post} ${index % 2 == 0 ? currentStyle.postA : currentStyle.postB}`} key={element.id}>

                        <div key={element.id} className={currentStyle.title_and_text}>
                            <h1 className='font-semibold'>{element.title}</h1>
                            <p>{element.textPreview}</p>
                        </div>

                        <div  className={currentStyle.info_bellow}>
                            <button onClick={onHandlerGoToPost}>
                                <p>Acessar Publicação</p>
                            </button>

                            <div className={`${currentStyle.likes_and_owner}`}>

                                <p id={currentStyle.owner_name}>Post feito por {element.postOwner}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}

                    <PaginationComponent
                        currentPage={currentPage}
                        pages={10}
                        setCurrentPage={setCurrentPage}
                    />

            </div>
    )
}