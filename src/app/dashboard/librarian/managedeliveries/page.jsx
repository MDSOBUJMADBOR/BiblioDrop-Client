"use client";

import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Dropdown,
  Label,
  Chip,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const STATUS_OPTIONS = [
  { id: "pending", label: "Pending" },
  { id: "delivered", label: "Delivered" },
];

export default function ManageDeliveries() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Deliveries
  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/delivery-request/email/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDeliveries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user?.email]);

  // Update Status
  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/delivery-request/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        setDeliveries((prev) =>
          prev.map((item) =>
            item._id === id
              ? { ...item, status }
              : item
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "success";
      default:
        return "warning";
    }
  };

  const StatusDropdown = ({ item }) => (
    <Dropdown>
      <Button aria-label="Change Status">
        {STATUS_OPTIONS.find(
          (s) => s.id === (item.status || "pending")
        )?.label ?? "Pending"}
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Status"
          selectionMode="single"
          selectedKeys={[item.status || "pending"]}
          onAction={(key) =>
            handleStatusChange(item._id, key)
          }
        >
          {STATUS_OPTIONS.map((status) => (
            <Dropdown.Item
              key={status.id}
              id={status.id}
              textValue={status.label}
            >
              <Label>{status.label}</Label>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );

  if (loading) {
    return (
      <div className="p-6 text-center text-lg">
        Loading deliveries...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Manage Deliveries
      </h2>

      {/* Mobile View */}
      {/* <div className="grid gap-4  md:hidden">
        {deliveries.map((item) => (
          <div
            key={item._id}
            className="border rounded-xl p-4 shadow-sm bg-white" 
          >
            <h3 className="font-semibold text-base">
              {item.bookTitle || item.title || "No Title"}
            </h3>

            <p className="text-sm text-gray-500">
              {item.clientName ||
                item.userName ||
                item.name ||
                "Unknown User"}
            </p>

            <p className="text-sm mt-2">
              {item.createdAt
                ? new Date(
                    item.createdAt
                  ).toLocaleDateString()
                : "N/A"}
            </p>

            <div className="mt-2">
              <Chip
                color={getStatusColor(item.status)}
              >
                {item.status || "pending"}
              </Chip>
            </div>

            <div className="mt-3">
              <StatusDropdown item={item} />
            </div>
          </div>
        ))}
      </div> */}

{/* Mobile View */}
<div className="grid gap-4 md:hidden">
  {deliveries.length === 0 ? (
    <div className="text-center py-8 text-gray-500">
      No delivery requests found.
    </div>
  ) : (
    deliveries.map((item) => (
      <div
        key={item._id}
        className="bg-white rounded-xl shadow-md border p-4"
      >
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-500">Client</p>
            <p className="font-semibold text-gray-800">
              {item.clientName ||
                item.userName ||
                item.name ||
                "N/A"}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Book</p>
            <p className="font-medium">
              {item.bookTitle || item.title || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Request Date</p>
            <p>
              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Status</p>
            <Chip color={getStatusColor(item.status)}>
              {item.status || "pending"}
            </Chip>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-2">
              Update Status
            </p>
            <div className="w-full">
              <StatusDropdown item={item} />
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>





      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="w-full overflow-x-auto">
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Manage Deliveries"
                className="min-w-[900px]"
              >
                <Table.Header>
                  <Table.Column>
                    Client Name
                  </Table.Column>

                  <Table.Column>
                    Book Title
                  </Table.Column>

                  <Table.Column>
                    Request Date
                  </Table.Column>

                  <Table.Column>
                    Status
                  </Table.Column>

                  <Table.Column>
                    Update Status
                  </Table.Column>
                </Table.Header>

                <Table.Body>
                  {deliveries.map((item) => (
                    <Table.Row key={item._id}>
                      <Table.Cell>
                        {item.clientName ||
                          item.userName ||
                          item.name ||
                          "N/A"}
                      </Table.Cell>

                      <Table.Cell>
                        {item.bookTitle ||
                          item.title ||
                          "N/A"}
                      </Table.Cell>

                      <Table.Cell>
                        {item.createdAt
                          ? new Date(
                              item.createdAt
                            ).toLocaleDateString()
                          : "N/A"}
                      </Table.Cell>

                      <Table.Cell>
                        <Chip
                          color={getStatusColor(
                            item.status
                          )}
                        >
                          {item.status ||
                            "pending"}
                        </Chip>
                      </Table.Cell>

                      <Table.Cell>
                        <StatusDropdown
                          item={item}
                        />
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