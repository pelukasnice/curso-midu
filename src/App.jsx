import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <React.Fragment>
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />    
        </React.Fragment>
    )
}




