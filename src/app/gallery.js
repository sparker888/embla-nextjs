import React, { useState, useCallback } from 'react';
import { PhotoAlbum } from 'react-photo-album';
import { Lightbox } from 'yet-another-react-lightbox';

// rest of your imports

export default function GalleryPage() {
  // rest of your code

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Photos</h2>
      <PhotoAlbum photos={IMAGES} renderPhoto={renderPhoto} />
      {lightboxIsOpen && (
        <Lightbox
          images={IMAGES}
          currentIndex={currentImage}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
