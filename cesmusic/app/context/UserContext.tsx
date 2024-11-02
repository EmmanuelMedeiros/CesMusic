'use client'

import { createContext, useEffect, useState } from "react"
import { User } from "../interface/User"
import Role from "../enum/Role"

const defaultUser: User = {
    id: "",
    active: false,
    email: "",
    role: undefined
}

const UserContext = createContext({
    user: defaultUser,
    setJWTToken: function(jwtToken: string) {},
    setUserID: function(userID: string) {},
    setUserRole: function(userRole: Role) {},
    getStoragedJWTToken: function(): string|null {
        const jwtToken: string|null = localStorage.getItem("jwtToken")
        return jwtToken
    }
})

export function UserContextProvider(props: any) {

    const [user, setUser] = useState(defaultUser)

    useEffect(() => {

        const userID: string|null = localStorage.getItem("userID")
        const jwtToken: string|null = localStorage.getItem("jwtToken")
        const userRole: any = localStorage.getItem("userRole")

        if(jwtToken && userID) {
            setUser(
                {
                    role: userRole,
                    id: userID,
                    jwtToken: jwtToken
                }
            )
        }

    }, [])

    function setJWTHandler(jwtToken: string) {
        setUser((prev: User) => {
            return(
                {
                    id: prev.id,
                    jwtToken: jwtToken,
                    role: prev.role
                }
            )
        })
    }

    function setUserRoleHandler(userRole: Role) {
        setUser((prev: User) => {
            return(
                {
                    id: prev.id,
                    jwtToken: prev.jwtToken,
                    role: userRole
                }
            )
        })
    }

    function setUserIDHandler(userID: string) {
        setUser((prev: User) => {
            return(
                {
                    id: userID,
                    jwtToken: prev.jwtToken,
                    role: prev.role
                }
            )
        })
    }

    function getStoragedJWTTokenHandler() {
        const jwtToken: string|null = localStorage.getItem('jwtToken')
        return jwtToken
    }
    
    const context = {
        user,
        setJWTToken: setJWTHandler,
        getStoragedJWTToken: getStoragedJWTTokenHandler,
        setUserID: setUserIDHandler,
        setUserRole: setUserRoleHandler
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContext