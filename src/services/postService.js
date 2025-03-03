// This is a mock API service that simulates backend communication
// In a real application, these functions would make actual API calls to a server

// Default posts that will be shown if no custom posts exist
const defaultPosts = [
    {
        id: 1,
        title: 'AIM Challenge 2025 - Anmälan öppen!',
        date: '28 februari 2025',
        content: 'Nu är anmälan öppen för AIM Challenge 2025! Vi ser fram emot att välkomna både nya och återkommande deltagare till årets tävlingar i Hemsedal, Sälen, Ulricehamn och Kolmården.',
        image: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg'
    },
    {
        id: 2,
        title: 'Nya utmaningar i Hemsedal',
        date: '15 februari 2025',
        content: 'I år har vi lagt till flera nya spännande utmaningar på Hemsedal-banan. Förbered er på att testa era gränser i den vackra norska fjällmiljön!',
        image: '/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg'
    },
    {
        id: 3,
        title: 'Resultat från förra årets tävlingar',
        date: '10 januari 2025',
        content: 'Nu finns alla resultat från förra årets tävlingar tillgängliga på vår hemsida. Kolla in hur du och ditt lag placerade er!',
        image: '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg'
    },
    {
        id: 4,
        title: 'Ny sponsor för AIM Challenge',
        date: '5 januari 2025',
        content: 'Vi är glada att meddela att vi har fått en ny huvudsponsor för AIM Challenge 2025. Mer information kommer snart!',
        image: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg'
    }
];

// For development, we'll use localStorage to simulate a database
// In production, this would be replaced with actual API calls

// Get all posts
export const getPosts = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    try {
        const savedPosts = localStorage.getItem('newsPosts');
        if (savedPosts) {
            return JSON.parse(savedPosts);
        }
        // If no posts exist yet, save and return the default posts
        localStorage.setItem('newsPosts', JSON.stringify(defaultPosts));
        return defaultPosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return defaultPosts;
    }
};

// Add a new post
export const addPost = async (post) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
        const posts = await getPosts();
        const updatedPosts = [post, ...posts];
        localStorage.setItem('newsPosts', JSON.stringify(updatedPosts));
        return { success: true, posts: updatedPosts };
    } catch (error) {
        console.error('Error adding post:', error);
        return { success: false, error: 'Failed to add post' };
    }
};

// Delete a post
export const deletePost = async (postId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400));
    
    try {
        const posts = await getPosts();
        const updatedPosts = posts.filter(post => post.id !== postId);
        localStorage.setItem('newsPosts', JSON.stringify(updatedPosts));
        return { success: true, posts: updatedPosts };
    } catch (error) {
        console.error('Error deleting post:', error);
        return { success: false, error: 'Failed to delete post' };
    }
};

// Reset to default posts (for development purposes)
export const resetToDefaultPosts = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    try {
        localStorage.setItem('newsPosts', JSON.stringify(defaultPosts));
        return { success: true, posts: defaultPosts };
    } catch (error) {
        console.error('Error resetting posts:', error);
        return { success: false, error: 'Failed to reset posts' };
    }
};
