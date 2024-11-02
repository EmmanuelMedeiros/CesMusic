'use client'

import { createContext, useState } from "react"
import { User } from "../interface/User"

const defaultUser: User = {
    id: "",
    active: false,
    email: "",
    role: undefined
}

const UserContext = createContext({
    user: defaultUser,
    setJWTToken: function(jwtToken: string) {}/* ,
    getStoragedJWTToken: function(): string|null {
        const jwtToken: string|null = localStorage.getItem("jwtToken")
        return jwtToken
    } */
})

export function UserContextProvider(props: any) {

    const [user, setUser] = useState(defaultUser)

    function setJWTHandler(jwtToken: string) {
        setUser((prev: User) => {
            return(
                {
                    name: prev.name,
                    email: prev.email,
                    id: prev.id,
                    jwtToken: jwtToken,
                    active: prev.active,
                    role: prev.role
                }
            )
        })
    }
    
    const context = {
        user,
        setJWTToken: setJWTHandler
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContext