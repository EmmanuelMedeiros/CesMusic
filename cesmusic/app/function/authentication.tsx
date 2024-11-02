'use server'

import ApiResponse from "../interface/ApiResponse"
import { User } from "../interface/User"

import axios from 'axios'

require("dotenv").config()

const apiLink: string|undefined = process.env.NEXT_PUBLIC_API_LINK

export async function loginUser(user: User): Promise<ApiResponse> {

    const result: ApiResponse = await axios.post(`${apiLink}/auth/login`, 
        {
            email: user.email,
            password: user.password
        }
    )
    .then((data) => {
        console.log(data)
        return(
            {
                status:data.status,
                response: data.data
            }
        )
    })
    .catch((err) => {
        console.log(err)
        return(
            {
                status:err.status,
                response:err.response.data
            }
        )
    })

    return result
}

export async function createNewUser(user: User): Promise<ApiResponse> {

    const result: ApiResponse = await axios.post(`${apiLink}/auth/register`, 
        {
            name: user.name,
            email: user.email,
            password: user.password
        }
    )
    .then((data) => {
        return(
            {
                status:data.status,
                response: data.data
            }
        )
    })
    .catch((err) => {
        return(
            {
                status:err.status,
                response:err.response.data
            }
        )
    })

    return result
}