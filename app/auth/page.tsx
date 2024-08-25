
"use client"

import { useEffect } from "react"

const AuthPage = () => {
    useEffect(() => {
        window.location.assign("/auth/login")
    },[])
  return 
}

export default AuthPage
