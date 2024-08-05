## Nissan Experience

**What is Nissan Experience?**
A responsive web application that showcases Nissan's vehicle lineup, provides detailed information about each model, and offers a simulated purchase experience.

![Homepage](https://github.com/user-attachments/assets/119e100a-b3dd-4bf7-a435-1991b9e2a905)
![Car Grids](https://github.com/user-attachments/assets/c09579c0-d4ba-4c5e-858a-963918c1f29e)
![Car Details](https://github.com/user-attachments/assets/eeac528a-5b96-4766-9ddb-e0b07a4cfcfb)
![Checkout Page](https://github.com/user-attachments/assets/f788bd4c-14be-40ad-a20b-b320a469a601)
![Stripe Payment](https://github.com/user-attachments/assets/a2b7d642-2b46-40c6-9bf7-a2dfb5755136)
![Contact form](https://github.com/user-attachments/assets/9c6e06c4-cfad-4d25-98b3-7a0531d4f6e5)

### Key Features

- Browse vehicles by category
- Responsive homepage with dynamic background image
- Desktop/mobile friendly vehicle grid
- Detailed "Details" page for each model
- Simulated "Buy" button with Stripe integration (TESTING MODE)
- Contact form

### Tech Stack

- Vite (Build tool)
- React (Front-end UI)
- Tailwind CSS (Styling)
- Node.js (Back-end runtime)
- Express.js (API framework)
- PostgreSQL (Database)
- Stripe (Payment processing)

### Installation and Setup

1.  Clone this repository.
2.  `npm i` to install dependencies.
3.  Create a `.env` file based on the provided `.env.example` template.
4.  `npm run database` to run the database.
5.  `npm run stripe` to run the stripe server.
6.  `npm run server` to run mock server for contact form submissions.
7.  `npm run dev` to run the project.

**Note:**

- If needed, I can provide a separate, secure file with the required environment variables upon request.
- You can still run the project without using `npm run server`. Only use it if you really want to see the JSON update when a form is submitted.

## Database Schema

The Nissan Experience project utilizes a PostgreSQL database to store and manage vehicle data. The schema `cars_details` is structured as follows:

- **`vehicles`:** Contains essential vehicle information like model, category, price, and an overview.
- **`images`:** Stores various images associated with each vehicle, including thumbnails and different sizes for display purposes.
- **`performance`:** Holds performance-related data (e.g., horsepower, torque) for each vehicle.
- **`features`:** Lists the unique features and selling points of each vehicle.
- **`specifications`:** Provides technical specifications (e.g., engine type, fuel economy) for each vehicle.

The relationships between tables are as follows:

- The `vehicles` table has one-to-many relationships with each of the other tables, meaning one vehicle can have multiple images, performance values, features, and specifications.

This relational structure allows for efficient storage and retrieval of vehicle data, enabling the application to display detailed information and potentially filter vehicles based on various criteria.

**Graph showing the structure of the database:**

![DB Schema](https://github.com/user-attachments/assets/2ab9c5eb-50ee-44d3-8f0a-94207ac99c18)

**Note:**

The `id` column in the `vehicles` table serves as the Primary Key, uniquely identifying each vehicle, while also acting as a Foreign Key in the other tables, establishing the relationship between each vehicle and its associated images, performance data, features, and specifications.

## Project Dependencies

This document outlines the Node Package Manager (NPM) dependencies used in this project.

### Important Packages

- **react-router-dom:** Provides routing functionalities for navigating between different pages within your React application. You can install it using:

```bash
npm i react-router-dom
```

- **express.js:** Simplifies the process of building web applications and APIs by providing tools for routing, middleware (functions that can access and modify requests and responses), and handling HTTP requests and responses.

```bash
npm i express
```

- **cors:** Controls how a web page from one origin (domain, protocol, port) can access resources from another origin. CORS helps prevent potential malicious activity by restricting cross-origin requests unless explicitly allowed by the server.

```bash
npm i cors
```

- **dotenv:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

```bash
npm i dotenv
```

- **pg:** Allows you to interact with your PostgreSQL database from your Node.js applications. PG provides functions for connecting to the database, executing queries, and handling results.

```bash
npm i pg
```

- **stripe** : Provides the Stripe Node.js library to interact with the Stripe API from your backend server (creating payment intents, etc.). Used only in your backend (Node.js/Express):

  ```bash
  npm i stripe.
  ```

### Useful Packages

- **react-icons:** Enables the usage of icons from popular icon libraries like Font Awesome. Install it with:

```bash
npm i react-icons
```

- **react-toastify:** Provides notification functionality (e.g., toast messages) for user feedback.

```bash
npm i react-toastify
```

- **framer-motion:** A simple yet powerful motion library for React. It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed:

  ```bash
  npm i framer-motion
  ```

### Development Dependency

- **json-server** (dev dependency): A lightweight JSON server for creating a mock API. Install it for development purposes with the `-D` flag:

```bash
npm i -D json-server
```

**Note:**

- Remember to add `json-server` to your `package.json` file before running the server.
- Start the mock server using:

```bash
npm run server
```

## License

This project is licensed under the MIT License - see the [See the LICENSE file for details](LICENSE) file for details.
