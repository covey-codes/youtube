import { useState, useEffect } from "react";

export const useImagesLoaded = (images: string[]): boolean => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = images.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    );

    Promise.all(imagePromises).then(() => setImagesLoaded(true));
  }, [images]);

  return imagesLoaded;
};
