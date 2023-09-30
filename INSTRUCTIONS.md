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
