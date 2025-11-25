// *** ACCORDEON ***

const summaries = document.querySelectorAll(".accordeon summary");

summaries.forEach(summary => {
    summary.addEventListener("click", (event) => {
        const accordeon = document.querySelector(".accordeon");
        accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
    })
})

