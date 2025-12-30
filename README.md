# Personal Brand Website - Lucien Shema

A modern, full-stack personal portfolio and blog website built with Next.js 16, React 19, TypeScript, and PostgreSQL. Features a complete CMS with admin dashboard for managing projects, blog posts, comments, and newsletter subscriptions.

## Features

### Public Website
- **Portfolio Sections**: Hero, About, Experience, Skills, Projects, Contact
- **Blog System**: Full-featured blog with rich content, comments, and newsletter subscription
- **Responsive Design**: Mobile-first design with elegant dark theme
- **SEO Optimized**: Meta tags, semantic HTML, and optimized images
- **Dynamic Content**: All content fetched from PostgreSQL database

### Admin Dashboard
- **Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Project Management**: Create, update, and delete portfolio projects with images
- **Experience Management**: Manage work experience entries
- **Skills Management**: Organize skills by categories
- **Blog Management**: Rich text editor for creating and publishing blog posts
- **Comment Moderation**: Review and approve/reject blog comments
- **Newsletter Management**: View subscribers and export to CSV
- **Profile Editor**: Update personal information, links, and resume

### Technical Features
- **Database**: PostgreSQL via Neon integration
- **Image Upload**: Support for project images, blog covers, and profile photos
- **Real-time Updates**: Dynamic content loading with SWR
- **Security**: Row-level security patterns, input validation, XSS protection
- **Performance**: Server-side rendering, image optimization, code splitting

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL (Neon)
- **ORM**: Raw SQL with @neondatabase/serverless
- **Authentication**: JWT + bcrypt
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form
- **Date Formatting**: date-fns
- **Icons**: Lucide React

## Project Structure

```bash
├── app/
│   ├── (auth)/
│   │   └── login/              # Login page
│   ├── admin/                  # Admin dashboard
│   │   ├── blogs/              # Blog management
│   │   ├── comments/           # Comment moderation
│   │   ├── experience/         # Experience management
│   │   ├── profile/            # Profile editor
│   │   ├── projects/           # Project management
│   │   ├── settings/           # Admin settings
│   │   ├── skills/             # Skills management
│   │   └── subscribers/        # Newsletter subscribers
│   ├── api/                    # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── comments/           # Comment endpoints
│   │   ├── newsletter/         # Newsletter endpoints
│   │   └── upload/             # Image upload endpoint
│   ├── blog/                   # Public blog pages
│   │   ├── [slug]/             # Individual blog post
│   │   └── page.tsx            # Blog listing
│   ├── globals.css             # Global styles + Tailwind config
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   ├── admin/                  # Admin-specific components
│   ├── blog/                   # Blog components
│   ├── ui/                     # shadcn/ui components
│   └── *.tsx                   # Section components
├── lib/
│   ├── auth.ts                 # Authentication utilities
│   ├── db.ts                   # Database queries
│   └── upload.ts               # Image upload utilities
├── scripts/
│   ├── 01-initial-schema.sql  # Database schema
│   └── 02-seed-data.sql       # Sample data
├── proxy.ts                    # Authentication middleware
└── README.md                   # This file
```

## Getting Started

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed setup instructions.

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-brand-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Your Neon database connection is already configured with these environment variables:
   - `DATABASE_URL`
   - `POSTGRES_URL`
   - `PGHOST`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`

   Add these additional variables to your Vercel project:
   ```bash
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

4. **Run database migrations**
   
   Execute the SQL scripts in order:
   - `scripts/01-initial-schema.sql` - Creates all tables
   - `scripts/02-seed-data.sql` - Adds sample data

   You can run these scripts directly in v0 or in your Neon dashboard SQL editor.

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Public site: http://localhost:3000
   - Admin dashboard: http://localhost:3000/admin
   - Blog: http://localhost:3000/blog
   - Login: http://localhost:3000/login

## Default Admin Credentials

After running the seed script, you can log in with:
- **Email**: luciens@alumni.cmu.edu
- **Password**: admin123

**Important**: Change this password immediately in production!

## Environment Variables

### Required
- `DATABASE_URL` - PostgreSQL connection string (already set via Neon)
- `JWT_SECRET` - Secret key for JWT token generation

### Optional
- Image storage integration (Vercel Blob or Supabase Storage)

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Environment variables are automatically synced from this v0 project

3. **Run database migrations**
   - Execute the SQL scripts in your Neon dashboard

4. **Deploy**
   - Vercel will automatically deploy your site

## Features Roadmap

### Completed
- ✅ Portfolio sections with database integration
- ✅ Admin authentication system
- ✅ Blog system with comments
- ✅ Newsletter subscription
- ✅ Project management
- ✅ Comment moderation
- ✅ Responsive design

### Planned
- 🔲 Email notifications for new comments
- 🔲 Newsletter email campaigns
- 🔲 Analytics dashboard
- 🔲 SEO optimization tools
- 🔲 Image upload integration (Blob/Supabase)
- 🔲 Social media sharing
- 🔲 Search functionality
- 🔲 Dark/Light mode toggle

## Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## License

MIT License - Feel free to use this project as a template for your own portfolio.

## Support

For questions or issues:
- Email: luciens@alumni.cmu.edu
- LinkedIn: [linkedin.com/in/shemalucien](https://linkedin.com/in/shemalucien)
- GitHub: [github.com/shemalucien](https://github.com/shemalucien)

## Acknowledgments

- Built with [v0.dev](https://v0.dev) by Vercel
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Database hosted on [Neon](https://neon.tech)
- Icons from [Lucide](https://lucide.dev)
