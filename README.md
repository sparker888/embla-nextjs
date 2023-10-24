# Embla Carousel with Next.js 13, the next/image component and TailwindCSS

This repository demonstrates the integration of Embla Carousel with Next.js 13, featuring the new version of Next.js Image component. Tailwind CSS is also incorporated for styling purposes. The project showcases a basic carousel with thumbnails below, each of which interacts with the main carousel to select which image to show. There are many options available when customizing Embla Carousel, so this repo is simply a starting point.

## Getting Started

1. **Create a New Next.js Project**
    - Start by creating a new Next.js project using the following command:
    ```bash
    npx create-next-app embla-nextjs
    ```

2. **Install TailwindCSS**
    - Navigate to your project folder and install TailwindCSS using the following command:
    ```bash
    npx tailwindcss init -p
    ```

3. **Install Embla Carousel**
    - Install the Embla Carousel package via npm using the following command:
    ```bash
    npm install embla-carousel
    ```

4. **Create a Carousel Component**
    - Create a new file `ThumbnailCarousel.jsx` in the `components` directory.
    - Import the necessary dependencies at the top of your file.
    ```jsx
    import Image from 'next/image';
    import { useEffect, useRef, useState } from 'react';
    import EmblaCarousel from 'embla-carousel';
    import '../styles/embla.css';
    ```

5. **Set Up the Carousel**
    - Define a `ThumbnailCarousel` functional component.
    - Within this component, set up the `useRef` and `useState` hooks to manage your carousel instance.
    - Use the `useEffect` hook to initialize the Embla Carousel.
    ```jsx
    const ThumbnailCarousel = () => {
      const emblaRef = useRef(null);
      const [embla, setEmbla] = useState(null);

      useEffect(() => {
        const emblaInstance = EmblaCarousel(emblaRef.current, { loop: true });
        setEmbla(emblaInstance);
        return () => emblaInstance && emblaInstance.destroy();
      }, []);

      //...
    };
    ```

6. **Create Navigation Buttons and Thumbnails**
    - Create Previous and Next navigation buttons.
    - Define a `scrollPrev` and `scrollNext` function to handle carousel navigation.
    - Create a thumbnails section below the main carousel.
    ```jsx
    const scrollPrev = () => embla && embla.scrollPrev();
    const scrollNext = () => embla && embla.scrollNext();

    return (
      <div className="carousel-container relative flex flex-col items-center">
        {/* Carousel and Navigation Buttons */}
        <div className="carousel relative">
          <button onClick={scrollPrev} className="prevButton ...">Prev</button>
          <div ref={emblaRef} className="embla">...</div>
          <button onClick={scrollNext} className="nextButton ...">Next</button>
        </div>
        {/* Thumbnails */}
        <div className="embla-thumbnail flex flex-row mt-4 justify-center w-full">
          {slides.map((slide, index) => (
            <div key={index} className="thumbnail cursor-pointer" onClick={() => embla && embla.scrollTo(index)}>...</div>
          ))}
        </div>
      </div>
    );
    ```

7. **Style Your Carousel**
    - Create an `embla.css` file in the `styles` directory to add custom styling to your carousel.
    - Import this CSS file in your `ThumbnailCarousel` component as shown in step 4.

8. **Test Your Carousel**
    - Import your `ThumbnailCarousel` component into `pages/index.js` and render it within your page component to see the carousel in action.

## Custom Features

- **Thumbnail Interaction**: The thumbnails below the main carousel interact with it. Clicking a thumbnail navigates the main carousel to the respective slide.
- **Tailwindcss Styling**: Added some custom styling using Tailwind to enhance the look of the carousel and navigation buttons.

## Conclusion

This project showcases a simple yet elegant carousel setup with Embla Carousel in a Next.js environment using next/image to optimize images and TailwindCSS for styling. Feel free to clone this repository, explore the code, and extend it to fit your needs.

---

For more information about Embla Carousel, visit the [official documentation](https://davidcetinkaya.github.io/embla-carousel/).

For more information about Next.js, visit the [official documentation](https://nextjs.org/docs).

For more information about TailwindCSS, visit the [official documentation](https://tailwindcss.com/docs).