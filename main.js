document.addEventListener("DOMContentLoaded", () => {
    const docContent = document.getElementById("doc-content");
    const links = document.querySelectorAll("nav a");

    // =========================================
    // 📄 FETCH MARKDOWN : CHARGEMENT DES DOCS
    // =========================================
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

    links.forEach(link => {
        link.addEventListener("click", async (e) => {
            e.preventDefault();
            const docId = link.getAttribute("data-doc");
            const filePath = docPaths[docId];

            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            docContent.innerHTML = `<h2 style="color: #64748b; margin-top: 50px; text-align: center;">⚡ Chargement de ${docId}...</h2>`;

            try {
                const response = await fetch(`${filePath}?v=${new Date().getTime()}`);
                if (!response.ok) throw new Error(`Code ${response.status}`);
                
                const markdownText = await response.text();
                docContent.innerHTML = marked.parse(markdownText);
            } catch (error) {
                docContent.innerHTML = `
                    <h1 style="color: #ef4444;">❌ Fichier Introuvable</h1>
                    <p>Impossible de charger : <code>${filePath}</code></p>
                    <p>Vérifie que le fichier <b>${docId}.md</b> existe.</p>
                `;
            }
        });
    });

    // =========================================
    // 🔍 MOTEUR mSEARCH : LOGIQUE DE RECHERCHE
    // =========================================
    const searchData = [
        { id: "openai", title: "Écosystème OpenAI", tags: ["ia", "chatgpt", "sora", "atlas", "prompt"] },
        { id: "mai_specs", title: "mAI Spécifications", tags: ["ia", "architecture", "system prompt", "json"] },
        { id: "cookai_algo", title: "Algo CookAI", tags: ["ia", "recettes", "algo", "food"] },
        { id: "mos_architecture", title: "mOS Architecture", tags: ["os", "design", "ui", "systeme"] },
        { id: "gaming_simulations", title: "Gaming & Simu", tags: ["jeux", "fps", "simulation", "json"] },
        { id: "brevet_easy", title: "Brevet' Easy", tags: ["ecole", "revision", "quiz", "gamification"] },
        { id: "python_basics", title: "Python Basics", tags: ["dev", "code", "backend", "script"] },
        { id: "javascript_tips", title: "JavaScript & JSON", tags: ["dev", "code", "frontend", "web"] },
        { id: "design_liquid_glass", title: "Design Liquid Glass", tags: ["css", "ui", "style", "glassmorphism"] },
        { id: "vscode_setup", title: "VS Code Setup", tags: ["outils", "ide", "extensions", "theme"] },
        { id: "git_commands", title: "Git Commands", tags: ["devops", "github", "commit", "push"] },
        { id: "powershell", title: "PowerShell CLI", tags: ["terminal", "commandes", "windows"] },
        { id: "masterclass_yml", title: "Masterclass YAML", tags: ["devops", "config", "actions"] },
        { id: "vercel_actions", title: "Vercel & Actions", tags: ["devops", "deploiement", "hebergement", "ci/cd"] },
        { id: "github_pages", title: "GitHub Pages", tags: ["devops", "hebergement", "statique"] },
        { id: "faq_bugs", title: "FAQ & Bugs", tags: ["support", "aide", "erreur", "crash"] }
    ];

    const modal = document.getElementById("msearch-modal");
    const searchInput = document.getElementById("msearch-input");
    const resultsContainer = document.getElementById("msearch-results");

    const toggleSearch = (show) => {
        if (show) {
            modal.classList.remove("hidden");
            searchInput.value = "";
            resultsContainer.innerHTML = "";
            setTimeout(() => searchInput.focus(), 10);
        } else {
            modal.classList.add("hidden");
            searchInput.blur();
        }
    };

    // Raccourcis claviers & Clics
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            toggleSearch(true);
        }
        if (e.key === "Escape" && !modal.classList.contains("hidden")) toggleSearch(false);
    });

    document.getElementById("searchTrigger").addEventListener("click", () => toggleSearch(true));
    modal.addEventListener("click", (e) => { if (e.target === modal) toggleSearch(false); });

    // Filtrage dynamique
    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase().trim();
        resultsContainer.innerHTML = "";

        if (!term) return;

        const filteredDocs = searchData.filter(doc => 
            doc.title.toLowerCase().includes(term) || 
            doc.tags.some(tag => tag.includes(term))
        );

        if (filteredDocs.length === 0) {
            resultsContainer.innerHTML = `<div class="result-item" style="text-align:center; color:#64748b;">Aucun résultat trouvé 🥲</div>`;
            return;
        }

        filteredDocs.forEach(doc => {
            const div = document.createElement("div");
            div.className = "result-item";
            div.innerHTML = `
                <div class="result-title">${doc.title}</div>
                <div class="result-tags">#${doc.tags.join(" #")}</div>
            `;
            
            div.addEventListener("click", () => {
                toggleSearch(false);
                const targetLink = document.querySelector(`nav a[data-doc="${doc.id}"]`);
                if (targetLink) targetLink.click();
            });

            resultsContainer.appendChild(div);
        });
    });
});
