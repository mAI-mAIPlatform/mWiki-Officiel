document.addEventListener("DOMContentLoaded", () => {
    const docContent = document.getElementById("doc-content");
    const links = document.querySelectorAll("nav a");

    // 1. Gestion des clics dans la sidebar pour charger le contenu (Simulation)
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const docId = link.getAttribute("data-doc");
            
            // Plus tard, on fetchera de vrais fichiers .md ici
            docContent.innerHTML = `
                <h1>Chargement de ${docId}... ⏳</h1>
                <p>Bientôt, le contenu markdown de <b>${docId}</b> s'affichera ici avec une belle mise en forme.</p>
            `;
            
            // Effet visuel de sélection
            links.forEach(l => l.style.background = "transparent");
            link.style.background = "rgba(255, 255, 255, 0.1)";
        });
    });

    // 2. Raccourci clavier Ctrl+K / Cmd+K pour la recherche
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            alert("🚀 Ouverture du module de recherche éclair mSearch...");
            // Logique de la modale de recherche à implémenter plus tard
        }
    });

    // Clic manuel sur la barre de recherche
    document.getElementById("searchTrigger").addEventListener("click", () => {
        alert("🚀 Ouverture du module de recherche...");
    });
});
