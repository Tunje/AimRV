import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useText } from "../context/TextContext";
import { db } from "../firebase/config";
import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const NewsCarousel = ({ instanceId, defaultCategory = "Alla" }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [categories, setCategories] = useState([defaultCategory]);
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const { isAdmin, currentLanguage } = useText();
  
  // State for button text
  const [readMoreText, setReadMoreText] = useState('');
  
  // Update button text when language changes
  useEffect(() => {
    // For English
    if (currentLanguage === 'en') {
      setReadMoreText('READ MORE');
    }
    // For Norwegian
    else if (currentLanguage === 'no') {
      setReadMoreText('LES MER');
    }
    // Default to Swedish
    else {
      setReadMoreText('LÄS MER');
    }
  }, [currentLanguage]);
  // Fetch all available categories from posts and add location categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        // Always include these categories regardless of whether posts exist for them
        const uniqueCategories = new Set([
          "Alla",
          "Sälen",
          "Ulricehamn",
          "Hemsedal",
          "Kolmården",
        ]);

        // Add any additional categories from posts
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          if (post.category && post.category.trim() !== "") {
            uniqueCategories.add(post.category);
          }
        });

        setCategories(Array.from(uniqueCategories));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch the saved category setting for this carousel instance
  useEffect(() => {
    const fetchCarouselSettings = async () => {
      try {
        const settingsRef = doc(db, "carouselSettings", instanceId);
        const settingsDoc = await getDoc(settingsRef);

        if (settingsDoc.exists()) {
          const data = settingsDoc.data();
          setSelectedCategory(data.category || "Alla");
        }
      } catch (error) {
        console.error("Error fetching carousel settings:", error);
      }
    };

    if (instanceId) {
      fetchCarouselSettings();
    }
  }, [instanceId]);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const fetchedPosts = [];
        querySnapshot.forEach((doc) => {
          fetchedPosts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on selected category
  useEffect(() => {
    if (selectedCategory === "Alla") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.category === selectedCategory || post.category === "Alla"
      );
      setFilteredPosts(filtered);
    }

    // Reset current index when category changes
    setCurrentIndex(0);
  }, [selectedCategory, posts]);

  // Save the category setting for this carousel instance
  const saveCarouselSettings = async (category) => {
    try {
      const settingsRef = doc(db, "carouselSettings", instanceId);
      await setDoc(settingsRef, {
        category,
        updatedAt: new Date().toISOString(),
        updatedBy: "admin",
      });

      console.log("Carousel settings saved successfully");
    } catch (error) {
      console.error("Error saving carousel settings:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    saveCarouselSettings(category);
    setShowCategorySelector(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardsToShow = windowWidth <= 768 ? 1 : windowWidth <= 992 ? 2 : 3;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredPosts.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const toggleCategorySelector = () => {
    setShowCategorySelector(!showCategorySelector);
  };

  // Determine which posts to display
  const visiblePosts = [];

  // Show multiple posts based on screen size
  for (
    let i = currentIndex;
    i < Math.min(currentIndex + cardsToShow, filteredPosts.length);
    i++
  ) {
    visiblePosts.push(filteredPosts[i]);
  }

  // Fill with empty placeholder if we don't have enough posts
  while (visiblePosts.length < cardsToShow && filteredPosts.length > 0) {
    visiblePosts.push(null);
  }

  return (
    <div className="news-carousel">
      {isAdmin && (
        <div className="news-carousel-admin">
          <button
            className="category-selector-button"
            onClick={toggleCategorySelector}
          >
            {selectedCategory} <span className="arrow">▼</span>
          </button>
          {showCategorySelector && (
            <div className="category-selector">
              <div
                className={`category-option ${
                  selectedCategory === "Alla" ? "selected" : ""
                }`}
                onClick={() => handleCategoryChange("Alla")}
              >
                Alla
              </div>
              {categories.map((category) => (
                <div
                  key={category}
                  className={`category-option ${
                    selectedCategory === category ? "selected" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="news-carousel-container">
        {visiblePosts.map((post, index) =>
          post ? (
            <div className="news-card" key={post.id}>
              <div className="news-image">
                {post.image ? (
                  <img src={post.image} alt={post.title} />
                ) : (
                  <div className="news-image-placeholder"></div>
                )}
              </div>
              <div className="news-content">
                <h3 className="news-location">{post.title}</h3>
                <div 
                  className="news-description"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                  }}
                  style={{ 
                    maxHeight: '100px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                />
                <div className="news-button">
                  <Link to={`/news/${post.id}`} className="button-2">
                    <span>{readMoreText}</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="news-card empty" key={`empty-${index}`}>
              <div className="news-image-placeholder"></div>
              <div className="news-content">
                <h3 className="news-location">Inga fler nyheter</h3>
                <p className="news-description">
                  Det finns inga fler nyheter i denna kategori.
                </p>
              </div>
            </div>
          )
        )}
      </div>

      <div className="news-carousel-controls">
        <button
          className="carousel-control prev"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button
          className="carousel-control next"
          onClick={handleNext}
          disabled={currentIndex >= filteredPosts.length - cardsToShow}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;
