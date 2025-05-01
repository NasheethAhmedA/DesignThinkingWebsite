# Design Thinking Club Website

This project is a modular and scalable website for the "Design Thinking Club", built with React.js. It has been set up with a clean separation for each page/module to allow different coordinators to independently develop their sections.

## Project Structure

```
design-thinking-club/
├── backend/           # Empty folder for future backend implementation
├── frontend/
│   ├── assets/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Carousel.tsx
│   │   ├── layouts/       
│   │   │   └── MasterLayout.tsx  # Main layout structure
│   │   ├── pages/         # Individual page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Showcase.tsx
│   │   │   └── JoinUs.tsx
│   │   ├── App.tsx        # Main app component with routing
│   │   ├── main.tsx       # Entry point
│   ├── package.json
│   ├── index.html
├── .gitignore
└── README.md
```

## Features

- **Master Layout**: Consistent navigation and footer across all pages
- **Home Page**: Feature carousel and dashboard grid
- **About Page**: Club mission, vision, values, and team
- **Events Page**: Upcoming and past events listings
- **Contact Page**: Contact information and contact form
- **Join Us Page**: Membership information and application process

## Getting Started

1. Clone the repository to your local machine with the correct branch. { use Github Desktop }
2. if node.js is not installed then install it through [here](https://nodejs.org/en/download)
3. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Development Workflow

This project is set up to enable multiple coordinators to work on different parts of the website independently:

1. Each page is contained in its own file under `src/pages/`
2. Shared components are in the `src/components/` directory
3. The overall layout is defined in `src/layouts/MasterLayout.tsx`

## Technologies Used

- React.js
- React Router for navigation
- Tailwind CSS for styling
- TypeScript for type safety
- Vite for build tooling