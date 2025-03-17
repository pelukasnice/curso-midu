import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) =>`@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="midudev" 
            name="Miguel Angel Duran" />

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing={false} 
            userName="Donald_Trump" 
            name="Donald Trump" />

            <TwitterFollowCard 
            formatUserName={format} 
            isFollowing 
            userName="ElonMusk" 
            name="Elon Musck" />    
        </section>
    )
}




