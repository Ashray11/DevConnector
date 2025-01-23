# DevConnector

DevConnector is a social network application designed for developers to connect, share experiences, and collaborate on projects. Built using the MERN (MongoDB, Express.js, React, Node.js) stack, it offers functionalities such as user authentication, profile management, and forum posts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration system.
- **Profile Management**: Create and update developer profiles with experience and education details.
- **Posts and Comments**: Share posts and engage in discussions through comments.
- **GitHub Integration**: Display top repositories by adding your GitHub username.

## Installation

To set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ashray11/DevConnector.git
   ```
2. **Navigate to the project directory**:

  ```bash
  cd DevConnector
  ```
3. **Install server-side dependencies**:
  ```bash
    npm install
  ```
4. **Install client-side dependencies**:
  ```bash
  cd client
  npm install
  cd ..
  ```
5. ***Configure environment variables***:

- Create a `default.json` file in the `config` folder.
- Add the following variables:

```json
{
  "mongoURI": "your-mongodb-uri",
  "jwtSecret": "your-jwt-secret",
  "githubClientId": "your-github-client-id",
  "githubSecret": "your-github-secret"
}
```
6. ***Run the application***:
```bash
npm run dev
```
- This command will concurrently run both the server and client with hot-reload functionality.

## Usage
- **Register**: Create a new account to join the developer community.
- **Login**: Access your account using your credentials.
- **Dashboard**: Manage your profile, add experiences, and education details.
- **Developers**: View profiles of other registered developers.
- **Posts**: Create new posts, like, and comment on existing posts.

## Folder Structure
- **`client/`**: Contains the React frontend code.
- **`config/`**: Holds configuration files, including database connections.
- **`middleware/`**: Custom middleware functions for the application.
- **`models/`**: Mongoose models defining the data schema.
- **`routes/`**: Express routes for handling API requests.
- **`server.js`**: Entry point for the Express server.

## Contributing

Contributions are welcome! Please follow these steps:

### 1. Fork the repository

Click the "Fork" button at the top-right corner of the repository page.

### 2. Create a new branch

```bash
git checkout -b feature-branch-name
```

### 3. Commit your changes
```bash
git commit -m "Add feature"
```

### 4. Push to the branch
```bash
git push origin feature-branch-name
```

### 5. Open a pull request
Submit your pull request on GitHub.

Note: Ensure your code adheres to the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

*Note: This project is based on Brad Traversy's Udemy course "MERN Stack Front To Back: Full Stack React, Redux & Node.js".*
