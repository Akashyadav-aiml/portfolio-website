# 🚀 3D Animated Portfolio Website

A stunning, modern portfolio website featuring advanced 3D animations, KNN particle effects, and interactive UI elements.

## ✨ Features

### 🎨 Advanced 3D Animations

#### **KNN Particle System**
- Interactive particle network in the hero section
- Particles connect based on distance (K-Nearest Neighbors algorithm)
- Mouse interaction - particles repel from cursor
- Smooth canvas-based animation

#### **3D Rotating Cube**
- Fully animated 3D cube in the About section
- Continuous rotation animation
- Interactive mouse-controlled rotation
- Glass morphism effect with gradient colors

#### **3D Card Effects**
- Project cards with 3D tilt on hover
- Skill category cards with parallax depth
- Certificate cards with rotate and shine effects
- Dynamic shadows that follow mouse movement

### 🎯 Interactive Elements

#### **Magnetic Buttons**
- Buttons follow cursor within proximity
- Smooth ripple effects on click
- 3D scale transformations
- Gradient hover animations

#### **Skill Tags**
- Ripple effect on click
- 3D scale and color transitions
- Interactive hover states
- Smooth background animations

#### **Scroll Effects**
- Parallax scrolling on hero section
- Animated skill cards on scroll
- Progress bar indicator at top
- Fade-in animations for sections

### 🌟 Visual Effects

- **Glowing Text** - Hero title with pulsing glow effect
- **Shimmer Effect** - Project cards have sweeping light animation
- **Geometric Background** - Subtle grid pattern on sections
- **Glass Morphism** - Transparent blurred backgrounds
- **Gradient Overlays** - Smooth color transitions
- **Box Shadow Depth** - Layered shadow effects

### 📱 Responsive Design

- Fully responsive across all devices
- Mobile-friendly hamburger menu
- Adaptive 3D effects for touch devices
- Optimized animations for performance

## 🎮 Interactive Features

1. **Hero Section**
   - KNN particle network animation
   - Mouse-interactive particles
   - Glowing text effects
   - Smooth button animations

2. **About Section**
   - 3D rotating cube
   - Interactive cube rotation on hover
   - Smooth text animations

3. **Skills Section**
   - 3D parallax cards
   - Interactive skill tags
   - Hover effects with depth
   - Ripple animations

4. **Projects Section**
   - 3D tilt effect on cards
   - Shimmer animation on hover
   - Magnetic card effects
   - Smooth transitions

5. **Certifications**
   - Rotating certificate icons
   - Sweeping light effect
   - 3D hover animations

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations & 3D transforms
- **JavaScript** - Canvas animations & interactions
- **Font Awesome** - Icon library

## 🎨 Animation Techniques

### CSS Animations
- `@keyframes` for continuous animations
- `transform: perspective()` for 3D effects
- `transform-style: preserve-3d` for nested 3D
- `backdrop-filter` for glass morphism
- `transition` for smooth state changes

### JavaScript Animations
- Canvas API for particle system
- `requestAnimationFrame` for smooth 60fps
- Event listeners for mouse interactions
- Dynamic style manipulation

## 🚀 Performance

- Optimized particle count (100 particles)
- Efficient collision detection
- Hardware-accelerated CSS transforms
- Debounced scroll events
- Minimal DOM manipulation

## 📋 Browser Compatibility

- ✅ Chrome (full support)
- ✅ Firefox (full support)
- ✅ Safari (with vendor prefixes)
- ✅ Edge (full support)
- ✅ Mobile browsers (optimized)

## 🎯 Key Animation Elements

### KNN Algorithm Implementation
The particle system uses a simplified K-Nearest Neighbors approach:
- Calculates distance between all particles
- Connects particles within threshold distance
- Creates dynamic network visualization
- Opacity based on distance for depth effect

### 3D Transform Pipeline
```css
transform: perspective(1000px) 
           rotateX(deg) 
           rotateY(deg) 
           translateY(px) 
           scale(factor);
```

## 📝 Customization

You can easily customize:
- Particle count in `script.js` (`particleCount` variable)
- Colors in `styles.css` (CSS variables at top)
- Animation speeds in keyframes
- 3D effect intensity in transform values

## 🌈 Color Scheme

- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Highlight: `#fbbf24` (Amber)

## 📦 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Advanced CSS animations
├── script.js           # KNN particles & interactions
└── README.md          # Documentation
```

## 🎓 Learning Resources

This portfolio demonstrates:
- Canvas API manipulation
- CSS 3D transforms
- Advanced JavaScript animations
- Performance optimization
- Responsive design principles
- Modern web development practices

## 🤝 Connect

Built with ❤️ by Akash Yadav

---

**Note**: For best experience, view on a desktop browser with hardware acceleration enabled.
