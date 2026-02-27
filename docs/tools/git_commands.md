# 🐙 Git & GitHub : L'Antisèche Ultime

Oublie la panique quand tu fais une erreur de commit. Voici les commandes essentielles pour gérer ton code comme un pro, du local jusqu'au repo GitHub.



## 🚀 Les Bases (Le Workflow Quotidien)
C'est ce que tu vas utiliser 99% du temps pour sauvegarder ton taff.

* `git status` : Le radar. Te dit quels fichiers ont été modifiés. Toujours faire ça avant d'agir.
* `git add .` : Ajoute **tous** tes fichiers modifiés dans le "panier" (staging area) prêt à être validé.
* `git commit -m "feat: ajout du liquid glass"` : Valide ton panier avec un message clair. (Utilise des préfixes comme `feat:`, `fix:`, `docs:` pour rester clean).
* `git push` : Envoie tout sur GitHub. Boom, c'est en ligne. 🌐

## 🌿 Les Branches (Pour tester sans tout casser)
Ne code jamais une nouvelle grosse feature directement sur le `main`. 

* `git branch nom-de-ta-branche` : Crée une nouvelle dimension parallèle pour ton code.
* `git checkout nom-de-ta-branche` (ou `git switch`) : Te téléporte sur cette branche.
* `git checkout -b nouvelle-feature` : Le raccourci ultime. Crée la branche ET te met dessus direct.

## 🚑 Sauvetage d'Urgence (Oups, j'ai fait une boulette)
* `git log` : Affiche l'historique de tes commits pour retrouver où ça a foiré.
* `git reset HEAD~1` : Annule ton dernier commit (mais garde tes fichiers modifiés). Parfait si tu as oublié un truc.
* `git stash` : Met tes modifications actuelles de côté (dans un tiroir) si tu dois changer de branche en urgence sans commit. `git stash pop` pour les récupérer plus tard.
