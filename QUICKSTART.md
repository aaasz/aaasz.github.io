# Quick Start Guide

## Adding Your First Research Paper

1. Open `data/papers.json`
2. Replace the example with your paper:

```json
[
  {
    "title": "Your Paper Title Here",
    "authors": "Your Name, Collaborator Name",
    "venue": "Conference Name 2024",
    "year": "2024",
    "abstract": "A brief summary of your research...",
    "pdf": "https://link-to-your-pdf.com/paper.pdf"
  }
]
```

3. Save the file - done! The website will automatically display it.

## Adding Multiple Papers

Just add more objects to the array:

```json
[
  {
    "title": "First Paper",
    "authors": "Author 1, Author 2",
    "venue": "Conference A",
    "year": "2024",
    "abstract": "First paper abstract..."
  },
  {
    "title": "Second Paper",
    "authors": "Author 1, Author 3",
    "venue": "Conference B",
    "year": "2023",
    "abstract": "Second paper abstract..."
  }
]
```

## Customizing Colors

Edit `styles.css` and change the variables at the top:

```css
:root {
    --primary-color: #2c3e50;     /* Main dark color */
    --secondary-color: #3498db;   /* Accent color (links, highlights) */
    --background-color: #f8f9fa;  /* Page background */
}
```

## Changing Your Name and Title

Edit `index.html`:

```html
<h1>Your Name</h1>
<p class="subtitle">Your Title/Role</p>
```

## Testing Locally

Open a terminal in the project folder and run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Publishing

Once you're happy with your changes:

1. Commit your changes
2. Push to the `main` branch
3. Your site will be live at `https://aaasz.github.io`

GitHub Pages may take a few minutes to update.
