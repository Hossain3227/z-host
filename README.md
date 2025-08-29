# 🌴 Z-host - Vacation Rental Platform

A  booking platform built with the MERN stack, featuring role-based access and secure payment processing.



## 📋 Features

### For Guests (Travelers)
- Browse available properties without authentication
- View property details after login/registration
- Book properties with date selection
- Secure payment processing with Stripe
- Personal dashboard with booking statistics

### For Hosts (Property Owners)
- List properties for rental
- Manage property availability and pricing
- View booking requests and earnings
- Host dashboard with performance analytics

### For Administrators
- Manage users, properties, and bookings
- Monitor platform performance
- Admin dashboard with platform analytics

## 🛠️ Installation & Setup


### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/z-host.git
   cd stayease
   ```

2. **Install dependencies for both client and server**
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```



3. **Run the application**
   ```bash
   # Start the backend server (from root directory)
   nodemon index.js
   
   # Start the frontend client (from client directory in a new terminal)
   cd client
   npm run dev
   ```




## 🔧 Technologies Used

### Frontend
- React.js
- Tailwind CSS
- React Router
- React Query (TanStack Query)
- Axios
- Stripe.js

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Firebase Auth

### Payment Processing
- Stripe API

### Deployment
- Firebase (Frontend)
- Vercel (Backend)
