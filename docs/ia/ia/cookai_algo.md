# 🍳 CookAI : Le Chef Intelligent

CookAI génère des recettes sur mesure selon ce qu'il reste dans le frigo et les préférences de l'utilisateur.

## ⚙️ La Logique de Génération
L'IA prend plusieurs paramètres en entrée (les *inputs*) :
1. **Ingrédients disponibles :** Ce que l'utilisateur a sous la main.
2. **Temps max :** Fast-food maison (15 min) ou plat élaboré (1h).
3. **Filtres stricts :** Le système est configuré pour exclure certains ingrédients selon les goûts. Par exemple, le mode "sans fromage" est super bien géré par l'algo pour proposer des alternatives crémeuses (lait de coco, crèmes végétales) sans perdre en goût.

## 📝 Le Format de Sortie (Output JSON)
Pour que l'app affiche la recette proprement, l'IA renvoie un JSON structuré :
```json
{
  "nom_plat": "Pâtes Crémeuses au Poulet",
  "temps_prep": "15 min",
  "ingredients": ["Pâtes", "Poulet", "Crème de soja", "Épices"],
  "etapes": [
    "Faire cuire les pâtes.",
    "Saisir le poulet avec les épices.",
    "Mélanger avec la crème hors du feu."
  ]
}
