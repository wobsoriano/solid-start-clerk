import { Show } from 'solid-js';
import { clerkUI } from '~/directives/clerk';
import { useClerk } from './ClerkProvider';

export default function Header() {
  const { clerk, loaded } = useClerk();

  return (
    <header class="header">
      <div>
        <div style="flex-grow: 1;">
          <p class="title">SolidStart + Clerk</p>
        </div>

        <Show when={loaded()}>
          <Show when={clerk()?.user} fallback={<a href="/sign-in">Sign In</a>}>
            <div use:clerkUI="UserButton"></div>
          </Show>
        </Show>
      </div>
    </header>
  );
}
