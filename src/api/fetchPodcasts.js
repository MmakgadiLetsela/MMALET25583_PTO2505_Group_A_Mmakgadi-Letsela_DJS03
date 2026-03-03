/**
 * Fetches podcast data from the API and manages loading and error states.
 * 
 * Retrieves a list of podcasts from the external API and updates the
 * app state with the fetched data. Handles any errors that occur during
 * the fetch process and manages the loading state throughout the process.
 * 
 * @async
 * @function fetchPodcasts
 * @param {Function} setPodcasts - State setter function to update the podcasts data
 * @param {Function} setError - State setter function to update the error state with error messages
 * @param {Function} setLoading - State setter function to update the loading state
 * @returns {Promise<void>} Resolves when the fetch and state updates are complete
 * @principle SRP - Single Responsibility Principle: This function is solely responsible for fetching podcast data and managing related states.
 */


export async function fetchPodcasts(setPodcasts, setError, setLoading) {
    
    
    try {
        const response = await fetch('https://podcast-api.netlify.app/shows');   
        if (!response.ok) throw new Error(`${response.status}`);
        const data = await response.json();
        setPodcasts(data);
    } 
    
    catch (error) {
        console.error("Failed to fetch podcasts:", error);
        setError(error.message);
    } 
    
    finally {
        setLoading(false);
    }
} 