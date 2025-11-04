# Automated Portfolio Webpage

A modern web application built with React and TypeScript, featuring an admin panel for managing profile data.

## ✨ Features

- 🛡️ Protected admin routes for secure content management.
- 🎨 Modern UI components using Radix UI and Shadcn UI.
- 💾 Supabase integration for backend services.
- 📝 Form validation with Zod and React Hook Form.
- 🖼️ Media management capabilities.

## 🛠️ Tech Stack

| Category     | Technologies                                    |
|--------------|-------------------------------------------------|
| Frontend     | React, TypeScript, Radix UI, Shadcn UI, Tailwind CSS |
| Backend      | Supabase                                        |
| State Management | TanStack React Query                           |
| Form Management | React Hook Form, Zod                            |
| Routing      | React Router DOM                                |
| Build Tool   | Vite                                            |
| Linter       | ESLint                                          |

## 📦 Installation & Setup

1.  **Prerequisites:**
    -   Node.js (>=18)
    -   npm or yarn

2.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd aero-noir-folio
    ```

3.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

4.  **Environment Variables:**

    Create a `.env` file in the root directory with the following variables, replacing the placeholder values with your Supabase credentials:

    ```
    VITE_SUPABASE_PROJECT_ID="your_supabase_project_id"
    VITE_SUPABASE_PUBLISHABLE_KEY="your_supabase_publishable_key"
    VITE_SUPABASE_URL="your_supabase_url"
    ```

5.  **Run in development mode:**

    ```bash
    npm run dev # or yarn dev
    ```

    This will start the development server, usually at `http://localhost:5173`.

6.  **Build for production:**

    ```bash
    npm run build # or yarn build
    ```

    This will create a `dist` directory containing the production-ready build.

## 🚀 Usage

1.  **Access the application:**

    Open your browser and navigate to the address where the development server is running (e.g., `http://localhost:5173`).

2.  **Admin Panel:**

    -   Navigate to `/admin/login` to access the login page. The `ProtectedRoute.tsx` file currently allows access to all users. Implement proper authentication logic for production.
    -   After "logging in", you'll be redirected to the admin dashboard at `/admin`.
    -   Use the sidebar to navigate to different sections: Profile, Projects, Experience, Skills, Education, Certifications, Volunteering, Contacts, and Media.
    -   Each section provides a form to manage the corresponding data.

## 📂 Project Structure

```
aero-noir-folio/
├── .env                       # Environment variables
├── .gitignore                 # Specifies intentionally untracked files that Git should ignore
├── README.md                  # Project documentation
├── components.json            # Configuration for Shadcn UI components
├── eslint.config.js           # ESLint configuration
├── index.html                 # Main HTML entry point
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── public/
│   └── robots.txt             # Robots.txt file for SEO
├── src/
│   ├── App.tsx                # Main application component
│   ├── admin/
│   │   ├── ProtectedRoute.tsx   # Route protection for admin pages
│   │   ├── components/
│   │   │   ├── AdminLayout.tsx  # Layout for admin pages
│   │   │   └── Sidebar.tsx      # Sidebar navigation component
│   │   ├── pages/
│   │   │   ├── CertificationsPage.tsx # Certifications management page
│   │   │   ├── ContactsPage.tsx       # Contacts management page
│   │   │   ├── EducationPage.tsx      # Education management page
│   │   │   ├── ExperiencePage.tsx     # Experience management page
│   │   │   ├── MediaManagerPage.tsx   # Media management page
│   │   │   └── ProfilePage.tsx        # Profile management page
```

## 🔑 API Documentation

The project utilizes Supabase for backend services. The admin pages provide a UI for managing data, but the actual API endpoints would need to be implemented using Supabase functions or a separate backend.


## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

## 🙏 Thanks + Attribution

-   This project uses components from Radix UI and Shadcn UI.
-   Supabase provides the backend infrastructure.
-   React Router DOM for frontend routing.

_This README was generated using [GitRead](https://git-read.vercel.app)_
