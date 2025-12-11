# 📚 PORTFOLIO BTS SIO - Guide d'utilisation

Bienvenue ! Ce portfolio a été créé pour vous, étudiant(e) en BTS SIO. Voici tout ce que vous devez savoir pour le personnaliser et le rendre unique.

## 📋 Structure des fichiers

```
Chapitre 3/
├── index.html          (Fichier principal - À PERSONNALISER)
├── styles.css          (Fichiers de style - À PERSONNALISER si besoin)
├── script.js           (Fonctionnalités JavaScript - À COMPLÉTER)
├── CV.pdf              (À créer - Votre CV téléchargeable)
├── images/             (Dossier à créer - Pour vos images et logos)
│   ├── python.png
│   ├── html5.png
│   ├── css3.png
│   ├── javascript.png
│   ├── git.png
│   ├── visual-studio-code.png
│   ├── projet1.jpg
│   ├── projet2.jpg
│   └── ...
└── README.md           (Ce fichier)
```

## 🎨 Comment personnaliser le portfolio

### 1️⃣ Modifier les informations personnelles

Dans le fichier **index.html**, recherchez les commentaires **"À COMPLÉTER"** et remplacez :

- Votre nom (cherchez "Votre Nom")
- Votre présentation
- Vos coordonnées (email, téléphone, adresse)
- Vos réseaux sociaux (LinkedIn, GitHub, etc.)

### 2️⃣ Ajouter votre CV

1. Créez un fichier PDF de votre CV
2. Nommez-le **CV.pdf**
3. Placez-le dans le dossier `Chapitre 3/`
4. Le bouton "Télécharger mon CV" fonctionnera automatiquement

### 3️⃣ Ajouter vos images et logos

1. Créez un dossier **`images`** dans `Chapitre 3/`
2. Téléchargez ou créez les logos des langages que vous connaissez :
   - Python
   - HTML5
   - CSS3
   - JavaScript
   - Git
   - Visual Studio Code
   - Linux
   - SQL
   - Etc.

