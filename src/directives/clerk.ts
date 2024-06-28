import { createEffect, onCleanup } from 'solid-js';
import { useClerk } from '~/components/ClerkProvider';

// Add in other UI components needed
const components = ['SignIn', 'SignUp', 'UserButton'] as const;

export function clerkUI(el: HTMLDivElement, component: () => (typeof components)[number]) {
  const { clerk, loaded } = useClerk();

  createEffect(() => {
    if (loaded()) {
      clerk()?.[`mount${component()}`](el);
    }

    onCleanup(() => {
      clerk()?.[`unmount${component()}`](el);
    });
  });
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      clerkUI: (typeof components)[number];
    }
  }
}
