# Student Athlete Profile

A modern, professional student-athlete profile page with a sleek, sporty design similar to Hudl recruiting profiles. This single-page application showcases athlete information in an engaging, recruiter-friendly format.

## 🏆 Features

### Visual Design
- **Dark gradient background** with bright blue accents (#2563eb, #1d4ed8, #1e40af)
- **Glassmorphism effects** with frosted glass appearance on cards
- **Smooth animations** and hover effects throughout
- **Mobile-first responsive design** that works on all devices
- **Modern typography** using Inter font family

### Hero Header Section
- **Three-column grid layout** with avatar, player info, and jersey number
- **120px circular avatar** with fallback to player initials
- **Large, bold player name** with optional nickname display
- **Position, team, and graduation year** information
- **Prominent jersey number** display with glow effects

### Stats Grid Section
- **Responsive auto-fit grid** with minimum 300px card width
- **Four main stat cards**:
  1. **Personal Information** - Height, weight, graduation year, sport
  2. **Academic & Recruiting** - GPA (highlighted), test scores, commitment status
  3. **Athletic Performance** - 40-yard dash, vertical jump, bench press, squat
  4. **Secondary Sport** - Track & field events and personal bests (conditional)

### Content Sections
- **Expandable Bio Section** - Personal story, goals, motivation, challenges
- **Achievement Badges** - Colorful awards and honors with hover effects
- **Video Section** - Responsive video embeds with modal overlays
- **Media Links** - Organized links to highlight reels and documents
- **Coach Quotes** - Testimonials with elegant styling
- **Social Media** - Icon-based social links with platform colors
- **Contact Information** - Copy-to-clipboard functionality

## 🛠 Technology Stack

- **React 18.2.0** - Modern functional components with hooks
- **Styled Components 6.0.7** - CSS-in-JS for component-based styling
- **Lucide React** - Consistent iconography throughout
- **Modern CSS** - Grid, Flexbox, and advanced styling techniques

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd student-athlete-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production
```bash
npm run build
```

## 📱 Responsive Design

The application is fully responsive across all device sizes:
- **Desktop** (1200px+) - Full three-column header layout
- **Tablet** (768px - 1199px) - Adapted grid layouts
- **Mobile** (320px - 767px) - Single-column stacked layout

## 🎨 Design Patterns

### Glassmorphism Cards
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Hover Animations
```css
transition: all 0.3s ease;
transform: translateY(-5px);
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
```

### Responsive Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 20px;
```

## 📊 Player Data Structure

The application uses a comprehensive data model:

```javascript
const playerData = {
  personal: {
    name: "Marcus Johnson",
    nickname: "MJ",
    position: "Wide Receiver",
    team: "Central High Eagles",
    jerseyNumber: 84,
    // ... more personal info
  },
  academic: {
    gpa: 3.8,
    testScores: "SAT: 1340 | ACT: 29",
    commitmentStatus: "Uncommitted",
    // ... more academic info
  },
  athletic: {
    fortyYard: "4.42s",
    verticalJump: "38\"",
    seasonStats: { /* detailed stats */ },
    // ... more athletic info
  },
  content: {
    bio: { /* personal story sections */ },
    achievements: [ /* awards and honors */ ],
    videos: { /* highlight reels */ },
    socialMedia: { /* platform links */ }
  }
}
```

## ♿ Accessibility Features

- **WCAG 2.1 AA compliance**
- **Semantic HTML structure**
- **Keyboard navigation support**
- **Screen reader optimization**
- **High contrast color ratios**
- **Alternative text for images**
- **Focus indicators** for interactive elements

## 🔧 Performance Optimizations

- **CSS critical path optimization**
- **Font loading optimization** with Google Fonts
- **Smooth animations** with CSS transitions
- **Responsive image delivery**
- **Component-based architecture** for maintainability

## 🌐 Browser Support

- **Chrome 90+**
- **Firefox 88+**
- **Safari 14+**
- **Edge 90+**
- **Mobile browsers** (iOS Safari, Chrome Mobile, Samsung Internet)

## 📄 Component Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.js
│   │   ├── PlayerAvatar.js
│   │   ├── PlayerInfo.js
│   │   └── JerseyNumber.js
│   ├── StatsGrid/
│   │   ├── StatsGrid.js
│   │   ├── PersonalInfoCard.js
│   │   ├── AcademicCard.js
│   │   ├── AthleticCard.js
│   │   └── SecondarySportCard.js
│   ├── BioSection/
│   │   └── BioSection.js
│   ├── VideoSection/
│   │   └── VideoSection.js
│   ├── MediaSection/
│   │   └── MediaSection.js
│   └── SocialSection/
│       └── SocialSection.js
├── data/
│   └── playerData.js
├── App.js
├── index.js
└── index.css
```

## 🎯 Key Features for Recruiters

- **Print-friendly version** for offline viewing
- **Copy-to-clipboard contact info**
- **Direct links to highlight videos**
- **Comprehensive stat displays**
- **Academic achievement highlighting**
- **Coach testimonials**
- **Social media integration**

## 🔄 Future Enhancements

- **Multiple player profiles**
- **Admin dashboard for data management**
- **PDF export functionality**
- **Analytics tracking**
- **SEO optimization**
- **PWA capabilities**

## 📝 License

This project is created for educational and portfolio purposes.

## 🤝 Contributing

This is a showcase project, but suggestions and improvements are welcome!

---

**Ready to showcase your athletic achievements?** This profile template provides everything needed to create a stunning, professional presence that will impress college recruiters and help student-athletes stand out in the competitive recruiting landscape.