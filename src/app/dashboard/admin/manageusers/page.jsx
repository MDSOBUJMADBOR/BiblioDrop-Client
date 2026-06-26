"use client";

import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Dropdown,
  Label,
  Chip,
} from "@heroui/react";

const ROLES = [
  { id: "user", label: "User" },
  { id: "librarian", label: "Librarian" },
  { id: "admin", label: "Admin" },
];

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch users
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      setUsers(users.filter((u) => u._id !== id));
    }
  };

  // ✅ Role change — v3 Dropdown.Menu fires onAction with the item's `id`
  const handleRoleChange = async (id, role) => {
    console.log(id, role);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      setUsers(users.map((u) => (u._id === id ? { ...u, role } : u)));
    }
  };

  // ✅ Role color
  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "danger";
      case "librarian":
        return "primary";
      default:
        return "default";
    }
  };

  // Reusable role dropdown — HeroUI v3 API
  const RoleDropdown = ({ user }) => (
    <Dropdown>
      <Button   aria-label="Change role">
        {ROLES.find((r) => r.id === (user.role || "user"))?.label ?? "User"}
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Role"
          selectionMode="single"
          selectedKeys={[user.role || "user"]}
          onAction={(key) => handleRoleChange(user._id, key)}
        >
          {ROLES.map((r) => (
            <Dropdown.Item key={r.id} id={r.id} textValue={r.label}>
              <Label>{r.label}</Label>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );

  if (loading) {
    return <div className="p-6 text-center text-lg">Loading users...</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4">Manage Users</h2>

      {/* ✅ MOBILE VIEW (CARD) */}
      <div className="grid gap-4 md:hidden">
        {users.map((user) => (
          <div
            key={user._id}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <h3 className="font-semibold text-base">
              {user.name || "No Name"}
            </h3>

            <p className="text-sm text-gray-500">{user.email}</p>

            <div className="mt-2 ">
              <Chip color={getRoleColor(user.role)}>
                {user.role || "user"}
              </Chip>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 mt-3 ">
              <RoleDropdown  user={user} />

              <Button
                className="bg-red-500 text-white"
                fullWidth
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ DESKTOP TABLE */}
      <div className="hidden md:block">
        <div className="w-full overflow-x-auto">
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Users" className="min-w-[700px]">
                <Table.Header>
                  <Table.Column>Name</Table.Column>
                  <Table.Column>Email</Table.Column>
                  <Table.Column>Role</Table.Column>
                  <Table.Column>Actions</Table.Column>
                </Table.Header>

                <Table.Body>
                  {users.map((user) => (
                    <Table.Row key={user._id} id={user._id}>
                      <Table.Cell>{user.name || "No Name"}</Table.Cell>

                      <Table.Cell className="break-all">
                        {user.email}
                      </Table.Cell>

                      <Table.Cell>
                        <Chip color={getRoleColor(user.role)}>
                          {user.role || "user"}
                        </Chip>
                      </Table.Cell>

                      <Table.Cell className="flex items-center gap-2">
                        <RoleDropdown user={user} />

                        <Button
                          className="bg-red-500 text-white"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      </div>
    </div>
  );
}