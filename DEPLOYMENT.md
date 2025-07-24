# Vercel Deployment Guide

## Overview
Your portfolio is now configured for full-stack deployment on Vercel with:
- **Frontend**: Vite + React + TypeScript
- **Backend**: Serverless functions in `/api` directory

## Deployment Steps

### 1. Environment Variables
In your Vercel dashboard, add these environment variables:
- `EMAIL_USER`: Your Gmail address (e.g., kushagra263139@gmail.com)
- `EMAIL_PASS`: Your Gmail app password (e.g., xgpzthuupnehmqos)
- `EMAIL_RECEIVER`: Email to receive contact form submissions

### 2. Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the configuration from `vercel.json`
4. Deploy!

## API Endpoints
- `GET /api/hello` - Test endpoint
- `POST /api/contact` - Contact form submission

## Files Created/Modified
- `/api/hello.js` - Hello endpoint as serverless function
- `/api/contact.js` - Contact form endpoint as serverless function
- `vercel.json` - Vercel deployment configuration
- `package.json` - Added nodemailer dependency
- `DEPLOYMENT.md` - This deployment guide

## Notes
- The original `/backend` folder is no longer needed for deployment
- All backend functionality is now handled by serverless functions
- Frontend will automatically use the same domain for API calls
