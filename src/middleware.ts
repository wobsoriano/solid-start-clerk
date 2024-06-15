import { clerkClient } from '@clerk/clerk-sdk-node';
import { createMiddleware } from '@solidjs/start/middleware';

export default createMiddleware({
  onRequest: [
    async event => {
      const requestState = await clerkClient.authenticateRequest(event.request, {
        publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY
      });

      event.locals.auth = requestState.toAuth();
    }
  ]
});
