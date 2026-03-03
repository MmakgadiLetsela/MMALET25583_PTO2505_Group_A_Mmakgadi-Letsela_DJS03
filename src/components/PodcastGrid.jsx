

export default function PodcastGrid ({podcast}) {

return (
    <div className="podcast-grid">
        {podcast.map(podcast => (
            <PodcastCard key={podcast.id} podcast={podcast} genres={genres}/>
        ))}
    </div>
);


}