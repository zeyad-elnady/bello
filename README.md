# Beyond Meat Inspired Homepage

A fully responsive, modern homepage inspired by Beyond Meat's design language, built with HTML, CSS, and JavaScript with smooth GSAP animations.

## 🌱 Features

### Design & Visual
- **Modern Design**: Clean, minimalist layout inspired by Beyond Meat's aesthetic
- **Color Palette**: 
  - Dark Green (#003300)
  - Accent Green (#008000) 
  - White (#FFFFFF)
  - Light Green (#1A4D1A)
- **Typography**: Montserrat font family with bold, uppercase headings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Interactive Elements
- **Smooth Animations**: GSAP-powered scroll animations and hover effects
- **Mobile Navigation**: Animated hamburger menu with slide-in navigation
- **Parallax Effects**: Subtle parallax scrolling on hero and sustainability sections
- **Button Interactions**: Ripple effects on button clicks
- **Image Hover Effects**: Scale animations on product and recipe cards

### Technical Implementation
- **Semantic HTML5**: Proper structure and accessibility considerations
- **BEM CSS Methodology**: Organized, maintainable CSS naming convention
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **GSAP ScrollTrigger**: Performance-optimized scroll animations
- **Intersection Observer**: Enhanced performance monitoring

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local development server (optional but recommended)

### Running the Project

1. **Direct File Opening**: Simply open `index.html` in your browser
2. **Local Server** (Recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Visit**: `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full desktop experience)
- **Tablet**: 768px - 1023px (Tablet optimized layout)
- **Mobile**: 320px - 767px (Mobile-first responsive design)

## 🎨 Sections Overview

### 1. Header/Navigation
- Sticky navigation with logo and menu links
- Animated hamburger menu for mobile
- Smooth scroll effect on background

### 2. Hero Section
- Split layout with animated vegetable illustrations
- Bold typography with call-to-action messaging
- Hero image with overlay text

### 3. Mission Section
- Two-column layout with mission statement
- Overlapping image gallery with hover effects
- Large background text element

### 4. Products Section
- Grid layout showcasing plant-based products
- Interactive product cards with hover animations
- Clean white background for contrast

### 5. Recipes Section
- Horizontal carousel of recipe cards
- Scale animations on hover
- Consistent card design pattern

### 6. Sustainability Section
- Split layout emphasizing environmental impact
- Parallax image effect
- Text-focused content area

### 7. Call-to-Action Section
- Full-width background with compelling messaging
- Prominent action button with hover effects

### 8. Footer
- Three-column layout with logo, links, and social icons
- Animated social media icons
- Copyright information

## 🛠 Customization

### Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --color-dark-green: #003300;
    --color-accent-green: #008000;
    --color-white: #FFFFFF;
    --color-light-green: #1A4D1A;
}
```

### Content
Modify the content by updating the corresponding HTML sections or by editing the `design.json` file and creating a dynamic content loading system.

### Animations
Customize GSAP animations in `script.js`:
- Adjust animation durations
- Modify easing functions
- Add new scroll triggers

### Images
Replace placeholder images with your own:
- Update `src` attributes in HTML
- Ensure images are optimized for web
- Maintain aspect ratios for best results

## 📦 Dependencies

### External Libraries
- **GSAP**: Animation library for smooth transitions
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Montserrat Font**: Google Fonts typography

### CDN Links Used
```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📊 Performance Features

- **Lazy Loading**: Optimized image loading
- **CSS Transforms**: Hardware-accelerated animations
- **Intersection Observer**: Efficient scroll detection
- **Performance Monitoring**: Built-in load time tracking

## 🎯 Design System

### Typography Scale
- **Headings**: 2.5rem - 4rem (responsive)
- **Body Text**: 1rem - 1.2rem
- **Small Text**: 0.9rem

### Spacing System
- **Sections**: 6rem vertical padding
- **Components**: 2rem spacing
- **Elements**: 1rem base spacing

### Animation Timing
- **Fast**: 0.3s (hovers, clicks)
- **Medium**: 0.6s (standard transitions)
- **Slow**: 1s+ (entrance animations)

## 🚀 Deployment

### Static Hosting
Perfect for deployment on:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Direct repository hosting
- **AWS S3**: Static website hosting

### Build Process
No build process required - ready for immediate deployment as static files.

## 🔍 SEO Considerations

- Semantic HTML structure
- Alt tags on all images
- Meta descriptions and titles
- Proper heading hierarchy
- Clean URL structure

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness and functionality
5. Submit a pull request

## 📞 Support

For questions or issues:
- Open an issue on the repository
- Check browser developer console for errors
- Ensure all dependencies are loaded correctly

---

**Built with 💚 for sustainable web development** 