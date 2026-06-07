async function loadProjects() {

    const response =
        await fetch("data/projects.json");

    const projects =
        await response.json();

    const container =
        document.getElementById("projectContainer");

    if (!container) return;

    projects.forEach(project => {

        container.innerHTML += `

        <div class="project-card">

            <img
                src="${project.image.replace('../','')}"
                alt="${project.title}">

            <div class="project-content">

                <h3>${project.title}</h3>

                <p>
                    ${project.description}
                </p>

                <div class="project-tech">

                    ${project.tech.map(
                        tech => `<span>${tech}</span>`
                    ).join("")}

                </div>

                <div class="project-links">

                    <a href="${project.github}"
                       target="_blank"
                       class="btn-primary">

                       GitHub

                    </a>

                    <a href="${project.demo}"
                       target="_blank"
                       class="btn-secondary">

                       Demo

                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

loadProjects();