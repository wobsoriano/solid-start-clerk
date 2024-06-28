import { clerkClient } from '@clerk/clerk-sdk-node';
import { createMiddleware } from '@solidjs/start/middleware';
// import { sendRedirect, setResponseHeader, setResponseStatus } from 'vinxi/http';

export default createMiddleware({
  onRequest: [
    async event => {
      const requestState = await clerkClient.authenticateRequest(event.request, {
        publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY
      });

      // TODO: Handle handshake
      // if (requestState.headers) {
      //   requestState.headers.forEach((value, key) => setResponseHeader(key, value))

      //   const locationHeader = requestState.headers.get('location')

      //   if (locationHeader) {
      //     return sendRedirect(locationHeader, 307)
      //   }

      //   if (requestState.status === 'handshake') {
      //     throw new Error('Clerk: unexpected handshake without redirect')
      //   }
      // }

      event.locals.auth = requestState.toAuth();
    }
  ]
});
