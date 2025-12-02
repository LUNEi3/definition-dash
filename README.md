# Definition Dash

**Definition Dash** is a mobile-first web application designed to help users manage and review definitions or flashcard-style data. 

> **Current Status:** MVP (Minimum Viable Product) / Prototype  
> **Note:** This project is currently in active development for a class deadline. The current version is optimized strictly for **mobile views** and utilizes **URL parameters** for state management instead of a persistent database.

## Live Demo

You can try the live version of the application here:
 **[https://definition-dash-liart.vercel.app/](https://definition-dash-liart.vercel.app/)**

*(**Note:** As this is a mobile-first design, please view this link on a mobile device or use your browser's "Mobile View" / DevTools for the intended experience.)*
## Features (MVP)

* **Mobile-First Design:** The UI is specifically tailored for mobile screens to ensure a native-like experience on handheld devices.
* **Zero-Database Architecture (Current):** To meet immediate deadlines, all data passing between pages is handled via URL query parameters, ensuring fast navigation without backend latency.
* **Light Mode:** Clean and simple light-themed interface.
* **Next.js 14+:** Built using the latest Next.js App Router for server-side rendering and routing.

## Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Deployment:** [Vercel](https://vercel.com/) (Recommended)

## Known Limitations (MVP)

* **Mobile Only:** The application does not currently support desktop layouts. Please view on a mobile device or use your browser's "Mobile View" developer tool.
* **Data Persistence:** Refreshing the browser while not on a URL with query parameters may result in lost data.
* **No Authentication:** Sign-in and Sign-up features are UI-only or disabled.

## Roadmap & Future Plans

The following features are planned for post-deadline development to turn this MVP into a full-stack application:

- [ ] **Backend Integration:** Implement [Supabase](https://supabase.com/) for a real PostgreSQL database.
- [ ] **Authentication:** Add secure Sign-in/Sign-up flows (likely via Supabase Auth).
- [ ] **Responsive Design:** Expand UI to support Desktop and Tablet screens.
- [ ] **Theming:** Implement Dark Mode toggle.
- [ ] **State Management:** Move away from URL-based state to server-state (React Query) or global state.

## Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/LUNEi3/definition-dash.git](https://github.com/LUNEi3/definition-dash.git)
    cd definition-dash
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.
    * *Tip: Press `F12` and toggle the Device Toolbar (Ctrl+Shift+M) to view the app in Mobile mode.*

## Project Structure
```
app/
  ├── game/          # Main quiz gameplay interface
  ├── home/          # Landing page and menu components
  ├── leaderboard/   # Score summary (Placeholder for future Leaderboard)
  └── sign-in/       # Authentication and login UI
components/          # Reusable UI elements (buttons, cards, layout)
lib/                 # Utility functions and shared helpers
public/              # Static assets (images, icons, fonts)
```
## Contributing

This project is currently a closed assignment for **CS436**, but open-source contributions may be accepted in the future after the grading period.
