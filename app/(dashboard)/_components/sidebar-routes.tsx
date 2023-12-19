"use client";

import { Compass, Layout } from "lucide-react";
import { SiderbarItem } from "./sidebar-items";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dasboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

export const SiderBarRoutes = () => {
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SiderbarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
