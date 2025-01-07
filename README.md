# File Uploader

## Purpose

To practice using Prisma ORM to manage a database.

Built with: Express, Node, PostgreSQL, Prisma, EJS, Adobe Illustrator, PassportJS

## Features

<!-- - Authentication with PassportJS
- Protects passwords using bcrypt for hashing and salting
- Prevents unauthenticated users from accessing protected routes
- Restrict access to certain CRUD functionalities based on the user's role
- Server-side validation and sanitization of form inputs
- Change user role with secret passwords -->

## Database Schema

![Database schema diagram](./public/images/db-schema.png)

## Adobe Illustrator Designs

![Figma designs](./public/images/figma-designs.png)

## Getting Started

Follow these steps to get the application running locally on your system.

1. Make sure you have the following installed on your system:

  - Node.js (version 20.15.1 or higher)
  - PostgreSQL client to interact with the database
  - Any code editor (e.g. VS Code)

2. In a terminal, clone the repository

```bash
  git clone https://github.com/strallia/file-uploader.git
```

3. Navigate to the project directory

```bash
cd file-uploader
```

4. Install Dependencies

```bash
npm install
```

5. Create a `.env` file in the root directory of the project and add the following environment variables, replacing the values inside `< >` with your own credentials:

```bash
DATABASE_URL="postgresql://<dbuser>:<secretpassword>@localhost:5432/file_uploader"
SESSION_SECRET="superSecretSessionPassword"

# Secret passwords for role upgrades
ADMIN_PASS="<any password>"
PREMIUM_PASS="<any password>"
```

6. Start the Development Server

```bash
npm start
```

This will launch the app at http://localhost:3000.