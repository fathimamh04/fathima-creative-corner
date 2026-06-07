async function loadBlogs() {

    const response =
        await fetch("data/blog.json");

    const blogs =
        await response.json();

    const container =
        document.getElementById("blogContainer");

    if (!container) return;

    blogs.forEach(blog => {

        container.innerHTML += `

        <div class="blog-card">

            <img
                src="${blog.image.replace('../','')}"
                alt="${blog.title}">

            <div class="blog-content">

                <span class="blog-date">

                    ${blog.date}

                </span>

                <h3>

                    ${blog.title}

                </h3>

                <p>

                    ${blog.description}

                </p>

                <a href="${blog.link.replace('../','')}"
                   class="read-more">

                    Read More →

                </a>

            </div>

        </div>

        `;

    });

}

loadBlogs();