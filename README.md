# Definition Dash

Definition Dash is a web application developed as the final project for the Software Engineering class (CS436). This project serves as a foundation for a comprehensive platform that I plan to further develop as a side project. The application is built using modern web technologies and follows best practices for full-stack development.

## Features
- **Authentication System**: Includes sign-up, login, and password management.
- **Dynamic Pages**: Supports dynamic rendering of components based on user input.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Customizable Themes**: Light and dark mode support.
- **Level-Based Content**: Interactive levels for user engagement.

## Technologies Used
- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Supabase (for authentication and database management)
- **Other Tools**: TypeScript, ESLint, PostCSS

## Folder Structure
```
app/
  auth/          # Authentication-related pages
  home/          # Home page and components
  protected/     # Protected routes
  sign-in/       # Sign-in components
components/      # Reusable UI components
lib/             # Utility functions and Supabase client
public/          # Static assets (e.g., icons, images)
```

## Getting Started
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd definition-dash
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Environment Variables
Create a `.env.local` file in the root directory and configure the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Future Plans
- Add more interactive features and gamification elements.
- Implement advanced user analytics.
- Integrate additional third-party APIs.
- Enhance accessibility and performance.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Thanks to the CS436 instructors for their guidance.
- Special thanks to the open-source community for providing amazing tools and libraries.
