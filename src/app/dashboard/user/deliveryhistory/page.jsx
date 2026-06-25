"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function DeliveryHistory() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/delivery-requests/${user.email}`
        );

        const data = await res.json();

        setBooks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]);

  return (
    <div className="p-4 md:p-6">
      <div className="bg-white rounded-xl border shadow-sm p-4">
        <h2 className="text-xl font-semibold mb-4">
          Delivery History
        </h2>

        {/* Mobile View */}
        <div className="grid gap-4 md:hidden">
          {books.length > 0 ? (
            books.map((book) => (
              <div
                key={book._id}
                className="border rounded-xl p-4 shadow-sm"
              >
                <h3 className="font-semibold text-lg">
                  {book.title}
                </h3>

                <div className="mt-2 space-y-2 text-sm text-gray-600">
                  <p>
                    💰 Delivery Fee: ৳{book.deliveryFee}
                  </p>

                  <p>
                    📅 Request Date:{" "}
                    {book.requestDate
                      ? new Date(
                          book.requestDate
                        ).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>

                <div className="mt-3">
                  <Chip
                    color={
                      book.status === "delivered"
                        ? "success"
                        : "warning"
                    }
                    variant="flat"
                  >
                    {book.status === "delivered"
                      ? "delivered"
                      : "pending"}
                  </Chip>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-center text-gray-500">
                No delivery history found
              </p>
            )
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
        <Table className="min-w-[900px]">
  <Table.ScrollContainer>
    <Table.Content>
      <Table.Header>
        <Table.Column>Book Title</Table.Column>
        <Table.Column>Delivery Fee</Table.Column>
        <Table.Column>Request Date</Table.Column>
        <Table.Column>Status</Table.Column>
      </Table.Header>

      <Table.Body>
        {books.length > 0 ? (
          books.map((book) => (
            <Table.Row key={book._id}>
              <Table.Cell>{book.title}</Table.Cell>

              <Table.Cell>
                ৳{book.deliveryFee}
              </Table.Cell>

              <Table.Cell>
                {book.requestDate
                  ? new Date(
                      book.requestDate
                    ).toLocaleDateString()
                  : "N/A"}
              </Table.Cell>

              <Table.Cell>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    book.status === "delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {book.status === "delivered"
                    ? "delivered"
                    : "pending"}
                </span>
              </Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Cell
              colSpan={4}
              className="text-center font-medium py-10"
            >
              No Delivery History Found
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Content>
  </Table.ScrollContainer>
</Table>
        </div>
      </div>
    </div>
  );
}