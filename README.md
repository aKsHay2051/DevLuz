# DevLuz - Personal Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing my web development services and projects.

![DevLuz Screenshot](screenshot.png)

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Elements**: Engaging user interactions and hover effects
- **Performance Optimized**: Fast loading and smooth scrolling
- **Contact Integration**: Email form and WhatsApp integration
- **SEO Friendly**: Optimized for search engines

## 🛠️ Built With

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and design
- **EmailJS** - Contact form functionality
- **React Router** - Navigation
- **Heroicons** - Icons
- **Custom Animations** - Enhanced user experience

## 📦 Project Structure

devluz/
├── src/
│ ├── components/
│ │ ├── About.jsx # About section component
│ │ ├── Contact.jsx # Contact form with EmailJS integration
│ │ ├── Footer.jsx # Footer component
│ │ ├── Hero.jsx # Hero/Landing section
│ │ ├── Navbar.jsx # Navigation bar component
│ │ ├── Process.jsx # Development process section
│ │ ├── Services.jsx # Services showcase component
│ │ └── TechStack.jsx # Technology stack section
│ ├── App.jsx # Main application component
│ ├── index.js # Application entry point
│ └── index.css # Global styles and Tailwind imports
├── public/
│ ├── index.html # HTML template
│ └── favicon.ico # Site favicon
├── package.json # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
└── .env # Environment variables

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/devluz.git
```

2. **Install dependencies**

```bash
cd devluz
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_WHATSAPP_NUMBER=your_whatsapp_number
```

4. **Run the development server**

```bash
npm start
```

## 📱 Services

- **Full Stack Development**

  - End-to-end web applications with MERN stack
  - Database integration
  - API development
  - Frontend implementation

- **Landing Page Development**

  - High-performance landing pages
  - SEO optimization
  - Modern design implementation
  - Analytics integration

- **Backend Development**
  - Robust server architecture
  - Database design
  - API development
  - Authentication systems

## 📧 Contact Setup

### EmailJS Configuration

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Add your credentials to `.env`
4. Template variables:
   - `from_name`
   - `from_email`
   - `message`

### WhatsApp Integration

- Add your WhatsApp number to `.env`
- Format: Country code + number (e.g., 919074592275)
- Direct chat link format: `https://wa.me/YOUR_NUMBER`

## 💻 Development

- Built with React.js for dynamic UI
- Styled using Tailwind CSS
- Responsive design for all devices
- Interactive animations and transitions
- Form validation and error handling
- Smooth scroll behavior
- Modern component architecture

## 🌐 Live Demo

[View Live Demo](https://your-demo-link.com)

## 📞 Contact

- WhatsApp: [Click here](https://wa.me/919074592275)
- Email: [your.email@example.com](mailto:your.email@example.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
