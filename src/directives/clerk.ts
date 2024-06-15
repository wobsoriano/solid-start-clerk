import { createEffect, onCleanup } from 'solid-js';
import { useClerk } from '~/components/ClerkProvider';

const components = ['SignIn', 'SignUp', 'UserButton'] as const

export function clerkUI(el: HTMLDivElement, value: () => typeof components[number]) {
  const { clerk, loaded } = useClerk();

  createEffect(() => {
    if (loaded()) {
      clerk()?.[`mount${value()}`](el);
    }

    onCleanup(() => {
      clerk()?.[`unmount${value()}`](el);
    });
  });
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      clerkUI: typeof components[number];
    }
  }
}
