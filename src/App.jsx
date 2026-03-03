

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
