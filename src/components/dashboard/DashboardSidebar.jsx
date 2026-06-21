"use client";

import { useSession } from "@/lib/auth-client";
import {
  House,
  Magnifier,
  Bell,
  Briefcase,
  Envelope,
  Person,
  Plus,
  Calendar,
  Circle,
  Bars ,
} from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

export default function DashboardSidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const role = session?.user?.role;

  // 🔥 Role-based menu
  const menus = {
    reader: [
      {
        key: "overview",
        label: "Overview",
        icon: Person,
        href: "/dashboard/organizer",
      },
      {
        key: "delivery-history",
        label: "Delivery History",
        icon: House,
        href: "/dashboard/organizer/organization",
      },
      {
        key: "my-reading-list",
        label: "My Reading List",
        icon: Plus,
        href: "/dashboard/organizer/add-event",
      },
      {
        key: "my-reviews",
        label: "My Reviews",
        icon: Calendar,
        href: "/dashboard/organizer/manage-events",
      },
    ],

    librarian: [
      {
        key: "overview",
        label: "Overview",
        icon: Circle,
        href: "/dashboard/attendee",
      },
      {
        key: "add-book",
        label: "Add Book",
        icon: Circle,
        href: "/dashboard/attendee/tickets",
      },
      {
        key: "manage-inventory",
        label: "Manage Inventory",
        icon: Circle,
        href: "/dashboard/attendee/payments",
      },
      {
        key: "manage-deliveries",
        label: "Manage Deliveries",
        icon: Circle,
        href: "/dashboard/attendee/payments",
      },
    ],

    admin: [
      {
        key: "overview",
        label: "Overview",
        icon: Circle,
        href: "/dashboard/users",
      },
      {
        key: "book-approval-queue",
        label: "Book Approval Queue",
        icon: Circle,
        href: "/dashboard/events",
      },
      {
        key: "manage-users",
        label: "Manage Users",
        icon: Circle,
        href: "/dashboard/transactions",
      },
      {
        key: "manage-all-books",
        label: "Manage All Books",
        icon: Circle,
        href: "/dashboard/transactions",
      },
      {
        key: "view-all-transactions",
        label: "View All Transactions",
        icon: Circle,
        href: "/dashboard/transactions",
      },
    ],
  };

  const navItems = menus[role] || [];

  const handleLogout = () => {
    console.log("logout"); // auth logout here
  };

  // 🔥 Sidebar Content
  const SidebarContent = (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#0b0f2a] to-[#020617] text-white">

      {/* Logo */}
      <div className="p-4 border-b border-white/10">
        <Image
          src="/bibliodrop_logo.png"
          width={120}
          height={40}
          alt="Logo"
          className="object-contain"
        />
      </div>

      {/* Profile */}
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        <Image
          src={
            session?.user?.image ||
            `https://ui-avatars.com/api/?name=${session?.user?.name}`
          }
          width={40}
          height={40}
          className="rounded-full"
          alt="user"
        />
        <div>
          <p className="text-sm font-semibold">{session?.user?.name}</p>
          <span className="text-xs text-gray-400">{role}</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all
                ${isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              <item.icon className="size-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/10 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
        >
          <House className="size-5" />
          Home
        </Link>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-gray-400 text-white bg-red-500"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex flex-col w-64 h-screen border-r border-white/10">
        {SidebarContent}
      </aside>

      {/* Mobile */}
      <Drawer>
        <Button className="lg:hidden  flex items-center gap-2 rounded">
          <Bars className="size-5" />
          Menu
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Body className="p-0">
                {SidebarContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}