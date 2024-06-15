import { createEffect, onCleanup } from 'solid-js';
import { useClerk } from '~/components/ClerkProvider';
import type { Clerk } from '@clerk/clerk-js';

const uiMap: Record<string, { mount: keyof Clerk; unmount: keyof Clerk }> = {
  'sign-in': {
    mount: 'mountSignIn',
    unmount: 'unmountSignIn'
  },
  'sign-up': {
    mount: 'mountSignUp',
    unmount: 'unmountSignUp'
  },
  'user-button': {
    mount: 'mountUserButton',
    unmount: 'unmountUserButton'
  }
};

export function clerkUI(el: HTMLDivElement, value: () => keyof typeof uiMap) {
  const { clerk, loaded } = useClerk();

  createEffect(() => {
    if (loaded()) {
      // @ts-expect-error: TODO: Fix types
      clerk()?.[uiMap[value()].mount](el);
    }

    onCleanup(() => {
      // @ts-expect-error: TODO: Fix types
      clerk()?.[uiMap[value()].unmount](el);
    });
  });
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      clerkUI: keyof typeof uiMap;
    }
  }
}
