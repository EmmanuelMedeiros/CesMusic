'use client'

import style from '../styles/credentialsPage.module.css'
import buttonStyle from '../styles/button.module.css'

import { useRouter } from 'next/navigation'
import { User } from '../interface/User'
import { createNewUser, loginUser } from '../function/authentication'
import ApiResponse from '../interface/ApiResponse'

import { useContext } from 'react'

import UserContext from '../context/UserContext'

interface CredentialsProps {
    isRegistering: boolean
}

export default function CredentialsPage({isRegistering}: CredentialsProps) {

    const router = useRouter()
    const userContext = useContext(UserContext)

    const onHandleRouter = () => {
        if(isRegistering) {
            router.push('/login')
        } else {
            router.push('/register')
        }
    }

    async function credentialMethod(event: any) {

        let name: string 
        let userEmail: string 
        let userPassword: string 
        let passwordConf: string 

        if(isRegistering) {

            name = event.target[0].value
            userEmail = event.target[1].value
            userPassword = event.target[2].value
            passwordConf = event.target[3].value

            if(name.length < 5) {
                return
            } else if(userPassword.length < 7) {
                return
            } else if(userPassword !== passwordConf) {
                return
            }

            const registeringUser: User = {name, email: userEmail, password: userPassword}
            const result: ApiResponse = await createNewUser(registeringUser)

            if(result.status == 201) {
                console.log("Tudo certo :) \n" + result.response)
            } else {
                console.log("Tudo errado ;( \n" + result.response.title + "\n" + result.status)
            }
        } else {

            userEmail = event.target[0].value
            userPassword = event.target[1].value

            const userToLogin: User = {password: userPassword, email: userEmail}
            const result: ApiResponse = await loginUser(userToLogin)

            if(result.status == 200) {

                console.log("Tudo certo ; \n" + result.response)
                userContext.setJWTToken(result.response.token)
                userContext.setUserID(result.response.userId)
                userContext.setUserRole(result.response.userRole)

                localStorage.setItem("userID", result.response.userId)
                localStorage.setItem("jwtToken",result.response.token )
                localStorage.setItem("userRole", result.response.userRole)

                router.push('/')
                
            } else {
                console.log("Tudo errado ;( \n" + result.response.title)
            }

        }
    }

    return(
        <div className={`${style.container}`}>

            <h1 
                className='text-center text-white text-2xl'>{isRegistering ? 'Faça já seu registro' : 'Entre no CesMusic'}
            </h1>

            <form
                onSubmit={(ev) => {ev.preventDefault()
                    credentialMethod(ev)
                }}>
            
                {isRegistering
                    ?
                        <input 
                            placeholder='Digite seu nome'
                            type="string" 
                            name="name" 
                            id="name" 
                            className={`${style.input_style}`}
                        />
                    :
                        null}

                <input 
                    placeholder='Digite seu email'
                    type="email" 
                    name="email" 
                    id="email" 
                    className={`${style.input_style}`}
                />

                <input 
                    placeholder='Digite sua senha'
                    type="password" 
                    name="password" 
                    id="password" 
                    maxLength={50}
                    className={`${style.input_style}`}
                />

                {isRegistering
                    ?
                        <input 
                            placeholder='Confirme sua senha'
                            type="password" 
                            name="password" 
                            id="password" 
                            maxLength={50}
                            className={`${style.input_style}`}
                        />
                    :
                        null
                }

                    <button 
                        type="submit"
                        className={`${buttonStyle.submit_button}`}> {isRegistering ? "Registrar" : "Login"}
                    </button>

                    {isRegistering 
                        ?   
                            <div>
                                <p className='text-white'>Já é registrado? </p>
                                <p onClick={onHandleRouter} className='text-white underline hover:cursor-pointer hover:text-blue-400'>CLIQUE AQUI para fazer o login</p>
                            </div>
                        :
                        <div>
                            <p className='text-white'>Ainda não tem cadastro? </p>
                            <p onClick={onHandleRouter} className='text-white underline hover:cursor-pointer hover:text-blue-400'>CLIQUE AQUI para se cadastrar</p>
                        </div>
                    }  

            </form>
            
        </div>
    )
}