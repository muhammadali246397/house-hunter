import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
export const AuthContext = createContext()
const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const getuser = localStorage.getItem('user')
    const parseuser = JSON.parse(getuser)
    console.log(user)
    const logIn = (data) => {
        const { email, password } = data

        axios.get('https://house-hunter-server-ecru.vercel.app/getUser', {
            params: { email, password }
        })
            .then(res => {
                const msg = res?.data?.message
                if (msg) {
                    Swal.fire({
                        title: 'error!',
                        text: { msg },
                        icon: 'error',
                        confirmButtonText: 'ok'
                    })
                } else {
                    const user = res.data;
                    const saveUser = JSON.stringify(user)
                    localStorage.setItem('user', saveUser)
                    setUser(parseuser)
                    Swal.fire({
                        title: 'Success!',
                        text: 'login success',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })

                }
            }).catch(error => {
                console.log(error)
            })

    }


    const info = {
        logIn
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
};

export default Provider;