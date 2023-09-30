# Environment Setup

# https://ui.shadcn.com/docs/installation/next

npx create-next-app@13.4.12 . --typescript --tailwind --eslint
"""
√ Would you like to use `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias? ... No
"""

npx shadcn-ui@latest init
"""
Would you like to use TypeScript (recommended)? yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › yes
Write configuration to components.json. Proceed? » (Y)
"""
npm run dev - # http://localhost:3000/

npx shadcn-ui@latest add button -y

# Folders Setup

npm i

## Extention: "next.nav" install

"ctrl+shift+p" - "next.nav" - click "Path button" (further to left) - "app" - submit -

## Shortcut: Create page - "sfc"

# 04: Authentication

Clerk setup:
https://clerk.com/ - login - add new application
name: antonio-lms-udemy - create - copy env to .env

.env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

.gitignore
.env

npm i @clerk/nextjs

# 06: Dynamic Layout

npx shadcn-ui@latest add sheet -y
npm i @radix-ui/react-dialog@1.0.4

# 07: Course Creation UI

npx shadcn-ui@latest add form -y
npx shadcn-ui@latest add input -y
npm i axios
npm i react-hot-toast

# 08: Prisma & DB Setup
npm i -D prisma 
npx prisma init

<setup mysql - planetscale or aiven>

# add schema.prisma code

npx prisma generate 
npx prisma db push

npm i @prisma/client

# 12: Course Description Form

npx shadcn-ui@latest add textarea -y

# 13: UploadThing & Image Form

## UploadThing
## https://uploadthing.com/dashboard/new  - "name: antonio-lsm-udemy"
- getting started - 


npm i uploadthing
npm i @uploadthing/react
npm i react-dropzone

## https://uploadthing.com/dashboard/oonm03skcg/api-keys

.env
"""
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
"""

## https://docs.uploadthing.com/nextjs/appdir

# 14: Course Category Form

npx shadcn-ui@latest add popover -y
npx shadcn-ui@latest add command -y

## Prisma seed command
node scripts/seed.ts

# 17: Prisma schema finalization

# add schema.prisma code

npx prisma generate
npx prisma db push

# 19: Chapter Reorder Functionality

npm i @hello-pangea/dnd
npx shadcn-ui@latest add badge -y

# 21: Chapter Description Form

npm i react-quill

# 22: Chapter Access Form

npx shadcn-ui@latest add checkbox -y

# 23: Chapter Video Form

## MUX
## https://dashboard.mux.com/ - settings/access_token - generate new token
- "mux_video" - copy token and secret to .env

.env
"""
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
"""

npm i @mux/mux-player-react
npm i @mux/mux-node

# 24: Chapter Publish Action

npx shadcn-ui@latest add alert-dialog -y
npm i @radix-ui/react-alert-dialog@1.0.4
npm i @radix-ui/react-dialog@1.0.4

# 25: Course Publish Action

npm i react-confetti
npm i zustand

# 26: Courses Data Table

npx shadcn-ui@latest add table -y
npm i @tanstack/react-table
npx shadcn-ui@latest add dropdown-menu -y

# 27: Categories Query

npm i query-string
npm i react-icons