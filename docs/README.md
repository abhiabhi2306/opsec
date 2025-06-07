
# OPSEC Research Group Website

A simple, static website for the Operational Security (OPSEC) Research Group, designed for hosting on GitHub Pages.

## About

This website showcases the research activities, team members, publications, and contact information for the OPSEC Research Group, which focuses on offensive security and product security research.

## Features

- **Responsive Design**: Works on all devices and screen sizes
- **Dark Theme**: Modern cybersecurity-themed design
- **Single Page Application**: All content on one page with smooth scrolling navigation
- **Static HTML/CSS/JS**: No build process required, ready for GitHub Pages
- **Sections Include**:
  - Hero/Landing section
  - Research areas overview
  - Team member profiles
  - Publications list
  - Contact form and information
  - Footer with links

## Hosting on GitHub Pages

To host this website on GitHub Pages:

1. **Upload to GitHub**:
   - Create a new repository on GitHub
   - Upload the `docs/index.html` file to your repository
   - Make sure the file is in the root directory or in a `docs/` folder

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" or "/docs" folder
   - Click "Save"

3. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - GitHub will provide the exact URL in the Pages settings

## Customization

### Content Updates
- Edit the HTML directly to update text, team members, publications, etc.
- Replace image URLs in the team section with your own images
- Update contact information in the contact section

### Styling Changes
- All CSS is embedded in the `<style>` section of the HTML file
- Modify CSS variables at the top of the styles for color scheme changes
- Add new sections by copying existing HTML structure

### Adding Functionality
- Simple JavaScript is included for smooth scrolling and form handling
- Add more interactive features in the `<script>` section at the bottom

## File Structure

```
docs/
├── index.html          # Main website file
└── README.md          # This documentation
```

## Browser Support

This website uses modern web standards and is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is open source and available for modification and use.
