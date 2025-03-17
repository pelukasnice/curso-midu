import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const formatUserName = (userName) =>`@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing 
            userName="midudev" 
            name="Miguel Angel Duran" />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing={false} 
            userName="Donald_Trump" 
            name="Donald Trump" />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing 
            userName="ElonMusk" 
            name="Elon Musck" />    
        </section>
    )
}




