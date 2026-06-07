window.addEventListener("load", () => {

    const cards = document.querySelectorAll(

        ".about-card, .project-card, .blog-card, .certificate-card"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    cards.forEach(card => {

        observer.observe(card);

    });

});