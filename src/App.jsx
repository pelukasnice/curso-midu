import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'Donald_Trump',
        name: 'Donald Trump',
        isFollowing:false
    },
    {
        userName: 'ElonMusk',
        name: 'Elon Musk',
        isFollowing:true
    }
]

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
            {
                users.map(user =>{
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName}// para que react sepa que es un componente unico.
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        formatUserName={format}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
            
        </section>
    )
}




