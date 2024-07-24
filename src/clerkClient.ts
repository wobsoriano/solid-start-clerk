import { createClerkClient } from '@clerk/backend';

export const clerkClient = createClerkClient({
  publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY,
  secretKey: process.env.CLERK_SECRET_KEY
})
