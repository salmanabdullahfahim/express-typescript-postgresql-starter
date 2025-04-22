# Express Typescript PostgreSQL Starter

A robust starter template for building REST APIs using Express.js, PostgreSQL, Prisma ORM, and TypeScript.

## Features

- 🚀 Express.js with TypeScript
- 📦 PostgreSQL database with Prisma ORM
- ⚡ Rate Limiting
- 🌐 CORS enabled
- 🔄 Request Validation using Zod
- 🎯 Error Handling
- 🔒 Environment Variables Support

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm/yarn

## Getting Started

1. Clone the repository:

```sh
git clone <repository-url>
cd express-typescript-postgresql-starter
```

2. Install dependencies:

```sh
npm install
```

3. Configure environment variables:

```sh
cp  .env
```

Fill in the `.env` file with your configuration:

- `NODE_ENV`: development or production
- `DATABASE_URL`: Your PostgreSQL connection string
- `PORT`: Server port (default: 5000)
- `JWT_SECRET`: Secret key for JWT tokens
- Other JWT configuration variables

4. Run database migrations:

```sh
npx prisma migrate dev
```

5. Start development server:

```sh
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run start:prod` - Run the built production server

## API Routes

- Auth Routes (`/api/v1/auth`)
  - POST `/login` - User login

## Project Structure

```
src/
  ├── app/
  │   ├── errors/
  │   ├── middleware/
  │   ├── modules/
  │   ├── routes/
  │   └── shared/
  ├── config/
  ├── helpers/
  ├── app.ts
  └── server.ts
```

## Error Handling

The application includes a global error handler and custom `ApiError` class for consistent error responses.

## Database

- PostgreSQL with Prisma ORM
- Structured database schema
- Efficient query handling

## Deployment

The project includes Vercel deployment configuration in `vercel.json`.

## License

[MIT License](LICENSE)
