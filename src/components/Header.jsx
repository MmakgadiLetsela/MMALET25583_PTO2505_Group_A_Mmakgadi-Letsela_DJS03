/**.
 * Header component for the PodSURGE application. 
 * @function Header
 * @returns {JSX.Element} A header element containing the application title and an icon.
 * @principle SRP -Single Responsibility Principle: this component only handles displaying the header, which includes the title and an icon.
 * It does not handle any state or logic.
 */ 


export default function Header () {
    return (
        <header className ="app-header">
            <h1 className="app-title">
                PodSURGE
            </h1>
                <span className="podcast-icon" role="img" aria-label="podcast icon">🎙️</span>
        </header>
    )
}

