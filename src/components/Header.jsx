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
                <img className="podcast-icon" src="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-podcast-line-icon-vector-png-image_6680917.png" aria-label="podcast icon"></img>
        </header>
    )
}

