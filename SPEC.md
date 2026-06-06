# MiraTech Industries Website Specification

## 1. Project Overview

**Project Name**: MiraTech Industries - Parallax Tech Website  
**Type**: Corporate landing page with parallax effects  
**Core Functionality**: A modern, tech-forward corporate website showcasing MiraTech Industries' intelligent systems and scalable digital transformation services with immersive parallax scrolling experience.  
**Target Users**: Business clients seeking digital transformation, tech partners, potential investors

## 2. Visual & Rendering Specification

### Scene Setup
- **Background Style**: Dark tech aesthetic with animated grid patterns, floating particles, and glowing accents
- **Color Palette**:
  - Primary: Deep navy (#0a0e17)
  - Secondary: Cyan (#00f0ff)
  - Accent: Electric blue (#0066ff)
  - Highlight: Neon green (#00ff88)
  - Text: White (#ffffff) and light gray (#b0b8c4)
- **Typography**: 
  - Headings: "Orbitron" (Google Fonts) - futuristic tech feel
  - Body: "Rajdhani" (Google Fonts) - clean, modern readability

### Visual Effects
- **Parallax Layers**: Multi-layer parallax scrolling (background particles, mid-ground elements, foreground content)
- **Animated Grid**: CSS grid pattern with subtle animation
- **Glowing Effects**: Box shadows with cyan/blue glow on key elements
- **Floating Particles**: Animated dots creating depth
- **Scanline Effect**: Subtle CRT-style overlay for tech aesthetic
- **Gradient Borders**: Animated gradient borders on cards

### UI Components
- **Navigation**: Fixed top nav with blur backdrop, smooth scroll links
- **Hero Section**: Full viewport with loading animation sequence
- **Service Cards**: Glass-morphism cards with hover glow effects
- **Value Pillars**: Icon-based cards with animated icons
- **Contact Form**: Modern form with glowing inputs
- **Footer**: Minimal with social links and chat widget
- **AI Assistant Widget**: Floating chat button with expandable panel

## 3. Section Structure

### Navigation
- Logo "MIRATECH" 
- Links: ecosystem, innovation, founder, culture, heritage, about, contact
- CTA button: "Inquire"

### Hero Section
- Large "MIRA TECH" title with animated reveal
- Subtitle "INDUSTRIES"
- Tagline: "INNOVATION • INTEGRITY • IMPACT"
- Loading sequence animation
- Scroll indicator

### About Section
- Title: "MiraTech Industries"
- Subtitle: "Intelligent Systems & Scalable Solutions"
- Description paragraph
- CTA: "Explore Phase 1"

### Digital Ecosystems Section
- Title: "Digital Ecosystems"
- Subtitle: "AI-Integrated Architecture"
- Description
- CTA: "Explore Phase 2"

### Innovation Hub Section
- Title: "Innovation Hub"
- Subtitle: "Diversified Operations"
- Description
- CTA: "Explore Phase 3"

### Vision & Heritage Section
- Title: "Vision & Heritage"
- Founder info: Vuyo Neville Mazibuko
- Eswatini heritage mention
- CTA: "Explore Phase 4"

### Culture & Values Section
- Title: "Culture & Values"
- Subtitle: "The Three Pillars"
- Three cards: Innovation, Integrity, Impact
- CTA: "Explore Phase 5"

### Eswatini Roots Section
- Title: "Eswatini Roots"
- Subtitle: "Global Vision, Local Soul"
- Description
- CTA: "Explore Phase 6"

### Strategic Mission Section
- Title: "Strategic Mission"
- Subtitle: "Sustainable & Future-Oriented"
- Description
- CTA: "Explore Phase 7"

### Contact Section
- Title: "Transform Today"
- Subtitle: "Connect With Our Team"
- Form with: Name, Location, Inquiry Type dropdown, Message
- Submit button: "Initialize Inquiry"

### Footer
- Logo and tagline
- Contact info columns
- Social links: LinkedIn, X/Twitter, GitHub, Medium
- Copyright

### Chat Widget
- Floating AI assistant button
- Expandable chat panel
- "Powered by MiraTech Intelligent Core"

## 4. Interaction Specification

### Parallax Effects
- Background particles move at 0.2x scroll speed
- Grid pattern moves at 0.5x scroll speed
- Section content moves at 1x (normal) speed
- Accent elements move at 1.2x for depth

### Animations
- Page load: Staggered fade-in with scale
- Scroll-triggered reveals for each section
- Hover effects on cards (glow, lift, scale)
- Button hover: glow pulse
- Form input focus: border glow

### User Interactions
- Smooth scroll navigation
- Form validation
- Chat widget toggle
- Mobile hamburger menu

## 5. Technical Implementation

### Single HTML File
- Embedded CSS in `<style>` tag
- Embedded JavaScript in `<script>` tag
- Google Fonts loaded via CDN
- No external dependencies except fonts

### Parallax Implementation
- CSS `background-attachment: fixed` for background layers
- JavaScript scroll listener for element parallax
- CSS transforms for performance

### Tech Background
- CSS radial gradients for depth
- Animated CSS grid pattern
- Floating particle dots via CSS animations
- Glow effects with box-shadow and filters

## 6. Acceptance Criteria

1. ✅ Website loads without errors
2. ✅ All sections visible and properly styled
3. ✅ Parallax effect works smoothly on scroll
4. ✅ Tech background with animated elements visible
5. ✅ Navigation links scroll to correct sections
6. ✅ Contact form is functional with validation
7. ✅ Chat widget toggles open/close
8. ✅ Mobile responsive design
9. ✅ Loading animation plays on page load
10. ✅ Hover effects work on interactive elements