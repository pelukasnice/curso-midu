import './App.css'

export function App(){
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src="https://unavatar.io/github/mdo" 
                    alt="User Avatar" />
                <div className='tw-followCard-info'>
                    <strong>El Barba Mcqueen</strong>
                    <span className='tw-followCard-infoUsername'>@elBarba</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}




