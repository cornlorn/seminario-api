# 🧩 Seminario: Taller de Software

An **Express.js MVC** template showcasing CRUD operations and RESTful API design principles, developed as part of the *Seminario: Taller de Software* course.

---

## 🚀 Features
- RESTful API endpoints for all CRUD operations  
- **Sequelize ORM** with **MySQL** integration  
- Configurable environments using `.env`  
- Modular **MVC** structure (`src/models`, `src/controllers`, `src/routes`)  
- Centralized error handling  
- Preconfigured scripts for development and production  

---

## 🧱 Tech Stack
- **Node.js** — Runtime environment  
- **Express.js** — Web framework  
- **Sequelize** — ORM for MySQL  
- **MySQL** — Relational database  
- **dotenv** — Environment variable management  

---

## 🧩 Project Structure
```
seminario-api/
├── src/
│   ├── config/           # Database config
│   ├── controllers/      # Business logic
│   ├── models/           # Sequelize models
│   ├── routes/           # API routes
│   ├── validations/      # Validations middleware
│   └── index.js          # Express app setup
│
├── .env.example          # Example environment variables
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

---

## ⚙️ Installation
```bash
# Clone the repository
git clone https://github.com/cloxious/seminario-api.git
cd seminario-api

# Install dependencies
npm install
```

---

## 🔧 Environment Setup
Create a `.env` file in the root directory with the following content:

```env
PORT=3000
DB_HOST=localhost
DB_USER=db_username
DB_PASS=db_password
DB_NAME=db_name
```

*(You can copy `.env.example` and modify values as needed.)*

---

## 🧪 Running the Server
To start the development server:
```bash
npm run dev
```

To run in production mode:
```bash
npm start
```

The API will be available at [http://localhost:3000](http://localhost:3000)

---

## 🧠 Notes
- Main entry point: `src/index.js`  
- Default port: **3000**  
- Ensure MySQL is running before starting the app.  
- Additional scripts, migrations, or seeds can be placed inside `/src/scripts` or `/db`.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
