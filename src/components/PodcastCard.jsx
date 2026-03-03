/**
 * PodcastCard component to display individual podcast details.
 * @function PodcastCard
 * @prop {Array} podcast -The podcast data containing details such as image and title fetched from the API, passed down from the parent component.
 * @prop {Array} genres - The list of all genres to map genre IDs to names.
 * @returns {JSX.Element} A card component displaying the podcast's image, title, seasons, last updated date, and genres.
 * @principle SRP - Single Responsibility Principle: This component is solely responsible for rendering the details of a single podcast in a card format.
 */


export default function PodcastCard ({podcast,genres}) {
    const {image, title, seasons, updated, genres: genreIds} = podcast;

    const genreNames = genreIds.map(genreId => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? genre.title : "Unknown Genre";
    });


    const lastUpdated = new Date(updated).toLocaleDateString('en-UK')

    return (
        <div className="podcast-card">
            <img className="podcast-image" src={image} alt={title} />
            <h3 className="podcast-title">{title}</h3>
            <p className="podcast-seasons">Seasons: {seasons}</p>
            <p className="podcast-date">Last Updated: {lastUpdated}</p>
            <p className="podcast-genres">Genres: {genreNames.join(' . ')}</p>
        </div>
    );
}