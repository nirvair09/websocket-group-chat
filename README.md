# 💬 Real-Time Group Chat Application

## 🚀 Overview
This is a **Real-time Group Chat Application** designed to facilitate instant communication between multiple users in a shared virtual room. It demonstrates the power of **WebSockets** for building low-latency, bidirectional communication platforms, moving beyond the limitations of traditional HTTP request-response models.

## 🎯 What Problem Does It Solve?
In modern collaboration, static page reloads are inefficient. This application solves the need for **instant feedback** and **presence awareness** by allowing:
- **Instant Messaging**: Messages appear immediately without refreshing.
- **Presence Indicators**: Users can see who is currently typing (`User is typing...`), mimicking face-to-face conversation cues.
- **Room-Based Isolation**: Architecture supports "rooms" (currently defaulting to `room1`), allowing groups to have private conversations.

## 🏗️ Technical Architecture
The application follows a **Client-Server Architecture** using the MERN stack principles (minus the database for this in-memory iteration).

### 🖥️ Client (Frontend)
- **Framework**: `React` (v19) with `Vite` for blazing fast development and builds.
- **Styling**: `TailwindCSS` for rapid, utility-first UI design.
- **Socket Client**: `socket.io-client` to handle WebSocket connections and events.
- **State Management**: React `useState` and `useEffect` hooks manage capabilities like message lists, typing status, and connection lifecycle.

### ⚙️ Server (Backend)
- **Runtime**: `Node.js` with `Express`.
- **Socket Engine**: `socket.io` (Server) for maximizing reliability (fallback to polling if WebSockets fail).
- **Logic**: 
  - Manages room subscriptions (`socket.join`).
  - Broadcasts events (`chatMessage`, `typing`) to specific rooms using `io.to()`.
  - Handles user connection/disconnection lifecycles.

## 🔄 How It Works
1.  **Handshake**: When the client loads, it initiates a handshake with the server.
2.  **Room Join**: The client emits a `joinRoom` event with the user's name. The server adds their socket ID to a specific channel ("room1").
3.  **Event Loop**:
    - **Messaging**: When User A sends a message, it travels to the Server -> Server broadcasts to Room -> User B receives it.
    - **Typing**: User A types -> Event fired -> Server notifies Room -> User B sees "User A is typing...".

## 🛠️ Setup & Installation

### Prerequisites
- Node.js installed

### 1. Start the Server
```bash
cd server
npm install
npm run run
# Server runs on http://localhost:3056
```

### 2. Start the Client
Open a new terminal:
```bash
cd client
npm install
npm run dev
# Client runs on http://localhost:5173
```

## 🧪 Key Features Implemented
- ✅ Real-time bidirectional event flow
- ✅ Custom "Typing..." indicators with debounce logic
- ✅ Room-based event scoping
- ✅ Clean, responsive UI with TailwindCSS
