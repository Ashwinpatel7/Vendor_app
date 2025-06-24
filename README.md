# Vendor Management System

A complete web application built with Next.js for managing vendors with Google authentication.

## Features

- ✅ Google OAuth Login/Logout
- ✅ Create Vendor with required fields (Vendor Name, Bank Account No, Bank Name, Address Line 2)
- ✅ Display paginated list of vendors
- ✅ Edit vendor functionality
- ✅ Delete vendor with confirmation
- ✅ MongoDB database integration
- ✅ Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Authentication**: NextAuth.js with Google Provider
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file and add:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=mongodb://localhost:27017/vendor-management
```

### 3. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### 4. MongoDB Setup
- Install MongoDB locally or use MongoDB Atlas
- Update MONGODB_URI in .env.local

### 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
- Update NEXTAUTH_URL to your production domain
- Use MongoDB Atlas for production database
- Keep Google OAuth credentials secure

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/
│   │   └── vendors/
│   ├── vendors/
│   │   ├── create/
│   │   └── edit/[id]/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── lib/
│   ├── models/
│   │   └── Vendor.ts
│   └── mongodb.ts
└── types/
    └── global.d.ts
```

## API Endpoints

- `GET /api/vendors` - Get paginated vendors list
- `POST /api/vendors` - Create new vendor
- `GET /api/vendors/[id]` - Get single vendor
- `PUT /api/vendors/[id]` - Update vendor
- `DELETE /api/vendors/[id]` - Delete vendor

## Required Fields

- Vendor Name *
- Bank Account No *
- Bank Name *
- Address Line 2 *

## Optional Fields

- Address Line 1
- City
- Country
- Zip Code