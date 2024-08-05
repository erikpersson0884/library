
const mainDiv = document.getElementById('main');


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
        "icon": "description",
        "languages": ["HTML", "CSS", "Javascript", "Node.js"]
    }
]


mainDiv.innerHTML = `
    ${projects.map(project => `
        <li class="project">
            <h2>${project.name}</h2>

            <nav>
                <a href="${project.githubLink}" class="githubLink">
                    Github
                </a>
                <a href="${project.websiteLink}" class="websiteLink">
                    Website
                </a>
            </nav>
        </li>
    `).join('')}
`;
    