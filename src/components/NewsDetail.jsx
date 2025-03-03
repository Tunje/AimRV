import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/index.css';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sample news posts data - in a real app, this would come from an API or database
    const newsPosts = [
        {
            id: 1,
            title: 'AIM Challenge 2025 - Anmälan öppen!',
            date: '28 februari 2025',
            content: 'Nu är anmälan öppen för AIM Challenge 2025! Vi ser fram emot att välkomna både nya och återkommande deltagare till årets tävlingar i Hemsedal, Sälen, Ulricehamn och Kolmården.\n\nAIM Challenge har blivit en tradition för många äventyrslystna deltagare, och i år kommer vi att erbjuda ännu fler spännande utmaningar. Tävlingarna kommer att äga rum under följande datum:\n\n- Hemsedal: 15-17 mars 2025\n- Sälen: 22-24 mars 2025\n- Ulricehamn: 5-7 april 2025\n- Kolmården: 19-21 april 2025\n\nAnmälan sker via vår hemsida och platserna fylls snabbt, så se till att säkra din plats redan idag!',
            image: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg',
            fullImage: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg'
        },
        {
            id: 2,
            title: 'Nya utmaningar i Hemsedal',
            date: '15 februari 2025',
            content: 'I år har vi lagt till flera nya spännande utmaningar på Hemsedal-banan. Förbered er på att testa era gränser i den vackra norska fjällmiljön!\n\nVårt team har arbetat hårt för att designa nya hinderbanor som kommer att utmana även de mest erfarna deltagarna. De nya utmaningarna inkluderar:\n\n1. "Fjällpassagen" - en tekniskt krävande sträcka med klättring och balansmoment\n2. "Isfloden" - en isande kall utmaning som testar både styrka och mental uthållighet\n3. "Lavinzonen" - en hinderbana där samarbete är nyckeln till framgång\n\nVi har också förbättrat säkerheten längs hela banan med fler kontrollpunkter och medicinsk personal på plats. Vårt mål är att skapa en utmanande men säker upplevelse för alla deltagare.',
            image: '/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg',
            fullImage: '/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg'
        },
        {
            id: 3,
            title: 'Resultat från förra årets tävlingar',
            date: '10 januari 2025',
            content: 'Nu finns alla resultat från förra årets tävlingar tillgängliga på vår hemsida. Kolla in hur du och ditt lag placerade er!\n\nFörra årets AIM Challenge var en enorm framgång med rekordmånga deltagare. Vi vill gratulera alla vinnare och tacka samtliga deltagare för ert engagemang och er sportslighet.\n\nHär är topplaceringarna från förra årets tävlingar:\n\nHemsedal:\n- Herrar: 1. Erik Johansson, 2. Petter Nordlund, 3. Magnus Ek\n- Damer: 1. Anna Lindberg, 2. Sofia Axelsson, 3. Emma Karlsson\n\nSälen:\n- Herrar: 1. Johan Bergström, 2. Anders Nyström, 3. Karl Lundgren\n- Damer: 1. Lina Ekström, 2. Maria Holmberg, 3. Johanna Wikström\n\nUlricehamn:\n- Herrar: 1. Niklas Andersson, 2. Fredrik Lindholm, 3. Gustav Holm\n- Damer: 1. Elin Sandberg, 2. Kristina Berg, 3. Maja Nilsson\n\nKolmården:\n- Herrar: 1. Mikael Svensson, 2. David Karlsson, 3. Simon Lindgren\n- Damer: 1. Sara Björk, 2. Hanna Lindqvist, 3. Klara Öberg\n\nFullständiga resultatlistor finns tillgängliga på vår hemsida under fliken "Resultat".',
            image: '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg',
            fullImage: '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg'
        },
        {
            id: 4,
            title: 'Ny sponsor för AIM Challenge',
            date: '5 januari 2025',
            content: 'Vi är glada att meddela att vi har fått en ny huvudsponsor för AIM Challenge 2025. Mer information kommer snart!\n\nDen nya sponsorn kommer att bidra till att höja kvaliteten på våra evenemang ytterligare och möjliggöra fler spännande utmaningar och bättre priser för deltagarna.\n\nVi kommer att presentera vår nya huvudsponsor vid en presskonferens nästa vecka, så håll utkik efter mer information på vår hemsida och i våra sociala medier.\n\nDetta partnerskap markerar början på ett nytt kapitel för AIM Challenge, och vi ser fram emot att tillsammans med vår nya sponsor ta tävlingen till nya höjder.',
            image: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg',
            fullImage: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg'
        }
    ];

    useEffect(() => {
        // In a real app, you would fetch the news item from an API
        // For now, we'll use our sample data
        if (id) {
            const foundItem = newsPosts.find(item => item.id === parseInt(id));
            if (foundItem) {
                setNewsItem(foundItem);
            }
            setLoading(false);
        }
    }, [id]);

    const handleGoBack = () => {
        navigate('/senaste-nytt');
    };

    if (loading) {
        return (
            <div className="flex flex_col flex_a_C flex_j_C" style={{ minHeight: '50vh' }}>
                <p className="fonts_large">Laddar...</p>
            </div>
        );
    }

    if (!newsItem) {
        return (
            <div className="flex flex_col flex_a_C flex_j_C" style={{ minHeight: '50vh' }}>
                <p className="fonts_large">Nyheten kunde inte hittas</p>
                <button 
                    onClick={handleGoBack} 
                    className="navbbutton button font_blue"
                    style={{ marginTop: '20px', padding: '10px 20px' }}
                >
                    Tillbaka till nyheter
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex_col">
            {/* Header Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="font_blue fonts_huge font_white">NYHETER</p>
                    </div>
                </div>
            </section>

            {/* News Detail Section */}
            <section style={{ padding: '50px 0', backgroundColor: '#f5f5f5', width: '100vw' }}>
                <div className="MaxWH" style={{ padding: '0 20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <button 
                        onClick={handleGoBack} 
                        className="navbbutton button font_blue"
                        style={{ 
                            marginBottom: '20px', 
                            padding: '10px 30px 10px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            minWidth: '120px'
                        }}
                    >
                        <span>←</span> <span>Tillbaka</span>
                    </button>
                    
                    <div style={{ 
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ 
                            height: '400px', 
                            backgroundImage: `url(${newsItem.fullImage || newsItem.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                        <div style={{ padding: '30px' }}>
                            <h1 className="fonts_large font_blue" style={{ marginBottom: '10px' }}>{newsItem.title}</h1>
                            <p className="fonts_small" style={{ color: '#666', marginBottom: '30px' }}>{newsItem.date}</p>
                            {newsItem.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="fonts_small" style={{ marginBottom: '20px' }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <button 
                            onClick={handleGoBack} 
                            className="navbbutton button font_blue"
                            style={{ 
                                padding: '10px 30px 10px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                minWidth: '120px'
                            }}
                        >
                            <span>←</span> <span>Tillbaka</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Background Image Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E" style={{ height: '50vh', width: '100vw' }}>
            </section>
        </div>
    );
};

export default NewsDetail;
