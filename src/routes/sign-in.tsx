import { Title } from "@solidjs/meta";
import { clerkUI } from "~/directives/clerk";

export default function SignIn() {
  return (
    <main>
      <Title>Sign in</Title>
      <div use:clerkUI={'sign-in'}></div>
    </main>
  );
}
