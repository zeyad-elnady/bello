# بيلو - Egyptian Food Brand Website

A premium, responsive one-page website for an Egyptian food brand specializing in pickles, olives, and traditional preserved foods. Built with Next.js 14, Tailwind CSS, and featuring advanced animations, professional navigation, and comprehensive RTL support.

## ✨ Features

### Design & UI
- 🎨 **Premium Design**: Modern, clean, and professional Egyptian-inspired design
- 🌱 **Brand Colors**: Green (#4e612c), Beige (#FFF7EF), Light Green (#A8D08D), Dark Gray (#333333)
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🔄 **RTL Support**: Complete Arabic language support with proper text direction
- 🎭 **Professional Header**: Fixed navigation with scroll effects and mobile menu

### Advanced Navigation
- 🧭 **Smart Header**: Transparent on hero, solid on scroll with backdrop blur
- 📍 **Active Section Tracking**: Automatically highlights current section
- 📱 **Mobile Menu**: Smooth slide-out menu for mobile devices
- 🌐 **Language Switcher**: Arabic/English toggle (ready for implementation)
- 🛒 **Shopping Cart**: Integrated cart icon with counter
- ☎️ **Quick Actions**: Phone and contact buttons in header

### Animations & Interactions
- 🌊 **Smooth Scrolling**: Lenis integration for buttery smooth scroll experience
- ✨ **Framer Motion**: Advanced scroll-triggered animations and micro-interactions
- 🖼️ **Parallax Effects**: Background parallax on hero and about sections
- 🎭 **Hover Animations**: Subtle product card animations and interactive elements
- 📊 **Animated Counters**: Statistics section with counting animations
- 🎯 **Scroll Indicators**: Visual scroll progress and mouse scroll indicator

### Comprehensive Sections
1. **Header Navigation**: Professional fixed header with all navigation features
2. **Hero Section**: Full-screen with parallax, dual CTA buttons, and scroll indicator
3. **Features Section**: 6 key selling points with animated icons and trust badges
4. **About Section**: Brand story with parallax side image and statistics
5. **Statistics Section**: Animated counters showcasing company achievements
6. **Products Showcase**: 4 product cards with hover animations (Pickles & Olives)
7. **Process Section**: 3-step process (Harvesting, Pickling, Packaging) with scroll animations
8. **Testimonials**: Arabic customer reviews with trust indicators
9. **Contact Section**: Contact form, social media, and map placeholder
10. **Footer**: Comprehensive brand information and navigation links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 with custom brand theme
- **Animations**: Framer Motion for advanced animations
- **Smooth Scrolling**: Lenis for enhanced scroll experience
- **Icons**: Lucide React
- **Typography**: Cairo (Arabic) + Inter (Latin) fonts
- **Image Optimization**: Next.js Image component
- **Type Safety**: TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bello-food
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
bello-food/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with brand theme
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main home page
│   ├── components/
│   │   └── sections/            # Section components
│   │       ├── Header.tsx       # Navigation header
│   │       ├── HeroSection.tsx  # Hero with CTA
│   │       ├── FeaturesSection.tsx # Key features
│   │       ├── AboutSection.tsx # Brand story
│   │       ├── StatsSection.tsx # Animated statistics
│   │       ├── ProductsSection.tsx # Product showcase
│   │       ├── ProcessSection.tsx # 3-step process
│   │       ├── TestimonialsSection.tsx # Customer reviews
│   │       ├── ContactSection.tsx # Contact form
│   │       └── Footer.tsx       # Site footer
│   ├── hooks/
│   │   └── useSmooth.ts         # Lenis smooth scrolling hook
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   ├── logo.svg                 # Brand logo
│   ├── hero-bg.jpg              # Hero background image
│   ├── about-bg.jpg             # About section background
│   ├── products/                # Product images
│   └── process/                 # Process step images
└── README.md
```

## 🎨 Advanced Features

### Professional Header
- **Transparent to Solid**: Smooth transition on scroll
- **Active Section Tracking**: Highlights current section automatically
- **Mobile-First**: Responsive design with hamburger menu
- **Quick Actions**: Phone, language switcher, and shopping cart
- **Smooth Navigation**: Animated section scrolling

### Enhanced Hero Section
- **Dual CTA Buttons**: "Learn More" and "Shop Now" actions
- **Larger Logo Display**: Premium logo presentation
- **Scroll Indicator**: Animated mouse scroll guide
- **Multiple Floating Elements**: Enhanced visual depth

### Statistics Section
- **Animated Counters**: Numbers count up on scroll
- **Achievement Showcase**: Company milestones and metrics
- **Visual Icons**: Meaningful icons for each statistic
- **Gradient Background**: Eye-catching design

### Features Section
- **6 Key Benefits**: Comprehensive selling points
- **Trust Badges**: Quality certifications and guarantees
- **Hover Effects**: Interactive card animations
- **Icon Animations**: 3D rotation effects

### Brand Color Consistency
All sections now use the authentic logo colors:
- Primary: `#4e612c` (from logo)
- Primary Dark: `#3d4d22`
- Primary Light: `#6b7d3d`
- Secondary: `#A8D08D`
- Background: `#FFF7EF`

## 📱 Enhanced Responsive Design

### Mobile Navigation
- Slide-out menu with smooth animations
- Touch-friendly interface
- Quick access to all sections
- Mobile-optimized actions

### Tablet & Desktop
- Progressive enhancement for larger screens
- Advanced hover effects
- Multi-column layouts
- Enhanced typography scaling

## 🎭 Animation System

### Scroll-Triggered Animations
- **Staggered Reveals**: Elements appear in sequence
- **Parallax Backgrounds**: Multi-layer depth effects
- **Counter Animations**: Statistics count up on view
- **Hover Interactions**: Micro-animations on interaction

### Performance Optimized
- **Intersection Observer**: Efficient scroll detection
- **RequestAnimationFrame**: Smooth 60fps animations
- **CSS Transforms**: Hardware-accelerated animations
- **Lazy Loading**: Images load as needed

## 🌐 RTL Support

Enhanced Arabic language support:
- **Bidirectional Layout**: Proper RTL text flow
- **Font Optimization**: Cairo font for Arabic, Inter for Latin
- **Navigation RTL**: Header adapts to text direction
- **Content Alignment**: All sections support RTL layout

## 📊 Performance Features

- **Next.js 14**: Latest framework optimizations
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Route-based bundle splitting
- **CSS Purging**: Unused styles removed in production
- **Font Display Swap**: Fast font loading

## 🛒 E-commerce Ready

The website includes e-commerce foundations:
- **Shopping Cart**: Header cart with counter
- **Product Cards**: Ready for product integration
- **CTA Buttons**: Shop now functionality
- **Contact Forms**: Customer inquiry system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Arabic typography optimized for readability
- Egyptian cultural design elements
- Sustainable food branding inspiration
- Modern web animation techniques
- Professional e-commerce patterns

---

**بيلو - المذاق الأصيل من القلب المصري** 🇪🇬

*Crafted with ❤️ using cutting-edge web technologies*

## 🎯 Live Features

- ✅ **Professional Navigation** with scroll effects
- ✅ **Animated Statistics** with counting effects  
- ✅ **Enhanced Hero Section** with dual CTAs
- ✅ **Features Showcase** with trust badges
- ✅ **Mobile-First Design** with responsive navigation
- ✅ **Brand Color Consistency** matching logo
- ✅ **Advanced Animations** with Framer Motion
- ✅ **RTL Support** for Arabic content
- ✅ **Performance Optimized** for fast loading
