function sortProjects() {
    projects.sort((a, b) => {
        if (a.priority === undefined && b.priority === undefined) {
            return 0;
        }
        if (a.priority === undefined) {
            return 1;
        }
        if (b.priority === undefined) {
            return -1;
        }
        if (a.priority < b.priority) {
            return -1;
        }
        if (a.priority > b.priority) {
            return 1;
        }
        return 0;
    });
}

function createProject(project) {
    const projectHTML = `
        <li class="project">
            <header>
                <span class="material-symbols-outlined">
                    ${project.icon}
                </span> 
                <h2>
                    ${project.name}
                </h2>

            </header>
            <nav>
                <a href="${project.githubLink}" class="githubLink">
                    Github
                </a>
                <a href="${project.websiteLink}" class="websiteLink">
                    Website
                </a>
            </nav>
        </li>
    `;
    return projectHTML;
}

function populateProjects() {
    const mainDiv = document.getElementById('main');
    const categorizedProjects = {};

    projects.forEach(project => {
        const categories = project.category || ['Others'];
        categories.forEach(category => {
            category = category.trim();
            category = category.toLowerCase();
            if (!categorizedProjects[category]) {
                categorizedProjects[category] = [];
            }
            categorizedProjects[category].push(project);
        });
    });

    const sortedCategories = Object.keys(categorizedProjects).sort((a, b) => {
        if (a === 'others') return 1;
        if (b === 'others') return -1;
        return a.localeCompare(b);
    });

    mainDiv.innerHTML = sortedCategories.map(category => `
        <section class="category">
            <h1>${category}</h1>
            <hr />
            <ul>
                ${categorizedProjects[category].map(project => createProject(project)).join('')}
            </ul>
        </section>
    `).join('');
}

sortProjects();
populateProjects();
