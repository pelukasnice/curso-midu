import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>

            <TwitterFollowCard formatUserName={format} isFollowing userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} isFollowing={false} userName="Donald_Trump">
                Donad Trump
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format} isFollowing userName="ElonMusk">
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}




