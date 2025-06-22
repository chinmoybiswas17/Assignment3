# Library Management System API

A RESTful API built with Node.js, Express, TypeScript, MongoDB, and Zod validation for managing books and borrowing operations in a library.

---

##  Features

- **Book Management**: Create, Read, Update, and Delete books
- **Filtering & Sorting**: Filter books by genre, sort by creation date
- **Borrowing System**: Borrow books with quantity tracking
- **Aggregation Summary**: Get total borrowed quantity per book
- **Schema Validation**: Strong validation using Zod and Mongoose
- **Mongoose Static Methods & Middleware**: Business logic for availability

---

## 🔧 Technologies Used

`Node.js`
`Express.js (v4)`
`TypeScript`
`MongoDB & Mongoose`
`Zod (for validation)`
`ts-node-dev (for development)`

---

## API Endpoints

#### Create Book

`POST /api/books`

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "Overview of cosmology",
  "copies": 5
}
```

#### Get All Books (with filters)

`GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

#### Get Book by ID

`GET /api/books/:bookId`

#### Update Book

`PATCH /api/books/:bookId`

#### Delete Book

`DELETE /api/books/:bookId`

---

### 📥 Borrow Routes

#### Borrow Book

`POST /api/borrow`

```json
{
  "book": "<bookObjectId>",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```
#### Business Logic:

`Verifies the book exists.`

`Checks enough copies are available.`

`Deducts borrowed quantity from book’s copies.`

`Updates available to false if copies become 0.`

`Saves borrow record.`

#### Borrow Summary

`GET /api/borrow`

```json
{
  "success": true,
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}
```

#### Validation & Error Handling

`All input data is validated using Zod schemas.`

`Validation failures return HTTP 400 with descriptive messages.`

`Centralized error handling middleware manages unexpected errors gracefully.`

### Start the server in dev mode:

`npm run dev`
