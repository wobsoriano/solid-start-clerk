import { Title } from '@solidjs/meta';
import { SignUp } from 'clerk-solid';

export default function Page() {
  return (
    <main>
      <Title>Sign up</Title>
      <SignUp />
    </main>
  );
}
