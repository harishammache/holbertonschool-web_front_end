<h1 align="center">Responsive design</h1>
<div align="center">
    <img src="./img/image.png">
</div>

## Objectifs d'apprentissage

À la fin de ce projet, vous serez capable d'expliquer à n'importe qui, sans l'aide de Google :

- Le concept de **design mobile-first**.
- L'utilisation des **media-queries**.
- Les tailles recommandées pour le **web design responsive**.
- Comment rendre un site web **responsive**.
- Les différences entre un design **responsive** et un design **adaptatif**.
- Les unités CSS utilisées pour rendre les éléments **flexibles**.

---

## Pré-requis

Pour ce projet, vous devez respecter les consignes suivantes :

- Utiliser des éditeurs autorisés : **vi**, **vim**, ou **emacs**.
- Créer un fichier `README.md` à la racine du répertoire du projet (obligatoire).
- S'assurer que le rendu HTML et CSS fonctionne sur **Google Chrome 78 ou plus**.
- Respecter le wireframe fourni pour la version mobile du projet Techium.

---

## Conception Mobile-First

Le design mobile-first consiste à :

1. **Prioriser l'expérience mobile** : Concevez pour les écrans les plus petits d'abord.
2. **Étendre la conception pour les écrans plus larges** : Utilisez des media-queries pour adapter la mise en page.

## Unités CSS pour la Flexibilité

Voici quelques unités courantes utilisées pour rendre les éléments flexibles :

- **%** : Basé sur la taille de l'élément parent.
- **em** et **rem** : Basé sur la taille de la police.
- **vh** et **vw** : Basé sur la hauteur et la largeur de la fenêtre.
- **fr** : Unité spécifique pour le modèle de grille CSS.

### Media-Queries

Les media-queries permettent de cibler différents appareils en fonction de leur largeur d'écran. Exemple :

```css
@media (min-width: 768px) {
  /* Styles pour les tablettes et plus */
}

@media (min-width: 1024px) {
  /* Styles pour les écrans larges */
}
```

## Auteur

Projet réalisé par Hammache Haris dans le cadre de la maîtrise des concepts de design responsive.