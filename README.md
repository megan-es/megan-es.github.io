# Data Science Portfolio Website

This is my personal portfolio website built with React and TailwindCSS to showcase my data science projects, skills, and professional experience. I created this site from scratch to highlight my work and provide a central hub for my professional presence online.

![Portfolio Preview](https://via.placeholder.com/1200x630?text=Portfolio+Website+Preview)

## About This Project

I wanted to create a clean, modern website that would showcase my data science work effectively. Some key features I implemented:

- Responsive design that works well on mobile, tablet, and desktop
- Dark/light mode toggle with saved preferences
- Animated transitions using Framer Motion
- Project carousel for my data science portfolio
- Simple navigation with smooth scrolling
- Contact section with links to my professional profiles

## Tech I Used

I built this site with:

- React for the frontend
- TailwindCSS for styling
- Framer Motion for animations
- Swiper for the project carousel
- React Scroll for smooth navigation
- Vite as the build tool
- GitHub Pages for hosting

## Running This Project Locally

If you want to check out how I built this or use it as a template:

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## How It's Organized

The project has a pretty straightforward structure:

```
portfolio-site/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # React components
│   │   ├── About.jsx   # About section with my skills and experience
│   │   ├── Contact.jsx # Contact info and links
│   │   ├── Footer.jsx  # Page footer
│   │   ├── Hero.jsx    # Main landing section
│   │   ├── Navbar.jsx  # Navigation
│   │   └── Projects.jsx # My data science projects
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── styles.css      # Custom styles
│   └── index.css       # TailwindCSS imports
├── tailwind.config.js  # Theme settings
└── package.json        # Dependencies and scripts
```

## Customizing the Theme

I chose a clean, professional color scheme, but you can easily change the colors in `tailwind.config.js`:

```javascript
colors: {
  primary: "#6c757d",
  secondary: "#343a40",
  accent: "#495057",
  light: "#f8f9fa",
  dark: "#212529",
}
```

## Deployment to GitHub Pages

I deployed this site to GitHub Pages. Here's how I did it:

1. First, I made sure my GitHub repository was set up

2. I updated the `homepage` field in `package.json` to my domain:
   ```json
   "homepage": "https://datawithmegan.com"
   ```

3. Then deployed it with:
   ```bash
   npm run deploy
   ```

## Setting Up My Custom Domain

I bought a domain and connected it to GitHub Pages:

1. In my GitHub repo settings under Pages, I added my custom domain

2. For the DNS settings at my domain registrar, I added these A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. I also added a CNAME file in the public directory with my domain name to make it persist between deployments

## Resources and Inspiration

Some resources I found helpful when building this:
- [React docs](https://reactjs.org/)
- [TailwindCSS documentation](https://tailwindcss.com/)
- [Framer Motion examples](https://www.framer.com/motion/)
- [GitHub Pages docs](https://pages.github.com/)

---

**Note:** If you're forking this repo, make sure to update the content with your own information!

---

Built by [Megan Smith](https://github.com/megan-es)