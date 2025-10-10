import React, { useState, useEffect } from "react";
import { useText } from "../context/TextContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import SEOManager from "./SEOManager";

const ContentManager = () => {
  const { textContent, resetAllContent, removeContentItem, isAdmin } =
    useText();
  const { isAuthenticated } = useAuth();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [mainTab, setMainTab] = useState("seo");
  const [activeTab, setActiveTab] = useState("all");
  const [faqItems, setFaqItems] = useState([]);
  const [backgroundItems, setBackgroundItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Redirect non-admin users and load data
  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate("/");
      return;
    }

    // Load all data when component mounts
    const loadAllData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([loadFaqItems(), loadBackgroundItems()]);
      } catch (error) {
        console.error("Error loading content data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllData();
  }, [isAuthenticated, isAdmin, navigate]);

  // Load FAQ items from Firestore
  const loadFaqItems = async () => {
    try {
      const faqCollection = collection(db, "faqs");
      const snapshot = await getDocs(faqCollection);

      const items = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        items.push({
          id: doc.id,
          ...data,
        });
      });

      setFaqItems(items);
      return items;
    } catch (error) {
      console.error("Error loading FAQ items:", error);
      return [];
    }
  };

  // Load background settings from Firestore
  const loadBackgroundItems = async () => {
    try {
      const bgCollection = collection(db, "backgroundSettings");
      const snapshot = await getDocs(bgCollection);

      const items = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        items.push({
          id: doc.id,
          ...data,
        });
      });

      setBackgroundItems(items);
      return items;
    } catch (error) {
      console.error("Error loading background settings:", error);
      return [];
    }
  };

  // If not authenticated or not admin, don't render the component
  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  const handleReset = () => {
    setShowConfirmation(true);
    setItemToDelete(null);
  };

  const handleRemoveItem = (key) => {
    setShowConfirmation(true);
    setItemToDelete(key);
  };

  const confirmAction = () => {
    if (itemToDelete) {
      removeContentItem(itemToDelete);
    } else {
      resetAllContent();
    }
    setShowConfirmation(false);
    setItemToDelete(null);
  };

  const cancelAction = () => {
    setShowConfirmation(false);
    setItemToDelete(null);
  };

  const categorizeContent = () => {
    const categories = {
      text: {},
      image: {},
      background: {},
      faq: {},
      backgroundSettings: {},
    };

    // Categorize text content
    Object.entries(textContent).forEach(([key, value]) => {
      // Skip if value is not a string
      if (typeof value !== 'string') {
        return;
      }
      
      if (
        value.startsWith("data:image") ||
        value.startsWith("http") ||
        value.startsWith("/")
      ) {
        // Check if it's a background image
        if (key.includes("-bg") || key.includes("background")) {
          categories.background[key] = value;
        } else {
          categories.image[key] = value;
        }
      } else {
        categories.text[key] = value;
      }
    });

    // Add FAQ items
    faqItems.forEach((item) => {
      categories.faq[item.id] = {
        question: item.question,
        answer: item.answer,
        category: item.category,
      };
    });

    // Add background settings
    backgroundItems.forEach((item) => {
      categories.backgroundSettings[item.id] = {
        elementId: item.elementId,
        imageUrl: item.imageUrl,
        type: item.type,
      };
    });

    return categories;
  };

  const categories = categorizeContent();

  // Filter content based on active tab
  const getFilteredContent = () => {
    if (activeTab === "all") {
      // Combine all content types for 'all' tab
      return {
        ...textContent,
        ...Object.fromEntries(
          faqItems.map((item) => [
            `faq-${item.id}`,
            `FAQ: ${item.question.substring(0, 30)}...`,
          ])
        ),
        ...Object.fromEntries(
          backgroundItems.map((item) => [`bg-${item.id}`, item.imageUrl])
        ),
      };
    } else {
      return categories[activeTab] || {};
    }
  };

  const filteredContent = getFilteredContent();

  return (
    <div className="flex flex_col" style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <section className="page_01 dynamic-background flex flex_col flex_j_E">
        <div className="trans-background page_01box flex flex_col flex_j_SA">
          <div className="om-oss-title flex flex_j_C flex_a_C">
            {/* Removed the title from here */}
          </div>
        </div>
      </section>

      {/* Title as headline under the image */}
      <div
        style={{
          padding: "30px 0 10px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 className="font_blue fonts_huge">Innehållshanterare</h1>
      </div>

      {/* Main Tabs - Only SEO */}
      <div
        style={{
          padding: "20px 40px 0",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          gap: "20px",
          borderBottom: "2px solid #eee",
        }}
      >
        <button
          style={{
            padding: "14px 24px",
            backgroundColor: "#2d4f60",
            color: "white",
            border: "none",
            borderRadius: "4px 4px 0 0",
            cursor: "default",
            fontSize: "16px",
            fontWeight: "bold",
            position: "relative",
            bottom: "-2px",
            borderBottom: "2px solid #2d4f60",
          }}
        >
          SEO&nbsp;&amp;&nbsp;Meta
        </button>
      </div>

      {/* Content tab removed - only SEO & Meta Data */}
      <div style={{ 
        padding: "40px", 
        maxWidth: "1200px", 
        margin: "0 auto",
        overflow: "hidden"
      }}>
        <SEOManager />
      </div>
    </div>
  );
};

export default ContentManager;
