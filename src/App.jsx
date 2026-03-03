/** 
 * Root application component coordinates primary state used throughout the 
 * application including the list of podcasts, a loading state and any
 * fetch related error message
 * @function App
 * @returns {JSX.Element} The main application component that renders the header and the main content area, which includes loading, error, and podcast grid states.
 * @principle SRP - Single Responsibility Principle: This component is responsible for managing the overall state of the application and rendering the main structure only. 
 * @param {Array} podcasts - The list of podcast data fetched from the API, passed down to child components for rendering.
 * @param {boolean} loading - A boolean state used to indicate whether the app is currently fetching data from the API.
 * @param {string|null} error - A string state used to store any error messages that occur during the fetch process, or null if there are no errors. 
 */


import {useEffect, useState} from 'react';
import PodcastGrid from './components/PodcastGrid.jsx';
import {genres} from './data.js';
import {fetchPodcasts} from './api/fetchPodcasts.js';
import Header from './components/Header.jsx';

export default function App () {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetchPodcasts (setPodcasts, setError, setLoading);
    }, []);

    return (
        <>
        <Header/>
        <main>
            {loading && (
                <div className="message-container">
                    <p className="loading-spinner">
                        Loading podcasts...
                    </p>
                </div>
            )}

            {error && (
                <div className="message-container">
                    <div className="error-message">
                        Error occurred while fetching podcasts : {error}
                    </div>
                </div>
            )}

            {!loading && !error && (
                <PodcastGrid podcast = {podcasts} genres= {genres}/>
            )}

        </main>
        </>

    );

  }
