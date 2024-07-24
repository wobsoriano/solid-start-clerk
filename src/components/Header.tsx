import { Show } from 'solid-js';
import { useAuth, UserButton } from 'clerk-solid';

export default function Header() {
  const auth = useAuth();

  return (
    <header class="header">
      <div>
        <div style="flex-grow: 1;">
          <p class="title">SolidStart + Clerk</p>
        </div>

        <Show when={auth().isLoaded}>
          <Show when={auth()?.userId} fallback={<a href="/sign-in">Sign In</a>}>
            <UserButton />
          </Show>
        </Show>
      </div>
    </header>
  );
}
