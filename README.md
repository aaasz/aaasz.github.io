# aaasz.github.io
Adriana Szekeres's personal website

## Overview

This is a personal website that automatically displays:
- **Research Papers**: Maintained through a simple JSON file
- **GitHub Projects**: Automatically fetched from GitHub API

## How to Maintain

### Adding/Editing Research Papers

Simply edit the `data/papers.json` file. Each paper should have the following structure:

```json
{
  "title": "Your Paper Title",
  "authors": "First Author, Second Author, Third Author",
  "venue": "Conference or Journal Name",
  "year": "2024",
  "abstract": "Brief description of your research",
  "pdf": "https://link-to-pdf.com/paper.pdf",
  "doi": "10.1234/your.doi",
  "url": "https://alternative-link.com"
}
```

**Required fields:**
- `title`: The paper title

**Optional fields:**
- `authors`: List of authors
- `venue`: Where the paper was published
- `year`: Publication year
- `abstract`: Brief summary
- `pdf`: Link to PDF file
- `doi`: DOI identifier
- `url`: Alternative link to the paper

### GitHub Projects

GitHub projects are automatically fetched from your GitHub account (`aaasz`). No manual maintenance required! The website will:
- Show your non-forked repositories
- Sort them by stars
- Display the 10 most recently updated projects
- Show description, language, stars, and forks

### Customization

**To change the GitHub username:**
Edit `app.js` and change the username on line 46:
```javascript
const username = 'aaasz'; // Change this to your GitHub username
```

**To customize the appearance:**
Edit `styles.css` to change colors, fonts, or layout.

**To modify the content:**
Edit `index.html` to change the structure or add new sections.

## Local Testing

To test the website locally, you need a local web server (JavaScript modules and fetch API require HTTP/HTTPS):

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node.js
npx http-server

# Or using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

This website is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be live at:
`https://aaasz.github.io`

## File Structure

```
aaasz.github.io/
├── index.html          # Main HTML structure
├── styles.css          # Styling
├── app.js             # JavaScript for dynamic content
├── data/
│   └── papers.json    # Research papers data (easy to edit!)
└── README.md          # This file
```

## Features

✅ **Easy to Maintain**: Just edit a JSON file to update papers  
✅ **Automatic GitHub Integration**: Projects fetched automatically  
✅ **Responsive Design**: Works on desktop, tablet, and mobile  
✅ **Modern Look**: Clean, professional design  
✅ **No Build Step**: Pure HTML/CSS/JS - no compilation needed
