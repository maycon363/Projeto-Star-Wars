import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 p-3 rounded-full bg-yellow-400 text-black shadow-lg cursor-pointer transition-all duration-300 transform ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpCircle size={30} />
    </div>
  );
}
