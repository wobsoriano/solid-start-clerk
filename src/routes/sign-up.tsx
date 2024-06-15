import { Title } from '@solidjs/meta';
import { clerkUI } from '~/directives/clerk';

export default function SignIn() {
  return (
    <main>
      <Title>Sign up</Title>
      <div use:clerkUI="SignUp"></div>
    </main>
  );
}
