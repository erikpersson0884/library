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
            <h2>
                <span class="material-symbols-outlined">
                    ${project.icon}
                </span> 
                ${project.name}
            </h2>



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

    mainDiv.innerHTML = `
        ${projects.map(project => createProject(project)).join('')}
    `;
}

sortProjects();
populateProjects();
