import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>

            <TwitterFollowCard formatUserName={format}  userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format}  userName="Donald_Trump">
                Donad Trump
            </TwitterFollowCard>

            <TwitterFollowCard formatUserName={format}  userName="ElonMusk">
                Elon Musk
            </TwitterFollowCard>
        </section>
    )
}




