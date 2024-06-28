import { createContext, createSignal, onMount, useContext } from 'solid-js';
import type { Accessor, Component, JSX } from 'solid-js';
import type { Clerk } from '@clerk/clerk-js';
import { useNavigate } from '@solidjs/router';

export const ClerkContext = createContext<{
  clerk: Accessor<Clerk | null>;
  loaded: Accessor<boolean>;
}>();

interface Props {
  children?: JSX.Element;
}

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export const ClerkProvider: Component<Props> = props => {
  const [clerk, setClerk] = createSignal<Clerk | null>(null);
  const [loaded, setLoaded] = createSignal(false);
  const navigate = useNavigate();

  onMount(async () => {
    const { Clerk: ClerkMain } = await import('@clerk/clerk-js');
    const instance = new ClerkMain(PUBLISHABLE_KEY);
    setClerk(instance);

    await instance.load({
      routerPush: (to: string) => navigate(to),
      routerReplace: (to: string) => navigate(to, { replace: true }),
      signInForceRedirectUrl: '/dashboard',
      signUpForceRedirectUrl: '/dashboard',
      signInUrl: '/sign-in',
      signUpUrl: '/sign-up'
    });
    setLoaded(true);
  });

  return <ClerkContext.Provider value={{ clerk, loaded }}>{props.children}</ClerkContext.Provider>;
};

export function useClerk() {
  const clerk = useContext(ClerkContext);

  if (!clerk) {
    throw new Error('useClerk must be used within a <ClerkProvider> component');
  }

  return clerk;
}
