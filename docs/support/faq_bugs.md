# 🚑 Support & Troubleshooting : Zéro Panique

L'informatique, ça casse. C'est normal. Voici les fix ultra-rapides pour les bugs les plus fréquents de l'écosystème.

## 💥 Git : "Merge Conflict"
Tu as bossé sur deux PC différents et Git ne sait plus quelle version garder.
* **Le fix :** Ouvre VS Code. Il va te surligner les conflits en couleur. Clique sur `Accept Current Change` (garder ce que tu as là) ou `Accept Incoming Change` (garder ce qui vient de GitHub). Sauvegarde, `git add .`, et `git commit`.

## ❌ Vercel : "Build Failed"
Ton site ne se met pas à jour.
* **Le fix :** Check les logs sur le dashboard Vercel. 90% du temps, c'est une erreur de casse dans un chemin d'image (`MonImage.png` au lieu de `monimage.png`) ou un fichier manquant. Corrige sur VS Code et refais un `git push`.

## 🐍 Python : "ModuleNotFoundError"
Ton script mAI plante car il ne trouve pas une librairie (ex: OpenAI).
* **Le fix :** Tu as sûrement oublié d'activer ton environnement virtuel.
  1. `.\env\Scripts\activate`
  2. `pip install -r requirements.txt`

## 🎨 CSS : Le Liquid Glass ne marche pas
* **Le fix :** Vérifie que tu as bien mis une image ou des formes colorées en arrière-plan. Le `backdrop-filter: blur()` a besoin de contenu derrière lui pour créer l'effet de verre. Si le fond est noir uni, ça ne fera rien.
