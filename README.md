---
## 💫 Project Overview

This project uses the [Star Wars API (SWAPI)](https://swapi.dev/) to fetch character data.
For images, it utilizes [Picsum Photos](https://picsum.photos/) to generate unique placeholders, since SWAPI doesn’t provide character images (maybe some creative “jugad” for that in the future 😄).
---

## 🌟 Features Implemented

-   **Server and Client Components:**  
    Server-side components ensure faster load times and better SEO, while client-side components handle dynamic behaviors like image loaders.

-   **Unique Character Backgrounds:**  
    A hash-based color generator assigns a consistent and unique background color to each character. Picsum’s seeded URLs ensure every character image remains consistently unique.

-   **Character Search:**  
    A client-side search input enables partial name matching to quickly find specific characters.

-   **Pagination:**  
    Fully functional pagination with first, last, previous, and next controls, displaying total page counts based on results.

-   **Responsive Design:**  
    Optimized layouts for mobile, tablet, and desktop screens.

-   **Error Handling:**  
    Graceful handling of errors and redirects to a custom Not Found page.

---

## ⚙️ Design Choices & Trade-offs

-   Decided to use server-side rendering for better performance and caching at scale.
-   Used placeholder images to maintain visual consistency while API limitations exist.
-   Chose Tailwind CSS for clean, responsive styling and faster UI iteration.
-   Implemented pagination logic for clarity and better navigation.

---

Thanks for checking out this project! May the Force be with you ⚡
