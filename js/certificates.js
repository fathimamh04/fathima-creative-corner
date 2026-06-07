async function loadCertificates() {

    const response =
        await fetch("data/certificates.json");

    const certificates =
        await response.json();

    const container =
        document.getElementById(
            "certificateContainer"
        );

    if (!container) return;

    certificates.forEach(cert => {

        container.innerHTML += `

        <div class="certificate-card">

            <img
                src="${cert.image.replace('../','')}"
                alt="${cert.title}">

            <h3>

                ${cert.title}

            </h3>

        </div>

        `;

    });

}

loadCertificates();