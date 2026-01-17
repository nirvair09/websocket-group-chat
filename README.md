# 💬 Advanced Real-Time Group Chat Application

## 🚀 Overview
This is an **Advanced Real-time Group Chat Application** that goes beyond basic WebSocket implementations. It features dynamic room management, real-time presence awareness, and a scalable architecture designed for instant bidirectional communication.

## 🎯 The Evolution: What's New?
Initially a single-room demo, this project has evolved into a robust platform with:
- **Dynamic Multi-Room Architecture**: Users are no longer confined to a single global room. They can create unique room IDs or join existing ones.
- **Enhanced Presence Logic**: Real-time "Typing..." indicators now support multiple simultaneous users, providing a more lifelike conversation experience.
- **Smart Room Cleanup**: The server automatically manages memory by disposing of empty rooms when the last user disconnects.

## 🏗️ Advanced Technical Architecture
The application leverages a high-performance **MERN-inspired stack** with a focus on real-time event-driven logic.

### ⚙️ Server-Side (Node.js & Socket.io)
- **Isolated Namespaces**: Uses `socket.join(roomId)` and `socket.to(roomId).emit()` to ensure messages and events (like typing) stay within their respective boundaries.
- **In-Memory Session Management**: Employs a `Map` of `Rooms`, where each room maintains a `Set` of active `socketIds`. This allows for $O(1)$ lookups and efficient cleanup.
- **Auto-Garbage Collection**: Logic implemented in the `disconnect` handler ensures the server doesn't leak memory by retaining empty room objects.

### 🖥️ Client-Side (React & TailwindCSS)
- **Reactive State Flow**: Uses React 19 hooks to manage typers, messages, and connection states seamlessly.
- **Debounced Interaction**: Implemented typing detection using a timer-based `useEffect` loop to reduce socket noise while maintaining high responsiveness.
- **Adaptive UI**: A responsive interface built with `TailwindCSS` that handles both the setup (Join/Create) and the active chat experience.

## 🔄 How It Works (The "Why" it's Advanced)
1.  **Handshake & Verification**: Unlike simple setups, the client first verifies if a room exists before joining, or if it's already taken when creating.
2.  **RoomNotice System**: Automatically notifies existing members when a new user enters, enhancing the "group" feel.
3.  **Bidirectional Flow**: 
    - **Messaging**: `User -> Server -> (Specific Room) -> Other Users`.
    - **Presence**: `Typing Status -> Server -> (Room) -> Dynamic List of Typers`.

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18+) installed.

### 1. Start the Server
```bash
cd server
npm install
npm run run # Runs on http://localhost:3056
```

### 2. Start the Client
```bash
cd client
npm install
npm run dev # Runs on http://localhost:5173
```

## 🧪 Key Features Implemented
- ✅ **Dynamic Room Routing**: Create or join any room ID instantly.
- ✅ **Multi-User Typing Detection**: Tracks specifically who is typing in real-time.
- ✅ **Clean Session Management**: Automatic cleanup of empty rooms.
- ✅ **Premium UI/UX**: Centered chat layout, WhatsApp-style bubbles, and responsive design.
- ✅ **Error Handling**: Alerts for "Room Not Found" or "Room Exists" scenarios.

