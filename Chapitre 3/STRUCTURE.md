# 📁 STRUCTURE DES FICHIERS - Portfolio BTS SIO

## Structure complète recommandée

```
Chapitre 3/
│
├── 📄 index.html                           ← FICHIER PRINCIPAL - Votre portfolio
├── 🎨 styles.css                           ← Fichier CSS - Design et couleurs
├── ⚙️ script.js                            ← Fichier JavaScript - Interactivité
│
├── 📋 README.md                            ← Guide d'utilisation
├── 📋 CHECKLIST.md                         ← Étapes à suivre pour personnaliser
├── 📋 CONSEILS-BONNES-PRATIQUES.md        ← Conseils pour réussir
├── 📋 EXEMPLES-TEXTES.md                  ← Exemples à adapter
├── 📋 STRUCTURE.md                         ← Ce fichier
│
├── 📄 CV.pdf                               ← À CRÉER - Votre CV (téléchargeable)
│
├── 📁 images/                              ← DOSSIER À CRÉER - Images et logos
│   ├── 🖼️ python.png                        ← Logo Python (à télécharger)
│   ├── 🖼️ html5.png                        ← Logo HTML5 (à télécharger)
│   ├── 🖼️ css3.png                         ← Logo CSS3 (à télécharger)
│   ├── 🖼️ javascript.png                   ← Logo JavaScript (à télécharger)
│   ├── 🖼️ git.png                          ← Logo Git (à télécharger)
│   ├── 🖼️ visual-studio-code.png           ← Logo VS Code (à télécharger)
│   ├── 🖼️ sql.png                          ← Logo SQL (optionnel)
│   ├── 🖼️ linux.png                        ← Logo Linux (optionnel)
│   ├── 🖼️ php.png                          ← Logo PHP (optionnel)
│   │
│   ├── 📸 projet1.jpg                      ← Capture d'écran de votre projet 1
│   ├── 📸 projet2.jpg                      ← Capture d'écran de votre projet 2
│   ├── 📸 projet3.jpg                      ← Capture d'écran de votre projet 3
│   └── 📸 profile.jpg                      ← Votre photo de profil (optionnel)
│
├── 📁 projets/                             ← DOSSIER À CRÉER - Détails de vos projets
│   ├── 📁 projet1/
│   │   ├── 📄 index.html                   ← Page du projet 1
│   │   ├── 🎨 style.css
│   │   └── 📁 images/
│   │       ├── screenshot1.png
│   │       ├── screenshot2.png
│   │       └── ...
│   ├── 📁 projet2/
│   │   ├── 📄 index.html
│   │   ├── 🎨 style.css
│   │   └── 📁 images/
│   └── 📁 projet3/
│
└── 📁 documents/                           ← DOSSIER À CRÉER - Documents supplémentaires
    ├── 📄 certificat-pix.pdf               ← Certificat PIX
    ├── 📄 certificat-ansii.pdf             ← Certificat ANSII
    └── 📄 attestation-stage.pdf            ← Attestation de stage
```

## Explication détaillée

### Niveau 1: Racine (Chapitre 3/)

| Fichier | Type | Description |
|---------|------|-------------|
| `index.html` | HTML | **Le fichier principal** - C'est votre portfolio |
| `styles.css` | CSS | Design et mise en page |
| `script.js` | JavaScript | Interactivité (navigation fluide, animations, etc.) |
| `CV.pdf` | PDF | Votre CV téléchargeable |

### Niveau 1: Documentation

| Fichier | Description |
|---------|-------------|
| `README.md` | Guide complet du portfolio |
| `CHECKLIST.md` | Liste de choses à faire |
| `CONSEILS-BONNES-PRATIQUES.md` | Conseils pour un bon portfolio |
| `EXEMPLES-TEXTES.md` | Exemples de texte à adapter |
| `STRUCTURE.md` | Ce fichier |

### Niveau 2: Images (`images/`)

#### Logos des technologies
```
images/
├── python.png              ← Logo Python (64x64px)
├── html5.png              ← Logo HTML5 (64x64px)
├── css3.png               ← Logo CSS3 (64x64px)
├── javascript.png         ← Logo JavaScript (64x64px)
├── git.png                ← Logo Git (64x64px)
├── visual-studio-code.png ← Logo VS Code (64x64px)
├── sql.png                ← Logo SQL (optionnel)
├── linux.png              ← Logo Linux (optionnel)
└── php.png                ← Logo PHP (optionnel)
```

**Conseils pour les logos:**
- Préférez des logos transparents (PNG)
- Taille recommandée : 64x64px ou 100x100px
- Téléchargez depuis : devicon.dev ou simpleicons.org
- Optimisez avec TinyPNG avant d'uploader

#### Captures de projets
```
images/
├── projet1.jpg            ← Capture d'écran de votre projet 1
├── projet2.jpg            ← Capture d'écran de votre projet 2
├── projet3.jpg            ← Capture d'écran de votre projet 3
└── profile.jpg            ← Votre photo de profil (optionnel)
```

