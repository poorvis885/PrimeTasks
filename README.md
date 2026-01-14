# PrimeTasks

PrimeTasks is a simple task management application demonstrating **frontend-backend integration** using React (frontend) and Node.js + Express + MongoDB (backend).

---

## Features

- View tasks dynamically fetched from the backend.
- Toggle task status between **Pending ⏳** and **Completed ✅**.
- Fully functional frontend-backend communication.
- Easy to extend for additional task operations.

---

## Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Tools:** npm, nodemon, dotenv  

---

## Screenshots

### Frontend
<img width="1850" height="1033" alt="Screenshot 2026-01-14 165955" src="https://github.com/user-attachments/assets/61c0033b-2bc3-401a-92ad-061f7874abe5" />

<img width="954" height="781" alt="Screenshot 2026-01-14 172958" src="https://github.com/user-attachments/assets/a77f8313-1a09-4017-a65a-364628522bd7" />

<img width="1918" height="1079" alt="Screenshot 2026-01-14 173012" src="https://github.com/user-attachments/assets/3208c81e-1fcd-48e3-9f1c-bc880f33c1e4" />

### Backend / API Response
<img width="1842" height="1027" alt="Screenshot 2026-01-14 170010" src="https://github.com/user-attachments/assets/256cc10e-c289-4156-a33b-ad2b3f09a0a2" />

<img width="1919" height="1078" alt="Screenshot 2026-01-14 170324" src="https://github.com/user-attachments/assets/f70d1df2-60e7-4831-bff0-b98e05c367ce" />

<img width="955" height="754" alt="Screenshot 2026-01-14 170343" src="https://github.com/user-attachments/assets/3379d56a-4939-4b01-b30f-307c42c075ce" />

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:  
```bash
git clone https://github.com/poorvis885/PrimeTasks.git
Navigate into backend folder and install dependencies:

bash
Copy code
cd PrimeTasks/backend
npm install
Create a .env file in backend (if not already) and add:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

bash
Copy code
npm start
Navigate into frontend folder and install dependencies:

bash
Copy code
cd ../frontend
npm install
npm start
Open http://localhost:3000 in your browser to see the app.

Usage
Tasks fetched from backend API /api/tasks.

Click Toggle Status to change a task from Pending ⏳ to Completed ✅.

Frontend updates automatically after backend changes.

Folder Structure
bash
Copy code
PrimeTasks/
├── backend/        # Node.js + Express API
│   ├── server.js
│   ├── routes/
│   └── .env
├── frontend/       # React App
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
Notes
Make sure MongoDB is running before starting the backend.

Update .env file with your MongoDB URI.

Author
Poorvi Shrivastava
GitHub Profile

© 2026 PrimeTasks. All rights reserved.
