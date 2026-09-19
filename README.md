 # 📚 BiblioDrop – Online Book Delivery Management System

A modern **Full-Stack Book Delivery Management Platform** built with **Next.js, Express.js, MongoDB, Better Auth, and Stripe**. BiblioDrop connects readers with local libraries and independent book owners, allowing users to browse books, request doorstep delivery, make secure online payments, and track their delivery history through an intuitive dashboard.

---


## 📷 Project Screenshot

> **Add your project screenshot here**

![BiblioDrop Screenshot](./public/project-preview.png)

---


# 🌐 Live Demo

### 🚀 Live Website
https://biblio-drop-client-eosin.vercel.app

### 💻 Client Repository
https://github.com/MDSOBUJMADBOR/BiblioDrop-Client

### ⚙️ Server Repository
https://github.com/MDSOBUJMADBOR/BiblioDrop-Server

---

# 📖 Project Overview

BiblioDrop is a complete book delivery management system designed to simplify the process of borrowing and delivering books. Readers can browse books, request deliveries, and securely pay delivery fees, while librarians manage inventories and requests. Administrators oversee users, books, transactions, and platform analytics through a powerful dashboard.

---


# 🛠 Technologies Used

## Frontend

- Next.js 16
- React 19
- Tailwind CSS 4
- HeroUI
- Framer Motion
- GSAP
- Recharts
- Better Auth
- React Toastify
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Better Auth
- JWT Authentication
- Stripe API
- ImgBB API

## Database

- MongoDB Atlas

## Deployment

- Vercel (Frontend)
- Render / Railway (Backend)

---

# ✨ Core Features

## 🔐 Authentication

- Better Auth Authentication
- Email & Password Login
- Google Authentication
- JWT Authorization
- Protected Routes
- Role-Based Access Control
- Persistent User Session

---


## 👤 User Features

- Browse all published books
- Search books by title or author
- Filter books by category
- View detailed book information
- Secure Stripe checkout
- Request doorstep delivery
- Delivery history
- Wishlist management
- Reading list
- Review and rating system
- Responsive dashboard

---

## 📚 Librarian Features

- Add new books
- Upload book cover images
- Manage inventory
- Edit and delete books
- Handle delivery requests
- Update delivery status
- Dashboard analytics
- Earnings overview

---

## 🛡️ Admin Features

- Dashboard overview
- Manage users
- Update user roles
- Delete users
- Manage all books
- Approve pending books
- Publish or unpublish books
- Manage transactions

---

## 💳 Payment System

- Stripe Payment Gateway
- Secure Checkout Session
- Payment Success Page
- Transaction History
- Delivery Fee Payment

---

## ⭐ Advanced Features

- Verified Review System
- Advanced Search
- Category Filtering
- Fee Range Filtering
- Availability Filtering
- Server-side Pagination
- Animated UI using Framer Motion
- Responsive Dashboard

---

# 📦 Dependencies

## Client

```bash
next
react
react-dom
tailwindcss
@heroui/react
@heroui/styles
better-auth
@better-auth/mongo-adapter
framer-motion
gsap
lenis
lucide-react
react-icons
react-toastify
recharts
stripe
mongodb
```

## Server

```bash
express
cors
dotenv
mongodb
jsonwebtoken
stripe
better-auth
cookie-parser
bcryptjs
```

---

# 🔒 Environment Variables

## Client (.env.local)

```env
NEXT_PUBLIC_API_URL=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

NEXT_PUBLIC_IMGBB_API_KEY=
```

## Server (.env)

```env
PORT=

DATABASE_URL=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

JWT_SECRET=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

# 💻 Run Locally

## 1️⃣ Clone Client Repository

```bash
git clone https://github.com/MDSOBUJMADBOR/BiblioDrop-Client.git
```

```bash
cd BiblioDrop-Client
```

```bash
npm install
```

```bash
npm run dev
```

---

## 2️⃣ Clone Server Repository

```bash
git clone https://github.com/MDSOBUJMADBOR/BiblioDrop-Server.git
```

```bash
cd BiblioDrop-Server
```

```bash
npm install
```

```bash
npm run dev
```

---

# 📁 Project Structure

```
# File Tree: Assignment-10

**Generated:** 9/19/2026, 1:58:49 PM
**Root Path:** `d:\Programming-Hero\Programming--Hero\Assignment-10`


