# NewsHub – News Management Application

NewsHub is a **MERN-based News Management Application** that allows users to browse, search, filter, read, and manage news articles across different categories.

The application provides a simple and responsive interface where users can view the latest news, search for specific articles, filter news by category, and perform CRUD operations. It also includes **Google Authentication using Firebase** and the ability to download articles as PDF files.

## Project Description

A news application that allows users to browse, search, filter, and read news articles by different categories, with the latest news displayed dynamically.

The application was developed using the **MERN stack** with additional technologies such as **Firebase Authentication, Axios, React Router, and jsPDF**.

## Features

### News Features

- Browse all available news articles
- Display latest news articles first
- Search news articles by title
- Filter news by category
- View complete news articles
- Add new news articles
- Edit existing news articles
- Delete news articles
- Display article author and published date
- Add article images using image URLs

### Authentication Features

- Google Sign-In using Firebase Authentication
- Protected application routes
- Display logged-in user's name
- Display user's Google profile picture
- Logout functionality
- Automatic authentication state checking

### Additional Features

- Download complete articles as PDF
- Responsive user interface
- Loading states
- Form validation
- Delete confirmation
- REST API integration
- MongoDB database integration

## Technologies Used

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- Axios
- jsPDF
- Vite

### Backend

- Node.js
- Express.js
- Mongoose
- REST API
- CORS
- dotenv

### Database

- MongoDB
- MongoDB Compass

### Authentication

- Firebase Authentication
- Google Sign-In

### Development & Testing Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- MongoDB Compass


##  Application Architecture


                         ┌─────────────────────┐
                         │        User         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │     Port: 5173      │
                         └──────────┬──────────┘
                                    │
                         ┌──────────┴──────────┐
                         │                     │
                         ▼                     ▼
                ┌─────────────────┐   ┌──────────────────┐
                │ Firebase Auth   │   │      Axios       │
                │ Google Sign-In  │   │ HTTP Requests    │
                └─────────────────┘   └────────┬─────────┘
                                               │
                                               ▼
                                    ┌─────────────────────┐
                                    │ Express.js Backend  │
                                    │     Port: 5000      │
                                    └──────────┬──────────┘
                                               │
                                               ▼
                                    ┌─────────────────────┐
                                    │      Mongoose       │
                                    │        ODM          │
                                    └──────────┬──────────┘
                                               │
                                               ▼
                                    ┌─────────────────────┐
                                    │      MongoDB        │
                                    │      newsdb         │
                                    └─────────────────────┘
