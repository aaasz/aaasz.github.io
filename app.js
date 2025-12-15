// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Load research papers from JSON file
async function loadPapers() {
    const papersContainer = document.getElementById('papers-list');
    
    try {
        const response = await fetch('data/papers.json');
        if (!response.ok) {
            throw new Error('Failed to load papers');
        }
        
        const papers = await response.json();
        
        if (papers.length === 0) {
            papersContainer.innerHTML = '<p class="loading">No research papers found. Add papers to data/papers.json</p>';
            return;
        }
        
        papersContainer.innerHTML = papers.map(paper => `
            <div class="card">
                <h3>${paper.title}</h3>
                ${paper.authors ? `<p class="authors">${paper.authors}</p>` : ''}
                ${paper.venue ? `<p class="venue">${paper.venue}</p>` : ''}
                ${paper.year ? `<span class="year">${paper.year}</span>` : ''}
                ${paper.abstract ? `<p>${paper.abstract}</p>` : ''}
                ${paper.pdf || paper.doi || paper.url ? `
                    <div style="margin-top: 15px;">
                        ${paper.pdf ? `<a href="${paper.pdf}" target="_blank">PDF</a>` : ''}
                        ${paper.doi ? `<a href="https://doi.org/${paper.doi}" target="_blank">DOI</a>` : ''}
                        ${paper.url ? `<a href="${paper.url}" target="_blank">Link</a>` : ''}
                    </div>
                ` : ''}
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading papers:', error);
        papersContainer.innerHTML = `
            <div class="error">
                <p><strong>Note:</strong> No research papers data file found. Create a <code>data/papers.json</code> file to add your papers.</p>
                <p style="margin-top: 10px;">See the README for the file format.</p>
            </div>
        `;
    }
}

// Load GitHub projects
async function loadGitHubProjects() {
    const projectsContainer = document.getElementById('projects-list');
    const username = 'aaasz'; // GitHub username
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub projects');
        }
        
        const projects = await response.json();
        
        // Filter out forked repos and sort by stars
        const ownProjects = projects
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        if (ownProjects.length === 0) {
            projectsContainer.innerHTML = '<p class="loading">No GitHub projects found.</p>';
            return;
        }
        
        projectsContainer.innerHTML = ownProjects.map(project => `
            <div class="card">
                <h3>
                    <a href="${project.html_url}" target="_blank">${project.name}</a>
                </h3>
                <p>${project.description || 'No description available'}</p>
                <div class="meta">
                    ${project.language ? `<span>📝 ${project.language}</span>` : ''}
                    <span>⭐ ${project.stargazers_count}</span>
                    <span>🔱 ${project.forks_count}</span>
                </div>
                ${project.topics && project.topics.length > 0 ? `
                    <div class="tags">
                        ${project.topics.map(topic => `<span class="tag">${topic}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        projectsContainer.innerHTML = `
            <div class="error">
                <p><strong>Error:</strong> Failed to load GitHub projects. This might be due to API rate limits.</p>
            </div>
        `;
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadPapers();
    loadGitHubProjects();
});
