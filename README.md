# 🏠 Flatmates

**Flatmates** is a full-stack web application that helps users **list, search, and find flatmates or roommates** within a city. Whether you're moving to a new place or looking for someone to share your apartment, Flatmates offers an easy-to-use platform to connect with potential roommates.

Live Demo: [https://flatmates-psi.vercel.app](https://flatmates-psi.vercel.app)

---

## 🚀 Features

- 👤 User Authentication (Signup, Login, Logout)
- 📋 Create and Manage Listings
- 💾 Save Listings for Later
- 🔍 Search and Filter Listings
- 🗑️ Delete Listings
- 🧠 Responsive and modern UI
- 🌙 Dark Mode Support (if enabled)
- 🔐 JWT-based Auth and bcrypt password hashing
- 💡 Clean UX with toast notifications

---

## 🛠️ Tech Stack

### Frontend
- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) (state management)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) (for fast development)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

---

## 📂 Folder Structure

```
/client
├── components         # Reusable React components
├── pages              # Route-based pages
├── redux              # Redux Toolkit store and slices
├── assets             # Images and static files
└── styles             # Tailwind and global styles

/server
├── controllers        # Logic for listing and auth routes
├── models             # Mongoose models (User, Listing)
├── routes             # Express route handlers
├── middleware         # JWT auth, error handling
└── config             # DB connection and environment configs
```

---

## 🔐 Environment Variables

**Frontend (`.env`)**

```env
VITE_API_URL=https://flatmates-api.onrender.com
```

## 🧪 Getting Started

```bash
# Clone the repo
git clone https://github.com/sushilkrg/flatmates-frontend.git
cd flatmates-frontend

# Install frontend dependencies
npm install

# Start the frontend
npm run dev
```

---

## 📸 Screenshots

![Screenshot (191)](https://github.com/user-attachments/assets/76023725-85f5-4ca8-b075-5b82c616da6c)


![Screenshot (190)](https://github.com/user-attachments/assets/05868c24-06a3-4a99-940f-6e5bd2d1fb51)


---

## ✍️ Author

**Sushil Kumar**  

---

## ⭐️ Star the Repo

If you find this project helpful, please consider giving it a ⭐️ to show your support!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
