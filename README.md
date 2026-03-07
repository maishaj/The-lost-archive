# 🏺 The Lost Archive

A specialized digital repository built with **Next.js** for logging, preserving, and exploring historical artifacts. This application features a curated "Archive Entry" system where users can document discoveries with detailed metadata, visual evidence, and rarity scoring.

---

## 🔗 Project Links
- **Live Deployment:** [the-lost-archive.vercel.app](https://the-lost-archive.vercel.app/)
- **GitHub Repository:** [github.com/maishaj/The-lost-archive](https://github.com/maishaj/The-lost-archive)

---

## 📖 Project Description
**The Lost Archive** is a modern archival platform designed to bridge the gap between historical discovery and digital preservation. Using a high-end "documentary" aesthetic, the site allows authorized archivists to log artifacts—ranging from the Bronze Age to modern history—while providing the public with a justified, readable, and SEO-optimized exploration experience.

---

## ⚙️ Setup & Installation

Follow these steps to get your local development environment running:

### 1. Clone the repository
git clone https://github.com/maishaj/The-lost-archive.git
cd The-lost-archive

### 2. Install dependencies
npm install

### 3. Environment Configuration
Create a .env.local file in the root directory and add the following variables:

NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
DATABASE_URL=your_mongodb_uri
DB_NAME=your_db_name
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_key

### 4. Run the Development Server
npm run dev

---

## 🗺 Route Summary

| Route | Access | Description |
| :--- | :--- | :--- |
| `/` | Public | Home: Featured artifacts and trending discoveries. |
| `/ExploreArticles` | Public | The Vault: Browse the full collection of logged artifacts. |
| `/ExploreArticles/[id]` | Public | Artifact Detail: Justified text descriptions and deep-dive context. |
| `/AddArticle` | Private | Archive Entry: Form to submit new artifacts (requires Login). |
| `/AboutPage` | Public | Mission: The history and purpose of The Lost Archive. |
| `/Contact` | Public | Correspondence: Get in touch with the lead archivists. |
| `/api/auth/*` | System | Auth: Handled by NextAuth (Login/Logout/Session). |

---

## 🛠 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **Database:** MongoDB
- **Auth:** Next-Auth
- **Images:** ImgBB API
