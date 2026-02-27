# 🚀 DevOps : Déploiement 100% Automatisé

Le but ? Tu push ton code sur GitHub, et boom, c'est en ligne sur Vercel en 30 secondes sans rien toucher. L'automatisation, c'est la clé pour scaler tes projets (comme mSearch ou mAINews) sans te prendre la tête.

## ⚡ Vercel : L'Hébergement Magique
Vercel est fait pour les frameworks modernes. C'est le cheat code du déploiement.
1. **Connecte ton GitHub :** Sur Vercel, tu link ton compte GitHub.
2. **Importe ton repo :** Tu choisis le repo `mWiki`.
3. **Déploie :** Vercel détecte automatiquement tes paramètres. À chaque `git push` sur la branche `main`, Vercel re-build ton site instantanément.
* **Le bonus :** Vercel te donne des "Preview Deployments". Si tu push sur une branche annexe, ça te crée une URL temporaire pour tester avant de mettre en prod.

## 🤖 GitHub Actions : Ton Robot Personnel
Les Actions te permettent d'exécuter des scripts automatiquement sur les serveurs de GitHub. Parfait pour tester ton code avant de le déployer.

**Exemple de workflow de base (`.github/workflows/main.yml`) :**
Ce fichier dit à GitHub : "Dès qu'il y a un push, lance ce job".

```yaml
name: Check mWiki CI
on: [push] # Se déclenche à chaque push

jobs:
  build:
    runs-on: ubuntu-latest # Le serveur virtuel
    steps:
      - uses: actions/checkout@v3 # Récupère ton code
      - name: Say Hello
        run: echo "🚀 Lancement des vérifications pour le mWiki !"
      # Ici tu pourrais ajouter des tests pour mAI ou tes scripts
