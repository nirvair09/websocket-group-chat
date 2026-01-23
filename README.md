# 💬 Real-Time Socket Chat Application

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://websocket-group-chat.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.dot.io&logoColor=white)](https://socket.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

An advanced real-time group chat platform featuring dynamic room management, live presence indicators, and a clean, responsive interface.

---

## 📸 Preview

![Chat App Screenshot](./assets/readme/screenshot.png)

---

## 🚀 Live Demo

Check out the live application here: **[https://websocket-group-chat.vercel.app/](https://websocket-group-chat.vercel.app/)**

---

## ✨ Key Features

- 🏠 **Dynamic Rooms**: Create your own room or join an existing one using unique Room IDs.
- ⚡ **Real-Time Messaging**: Instant bidirectional communication powered by Socket.io.
- ✍️ **Presence Indicators**: See who's currently typing in the room.
- 🧹 **Automatic Cleanup**: Serverside logic automatically deletes empty rooms to optimize memory.
- 🎨 **Premium UI**: Modern, glassmorphism-inspired design built with Tailwind CSS.
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices.

---

## 🛠️ Technical Stack

- **Frontend**: React 19, Tailwind CSS, Vite
- **Backend**: Node.js, Express, Socket.io
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## 🔨 Setup & Installation

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/nirvair09/websocket-group-chat.git
cd websocket-group-chat
```

### 2. Configure the Server
```bash
cd server
npm install
# Ensure you have a .env file with PORT=3056
npm run run
```

### 3. Configure the Client
```bash
cd client
npm install
# Ensure you have a .env file with VITE_BACKEND_URL=http://localhost:3056
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 🏗️ Project Structure

```text
.
├── client/          # React frontend (Vite)
│   ├── src/        # Components, styles, and logic
│   └── public/      # Static assets
├── server/          # Node.js backend
│   └── server.js    # Socket.io implementation
└── assets/          # Project documentation assets
```

---

## 📜 License

This project is open-source and available under the [ISC License](LICENSE).

---

Developed with ❤️ by [Rup](https://github.com/nirvair09)
