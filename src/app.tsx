import { MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import './app.css';
import Header from './components/Header';
import { clientOnly } from "@solidjs/start";

const Clerk = clientOnly(() => import('./components/ClerkClient'));

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Clerk</Title>
          <Header />
          <Suspense>{props.children}</Suspense>
          <Clerk />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
