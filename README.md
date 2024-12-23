# Gym App

A comprehensive Gym App project with separate frontend and backend implementations. The project aims to provide a seamless user experience for gym management and fitness enthusiasts. The frontend is developed using ReactJS, while the backend is built using Node.js and Express.js.

## Features

### Frontend
- **Components**:
  - `Header`: Displays the app's main header and branding.
  - `Footer`: Provides contact information and footer links.
  - `Gallery`: Showcases gym images.
  - `Hero`: Highlights key features or promotions.
  - `Navbar`: Provides navigation between different sections.
  - `Pricing`: Displays membership plans and pricing details.
  - `WorkoutSessions`: Lists workout sessions and schedules.
  - `BMICalculator`: Allows users to calculate their Body Mass Index.

### Backend
- **API and Utilities**:
  - Developed using Node.js and Express.js.
  - `utils/sendEmail.js`: Handles email sending functionality using the Nodemailer package.

## Folder Structure

### Frontend
```
frontend/
|-- public/
|-- src/
    |-- components/
        |-- Header/
        |-- Footer/
        |-- Gallery/
        |-- Hero/
        |-- Navbar/
        |-- Pricing/
        |-- WorkoutSessions/
        |-- BMICalculator/
    |-- App.js
    |-- index.js
```

### Backend
```
backend/
|-- app.js
|-- utils/
    |-- sendEmail.js
```

## Technologies Used

### Frontend
- ReactJS
- HTML, CSS, and JavaScript

### Backend
- Node.js
- Express.js
- Nodemailer (for email functionality)

## Installation and Setup

### Prerequisites
- Node.js installed
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gym-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd gym-app
   ```

#### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

#### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```

## Usage
- Open your browser and navigate to `http://localhost:3000` for the frontend.
- Use API endpoints from the backend for additional functionality.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
