import { Title } from "@solidjs/meta";

export default function Dashboard() {
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
