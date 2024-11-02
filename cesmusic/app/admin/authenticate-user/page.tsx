'use client'

import { useState, useEffect, useContext } from "react"

import { useSearchParams } from "next/navigation"
import { authenticateUser } from "@/app/function/authentication"

import { useRouter } from "next/navigation"

import style from '../../styles/authenticationPage.module.css'
import UserContext from "@/app/context/UserContext"

export default function CodeAuthenticate() {

    const router = useRouter()
    const userContext = useContext(UserContext)

    const [validation, setValidation] = useState<boolean|undefined>(undefined)
    const [errorMessage, setErrorMessage] = useState<string>("")

    const params = useSearchParams()
    const userID: string|null = params.get('id')

    async function authenticateUserHandler() {

        const userJwtToken: string|null = userContext.getStoragedJWTToken()

        const result = await authenticateUser(userJwtToken, userID)

        if(result.status !== 200) {
            setValidation(false)
            setErrorMessage(result.response.title)
        } else {
            setValidation(true)
            setTimeout(() => {
                router.push('/')
            }, 2000)
        }
    }

    useEffect(() => {
        authenticateUserHandler()
    }, [])

    return(
        <div className={`${style.container} `}>
            <h1 className="text-center -mt-[10rem]">{validation == false ? <p className="text-[#E64756]">Erro: <span className="text-white">{errorMessage}</span></p> : validation ? <p className="text-[#5AE56B]">Usuário autenticado</p> : "Aguardando resposta do servidor..."}</h1>
        </div>
    )
}