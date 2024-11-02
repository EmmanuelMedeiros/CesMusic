'use client'

import { useState, useEffect } from "react"

import { useSearchParams } from "next/navigation"
import { authenticateCode } from "@/app/function/authentication"

import style from '../../styles/authenticationPage.module.css'

export default function CodeAuthenticate() {

    const [validation, setValidation] = useState<boolean|undefined>(undefined)

    const params = useSearchParams()
    const code: string|null = params.get('code')

    async function authenticateCodeHandler() {
        const result = await authenticateCode(code)

        if(result.status !== 200) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }

    useEffect(() => {
        authenticateCodeHandler()
    }, [])

    return(
        <div className={`${style.container}`}>
            <h1 className="text-center text-white">{validation == false ? "ERRADO" : validation ? "CERTO" : "ESPERANDO..."}</h1>
        </div>
    )
}