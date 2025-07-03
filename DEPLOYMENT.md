# Deployment Guide

## Environment Variables

For the application to work properly, you need to set up the following environment variable:

### Local Development

Create a `.env.local` file in the project root with:

```
VITE_API_URL=http://localhost:8000
```

### Vercel Deployment

In your Vercel dashboard, add the following environment variable:

- **Name:** `VITE_API_URL`
- **Value:** Your backend API URL (e.g., `https://your-api-service.com`)

## Backend Options

Since this app currently uses a local JSON server, you'll need to deploy the backend separately. Here are your options:

### Option 1: JSON Server on Railway (Recommended)

1. Create a new repository with your `cities.json` file
2. Add a `package.json` with json-server dependency
3. Deploy to Railway
4. Set the Railway URL as your `VITE_API_URL`

### Option 2: Vercel Functions

Create API routes in a `api/` folder in your project.

### Option 3: Use a Database Service

- Supabase
- Firebase
- PlanetScale

## Deployment Steps

1. Set up your backend API
2. Update the `VITE_API_URL` environment variable
3. Push to GitHub
4. Deploy to Vercel
