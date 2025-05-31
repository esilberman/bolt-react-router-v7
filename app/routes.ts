import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "/*",
    file: "routes/404.tsx"
  }
] satisfies RouteConfig;
