# MemoShare - MERN Stack Application

MemoShare is a full-stack web application for sharing memories (posts) built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create, edit, delete, and like posts with complete authentication.

## ✨ Features

- **User Authentication** - Secure registration and login
- **Full CRUD Operations** - Create, read, update, and delete posts
- **Like System** - Interaction with publications
- **Image Upload** - Base64 image uploading
- **Responsive Interface** - Adaptive design with Material-UI
- **Google OAuth** - Login with Google account
- **Tags** - Post categorization with hashtags
  
## 🛠️ Technologies Used

### Frontend
- **React** - JavaScript framework
- **Redux** - State management
- **Material-UI** - UI components
- **Axios** - HTTP requests
- **React Router** - Navigation
- **Moment.js** - Date formatting

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Token authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin request handling


## 🚀 Installation & Deployment

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo>
cd MemoShare 
   ```
2. **Install backend dependencies**
   
   ```bash
     cd server
     npm install
   ```
3. **Install frontend dependencies**
   
   ```bash
      cd ../client
      npm install
   ```
4. **Environment configuration**
   
     Create a ```env``` file in the ```server/``` directory:
   
   ```bash
      CONNECTION_URL=votre_uri_mongodb
      PORT=PORT
      JWT_SECRET=votre_secret_jwt
   ```
5. **Start the application**
   
   ```bash
      # Terminal 1 - Backend
      cd server
      npm start

      # Terminal 2 - Frontend
      cd client
      npm start
   ```
## 📡 API Endpoints

### Posts
- `GET /posts` - Get all posts
- `POST /posts` - Create new post
- `PATCH /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post
- `PATCH /posts/:id/likePost` - Like post

### Authentication
- `POST /user/signin` - User login
- `POST /user/signup` - User registration

## 🔧 Google OAuth Configuration

1. Go to Google Cloud Console
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add  `http://localhost:3000` to authorized redirect URIs
6. Replace  `GOOGLE_ID` in  `client/src/components/Auth/Auth.js` with your client ID

## 🎨 Customization

### Modify colors
Edit the Material-UI theme in style files.

### Modify functionality
- **Posts** : Modify  `server/models/postMessage.js` and  `client/src/components/Form/Form.js`
- **Authentication** : Modify `server/models/user.js` and `server/controllers/users.js`
- **Styles** : Modify files in `styles.js` directories.

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your URI in the `.env` file.
   - Ensure MongoDB is running

2. **CORS Errors**
   - Verify the proxy in `client/package.json` points to the correct port

3. **Dependency Issues**
   - Delete  `node_modules` and `package-lock.json` and reinstall dependencies


## 🤝 Contribution

Contributions are welcome! Feel free to :
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
   
## 📞 Support

For any questions or issues, please open an issue on the GitHub repository.

---

**Developed with ❤️ using the MERN stack**

