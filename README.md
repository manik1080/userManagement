This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# userManagement

Required Features:
- User Authentication with NextAuth.js (Email and Password)
- Users can belong to multiple tenants
- Role-Based Access Control

Using:
- Prisma ORM with PostgreSQL
- ShadCN UI Components for modern UI design
- Zod Validation for form handling
- Secure Password Hashing using bcryptjs

Planned pages to be implemented:
- Login Page: Allows users to authenticate using their email/password or social login. Redirects to the home page upon successful login.
- Register Page: Allows for registration of new user account.
- Logout Page: Logs users out and redirects them to the login page.
- Home Page: Displays an overview or welcome message. If not logged in, redirects to the login page.
- Dashboard Page: Shows user-specific information, including their assigned tenants and roles.
- Tenants Page: Lists all tenants the user is part of and allows admins to manage tenant memberships.
- Manage Roles Page: Enables administrators to assign or modify roles and permissions for users within a tenant.

Installation & Setup

1. Clone the Repository

`git clone https://github.com/your-username/your-repo.git
cd your-repo`

2. Install Dependencies

`npm install`

3. Setup Environment Variables by editing .env.local file in the root folder:

`DATABASE_URL="postgresql://user:password@localhost:5432/yourdb"
NEXTAUTH_SECRET="your-random-secret"
NEXTAUTH_URL="http://localhost:3000"`

4. Run Prisma migrations:

`npx prisma migrate dev --name init`

5. Seed the Database (Optional)

`npx prisma db seed`

6. Start the Development Server

`npm run dev`


# Next Steps:
### Complete remaining features
### Deploy on Vercel
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 

[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
