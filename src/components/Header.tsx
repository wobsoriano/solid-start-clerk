import { Show, createMemo } from 'solid-js';
import { clerkUI } from '~/directives/clerk';
import { useClerk } from './ClerkProvider';

export default function Header() {
  const { clerk, loaded } = useClerk();

  const isSignedIn = createMemo(() => {
    if (loaded()) {
      return Boolean(clerk()?.user);
    }

    return false;
  });

  return (
    <header class="header">
      <div>
        <div style="flex-grow: 1;">
          <p class="title">SolidStart + Clerk</p>
        </div>
        <Show when={isSignedIn()} fallback={<a href="/sign-in">Sign In</a>}>
          <div use:clerkUI="user-button"></div>
        </Show>
      </div>
    </header>
  );
}
