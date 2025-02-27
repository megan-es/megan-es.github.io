# Data Science Portfolio Website

This is my personal portfolio website built with React and TailwindCSS to showcase my data science projects, skills, and professional experience. I created this site from scratch to highlight my work and provide a central hub for my professional presence online.

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

### Repository Naming

For GitHub Pages, I used a specific repository naming pattern:

- For a user site: `username.github.io` (e.g., `megan-es.github.io`)
- For a project site: `any-repo-name` (will be available at username.github.io/any-repo-name)

Using the username.github.io format gives you a cleaner URL and sets up your repository as a special GitHub Pages user site.

### Setting Up GitHub Pages Deployment

1. First, I made sure my GitHub repository was properly initialized with my code

2. I installed the gh-pages package to help with deployment:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Added deployment scripts to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Updated the `homepage` field in `package.json` to my domain:
   ```json
   "homepage": "https://datawithmegan.com"
   ```
   
   If using the default GitHub Pages domain instead of a custom domain, you would use:
   ```json
   "homepage": "https://username.github.io"
   ```

5. Made sure my Vite config was correctly set up in `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/'  // Use '/' for custom domains or '/repo-name/' for project sites
   })
   ```

### Deploying the Site

Whenever I want to deploy new changes:

1. I make sure all my changes are committed to my local git repository

2. Run the deploy command:
   ```bash
   npm run deploy
   ```

This does two things:
- The `predeploy` script runs first, building the site into the `dist` folder
- The `deploy` script then takes the contents of the `dist` folder and pushes them to a special branch called `gh-pages` on my GitHub repository

GitHub automatically serves the content from this branch as my site.

### What Happens Behind the Scenes

When you run `npm run deploy`:

1. The build process compiles all your React code into optimized static files
2. The gh-pages package creates or updates a branch called `gh-pages` in your repository
3. It pushes your compiled site to this branch
4. GitHub detects changes to this branch and updates your deployed site

This keeps your source code in the main branch while only deploying the compiled code to GitHub Pages.

## Setting Up My Custom Domain

I bought a domain and connected it to GitHub Pages:

1. In my GitHub repo settings under Settings > Pages, I added my custom domain (datawithmegan.com)

2. For the DNS settings at my domain registrar, I added these A records pointing to GitHub's servers:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. I also added a CNAME file in the public directory with just my domain name:
   ```
   datawithmegan.com
   ```
   
   This CNAME file is important as it persists your custom domain between deployments. Without it, GitHub might reset your custom domain settings when you deploy.

4. I checked the "Enforce HTTPS" option in the GitHub Pages settings for added security

## Troubleshooting

Some common issues I encountered:

- **Site not deploying**: Make sure your repository name matches the GitHub Pages pattern and the gh-pages package is installed
- **Blank page on deployment**: Check that the `base` path in vite.config.js is correct
- **Styling missing**: Verify that your build process is correctly processing CSS
- **Custom domain not working**: Ensure DNS records are correctly set up and propagated

## Resources and Inspiration

Some resources I found helpful when building this:
- [React docs](https://reactjs.org/)
- [TailwindCSS documentation](https://tailwindcss.com/)
- [Framer Motion examples](https://www.framer.com/motion/)
- [GitHub Pages docs](https://pages.github.com/)
- [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)

---

**Note:** If you're forking this repo, make sure to update the content with your own information!

---

Built by [Megan Smith](https://github.com/megan-es)