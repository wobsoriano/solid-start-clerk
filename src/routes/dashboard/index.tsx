import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import { useClerk } from "~/components/ClerkProvider";

export default function Dashboard() {
  const { clerk, loaded } = useClerk()
  const navigate = useNavigate()

  createEffect(() => {
    if (loaded() && !clerk()?.user) {
      navigate('/sign-in')
    }
  })

  return (
    <main>
      <Title>Dashboard</Title>
      <h1>Dashboard page</h1>
        <p>This is a protected page.</p>

        <ul>
          <li><a href="/dashboard/me">Me</a></li>
          <li><a href="/">Return to index</a></li>
        </ul>
    </main>
  );
}
