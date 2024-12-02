import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-800">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="h-full w-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-3 bg-white'
                    : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}