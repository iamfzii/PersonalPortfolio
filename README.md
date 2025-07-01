# Muhammad Fazeel - Technical Operations Resume Website

A modern, responsive resume website built with React, TypeScript, and Express.js, showcasing technical operations expertise and professional background.

## 🚀 Vercel Deployment

This project is optimized for Vercel deployment with automatic builds and permissions handling.

### Quick Deploy

1. **Connect to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

2. **Or use Vercel Dashboard:**
   - Connect your GitHub repository
   - Vercel will automatically detect the configuration
   - Click "Deploy"

### Environment Variables

Set these in your Vercel dashboard under "Environment Variables":

- `NODE_ENV` = `production`
- `DATABASE_URL` = Your PostgreSQL connection string (if using database features)
- `SESSION_SECRET` = A secure session secret

### Build Configuration

The project includes:
- ✅ **vercel.json** - Optimized Vercel configuration
- ✅ **deploy.sh** - Custom build script with permission fixes
- ✅ **Security Headers** - XSS protection, HSTS, and more
- ✅ **Static Asset Optimization** - Long-term caching for assets
- ✅ **Permission Handling** - Automatic fix for binary permissions

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/              # Express backend
├── shared/              # Shared types and schemas
├── dist/                # Build output
├── vercel.json          # Vercel configuration
└── deploy.sh            # Deployment script
```

## 🔧 Key Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Theme System** - Multiple design combinations and themes
- **Interactive Elements** - Floating animations and scroll reveals
- **PDF Export** - Professional resume generation
- **Performance Optimized** - Fast loading with GPU acceleration
- **SEO Ready** - Meta tags, structured data, and sitemap

## 🎨 Design Themes

- Executive Professional
- Tech Leader
- Creative Mind
- And 9 more specialized themes

## 📱 Mobile Optimized

- Touch-friendly interfaces
- Responsive typography
- Optimized animations for mobile devices
- Professional mobile navigation

## 🔒 Security

- Content Security Policy headers
- XSS protection
- HTTPS enforcement
- Secure session handling

---

Built with ❤️ using React, TypeScript, and modern web technologies.