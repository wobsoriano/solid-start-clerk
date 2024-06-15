import { Title } from "@solidjs/meta";
import { createEffect, createMemo } from "solid-js";
import { useClerk } from "~/components/ClerkProvider";

export default function Dashboard() {
  const { clerk, loaded } = useClerk()

  const hasActiveSessions = createMemo(() => loaded() && clerk()?.client?.activeSessions?.length > 0)

  createEffect(() => {
    if (!hasActiveSessions()) {
      void clerk()?.redirectToAfterSignOut()
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