**Conseils pour les images:**
- Format : JPG (pour les photos) ou PNG (pour les captures)
- Optimisez la taille avec TinyPNG
- Résolution : 1200x600px minimum
- Largeur maximale : 1200px (pour le web)

### Niveau 2: Projets (`projets/`)

Pour chaque projet majeur, créez un dossier :

```
projets/
├── projet1-ecommerce/
│   ├── index.html         ← Page HTML du projet
│   ├── style.css          ← CSS spécifique au projet
│   ├── script.js          ← JavaScript du projet
│   └── images/
│       ├── screenshot1.png
│       ├── screenshot2.png
│       └── demo.png
├── projet2-todoapp/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
└── projet3-blog/
    ├── index.html
    ├── style.css
    └── images/
```

**Structure recommandée pour chaque projet:**
- Nommez clairement chaque projet (ex: `projet1-ecommerce`)
- Incluez un `index.html` pour visualiser le projet
- Mettez les captures d'écran dans un dossier `images/`
- Utilisez le template `exemple-projet.html`

### Niveau 2: Documents (`documents/`)

Dossier optionnel pour ranger vos certificats :

```
documents/
├── certificat-pix.pdf
├── certificat-ansii.pdf
└── attestation-stage.pdf
```

## Commandes pour créer la structure

### Avec Windows PowerShell

```powershell
# Naviguez jusqu'au dossier Chapitre 3
cd "t:\1ere année\RAMSEYER\HTML & CSS\Chapitre 3"

# Créez les dossiers
mkdir images
mkdir projets
mkdir documents

# Vérifiez que c'est bon
Get-ChildItem -Directory
```

### Avec Git Bash

```bash
cd "t:\1ere année\RAMSEYER\HTML & CSS\Chapitre 3"
mkdir -p images projets documents
mkdir -p projets/projet1 projets/projet2
ls -la
```

## Chemins d'accès dans le HTML

### Exemple 1: Logo dans la même section
```html
<!-- Le logo est dans images/ -->
<img src="images/python.png" alt="Logo Python">
```

### Exemple 2: Depuis une page dans projets/
```html
<!-- La page est dans projets/projet1/ -->
<!-- Pour accéder au CSS principal -->
<link rel="stylesheet" href="../../styles.css">

<!-- Pour accéder aux images -->
<img src="../../images/python.png" alt="Logo Python">
```

### Exemple 3: Télécharger un fichier
```html
<!-- Télécharger le CV -->
<a href="CV.pdf" download>Télécharger mon CV</a>

<!-- Ou depuis projets/projet1/ -->
<a href="../../CV.pdf" download>Télécharger mon CV</a>
```

## 📏 Tailles de fichiers recommandées

| Type | Taille max | Format |
|------|-----------|--------|
| Image de projet | 500 KB | JPG, WebP |
| Logo | 50 KB | PNG, SVG |
| CV | 5 MB | PDF |
| Autres documents | 2 MB | PDF |

## 🔒 Fichiers à NE PAS mettre en ligne

```
❌ DO NOT UPLOAD:
- Fichiers .PSD (source Photoshop)
- Fichiers .zip
- Dossier node_modules/
- Fichier .env (variables sensibles)
- Fichiers temporaires
- Backups (.bak, .old)
- node_modules/
- .git/
```

## 📝 .gitignore (si vous utilisez Git)

Créez un fichier `.gitignore` à la racine :

```
# Fichiers temporaires
*.tmp
*.bak
*.swp

# Dossiers à ignorer
node_modules/
.DS_Store

# Fichiers sensibles
.env
.env.local
config.json

# IDE
.vscode/
.idea/

# Builds
dist/
build/
```

## 🎨 Organisation recommandée pour les images

```
images/
├── logos/              ← Logos des technologies
│   ├── python.png
│   ├── html5.png
│   └── ...
├── projects/           ← Captures de projets
│   ├── projet1.jpg
│   ├── projet2.jpg
│   └── ...
└── profile.jpg         ← Photo de profil
```

## 🚀 Prochaines étapes

1. **Créez les dossiers** selon cette structure
2. **Téléchargez les logos** depuis devicon.dev
3. **Organisez vos projets** dans le dossier `projets/`
4. **Sauvegardez vos certificats** dans `documents/`
5. **Testez tous les chemins d'accès** aux fichiers

---

## 💡 Conseils

- ✅ Gardez la structure simple et logique
- ✅ Nommez les fichiers en minuscules et sans espaces
- ✅ Utilisez des noms explicites (pas `image1.jpg`, mais `projet-ecommerce.jpg`)
- ✅ Compressez les images avant de les uploader
- ✅ Testez les liens et chemins régulièrement

---

Vous êtes maintenant prêt à organiser votre portfolio ! 🎉
