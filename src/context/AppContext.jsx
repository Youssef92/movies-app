import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  // const [language, setLanguage] = useState("en");

  // (optional)

  // const addToWishlist = (movie) => {
  //   setWishlist((prev) => [...prev, movie]);
  // };

  // const removeFromWishlist = (id) => {
  //   setWishlist((prev) => prev.filter((m) => m.id !== id));
  // };

  const toggleWishlist = (movie) => {
    setWishlist((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];
    });
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        // language,
        // setLanguage,
        // (optional)
        // addToWishlist,
        // removeFromWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
