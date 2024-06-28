import { clerkClient } from '@clerk/clerk-sdk-node';
import { createMiddleware } from '@solidjs/start/middleware';

export default createMiddleware({
  onRequest: [
    async event => {
      const requestState = await clerkClient.authenticateRequest(event.request, {
        publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY
      });

      const locationHeader = requestState.headers.get('location');

      if (locationHeader) {
        return new Response(null, { status: 307, headers: requestState.headers });
      }

      if (requestState.status === 'handshake') {
        throw new Error('Clerk: unexpected handshake without redirect');
      }

      event.locals.auth = requestState.toAuth();
    }
  ]
});
