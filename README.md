# Kavi's Naturals - E-commerce Frontend

A fully responsive Next.js e-commerce homepage for Kavi's Naturals - Premium Natural Products.

## 🌿 Project Overview

This is a modern, responsive e-commerce homepage built with Next.js, TypeScript, and Tailwind CSS. The design focuses on natural, organic products with a clean and modern UI.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI Components**:
  - Header with search functionality
  - Hero banner with call-to-actions
  - Category bubbles (Personal Care, Health Care, Home Care)
  - Best sellers product grid
  - Our promise section
  - Shop by concerns banners
  - Customer reviews
  - Comprehensive footer
- **Brand Colors**: Green (#8BC34A) theme with clean whites
- **Icons**: Lucide React icons
- **Animations**: Smooth hover effects and transitions

## 📁 Project Structure

```
frontend/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   ├── CategoryBubbles.tsx
│   ├── BestSellers.tsx
│   ├── OurPromise.tsx
│   ├── ShopByConcerns.tsx
│   ├── Reviews.tsx
│   └── Footer.tsx
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 🖼️ Image Assets

The following images need to be added to `/public/images/` directory:

### Category Images
- `personal-care-category.jpg`
- `health-care-category.jpg`  
- `home-care-category.jpg`

### Product Images
- `aloe-vera-shampoo.jpg`
- `milk-protein-shampoo.jpg`
- `onion-shampoo.jpg`
- `shikakai-reetha-shampoo.jpg`
- `organic-detergent.jpg`
- `aavarampoo-tea.jpg`

### Banner Images
- `hero-product.jpg`
- `health-mix-banner.jpg`
- `personal-care-banner.jpg`
- `women-care-banner.jpg`
- `home-care-banner.jpg`

### Client Images
- `client-ramya-1.jpg`
- `client-ramya-2.jpg`
- `client-ramya-3.jpg`
- `client-priya.jpg`

## 🎨 Design Features

- **Green Brand Color**: #8BC34A (primary)
- **Typography**: Inter & Poppins fonts
- **Shadows**: Soft shadows with rounded corners
- **Responsive Grid**: Mobile-first approach
- **Hover Effects**: Smooth transitions on interactive elements

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔮 Future Integration

This frontend is prepared for integration with:
- Admin panel for product management
- Review management system
- Dynamic best sellers data
- User authentication
- Shopping cart functionality
- Order management

## 📦 Dependencies

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icons

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📞 Support

For any questions or support, please contact:
- Email: info@kavisnaturals.com
- Phone: +91 98421 54632

---

**Note**: All placeholder images in the components show the exact file paths where real images should be placed. Simply replace the placeholder content with actual images using the specified paths.