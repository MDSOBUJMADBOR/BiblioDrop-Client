"use client";

import {
  LayoutSideContentLeft,
  Bell,
  Briefcase,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
  Bars,
} from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
    { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
    { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company" },
    { icon: Envelope, href: "/dashboard/recruiter/messages", label: "Messages" },
    { icon: Person, href: "/dashboard/recruiter/profile", label: "Profile" },
    { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" },
  ];

  // Sidebar content
  const navContent = (
    <nav className="flex flex-col gap-1 bg-blue-950 text-white h-full min-h-screen p-3">
      
      {/* Logo */}
      <div className="mb-4">
        <Image
          src="/bibliodrop_logo.png"
          height={100}
          width={100}
          className="h-12 w-full object-contain"
          alt="Logo"
        />
      </div>

      {/* Menu Items */}
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all
              ${
                isActive
                  ? "bg-blue-800 text-white"
                  : "text-gray-300 hover:bg-blue-800 hover:text-white"
              }
            `}
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-gray-800 bg-blue-950">
        {navContent}
      </aside>

      {/* Mobile Sidebar */}
      <Drawer>
        <Button className="lg:hidden flex rounded items-center gap-2">
          <Bars className="size-5" />
          Menu
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content
            placement="left"
            // className="bg-blue-950 text-white "
          >
            <Drawer.Dialog>
              <Drawer.CloseTrigger />

              <Drawer.Body className="p-0">
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}