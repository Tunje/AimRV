import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import "../styles/index.css";

const FAQEditor = ({ category }) => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, currentUser } = useAuth();
  const isAdmin = currentUser?.role === "admin";

  // Load FAQs from Firebase
  useEffect(() => {
    const loadFAQs = async () => {
      try {
        setIsLoading(true);
        const faqCollection = collection(db, "faqs");
        const snapshot = await getDocs(faqCollection);
        
        const loadedFaqs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.category === category) {
            loadedFaqs.push({
              id: doc.id,
              question: data.question,
              answer: data.answer,
              category: data.category,
              order: data.order || 0
            });
          }
        });
        
        // Sort by order
        loadedFaqs.sort((a, b) => a.order - b.order);
        setFaqs(loadedFaqs);
      } catch (error) {
        console.error("Error loading FAQs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFAQs();
  }, [category]);

  // Add a new FAQ
  const handleAddFAQ = async () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    
    try {
      const newFAQ = {
        question: newQuestion,
        answer: newAnswer,
        category,
        order: faqs.length // Add to the end
      };
      
      const docRef = doc(collection(db, "faqs"));
      await setDoc(docRef, newFAQ);
      
      setFaqs([...faqs, { ...newFAQ, id: docRef.id }]);
      setNewQuestion("");
      setNewAnswer("");
    } catch (error) {
      console.error("Error adding FAQ:", error);
    }
  };

  // Delete an FAQ
  const handleDeleteFAQ = async (id) => {
    try {
      await deleteDoc(doc(db, "faqs", id));
      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  // Update an FAQ
  const handleUpdateFAQ = async (id, field, value) => {
    try {
      const updatedFaqs = faqs.map(faq => {
        if (faq.id === id) {
          return { ...faq, [field]: value };
        }
        return faq;
      });
      
      const faqToUpdate = updatedFaqs.find(faq => faq.id === id);
      await setDoc(doc(db, "faqs", id), {
        question: faqToUpdate.question,
        answer: faqToUpdate.answer,
        category: faqToUpdate.category,
        order: faqToUpdate.order
      });
      
      setFaqs(updatedFaqs);
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  if (!isAdmin) {
    return null; // Only show to admins
  }

  return (
    <div className="faq-editor">
      <h3>Manage {category} FAQs</h3>
      
      {isLoading ? (
        <p>Loading FAQs...</p>
      ) : (
        <>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item-editor">
                <div className="faq-controls">
                  <button 
                    onClick={() => handleDeleteFAQ(faq.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
                <div className="faq-content">
                  <textarea
                    value={faq.question}
                    onChange={(e) => handleUpdateFAQ(faq.id, "question", e.target.value)}
                    placeholder="Question"
                    className="faq-question-editor"
                  />
                  <textarea
                    value={faq.answer}
                    onChange={(e) => handleUpdateFAQ(faq.id, "answer", e.target.value)}
                    placeholder="Answer"
                    className="faq-answer-editor"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="add-faq-form">
            <h4>Add New FAQ</h4>
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="New Question"
              className="faq-question-editor"
            />
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="New Answer"
              className="faq-answer-editor"
            />
            <button 
              onClick={handleAddFAQ}
              className="add-button"
              disabled={!newQuestion.trim() || !newAnswer.trim()}
            >
              Add FAQ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FAQEditor;
