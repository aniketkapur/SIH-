# CivicReport - Smart India Hackathon 2024

A modern, responsive web application for reporting and tracking civic issues in communities. Built with React, Tailwind CSS, and modern web technologies.

## 🚀 Features

### For Citizens
- **Easy Issue Reporting**: Report civic issues with photos, GPS location, and detailed descriptions
- **Voice Input**: Use voice-to-text for quick issue descriptions
- **Photo Upload**: Capture and upload multiple photos with drag-and-drop support
- **GPS Integration**: Automatic location detection for precise issue reporting
- **Real-time Tracking**: Track the status of reported issues in real-time
- **Advanced Filtering**: Search and filter issues by status, category, and location

### For Administrators
- **Comprehensive Dashboard**: Monitor all civic issues with detailed analytics
- **Department Management**: Track performance across different municipal departments
- **Issue Assignment**: Assign issues to appropriate departments and personnel
- **Status Updates**: Update issue status and provide progress notifications
- **Performance Metrics**: View resolution rates, response times, and citizen satisfaction

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1 with Vite
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.8.2
- **Icons**: Lucide React 0.543.0
- **Build Tool**: Vite 7.1.2

## 📱 Pages & Components

### Pages
- **Home**: Landing page with features overview and recent issues
- **Report Issue**: Comprehensive form for reporting civic issues
- **Track Issues**: Search and filter reported issues with detailed status
- **Admin Dashboard**: Administrative interface for managing issues


### Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Contact information and quick links
- **LoadingSpinner**: Reusable loading indicator
- **StatusBadge**: Color-coded status indicators
- **PriorityBadge**: Priority level indicators
- **NotificationToast**: Toast notifications for user feedback

## 🎨 Design Features

- **Modern UI**: Clean, professional design with gradient backgrounds
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Custom CSS animations and transitions
- **Accessibility**: Focus states, proper contrast ratios, and semantic HTML
- **Glass Effects**: Modern glassmorphism design elements
- **Custom Scrollbars**: Styled scrollbars matching the theme

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SIH
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Maps API (Optional):
```bash
# Copy the environment file
cp .env.example .env

# Edit .env and add your Google Maps API key
# VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Google Maps Setup (Optional)

To enable the interactive map feature in the Report Issue page:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (optional, for enhanced features)
4. Create credentials (API Key)
5. Restrict the API key to your domain for security
6. Add the API key to your `.env` file as `VITE_GOOGLE_MAPS_API_KEY`

**Note**: The app works perfectly without Google Maps API - it will show a fallback interface that still allows GPS location detection and manual coordinate entry.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
SIH/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── StatusBadge.jsx
│   │   ├── PriorityBadge.jsx
│   │   └── NotificationToast.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── ReportIssue.jsx
│   │   ├── TrackIssues.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles and Tailwind imports
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── README.md              # Project documentation
```

## 🎯 Key Features Implementation

### Issue Reporting
- Multi-step form with validation
- Photo upload with preview and removal
- GPS location integration
- Voice input capability
- Priority and category selection

### Issue Tracking
- Real-time status updates
- Advanced search and filtering
- Detailed issue cards with progress tracking
- Department assignment visibility

### Admin Dashboard
- Comprehensive analytics and metrics
- Department performance tracking
- Issue management interface
- Quick action buttons
- Export functionality

## 🔧 Customization

### Colors and Themes
The app uses a blue-purple gradient theme. You can customize colors in:
- `tailwind.config.js` for Tailwind utilities
- `index.css` for custom CSS variables and classes

### Adding New Issue Categories
Update the categories array in `ReportIssue.jsx`:
```javascript
const categories = [
  'Potholes',
  'Streetlights',
  'Garbage Overflow',
  'Water Issues',
  'Traffic Signals',
  'Sidewalk Damage',
  'Graffiti',
  'Your New Category'
];
```

## 📱 Mobile Responsiveness

The application is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Touch-friendly interface elements
- Optimized layouts for all screen sizes

## 🚀 Future Enhancements

- Real-time notifications using WebSockets
- Integration with mapping services (Google Maps/OpenStreetMap)
- Push notifications for mobile devices
- Multi-language support
- Dark mode toggle
- Advanced analytics and reporting
- Integration with municipal databases
- Citizen feedback and rating system

## 📄 License

This project is developed for Smart India Hackathon 2024.

## 👥 Contributing

This is a hackathon project. For contributions or questions, please contact the development team.

## 📞 Support

For support or questions about this application:
- Email: support@civicreport.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for Smart India Hackathon 2024