# 🧠 mAI : Architecture & Spécifications

Ton propre système d'IA mérite une doc en béton. Voici comment structurer le cerveau de mAI pour qu'il soit ultra-performant et personnalisé.

## 🔌 L'Intégration API (Le pont de communication)
mAI ne vit pas dans le vide. Il a besoin d'un moteur pour réfléchir (via une API comme OpenAI, Google Gemini, ou un modèle local).
* **Le Endpoint :** L'URL où ton code envoie la question de l'utilisateur.
* **La Sécurité :** Cache ta clé d'API dans un fichier `.env`. Ne la push **jamais** sur GitHub en clair.

## 🎭 System Prompt (L'ADN de l'IA)
C'est ici que tu définis la personnalité de mAI. C'est la consigne invisible envoyée avant chaque discussion.
```json
{
  "role": "system",
  "content": "Tu es mAI, l'IA centrale du Hub Digital. Tu dois répondre de manière chill, claire et directe. Tu connais parfaitement mOS et mSearch. Tu tutoyes toujours l'utilisateur."
}
