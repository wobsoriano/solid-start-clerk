import { Title } from '@solidjs/meta';
import { SignIn } from 'clerk-solid';

export default function Page() {
  return (
    <main>
      <Title>Sign in</Title>
      <SignIn />
    </main>
  );
}
