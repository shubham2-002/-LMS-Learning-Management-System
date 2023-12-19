"use client";

import { usePathname } from "next/navigation";

import { SiderbarItem } from "./sidebar-items";

import { BarChart, Compass, Layout, List } from "lucide-react";

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
const TeacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SiderBarRoutes = () => {

  const pathname = usePathname()

  const isTeacherPage = pathname?.includes("/teacher");
  
  const routes = isTeacherPage?TeacherRoutes: guestRoutes;

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
