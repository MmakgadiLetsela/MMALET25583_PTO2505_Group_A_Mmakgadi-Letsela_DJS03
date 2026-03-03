

export default function PodcastCard ({podcast,genres}) {
    const {image, title, seasons, updated, genres: genreIds} = podcast;

    const genreNames = genreIds.map(genreId => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? genre.title : "Unknown Genre";
    });


    const lastUpdated = new Date(updated).toLocaleDateString('en-UK')

    return (
        <div className="podcast-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Seasons: {seasons}</p>
            <p>Last Updated: {lastUpdated}</p>
            <p>Genres: {genreNames.join(' . ')}</p>
        </div>
    );
}