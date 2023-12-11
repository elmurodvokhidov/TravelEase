import React, { useState } from 'react'

export const ContextData = React.createContext()
export default function ContextFunc({ children }) {

    const [user, setUser] = useState([
        {
            img: "./img/imgPerson.jpg",
            name: "Md Shamim Hossain",
            job: "UI/UX Designer",
            about: "Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning."
        },
        {
            img: "./img/imgPerson.jpg",
            name: "Odamcha",
            job: "UI",
            about: "ishchi."
        },
        {
            img: "./img/imgPerson.jpg",
            name: "Soxta",
            job: "Km bu",
            about: "oddiy ishchi."
        },
        {
            img: "./img/imgPerson.jpg",
            name: "Md Shamim Hossain",
            job: "Designer",
            about: "Super ishchi."
        },
    ])
    return (
        <ContextData.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </ContextData.Provider>
    )
}
