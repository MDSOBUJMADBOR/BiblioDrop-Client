"use client";

import React, { useEffect, useState } from "react";
import { Table } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const DeliveryHistory = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/delivery-request/email/${user.email}`
        );

        const data = await res.json();
        setRequests(data);
      } catch (error) {
        console.error(
          "Error fetching delivery history:",
          error
        );
      }
    };

    getRequests();
  }, [user]);


const getStatusColor = (status) => {
  const currentStatus = status?.toLowerCase();

  if (currentStatus === "delivered") {
    return "bg-green-500 text-white";
  }

  if (currentStatus === "pending") {
    return "bg-yellow-500 text-white";
  }

  return "bg-blue-500 text-white";
};

  return (
    <div className="w-full">
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <Table className="min-w-[900px]">
          <Table.ScrollContainer>
            <Table.Content>
              <Table.Header>
                <Table.Column >
                  Book Title
                </Table.Column>

                <Table.Column>
                  Delivery Fee
                </Table.Column>

                <Table.Column>
                  Request Date
                </Table.Column>

                <Table.Column>
                  Status
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {requests.length > 0 ? (
                  requests.map((book) => (
                    <Table.Row key={book._id}>
                      <Table.Cell>
                        {book.title}
                      </Table.Cell>

                      <Table.Cell>
                        ${book.deliveryFee}
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
  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
    book.status
  )}`}
>
  {book.status || "Pending"}
</span>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={4}
                      className="text-center font-bold text-2xl py-10"
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

      {/* ================= MOBILE CARD ================= */}
      <div className="md:hidden space-y-4">
        {requests.length > 0 ? (
          requests.map((book) => (
            <div
              key={book._id}
              className="bg-white p-4 rounded-xl shadow border"
            >
              <h2 className="font-bold text-lg">
                {book.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Delivery Fee: $
                {book.deliveryFee}
              </p>

              <p className="text-sm text-gray-500">
                Request Date:{" "}
                {book.requestDate
                  ? new Date(
                      book.requestDate
                    ).toLocaleDateString()
                  : "N/A"}
              </p>

              <p className="mt-3">
                Status:{" "}
                <span
  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
    book.status
  )}`}
>
  {book.status || "Pending"}
</span>
              </p>
            </div>
          ))
        ) : (
          <div className="text-center border rounded-2xl text-2xl py-10">
            No Delivery History Found
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryHistory;