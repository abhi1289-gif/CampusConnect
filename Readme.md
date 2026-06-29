# CampusConnect

CampusConnect is a full-stack web application designed to help college students collaborate by sharing assignments and participating in subject-wise discussions.

The platform provides a centralized space where students can upload and download study materials and communicate with classmates through dedicated discussion groups for each subject.

## Live Demo

**Application:** https://campus-connect-theta-seven.vercel.app/

> **Note:** Since the backend is hosted on Render's free tier, the first request may take up to 50 seconds if the server is inactive.

## Features

- Student Registration and Login
- Secure password storage using bcrypt
- Subject-wise assignment upload
- PDF download support
- Assignment metadata stored in MySQL
- Subject-wise discussion groups
- Real-time chat using Socket.IO
- Displays uploader name for each assignment
- Responsive user interface built with React

## Current Implementation

The project currently supports:

- All common subjects of **First Year**
- All First-Year branches
- Subject-specific assignment sharing
- Subject-specific chat rooms

Support for **Second, Third, and Fourth Year** branches and subjects is planned for future development.

## Tech Stack

### Frontend

- React.js
- React Router
- CSS

### Backend

- Node.js
- Express.js
- Socket.IO
- Multer

### Database

- MySQL

## Project Structure

```
CampusConnect/
│
├── Client/
├── Server/
├── Database/
│   └── campusconnect.sql
├── README.md
└── .gitignore
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Client

```bash
cd Client
npm install
npm run dev
```

### Server

```bash
cd Server
npm install
node server.js
```

## Database Setup

1. Install MySQL Server.
2. Create a database named:

```sql
CREATE DATABASE campusconnect;
```

3. Import the database located at:

```
Database/campusconnect.sql
```

4. Configure the database credentials inside the Server `.env` file.

Example:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=campusconnect
```

## Future Enhancements

- Complete support for all academic years
- Branch-specific subjects for every year
- User profiles
- Delete uploaded assignments
- Assignment search and filtering
- Notifications
- Improved authorization and authentication
- Admin panel
- Mobile-friendly UI

## Screenshots

(Add screenshots of Login, Assignment Upload, and Chat here.)

## Author

**Abhishek Sonparote**
