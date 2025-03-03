// Import map for GitHub Pages
const importMap = {
  imports: {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom": "https://esm.sh/react-dom@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
    "react-router-dom": "https://esm.sh/react-router-dom@6.14.2",
    "firebase/app": "https://esm.sh/firebase@10.1.0/app",
    "firebase/auth": "https://esm.sh/firebase@10.1.0/auth",
    "firebase/firestore": "https://esm.sh/firebase@10.1.0/firestore",
    "font-awesome/css/font-awesome.min.css": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  }
};

// Add the import map to the document
const script = document.createElement('script');
script.type = 'importmap';
script.textContent = JSON.stringify(importMap);
document.currentScript.after(script);
