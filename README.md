# ArtificialArtz - AI Automation Agency Website

A modern, responsive portfolio and lead generation website for ArtificialArtz AI automation agency.

## 🚀 Features

- **Dark Theme**: Professional dark theme with accent colors (#7c5cff)
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Tools**: Demo AI tools with Hugging Face API integration
- **Blog Integration**: Fetches latest posts from WordPress blog
- **Lead Generation**: Direct links to Fiverr and Bionluk profiles
- **Contact Form**: n8n webhook integration for contact submissions

## 📁 Project Structure

```
artificialartz-website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── js/
│   ├── components.js   # Shared components (Navbar, Footer)
│   ├── app.js          # Main app and home page
│   ├── tools.js        # Tools page with AI integrations
│   └── pages.js        # Services, About, Contact pages
└── README.md           # This file
```

## 🛠 Technologies Used

- **Frontend**: React (via CDN), Tailwind CSS
- **APIs**: Hugging Face Llama API, WordPress REST API
- **Integrations**: n8n webhooks, Fiverr, Bionluk

## 🎨 Design System

### Colors
- Background: `#0b0b0c`
- Text: `#f6f8fc`  
- Accent: `#7c5cff`
- Accent Light: `#9b8cff`

### Components
- Gradient logo "AA" in circle
- Rotating taglines with slide animation
- Hover effects on cards and buttons
- Mobile-responsive navigation

## 📱 Pages

1. **Home** - Hero section, featured tools, blog posts, CTA buttons
2. **Tools** - Hook Generator, YouTube Ideas, Blog Outline (demo tools)
3. **Services** - Automation Sprint ($199) and Content Engine ($299) packages
4. **About** - Bio, tech stack, and specializations
5. **Contact** - Contact form with n8n webhook integration

## 🚀 Deployment

### Google Cloud VM Deployment

1. **Copy files to server**:
   ```bash
   sudo cp -r * /var/www/html/
   sudo chown -R www-data:www-data /var/www/html/
   sudo chmod -R 755 /var/www/html/
   ```

2. **Configure Apache/Nginx**:
   - Ensure web server is running
   - Point domain to `/var/www/html/`
   - Enable HTTPS for production

3. **Environment Setup**:
   - Replace `'YOUR_HF_KEY'` in `js/tools.js` with actual Hugging Face API key
   - Update n8n webhook URL in `js/pages.js` contact form
   - Configure domain DNS to point to server IP

### Local Development

1. **Simple HTTP Server**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # PHP
   php -S localhost:8000
   
   # Node.js (if available)
   npx live-server
   ```

2. **Access**: Open `http://localhost:8000` in browser

## 🔧 Configuration

### API Keys Required

1. **Hugging Face API**: 
   - Get free API key from https://huggingface.co/settings/tokens
   - Replace `'YOUR_HF_KEY'` in `js/tools.js`

2. **n8n Webhook**:
   - Set up n8n workflow for contact form
   - Update webhook URL in contact form submission

### Blog Integration

The website fetches blog posts from:
`https://blog.artificialartz.xyz/wp-json/wp/v2/posts?per_page=3`

Ensure the WordPress blog is accessible and has REST API enabled.

## 🎯 Lead Generation Strategy

- **Primary CTAs**: Fiverr and Bionluk profile links
- **Tools**: Demo versions to showcase capabilities
- **Services**: Clear pricing and package descriptions  
- **Contact**: Direct webhook to n8n for lead capture
- **Social Proof**: Links to YouTube, X, LinkedIn

## 📊 Performance Optimizations

- Lazy loading for blog posts
- Minimal external dependencies
- Efficient API calls with error handling
- Responsive images and layouts
- Fast loading times

## 🔐 Security Notes

- All external links open in new tabs
- Input sanitization in contact form
- HTTPS recommended for production
- API keys should be environment variables in production

## 📞 Support

For questions about this website:
- Fiverr: https://www.fiverr.com/artificialartz
- Bionluk: https://www.bionluk.com/artificialartz
- Email: Via contact form on website

## 📄 License

© 2025 ArtificialArtz - All rights reserved

---

**Ready for deployment!** 🚀

This website is optimized for lead generation and ready to deploy to any web server. Update the API keys and webhook URLs before going live.