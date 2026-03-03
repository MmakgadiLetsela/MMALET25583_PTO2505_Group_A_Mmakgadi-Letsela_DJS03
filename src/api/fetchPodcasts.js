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