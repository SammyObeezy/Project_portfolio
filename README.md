# BookWave

BookWave is a feature-rich web application that allows users to browse, download, purchase, and connect with other readers to lend or borrow ebooks. This MVP includes user authentication, ebook management, secure downloads, community engagement, and rental functionality, with plans for additional future updates.

## Table of Contents

1. [Architecture](#architecture)
2. [Data Flow](#data-flow)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
   - [Connect](#connect)
   - [Rental (Lend and Borrow)](#rental-lend-and-borrow)
7. [API Endpoints](#api-endpoints)
8. [Data Model](#data-model)
9. [User Stories](#user-stories)
10. [Mockups](#mockups)
11. [Deployment](#deployment)
12. [License](#license)

---

## Architecture

BookWave's architecture is designed to support smooth scalability and optimize secure transactions and user interaction.

### Application Structure

The application is divided into two main parts:

- **Frontend:** A React-based client interface for ebook browsing, purchasing, and community engagement.
- **Backend:** A Node.js and Express server to manage ebook data, user authentication, and payment processing.

### Backend Services

- **Web Server:** Manages routing and session handling.
- **Application Server:** Contains core business logic and interacts with the database, third-party APIs, and external services.
- **Database:** Firebase Firestore stores ebook data, user information, and rental transactions.
- **Authentication:** Firebase Authentication handles secure user registration and login.
- **Payments:** Stripe API manages secure transactions for purchasing ebooks.

---

## Data Flow

Data flows through the following components:

### Client (Web/Mobile App):
- **Technologies:** React, TailwindCSS  
- **Hosting:** Vercel  
Users browse, buy, lend, and borrow ebooks and connect with other readers.

### DNS Firewall:
- **Technologies:** Cloudflare  
Secures DNS and optimizes performance.

### Web Server:
- **Technologies:** Node.js, Express  
- **Hosting:** Vercel  
Routes requests and manages sessions.

### Application Server:
- **Technologies:** Node.js, Express  
- **Hosting:** Heroku  
Executes core business logic and manages data interactions.

### Database Server:
- **Technologies:** Firebase Firestore  
- **Hosting:** Firebase  
Stores ebook, user, and rental data securely.

### Authentication:
- **Technologies:** Firebase Authentication  
- **Hosting:** Firebase  
Manages secure login, registration, and session handling.

### Payment Gateway:
- **Technologies:** Stripe API  
- **Hosting:** Stripe  
Processes secure payments.

---

## Technologies

### Frontend:
- **React**: For building the UI.
- **TailwindCSS**: For responsive styling.
- **Cloudflare**: DNS and security management.
- **Vercel**: Hosting for the frontend.

### Backend:
- **Node.js and Express**: For backend logic.
- **Firebase Firestore**: A NoSQL database for ebook, user, and rental data.
- **Firebase Authentication**: Secure user management.
- **Stripe API**: Payment processing.
- **Heroku**: Backend hosting.

---

## Installation

### Prerequisites:
- **Node.js:** [Download here](https://nodejs.org/)
- **Firebase CLI:** (Optional) [Install from Firebase CLI Docs](https://firebase.google.com/docs/cli)
- **Stripe Account:** [Register here](https://stripe.com/)

### Backend Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bookwave.git
   cd bookwave
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Variables:
   Set up a `.env` file with the following:
   ```makefile
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   STRIPE_API_KEY=your_stripe_api_key
   ```

4. Run the project:
   ```bash
   npm start
   ```

### Frontend Setup:

1. Navigate to the frontend directory:
   ```bash
   cd bookwave
   ```

2. Install Vite and dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm run dev
   ```

---

## Usage

### User Registration and Authentication:
Secure registration and login via Firebase Authentication.

### Browsing, Purchasing, and Downloading Ebooks:
Explore the ebook catalog, purchase securely, and download for offline reading.

### Connect (Community Feature):
Users can connect with other readers, join discussions, and create groups.

### Rental (Lend and Borrow):
Users can lend or borrow ebooks from each other, with transaction management for secure lending periods.

---

## Features

### Connect:
- Create profiles to interact with others.
- Join and participate in groups and discussions based on genres, authors, or specific books.
- Send friend requests and manage a friend list.

### Rental (Lend and Borrow):
- Lend books to other users for a set period.
- Borrow books with agreed-upon terms.
- View rental history, request renewals, and receive due date notifications.

---

## API Endpoints

### User Authentication:
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: User login.
- `POST /api/auth/logout`: User logout.

### Ebooks:
- `GET /api/ebooks`: Retrieve list of available ebooks.
- `GET /api/ebooks/:id`: Retrieve specific ebook details.
- `POST /api/ebooks/download`: Initiate ebook download (requires authentication).

### Connect:
- `GET /api/connect/groups`: Retrieve list of groups.
- `POST /api/connect/groups/join`: Join a specific group.
- `POST /api/connect/friend`: Send a friend request.

### Rental:
- `POST /api/rentals/lend`: Lend an ebook to another user.
- `POST /api/rentals/borrow`: Borrow an ebook from another user.
- `GET /api/rentals/history`: View rental history.

---

## Data Model

### Users:
```json
{
  "userId": "string",
  "email": "string",
  "purchasedEbooks": ["ebookId1", "ebookId2"],
  "friendList": ["userId1", "userId2"],
  "groups": ["groupId1", "groupId2"]
}
```

### Ebooks:
```json
{
  "ebookId": "string",
  "title": "string",
  "author": "string",
  "price": "number",
  "description": "string",
  "availability": "owned/lent/available"
}
```

### Rentals:
```json
{
  "rentalId": "string",
  "lenderId": "string",
  "borrowerId": "string",
  "ebookId": "string",
  "startDate": "timestamp",
  "dueDate": "timestamp",
  "status": "active/completed"
}
```

---

## User Stories

- As a user, I want to connect with other readers, share recommendations, and join groups.
- As a user, I want to lend my books to others and borrow books that interest me.
- As a user, I want to receive notifications on due dates for borrowed books.
- As a user, I want to purchase ebooks and download them for offline reading.

---

## Mockups

Visualizations of the Connect and Rental features are included in the project documentation.

---

## Deployment

BookWave is deployed with the following setup:

- **Frontend:** Vercel
- **Backend:** Heroku and Firebase
- **Database:** Firebase Firestore
- **DNS and Security:** Cloudflare

For a production environment, ensure configurations for performance, scalability, and security are optimized.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

