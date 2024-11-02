'use server'

import { headers } from "next/headers"
import ApiResponse from "../interface/ApiResponse"
import { User } from "../interface/User"

import axios from 'axios'

require("dotenv").config()

const apiLink: string|undefined = process.env.NEXT_PUBLIC_API_LINK

export async function authenticateUser(jwtToken: string|null, userID: string|null): Promise<ApiResponse> {

    const result: ApiResponse = await axios.put(`${apiLink}/api/v1/users/activate/${userID}`,
        {},
        {
            headers: {
                Authorization: jwtToken
            }
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
    
    console.log(result)

    return result
}

export async function authenticateCode(code: string|null): Promise<ApiResponse> {

    const result: ApiResponse = await axios.put(`${apiLink}/auth/validate-code/${code}`, 
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

export async function loginUser(user: User): Promise<ApiResponse> {

    const result: ApiResponse = await axios.post(`${apiLink}/auth/login`, 
        {
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