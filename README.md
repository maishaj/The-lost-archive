# 🏺 The Lost Archive

## 📌 Project Overview

**The Lost Archive** is a full-stack Next.js digital archive platform for logging, preserving, and exploring historical artifacts. Users can browse artifacts, view detailed descriptions, and authorized contributors can submit new artifacts. Admins oversee platform activities through a secure role-based system.

---

## 🔗 Project Links

- **Live Site:** https://the-lost-archive.vercel.app
- **GitHub Repository:** https://github.com/maishaj/The-lost-archive

---

# ✨ Key Features

### 👤 Authentication
- Email & Password login
- Google OAuth login
- NextAuth authentication
- Protected routes

### 🏺 Archive Exploration
- Browse artifacts by category
- Detailed artifact information
- Search and filter artifacts

### 📝 Addition of Artifacts
- Authorized users can submit new artifacts
- Upload artifact images
- Add metadata and descriptions

### 🗂 Manage Artifacts
- Users can view all artifacts they added
- Delete artifacts they no longer want on the platform
- Easy management from a personal dashboard

### 📄 Artifact Details
- Detailed metadata including era, origin, and description
- Image galleries for each artifact
- SEO-optimized pages

---

# 🛠 Main Technologies

- Next.js(App Router)
- Tailwind CSS
- DaisyUI
- MongoDB
- NextAuth Authentication

---

# 📦 Dependencies

Main dependencies used:

- next-auth
- react-hot-toast
- sweetalert2
- react-icons
- tailwindcss
- daisyui
- ImgBB API
- Swiper.js

---

# ⚙️ Setup & Installation

Follow these steps to run the project locally.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/maishaj/The-lost-archive.git
cd The-lost-archive
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Environment Configuration

Create a **`.env.local`** file in the root directory and add the following variables:

```env
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DATABASE_URL=your_mongodb_uri
DB_NAME=your_database_name
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
```

---

## 4️⃣ Run the Development Server

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:3000
```

---

# 🗺 Route Summary

| Route | Access | Description |
|------|------|-------------|
| `/` | Public | Home page with featured artifacts and recent discoveries |
| `/ExploreArticles` | Public | Browse all archived artifacts |
| `/ExploreArticles/[id]` | Public | Detailed artifact profile page |
| `/AddArticle` | Private | Submit a new artifact (login required) |
| `/login` | Public | User login page |
| `/register` | Public | New account registration |
| `/AboutPage` | Public | Information about the archive mission |
| `/Contact` | Public | Contact the archivists |
| `/api/auth/*` | System | Authentication routes handled by NextAuth |

---

## 📸 Project Screenshots

### 🏠 Home Page
![Home 1](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive1.png)
![Home 2](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive2.png)
![Home 3](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive3.png)
![Home 4](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive4.png)
![Home 5](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive5.png)

### 🔎 Browse Artifacts
![Browse 1](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive6.png)
![Browse 2](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive21.png)

### 📄 Artifact Details
![Details 1](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive22.png)
![Details 2](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive23.png)

### 📝 About Page
![About Page 1](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive7.png)
![About Page 2](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive8.png)
![About Page 3](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive9.png)

### 📝 Contact Us
![Contact Us](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive10.png)

### 📝 Add Artifact
![Add Artifact](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive11.png)

### 📝 Manage Artifact
![Manage Artifact](https://github.com/maishaj/The-lost-archive/blob/main/the-lost-archive/src/screenshots/lostarchive12.png)


# 👩‍💻 Author

**Maisha Jannat**

- GitHub: https://github.com/maishaj

---

