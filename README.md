<p align="center">
  <h1 align="center">📸 MemoShare</h1>
  <p align="center">A social platform for sharing memories — built with the MERN stack.</p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-17.0.1-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Auth-JWT%20%2B%20Google%20OAuth-FF6B6B" />
</p>

---

## Overview

MemoShare lets users create, share, and interact with memory posts. Each post can include a title, message, tags, and an image. Users can like and manage their own posts with full CRUD operations.

Built as a full-stack MERN application with JWT authentication and Google OAuth support.

## ✨ Features

- **Authentication** — Register/login with email & password, or sign in with Google OAuth
- **Create Posts** — Share memories with title, message, tags, and image upload (Base64)
- **Edit & Delete** — Full control over your own posts
- **Like System** — Interact with other users' memories
- **Tag Filtering** — Categorize posts with hashtags
- **Responsive Design** — Material-UI components that adapt to any screen size

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 17, Redux, React Router v5, Material-UI, Axios |
| **Backend** | Node.js, Express.js, Mongoose |
| **Database** | MongoDB (Atlas or local) |
| **Auth** | JWT tokens, bcryptjs, Google OAuth 2.0 |
| **Utilities** | Moment.js, react-file-base64 |

## 📁 Project Structure

```
MERN_PROJECT/
├── client/                     # React frontend
│   ├── src/
│   │   ├── actions/            # Redux action creators
│   │   │   ├── auth.js         # Auth actions (signin, signup)
│   │   │   └── posts.js        # Post CRUD actions
│   │   ├── api/                # Axios API configuration
│   │   ├── components/
│   │   │   ├── Auth/           # Login & registration forms
│   │   │   ├── Form/           # Post creation/editing form
│   │   │   ├── Home/           # Home page layout
│   │   │   ├── Navbar/         # Navigation bar
│   │   │   └── Posts/          # Post list & individual cards
│   │   ├── constants/          # Redux action types
│   │   ├── images/             # Static assets
│   │   └── reducers/           # Redux reducers
│   └── package.json
│
├── server/                     # Express backend
│   ├── controllers/
│   │   ├── posts.js            # Post CRUD logic
│   │   └── users.js            # Auth logic
│   ├── models/
│   │   ├── postMessage.js      # Post schema
│   │   └── user.js             # User schema
│   ├── routes/
│   │   ├── posts.js            # Post endpoints
│   │   └── users.js            # Auth endpoints
│   ├── .env.example            # Environment template
│   └── index.js                # Server entry point
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v14+
- **MongoDB** — local instance or [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/A-mons/MERN_PROJECT.git
cd MERN_PROJECT

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Configuration

Create a `.env` file in the `server/` directory:

```env
CONNECTION_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/memoshare
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

### Run the Application

```bash
# Terminal 1 — Start the backend
cd server
npm start

# Terminal 2 — Start the frontend
cd client
npm start
```

The frontend runs on `http://localhost:3000` and proxies API requests to `http://localhost:5000`.

## 📡 API Reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/user/signin` | Login with email & password |
| `POST` | `/user/signup` | Register a new account |

### Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/posts` | Retrieve all posts |
| `POST` | `/posts` | Create a new post (auth required) |
| `PATCH` | `/posts/:id` | Update a post (auth required) |
| `DELETE` | `/posts/:id` | Delete a post (auth required) |
| `PATCH` | `/posts/:id/likePost` | Like/unlike a post (auth required) |

## 🔐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project and enable the **Google+ API**
3. Create **OAuth 2.0** credentials
4. Add `http://localhost:3000` as an authorized redirect URI
5. Replace `GOOGLE_ID` in `client/src/components/Auth/Auth.js` with your Client ID

## 📄 License

This project is open source and available under the [ISC License](LICENSE).
