import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>This is the index page</h1>
      <div>
        <ul>
          <li><a href="/sign-up">Sign Up</a></li>
          <li><a href="/sign-in">Sign In</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </div>
    </main>
  );
}
