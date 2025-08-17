# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases your skills, projects, and experience in a clean and professional manner.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Toggle between themes
- **Modern UI**: Built with Tailwind CSS for a clean look
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Display your projects with details and links
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Technologies Used

- **Frontend**:
  - Next.js 13+ (App Router)
  - React 18+
  - Tailwind CSS
  - Framer Motion (for animations)
  - Lucide Icons

- **Backend**:
  - Next.js API Routes
  - Nodemailer (for contact form)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- npm or pnpm (recommended)
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # or using pnpm (recommended)
   pnpm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   NEXT_PUBLIC_EMAIL_RECIPIENT=your-email@gmail.com
   ```

4. **Run the development server**
   ```bash
   # Using npm
   npm run dev
   
   # or using pnpm
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Your Information
- Update your personal information in the respective component files:
  - `app/page.jsx` - Main page content
  - `components/hero.jsx` - Hero section
  - `components/projects.jsx` - Projects section
  - `components/skills.jsx` - Skills section
  - `components/experience.jsx` - Experience section
  - `components/contact.jsx` - Contact section

### Styling
- The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`
- Colors and other design tokens can be updated in the `tailwind.config.js` file

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/new) and import your repository
3. Add the environment variables in the Vercel dashboard
4. Click Deploy

### Other Platforms
This project can be deployed to any platform that supports Next.js, including:
- Netlify
- AWS Amplify
- Heroku
- Docker

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)

## 📬 Contact
Your Name - [@your-twitter](https://twitter.com/your-twitter) - your.email@example.com

Project Link: [https://github.com/your-username/portfolio-website](https://github.com/your-username/portfolio-website)
