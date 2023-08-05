"use client"
import { useState, useContext, createContext } from 'react'

const NavContext = createContext({})

const MobileContext = ({ children }: { children: React.ReactNode }) => {
    const [nav, setNav] = useState(false)

    const navSwitcher = () => {
       return setNav((prev) => {
            return !prev
        })
    }
    return <NavContext.Provider value={{ nav, navSwitcher }} > {children} </NavContext.Provider>
}

const useGlobanNavContext = () => {
    return useContext(NavContext)
} 


export {MobileContext, useGlobanNavContext }