import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { Platform } from "./pages/Platform";
import { Dashboard } from "./pages/Dashboard";
import { Cases } from "./pages/Cases";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: About },
      { path: "solucoes", Component: Solutions },
      { path: "plataforma", Component: Platform },
      { path: "dashboard", Component: Dashboard },
      { path: "cases", Component: Cases },
      { path: "blog", Component: Blog },
      { path: "contato", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
