# 💬 Modern Realtime Chat App

A minimal, modern, real-time chat application built with React, Firebase, and Vite.

This project demonstrates authentication, role-based access (Admin/User), and real-time messaging using Firebase Firestore.

---

## 🚀 Features

- 🔐 Email & Password Authentication
- 👤 User & Admin roles
- 💬 Real-time messaging (Firestore)
- 🛡️ Admin can delete messages
- 🟢 Online status tracking
- 🚪 Logout functionality
- 🎨 Minimal modern dark UI
- ⚡ Fast development with Vite
- ☁️ Fully serverless backend (Firebase)

---

## 🛠️ Tech Stack

- React (Frontend UI)
- Firebase Authentication
- Firestore Database (Realtime)
- Vite (Build Tool)
- Vercel (Deployment)

---

## 📂 Project Structure
modern-chat/
├── index.html
├── package.json
├── vite.config.js
├── .env
├── .gitignore
└── src/
├── components/
│ ├── Auth.jsx
│ └── Chat.jsx
├── App.jsx
├── firebase.js
├── index.css
└── main.jsx


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/modern-chat.git
cd modern-chat
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Firebase

1. Go to Firebase Console  
2. Create a new project  
3. Enable:
   - Authentication → Email/Password  
   - Firestore Database  
4. Copy your Firebase configuration  

### 4️⃣ Create `.env` file

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ Do NOT commit `.env` to GitHub.

---

## ▶️ Run Locally

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output folder:

```
dist/
```

---

## 🚀 Deploy to Vercel

1. Push your project to GitHub  
2. Import repository in Vercel  
3. Add Environment Variables in Vercel dashboard  
4. Deploy  

⚠️ Important:  
Add your deployed domain inside:

Firebase → Authentication → Authorized Domains

---

## 🔐 Firestore Security Rules (Recommended)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }

    match /messages/{messageId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow delete: if request.auth != null;
    }
  }
}
```

---

## 👑 Admin Access

By default, the email:

```
admin@gmail.com
```

is assigned the role `admin` during signup.

Admins can:
- Delete any message  
- View all chats  

You can modify role logic inside:

```
src/components/Auth.jsx
```

---

## 🧠 Future Improvements

- Private chat rooms  
- Typing indicator  
- Read receipts  
- Image uploads  
- Emoji support  
- Profile avatars  
- Mobile responsive redesign  
- Admin dashboard UI  
- Dark / Light theme toggle  

---

## 📄 License

MIT License

---

## 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
