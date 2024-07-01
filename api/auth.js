import {URL} from './connection'

export const loginUser = async (inputs) => {
    const res = await fetch(`${URL}\\login`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })

    return await res.json()
}

export const checkToken = async (token) => {
    const res = await fetch(`${URL}\\checkToken`,{
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })

    return await res.json()
}

export const revokeToken = async (token) => {
    const res = await fetch(`${URL}\\revokeToken`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })

    return await res.json()
}