# 🏺 The Lost Archive

A specialized digital repository built with **Next.js** for logging, preserving, and exploring historical artifacts.  
The platform features a curated **Archive Entry System** where users can document discoveries with detailed metadata, visual evidence, and rarity scoring.

---

# 🔗 Project Links
- 🌐 **Live Deployment:** https://the-lost-archive.vercel.app/
- 💻 **GitHub Repository:** https://github.com/maishaj/The-lost-archive

---

# 📖 Project Description
**The Lost Archive** is a modern archival platform designed to bridge the gap between **historical discovery and digital preservation**.

Using a high-end **documentary-style aesthetic**, the platform allows authorized archivists to log artifacts—ranging from the **Bronze Age to modern history**—while providing the public with an SEO-optimized exploration experience.

Users can explore artifacts, view detailed historical descriptions, and contribute new discoveries through a protected submission system.

---

# ✨ Key Features

- 🏺 Explore a digital archive of historical artifacts
- 🔎 SEO-optimized artifact browsing
- 📜 Detailed artifact profiles with metadata
- 🖼 Image upload using **ImgBB API**
- 🔐 Secure authentication with **NextAuth**
- 🔑 Google OAuth login support
- 📝 Protected artifact submission system
- 📱 Fully responsive modern UI
- ⚡ Fast performance using **Next.js App Router**

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

# 🛠 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **DaisyUI**

### Backend & Database
- **MongoDB**
- **NextAuth Authentication**

### APIs & Libraries
- **ImgBB API** – Image hosting
- **Swiper.js** – Sliders
- **React Icons** – Icons
- **SweetAlert2** – Alerts
- **React Hot Toast** – Notifications

---

# 👩‍💻 Author

**Maisha Jannat**

- GitHub: https://github.com/maishaj

---

