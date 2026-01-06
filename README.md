# Resume Website

A modern, responsive resume website built with React, Vite, React Router, and Tailwind CSS.

## Features

- 🏠 Home page with introduction
- 📄 Resume page with experience, education, skills, and certifications
- 💼 Projects showcase page
- 📧 Contact page with form
- 🎨 Styled with Tailwind CSS
- 🚀 Fast development with Vite
- 🔄 Client-side routing with React Router

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 16 or higher recommended).

### Installation

1. Open PowerShell and navigate to the project directory:

```powershell
cd "C:\Users\navgurukul\OneDrive\Desktop\Resume"
```

2. Install dependencies:

```powershell
npm install
```

### Running the Development Server

Start the development server:

```powershell
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

To create a production build:

```powershell
npm run build
```

To preview the production build locally:

```powershell
npm run preview
```

## Customization

### Update Your Personal Information

1. **Navigation & Name**: Edit `src/components/Nav.jsx` to update your name in the header
2. **Home Page**: Edit `src/pages/Home.jsx` to add your introduction and tagline
3. **Resume**: Edit `src/pages/Resume.jsx` to add your experience, education, and skills
4. **Projects**: Edit `src/pages/Projects.jsx` to showcase your projects
5. **Contact**: Edit `src/pages/Contact.jsx` to update your contact information

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify `tailwind.config.cjs` to customize the theme
- Edit component classes directly in the JSX files
- Add custom CSS in `src/index.css`

## Project Structure

```
Resume/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   └── Nav.jsx      # Navigation component
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Resume.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.cjs  # Tailwind configuration
```

## Technologies Used

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing

## License

This project is open source and available for personal use.
