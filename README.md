# 🗺️ City Guide — Find Your Local Buddy

> Experience India with a Local Friend. Connect with verified locals for authentic cultural immersion.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 📖 About

**City Guide** is a full-featured travel companion web app that connects tourists with **verified local guides ("Buddies")** across India. Instead of relying on generic travel guides, users can browse real locals who offer authentic experiences — street food tours, temple walks, offbeat heritage trips, and more.

The app also includes a **Host Portal** for local guides to manage their dashboard, track income, view services, and read reviews — all behind a protected, login-gated route.

---

## ✨ Features

### 👤 Public-Facing
- **Home** — Immersive hero section with a CTA to find a local buddy
- **Buddies Listing** — Browse verified local guides with ratings, pricing, languages spoken, and city
- **Buddy Details** — Full profile view with bio, languages, hourly rate, and a "Book this buddy" CTA
- **About** — Mission and vision of the platform

### 🔐 Host Portal (Protected)
- **Login** — Simulated authentication using React Context (`AuthContext`)
- **Dashboard** — Welcome overview with stats (Total Buddies, Trips Planned, Messages) and recent activity feed
- **Income** — Monthly earnings summary with a detailed transaction history
- **Services** — Manage the services offered (placeholder page)
- **Reviews** — View customer reviews and overall star rating

### 🛠️ Technical Highlights
- **Protected Routes** — The `/host` section is fully gated behind authentication; unauthenticated users are redirected to `/login`
- **Custom `useFetch` Hook** — A reusable data-fetching hook with `loading`, `error`, and `data` states
- **Skeleton Loaders** — Smooth loading skeletons on the Buddies list and Buddy Details pages (no layout shift)
- **Auth Context** — Global authentication state managed via React Context API (`login`, `signout`, `isLogin`)

---

## 🗂️ Project Structure

```
city-guide/
├── public/
├── src/
│   ├── assets/                  # Static images (hero, about backgrounds)
│   ├── components/
│   │   ├── Header.tsx           # Top nav with auth-aware Login/Logout button
│   │   ├── Layout.tsx           # Root layout wrapper (Header + Outlet)
│   │   ├── Home.tsx             # Landing/Hero page
│   │   ├── About.tsx            # About page
│   │   ├── Buddies.tsx          # Buddy listing grid
│   │   ├── BuddyDetails.tsx     # Individual buddy profile page
│   │   ├── BuddyCardSkeleton.tsx    # Skeleton for buddy cards
│   │   ├── BuddyDetailsSkeleton.tsx # Skeleton for buddy detail page
│   │   ├── HostLayout.tsx       # Host portal layout with subnav
│   │   └── ProtectedRoutes.tsx  # Auth guard — redirects to /login if not logged in
│   ├── context/
│   │   └── AuthContext.tsx      # Global auth state (login, signout, isLogin)
│   ├── Hooks/
│   │   └── useFetch.ts          # Custom hook for async data fetching
│   ├── Pages/
│   │   └── Host/
│   │       ├── Login.tsx        # Host login page
│   │       ├── DashBoard.tsx    # Host dashboard with stats
│   │       ├── Income.tsx       # Income & transaction history
│   │       ├── Reviews.tsx      # Customer reviews
│   │       └── ServiceList.tsx  # Services list (placeholder)
│   ├── App.tsx                  # Root app with all routes defined
│   └── main.tsx                 # React DOM entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔀 Application Routes

| Path | Component | Access |
|------|-----------|--------|
| `/` | `Home` | Public |
| `/about` | `About` | Public |
| `/buddies` | `Buddies` | Public |
| `/buddies/:id` | `BuddyDetails` | Public |
| `/login` | `Login` | Public |
| `/host` | `Dashboard` | 🔐 Protected |
| `/host/income` | `Income` | 🔐 Protected |
| `/host/services` | `ServicesList` | 🔐 Protected |
| `/host/reviews` | `Reviews` | 🔐 Protected |

---

## 🌐 API

The app fetches buddy data from a live REST API:

| Endpoint | Description |
|----------|-------------|
| `GET https://city-guide-server.onrender.com/api` | Returns all buddies |
| `GET https://city-guide-server.onrender.com/api/buddies/:id` | Returns a single buddy by ID |

Each buddy object includes: `id`, `name`, `city`, `profile_pic`, `bio`, `rating`, `reviews`, `verified`, `languages`, and `services` (with `price_per_hour`).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Devanshu2202/City-guide.git
cd City-guide

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev/) | 19 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Type safety |
| [Vite](https://vitejs.dev/) | 8 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | 7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Icon library |

---

## 🔑 Auth (Demo)

The login system is a **simulated/demo** flow using React Context — no real backend authentication is involved.

- Navigate to `/login` and submit any email/password
- This triggers `login()` in `AuthContext`, setting `isLogin = true`
- You are then redirected to the protected `/host` dashboard
- The **Logout** button in the Header calls `signout()`, resetting the auth state

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
