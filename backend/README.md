# Backend

## Requirements

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- The following npm packages (will be installed with `npm install`):
  - express
  - cors
  - nodemailer
  - nodemon (for development)

A minimal Express backend for your portfolio project.

## Email Sending Setup

To enable email sending, create a `.env` file in the `backend/` directory with the following:

```
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_RECEIVER=your_gmail_address@gmail.com  # or any email to receive contact messages
```

- For Gmail, you must use an "App Password" (see https://support.google.com/accounts/answer/185833 for instructions).
- Never commit your `.env` file to version control.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the server in development mode (with auto-reload):
   ```sh
   npm run dev
   ```

   Or start normally:
   ```sh
   npm start
   ```

## API

- `GET /api/hello` — returns `{ message: 'Hello from backend!' }`
- `POST /api/contact` — accepts `{ name, email, subject, message }` in JSON body. Sends an email to your configured address and returns `{ success: true, message: 'Message received and email sent!' }`.

## Configuration
- The server runs on port `4000` by default (or set `PORT` env variable). 