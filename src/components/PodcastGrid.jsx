import PodcastCard from './PodcastCard.jsx';

/**
 * @function PodcastGrid
 * @prop {Array} podcast - An array of podcast objects to be displayed in the grid.
 * @return {JSX.Element} A grid of podcast cards, each representing a podcast from the provided array.
 * @principle SRP - Single Responsibility Principle: This component is solely responsible for rendering a grid of podcast cards.
 * This is the parent component that manages the layout of the podcast cards into a clean grid format.
 */

export default function PodcastGrid ({podcast}) {

return (
    <div className="podcast-grid">
        {podcast.map(podcast => (
            <PodcastCard key={podcast.id} podcast={podcast} genres={genres}/>
        ))}
    </div>
);


}