**Où télécharger des logos :**
- 🔗 [Devicon](https://devicon.dev/) - Logos de langages
- 🔗 [Simple Icons](https://simpleicons.org/) - Icônes minimalistes
- 🔗 [Font Awesome](https://fontawesome.com/) - Icônes gratuites

3. Placez également vos captures d'écran de projets : `projet1.jpg`, `projet2.jpg`, etc.

### 4️⃣ Compléter les sections du portfolio

#### Section "Qui suis-je ?"
- Écrivez une petite présentation (2-3 paragraphes)
- Ajoutez vos informations personnelles
- Listez vos intérêts professionnels

#### Section "Mes Compétences"
- Ajoutez les langages que vous connaissez
- Ajouter les outils que vous utilisez
- Indiquez votre niveau : Débutant / Intermédiaire / Avancé
- Écrivez une courte description de chaque compétence

**Exemple pour ajouter une nouvelle compétence :**
```html
<div class="skill-card">
    <img src="images/sql.png" alt="Logo SQL">
    <h4>SQL</h4>
    <p class="level">Niveau : Intermédiaire</p>
    <p class="description">Requêtes SELECT, INSERT, UPDATE, DELETE</p>
</div>
```

#### Section "Mes Formations"
- Ajoutez votre BTS SIO
- Ajoutez votre baccalauréat ou autre formation
- Pour chaque formation, indiquez : les dates, l'établissement, et une description

#### Section "Mes Expériences"
- Ajoutez vos stages
- Ajoutez les emplois que vous avez eu
- Décrivez vos responsabilités et ce que vous avez appris

#### Section "Mes Projets"
- Ajoutez chaque projet scolaire ou personnel
- Pour chaque projet : titre, description, technologies utilisées, lien
- Vous pouvez créer des sous-dossiers pour vos projets

**Exemple de structure pour un projet :**
```
Chapitre 3/
├── index.html
├── images/
└── projets/
    ├── projet1.html
    ├── projet1.css
    └── images-projet1/
```

#### Section "Certifications"
- Ajoutez PIX Écrit Plus
- Ajoutez vos certifications ANSII si vous en avez
- Ajoutez vos certifications CNIL
- Ajoutez d'autres certifications

#### Section "Veille Informatique"
- Listez les sujets que vous suivez
- Indiquez vos sources (blogs, sites, etc.)
- Expliquez pourquoi vous vous y intéressez

#### Section "Contact"
- Mettez à jour votre email
- Mettez à jour votre téléphone
- Complétez vos profils des réseaux sociaux

### 5️⃣ Configurer le formulaire de contact

Le formulaire de contact actuel n'envoie pas d'email. Vous avez plusieurs options :

**Option 1 : Utiliser FormSubmit.co (Facile)**
```html
<form action="https://formsubmit.co/votre-email@example.com" method="POST">
    <!-- Les champs du formulaire -->
</form>
```

**Option 2 : Utiliser EmailJS (Facile)**
- Consultez : https://www.emailjs.com/

**Option 3 : Utiliser un backend (Intermédiaire)**
- PHP, Node.js, Python, etc.

### 6️⃣ Modifier les couleurs

Dans le fichier **styles.css**, modifiez les variables couleurs (au début du fichier) :

```css
:root {
    --primary-color: #3498db;        /* Couleur principale */
    --secondary-color: #2ecc71;      /* Couleur secondaire */
    --dark-color: #2c3e50;           /* Couleur foncée */
    --light-color: #ecf0f1;          /* Couleur claire */
}
```

**Trouvez des couleurs harmonieuses :**
- 🎨 [Coolors.co](https://coolors.co/)
- 🎨 [Color-hex.com](https://www.color-hex.com/)

## 📱 Points importants

✅ **Responsive Design** : Le portfolio s'adapte automatiquement aux mobiles et tablettes
✅ **SEO-friendly** : Les balises sont sémantiques pour une meilleure indexation
✅ **Performance** : Les images doivent être optimisées (utilisez TinyPNG)
✅ **Accessibilité** : Les couleurs et textes sont lisibles

## 🚀 Pour tester votre portfolio

1. Ouvrez `index.html` dans votre navigateur
2. Ou utilisez Live Server (extension VS Code)
3. Vérifiez que tout fonctionne sur mobile et desktop

## 📝 Conseils pour un bon portfolio

1. **Mettez à jour régulièrement** - Ajoutez vos projets et certifications
2. **Soyez professionnel** - Pas de fautes, utilisez une bonne présentation
3. **Montrez vos projets** - Ajoutez des captures d'écran et des descriptions
4. **Expliquez votre parcours** - Dites pourquoi vous choisissez ce chemin
5. **Soyez authentique** - Parlez avec vos propres mots
6. **Hébergez-le en ligne** - GitHub Pages, Netlify, Vercel, etc.

## 🌐 Héberger votre portfolio gratuitement

### Option 1 : GitHub Pages
1. Créez un compte GitHub
2. Créez un repository `votre-username.github.io`
3. Poussez votre code avec Git
4. Votre site sera accessible à `https://votre-username.github.io`

### Option 2 : Netlify
1. Allez sur https://app.netlify.com
2. Connectez votre repository GitHub
3. Votre site sera déployé automatiquement

### Option 3 : Vercel
1. Allez sur https://vercel.com
2. Importez votre projet
3. Votre site sera en ligne en quelques secondes

## 🔧 Fonctionnalités JavaScript

Le fichier `script.js` inclut :
- ✅ Navigation fluide (smooth scroll)
- ✅ Activation automatique du lien actif
- ✅ Gestion du formulaire de contact
- ✅ Commentaires pour ajouter d'autres fonctionnalités

**Fonctionnalités à décommenter :**
- Animation au scroll
- Compteur d'animé
- Thème sombre/clair
- Chargement dynamique de projets

## ❓ Questions fréquentes

**Q: Comment ajouter plus de compétences ?**
A: Dupliquez un `<div class="skill-card">` et mettez à jour le contenu.

**Q: Comment changer la police d'écriture ?**
A: Dans styles.css, modifiez `font-family: 'Poppins', sans-serif;`

**Q: Comment ajouter plus de projets ?**
A: Dupliquez une `<div class="project-card">` et mettez à jour l'image et le texte.

**Q: Comment ajouter des animations ?**
A: Décommentez les sections "À COMPLÉTER" du JavaScript.

**Q: Comment partager mon portfolio ?**
A: Hébergez-le avec GitHub Pages, Netlify ou Vercel, puis partagez le lien.

## 🎓 Ressources utiles

- 📖 [MDN Web Docs](https://developer.mozilla.org/) - Documentation HTML/CSS/JS
- 🎨 [Google Fonts](https://fonts.google.com/) - Polices gratuites
- 🎭 [Font Awesome](https://fontawesome.com/) - Icônes gratuites
- 📸 [Pexels](https://www.pexels.com/) - Images gratuites
- 🚀 [Vercel](https://vercel.com/) - Hébergement gratuit

## 📞 Besoin d'aide ?

Si vous avez des questions :
- 📧 Contactez votre professeur
- 🔍 Cherchez sur Stack Overflow
- 💬 Posez des questions sur les forums de développement

---

**Bon courage pour votre portfolio ! 🚀**

Créé pour les étudiants en BTS SIO - 2024
