import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { ClerkProvider } from "./components/ClerkProvider";
import Header from './components/Header';

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Clerk</Title>
          <ClerkProvider>
            <Header />
            <Suspense>
              {props.children}
            </Suspense>
          </ClerkProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
