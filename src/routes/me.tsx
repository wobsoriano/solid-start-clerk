import { Title } from "@solidjs/meta";
import { cache, createAsync, redirect } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";

const getUser = cache(async() => {
  'use server'
  const event = getRequestEvent()

  const { userId, sessionId } = event?.locals.auth

  if (!userId) throw redirect('/sign-in');

  return {
    userId,
    sessionId,
  }
}, 'user')

export default function Me() {
  const user = createAsync(() => getUser())

  return (
    <main>
      <Title>Me</Title>
      <h1>SSR</h1>
      <div>User ID: {user()?.userId}</div>
      <div>Session ID: {user()?.sessionId}</div>
    </main>
  );
}
