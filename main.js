document.addEventListener("DOMContentLoaded", () => {
    const docContent = document.getElementById("doc-content");
    const links = document.querySelectorAll("nav a");

    // 🗺️ Arborescence exacte de tes fichiers Markdown
    const docPaths = {
        "openai": "docs/ia/openai.md",
        "mai_specs": "docs/ia/mai_specs.md",
        "cookai_algo": "docs/ia/cookai_algo.md",
        "mos_architecture": "docs/dev/mos_architecture.md",
        "gaming_simulations": "docs/dev/gaming_simulations.md",
        "brevet_easy": "docs/dev/brevet_easy.md",
        "python_basics": "docs/dev/python_basics.md",
        "javascript_tips": "docs/dev/javascript_tips.md",
        "design_liquid_glass": "docs/dev/design_liquid_glass.md",
        "vscode_setup": "docs/tools/vscode_setup.md",
        "git_commands": "docs/tools/git_commands.md",
        "powershell": "docs/tools/powershell.md",
        "masterclass_yml": "docs/devops/masterclass_yml.md",
        "vercel_actions": "docs/devops/vercel_actions.md",
        "github_pages": "docs/devops/github_pages.md",
        "faq_bugs": "docs/support/faq_bugs.md"
    };

    // ⚡ Logique de navigation
    links.forEach(link => {
        link.addEventListener("click", async (e) => {
            e.preventDefault();
            const docId = link.getAttribute("data-doc");
            const filePath = docPaths[docId];

            // 1. Reset visuel : Enlève la classe "active" partout, l'ajoute au bouton cliqué
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // 2. Écran de chargement propre
            docContent.innerHTML = `<h2 style="color: #64748b; margin-top: 50px; text-align: center;">⚡ Chargement de ${docId}...</h2>`;

            // 3. Fetch du fichier Markdown
            try {
                // Ajout d'un cache-buster (le ?v=...) pour éviter que le navigateur bloque les updates en local
                const response = await fetch(`${filePath}?v=${new Date().getTime()}`);
                if (!response.ok) throw new Error(`Code ${response.status}`);
                
                const markdownText = await response.text();
                
                // 4. Traduction MD -> HTML via marked.js
                docContent.innerHTML = marked.parse(markdownText);
            } catch (error) {
                // Gestion d'erreur stylée
                docContent.innerHTML = `
                    <h1 style="color: #ef4444;">❌ Fichier Introuvable</h1>
                    <p>Impossible de charger : <code>${filePath}</code></p>
                    <p>Vérifie que le fichier <b>${docId}.md</b> est bien créé dans le bon dossier.</p>
                `;
            }
        });
    });

    // 🔍 Module mSearch (Raccourci Clavier)
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            alert("🚀 Ouverture du module mSearch...");
        }
    });

    // 🔍 Clic manuel sur la barre de recherche
    document.getElementById("searchTrigger").addEventListener("click", () => {
        alert("🚀 Ouverture du module mSearch...");
    });
});
