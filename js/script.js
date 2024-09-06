const projects = [
    {
        "name": "List-App",
        "githubLink": "https://www.github.com/erikpersson0884/list-app",
        "websiteLink": "https://erikpersson0884.github.io/list-app/",
        "icon": "list",
        "languages": ["React", "CSS", "Typescript", "Node.js"]
    },
    {
        "name": "screenIT",
        "githubLink": "https://www.github.com/cthit/screenit",
        "websiteLink": "https://screenit.chalmers.it",
        "icon": "desktop_windows",
        "languages": ["HTML", "CSS", "Javascript", "Node.js"]
    },
    {
        "name": "FikIT",
        "githubLink": "https://www.github.com/erikpersson0884/fikit",
        "websiteLink": "https://fikit.chalmers.it",
        "icon": "cookie",
        "languages": ["HTML", "CSS", "Javascript", "Node.js"]
    },
    {
        "name": "ReadMe Generator",
        "githubLink": "https://www.github.com/erikpersson0884/readme-generator",
        "websiteLink": "https://erikpersson0884.github.io/readme-generator/",
        "icon": "article",
        "languages": ["HTML", "CSS", "Javascript"]
    },
    {
        "name": "Portfolio",
        "githubLink": "https://www.github.com/erikpersson0884/Portfolio",
        "websiteLink": "https://erikpersson0884.github.io/Portfolio/",
        "icon": "Work",
        "languages": ["React", "Typescript", "Node.js"]
    },
        {
        "name": "soundboardIT",
        "githubLink": "https://www.github.com/erikpersson0884/soundboardIT",
        "websiteLink": "https://erikpersson0884.github.io/soundboardIT/",
        "icon": "tune",
        "languages": ["html", "css", "javascript"]
    }

]
    
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

populateProjects();
