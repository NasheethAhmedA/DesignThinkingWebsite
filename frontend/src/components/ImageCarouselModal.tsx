import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselModalProps {
  images: string[];
  onClose: () => void;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
  images,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      {/* Outer wrapper handles outside click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal content (clicking here won't close the modal) */}
      <div
        className="relative max-w-3xl w-full px-4 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white hover:text-red-400 z-50"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Image and nav buttons */}
        <div className="flex items-center justify-center relative">
          <button
            onClick={prevImage}
            className="absolute left-0 p-2 text-white hover:text-blue-300"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Event image ${currentIndex + 1}`}
            className="max-h-[80vh] rounded-lg shadow-lg mx-auto"
          />

          <button
            onClick={nextImage}
            className="absolute right-0 p-2 text-white hover:text-blue-300"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        <div className="mt-4 text-center text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