├── 📁 backend
│   ├── 📁 .vercel
│   │   ├── 📄 README.txt
│   │   └── ⚙️ project.json
│   ├── ⚙️ .env.example
│   ├── ⚙️ .gitignore
│   ├── 📄 index.js
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── ⚙️ vercel.json
└── 📁 frontend
    ├── 📁 .vercel
    │   ├── 📄 README.txt
    │   └── ⚙️ project.json
    ├── 📁 public
    │   ├── 🖼️ bibliodrop.png
    │   ├── 🖼️ bibliodrop_logo.png
    │   ├── 🖼️ book.jpg
    │   ├── 🖼️ chare.png
    │   ├── 🖼️ file.svg
    │   ├── 🖼️ globe.svg
    │   ├── 🖼️ next.svg
    │   ├── 🖼️ vercel.svg
    │   └── 🖼️ window.svg
    ├── 📁 src
    │   ├── 📁 app
    │   │   ├── 📁 api
    │   │   │   ├── 📁 auth
    │   │   │   │   └── 📁 [...all]
    │   │   │   │       └── 📄 route.js
    │   │   │   └── 📁 payment
    │   │   │       └── 📄 route.js
    │   │   ├── 📁 books
    │   │   │   ├── 📁 [id]
    │   │   │   │   └── 📄 page.jsx
    │   │   │   └── 📄 page.jsx
    │   │   ├── 📁 dashboard
    │   │   │   ├── 📁 admin
    │   │   │   │   ├── 📁 manageallbooks
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   ├── 📁 manageusers
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   ├── 📁 overview
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   └── 📁 viewalltransactions
    │   │   │   │       └── 📄 page.jsx
    │   │   │   ├── 📁 librarian
    │   │   │   │   ├── 📁 addbook
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   ├── 📁 managedeliveries
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   ├── 📁 manageinventory
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   └── 📁 overview
    │   │   │   │       └── 📄 page.jsx
    │   │   │   ├── 📁 user
    │   │   │   │   ├── 📁 deliveryhistory
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   ├── 📁 myreadinglist
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   ├── 📁 myreviews
    │   │   │   │   │   └── 📄 page.jsx
    │   │   │   │   └── 📁 overview
    │   │   │   │       └── 📄 page.jsx
    │   │   │   └── 📄 layout.js
    │   │   ├── 📁 payment
    │   │   │   └── 📄 page.jsx
    │   │   ├── 📁 profile
    │   │   │   └── 📄 page.jsx
    │   │   ├── 📁 signin
    │   │   │   └── 📄 page.jsx
    │   │   ├── 📁 signup
    │   │   │   └── 📄 page.jsx
    │   │   ├── 📄 favicon.ico
    │   │   ├── 🎨 globals.css
    │   │   ├── 📄 layout.js
    │   │   ├── 📄 loading.jsx
    │   │   ├── 📄 not-found.jsx
    │   │   └── 📄 page.js
    │   ├── 📁 components
    │   │   ├── 📁 dashboard
    │   │   │   ├── 📁 admin
    │   │   │   │   └── 📄 overviewadmin.jsx
    │   │   │   ├── 📁 librarian
    │   │   │   │   ├── 📄 AddBookDelect.jsx
    │   │   │   │   ├── 📄 EditModal.jsx
    │   │   │   │   └── 📄 overviewlibarian.jsx
    │   │   │   ├── 📄 DashboardNavbar.jsx
    │   │   │   └── 📄 DashboardSidebar.jsx
    │   │   ├── 📄 Banner.jsx
    │   │   ├── 📄 BookCard.jsx
    │   │   ├── 📄 Categories.jsx
    │   │   ├── 📄 Featured.jsx
    │   │   ├── 📄 Footer.jsx
    │   │   ├── 📄 Librarian.jsx
    │   │   ├── 📄 Navbar.jsx
    │   │   ├── 📄 RequestDeliveryButton.jsx
    │   │   ├── 📄 SearchFilter.jsx
    │   │   ├── 📄 StatsSection.jsx
    │   │   └── 📄 lenis-provider.js
    │   └── 📁 lib
    │       ├── 📁 bookdata
    │       │   └── 📄 data.js
    │       ├── 📄 auth-client.js
    │       ├── 📄 auth.js
    │       └── 📄 stripe.js
    ├── ⚙️ .env.example
    ├── ⚙️ .gitignore
    ├── 📝 AGENTS.md
    ├── 📝 CLAUDE.md
    ├── 📝 README.md
    ├── 📄 eslint.config.mjs
    ├── ⚙️ jsconfig.json
    ├── 📄 next.config.mjs
    ├── ⚙️ package-lock.json
    ├── ⚙️ package.json
    └── 📄 postcss.config.mjs


---
*Generated by FileTree Pro Extension*
```

---

# 📱 Responsive Design

- 📱 Mobile
- 💻 Tablet
- 🖥 Desktop
- 🖥 Large Screen Support

---

# 🔐 Security

- JWT Protected APIs
- Better Auth Session Management
- Password Hashing
- Secure Cookies
- Environment Variables
- MongoDB Atlas Security
- Stripe Secure Payment Processing

---

# 📊 Dashboard

### 👤 User Dashboard

- Overview
- Delivery History
- Reading List
- Wishlist
- Reviews

### 📚 Librarian Dashboard

- Overview
- Add Books
- Inventory Management
- Delivery Requests
- Earnings

### 🛡️ Admin Dashboard

- Overview
- User Management
- Book Management
- Transactions
- Analytics

---

# 🎨 UI Highlights

- Modern Responsive Design
- Hero Banner
- Interactive Cards
- Skeleton Loading
- Toast Notifications
- Framer Motion Animations
- Custom 404 Page
- Error Boundary
- Smooth Page Transitions

---

# 🚀 Future Improvements

- Email Verification
- Push Notifications
- Real-Time Delivery Tracking
- Chat Between Readers & Librarians
- PDF Book Preview
- AI Book Recommendation
- Dark Mode
- Multi-language Support

---

# 🔗 Resources

- 🌐 Live Website: https://biblio-drop-client-eosin.vercel.app
- 💻 Client Repository: https://github.com/MDSOBUJMADBOR/BiblioDrop-Client
- ⚙️ Server Repository: https://github.com/MDSOBUJMADBOR/BiblioDrop-Server

---

# 👨‍💻 Developer

**MD Sobuj Madbor**

- 📧 Email: mdsobujmadbor660@gmail.com
- 📍 Location: Dhaka, Bangladesh
- 🌐 Portfolio: https://sobuj-madbor-portflio.vercel.app

---

# 📄 License

This project was developed for educational purposes as part of the **Programming Hero Level-2 Assignment**.

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

Made with ❤️ by **MD Sobuj Madbor**
