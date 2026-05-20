# Staybnb — Airbnb Clone

A full-stack Airbnb clone built with React + Node.js.

## Tech Stack

**Frontend**
- React 18 + React Router v6
- Zustand (state management)
- Tailwind CSS
- Axios
- Stripe.js

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Redis (session caching)
- Cloudinary (image uploads)
- Stripe (payments)
- Nodemailer (email)
- JWT auth

---

## Getting Started

### 1. Clone & install

```bash
git clone <your-repo-url>
cd airbnb-clone
npm run install:all
```

### 2. Configure environment variables

**Server** — copy `server/.env.example` to `server/.env` and fill in:

```
MONGO_URI=mongodb://localhost:27017/airbnb-clone
JWT_SECRET=your_secret_here
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
```

**Client** — copy `client/.env.example` to `client/.env`:

```
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_GOOGLE_MAPS_API_KEY=...
```

### 3. Start MongoDB (and optionally Redis)

```bash
# MongoDB
mongod

# Redis (optional, for caching)
redis-server
```

### 4. Run

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

---

## Features

| Feature | Details |
|---|---|
| Auth | JWT login/register, become-a-host flow |
| Listings | CRUD, search by city/dates/guests/price, categories |
| Bookings | Date conflict checking, confirmation emails, cancellation |
| Payments | Stripe PaymentIntents + webhooks |
| Reviews | Post-stay reviews with sub-ratings, host replies |
| Host dashboard | Listing management, booking overview, revenue stats |
| Wishlist | Save/unsave listings per user |
| Images | Cloudinary upload with transformations |

---

## Project Structure

```
airbnb-clone/
├── server/
│   ├── config/          # DB, Redis, Cloudinary
│   ├── controllers/     # authController, listingController, bookingController, ...
│   ├── middleware/      # auth.js (protect, requireHost, optionalAuth)
│   ├── models/          # User, Listing, Booking, Review
│   ├── routes/          # auth, listings, bookings, reviews, payments, users
│   ├── utils/           # email.js
│   └── index.js         # Express app entry
│
└── client/
    └── src/
        ├── api/         # axios instance
        ├── components/  # Navbar, Footer, ListingCard, ProtectedRoute
        ├── pages/       # All pages
        ├── store/       # Zustand authStore
        └── App.jsx      # Router
```

---

## Stripe Setup

1. Create a Stripe account at stripe.com
2. Get your test keys from the Dashboard
3. To test webhooks locally:
   ```bash
   stripe listen --forward-to localhost:5000/api/payments/webhook
   ```
4. Use test card `4242 4242 4242 4242` with any future expiry

---

## Deployment

**Backend** → Render or Railway (set env vars in dashboard)

**Frontend** → Vercel or Netlify (set `VITE_API_URL` to your deployed backend URL)

**MongoDB** → MongoDB Atlas (free tier available)
