# GearUp 🚗  

**GearUp** is a driving lesson booking web app where users can find and book instructors effortlessly.  

## 🚀 Tech Stack  

- **Next.js** – React framework  
- **Prisma** – ORM for database access and migrations  
- **PostgreSQL** – Database for local testing  
- **Next-Auth/Auth.js** – Authentication  
- **TypeScript** – Strongly typed programming language  
- **TailwindCSS** – Styling framework  
- **Shadcn/ui** – UI components  

## 📌 Features  

✅ Browse and select driving instructors  
✅ Book lessons based on availability  
✅ Secure authentication and user accounts  
✅ Responsive, modern UI with Shadcn/ui  
✅ Database-powered backend with Prisma  

## 📂 Setup Instructions  

```sh
# Clone the repo
git clone https://github.com/your-username/gearup-driving-lessons.git

# Navigate into the project directory
cd gearup-driving-lessons  

# Install dependencies
npm install  

# Set up environment variables (Create a .env file)
echo "DATABASE_URL=your_postgresql_url" >> .env
echo "NEXTAUTH_SECRET=your_secret_key" >> .env

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev

# Open the app in your browser
open http://localhost:3000
```
## 🛠️ Contributing

- Fork the repository
- Create a new branch (git checkout -b feature-name)
- Commit your changes (git commit -m "Added new feature")
- Push to the branch (git push origin feature-name)
- Open a pull request

## 🐝 License
- MIT License

*🚗💨 GearUp – Learn Smart. Drive Confident.*
