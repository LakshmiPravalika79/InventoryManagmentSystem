# Inventory Management System 🚀

A full‑stack **Inventory Management System (IMS)** consisting of:

* **Backend** – Java 17, Spring Boot, Spring Data JPA, MySQL  
* **Frontend** – React 18 (Vite)  

The project lets you register users, sign‑in, and manage products, suppliers, and stock levels through a modern REST API and a React dashboard.

---

## ✨ Key Features

| Area        | Feature                                          | Status |
|-------------|--------------------------------------------------|--------|
| Authentication | **Sign‑Up / Sign‑In** endpoints with hashed passwords | ✅ Done |
| Email | SMTP helper to send password‑recovery mail             | ✅ Done |
| Inventory | CRUD for products, categories & suppliers          | ⏳ Planned |
| Frontend UI | React dashboard (Vite) with charts               | ⏳ Planned |
| Tests | JUnit test‑suite for critical services                 | ⚙️ Basic |

---

## 🗂️ Repository Layout

```text
InventoryManagmentSystem/
├── Backend/
│   └── InventoryManagementSystem/        # Spring‑Boot project root
│       ├── src/main/java/ims/
│       │   ├── controller/               # REST controllers (UsersController …)
│       │   ├── model/                    # JPA entities + service layer
│       │   ├── repository/               # Spring‑Data repositories
│       │   └── InventoryManagementSystemApplication.java
│       ├── src/main/resources/
│       │   └── application.properties
│       └── pom.xml
└── Frontend/
    └── InventoryManagementSystem/        # React + Vite app
        ├── src/
        ├── public/
        └── package.json
```

---

## 🛠️ Prerequisites

| Tool | Version |
|------|---------|
| **Java** | 17 (LTS 11+ works) |
| **Maven** | 3.8+ |
| **Node JS** | 18 (LTS) |
| **MySQL / MariaDB** | 8.x |
| **Git** | latest |

---

## ⚙️ Local Setup

### 1. Clone

```bash
git clone https://github.com/LakshmiPravalika79/InventoryManagmentSystem.git
cd InventoryManagmentSystem
```

### 2. Configure Environment

Create a file called `.env` (it is *git‑ignored* in `.gitignore`) and copy the following keys:

```properties
# ─── SPRING BOOT ──────────────────────────────────────────────
SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/inventorymanagement
SPRING_DATASOURCE_USERNAME=<MYSQL_USER>
SPRING_DATASOURCE_PASSWORD=<MYSQL_PASSWORD>
SPRING_MAIL_USERNAME=<GMAIL_ADDR>
SPRING_MAIL_PASSWORD=<GMAIL_APP_PASSWORD>
JWT_SECRET=<RANDOM_SECRET>

# ─── FRONTEND ───
VITE_API_BASE_URL=http://localhost:8080
```

### 3. MySQL

```sql
CREATE DATABASE inventorymanagement;
```

Spring Boot creates the `users` table automatically because `spring.jpa.hibernate.ddl‑auto=update`.

### 4. Backend

```bash
cd Backend/InventoryManagementSystem
mvn spring-boot:run
```

The REST API will be live at **<http://localhost:8080>**.

### 5. Frontend

```bash
cd ../../Frontend/InventoryManagementSystem
npm install
npm run dev
```

The Vite dev‑server runs at **<http://localhost:5173>** (CORS enabled in the backend).

---

## 🔌 REST API Quick‑Start

| Verb | Endpoint        | Body                                   | Description               |
|------|-----------------|----------------------------------------|---------------------------|
| POST | `/users/signup` | `{ fullname,email,password,phonenum }` | Register a new user       |
| POST | `/users/signin` | `{ email,password }`                   | Login & receive status msg|



---

## 🧪 Running Tests

```bash
cd Backend/InventoryManagementSystem
mvn test
```

---

## 📊 Screenshots / Demo

![image](https://github.com/user-attachments/assets/5761e4cc-525f-4201-9ed4-5d9f284de4ae)

| Sign‑Up | Sign‑In |
|---------|---------|
|![image](https://github.com/user-attachments/assets/6c618271-37de-4404-87dd-e6b89cf1d3cb)|![image](https://github.com/user-attachments/assets/213d764f-50d8-40a5-ae3c-ad9fb0c23d97)|

![image](https://github.com/user-attachments/assets/4b9ef2e8-521d-4850-9865-e3a27b3dba69)
---

## 🤝 Contributing

1. **Fork** the repo  
2. Create a new branch: `git checkout -b feature/<name>`  
3. Commit your changes  
4. Push and open a Pull Request  

---

## 📝 License

Distributed under the **MIT License** – see [`LICENSE`](LICENSE) for details.

---

### 📬 Connect 

*Lakshmi Pravalika* – [@LakshmiPravalika79](https://github.com/LakshmiPravalika79)

<a href="https://www.linkedin.com/in/lakshmipravalikaega/" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="25" height="25"/>
</a>

Feel free to open issues for bugs, feature requests, or general questions!
