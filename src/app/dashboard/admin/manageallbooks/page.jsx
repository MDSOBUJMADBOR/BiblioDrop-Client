"use client";

import { useEffect, useMemo, useState } from "react";
import { Table, Button, Chip } from "@heroui/react";

export default function BookApprovalQueue() {
  const [books, setBooks] = useState([]);

  const [sortDescriptor, setSortDescriptor] = useState({
    column: "title",
    direction: "ascending",
  });

  // ✅ Fetch books
  useEffect(() => {
    fetch("http://localhost:8080/bookpost")  
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // ✅ Sorting
  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => {
      const col = sortDescriptor.column;

      let first =
        col === "date"
          ? new Date(a.createdAt || 0)
          : String(a[col] || "");

      let second =
        col === "date"
          ? new Date(b.createdAt || 0)
          : String(b[col] || "");

      let cmp =
        first instanceof Date
          ? first - second
          : first.localeCompare(second);

      if (sortDescriptor.direction === "descending") {
        cmp *= -1;
      }

      return cmp;
    });
  }, [books, sortDescriptor]);

  // ✅ DELETE
  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;

    const res = await fetch(`http://localhost:8080/bookpost/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      setBooks((prev) => prev.filter((b) => b._id !== id));
    }
  };

  // ✅ TOGGLE STATUS (MAIN FIX 🔥)
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus =
      currentStatus === "publish" ? "unpublish" : "publish";

    const res = await fetch(`http://localhost:8080/bookpost/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      setBooks((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, status: newStatus } : b
        )
      );
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Manage All Books
      </h2>

      {/* ================= MOBILE ================= */}
      <div className="grid gap-4 md:hidden">
        {sortedBooks.map((book) => (
          <div
            key={book._id}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author}</p>

            <div className="text-sm mt-2">
              <p>📧 {book.email}</p>
              <p>
                📅{" "}
                {new Date(
                  book.createdAt || Date.now()
                ).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-2">
              <Chip
                variant="flat"
                color={
                  book.status === "publish"
                    ? "success"
                    : "warning"
                }
              >
                {book.status || "unpublish"}
              </Chip>
            </div>

            <div className="flex gap-2 mt-3">
              {/* ✅ TOGGLE BUTTON */}
              <Button
                fullWidth
                color={
                  book.status === "publish"
                    ? "success"
                    : "warning"
                }
                onClick={() =>
                  handleToggleStatus(
                    book._id,
                    book.status
                  )
                }
              >
                {book.status === "publish"
                  ? "Unpublish"
                  : "Publish"}
              </Button>

              <Button
                className="bg-red-500"
                fullWidth
                onClick={() =>
                  handleDelete(book._id)
                }
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <Table>
          <Table.ScrollContainer>
            <Table.Content
              aria-label="Book Approval Table"
              className="min-w-[800px]"
              sortDescriptor={sortDescriptor}
              onSortChange={setSortDescriptor}
            >
              <Table.Header>
                <Table.Column allowsSorting id="title">
                  {({ sortDirection }) => (
                    <Table.SortableColumnHeader sortDirection={sortDirection}>
                      Title
                    </Table.SortableColumnHeader>
                  )}
                </Table.Column>

                <Table.Column allowsSorting id="author">
                  {({ sortDirection }) => (
                    <Table.SortableColumnHeader sortDirection={sortDirection}>
                      Author
                    </Table.SortableColumnHeader>
                  )}
                </Table.Column>

                <Table.Column id="email">
                  Librarian
                </Table.Column>

                <Table.Column allowsSorting id="date">
                  {({ sortDirection }) => (
                    <Table.SortableColumnHeader sortDirection={sortDirection}>
                      Date
                    </Table.SortableColumnHeader>
                  )}
                </Table.Column>

                <Table.Column id="status">
                  Status
                </Table.Column>

                <Table.Column id="actions">
                  Actions
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {sortedBooks.map((book) => (
                  <Table.Row key={book._id}>
                    <Table.Cell>{book.title}</Table.Cell>
                    <Table.Cell>{book.author}</Table.Cell>
                    <Table.Cell>{book.email}</Table.Cell>

                    <Table.Cell>
                      {new Date(
                        book.createdAt || Date.now()
                      ).toLocaleDateString()}
                    </Table.Cell>

                    <Table.Cell>
                      <Chip
                        variant="flat"
                        color={
                          book.status === "publish"
                            ? "success"
                            : "warning"
                        }
                      >
                        {book.status || "unpublish"}
                      </Chip>
                    </Table.Cell>

                    <Table.Cell className="flex gap-2">
                      {/* ✅ TOGGLE BUTTON */}
                      <Button
                        size="sm"
                        color={
                          book.status === "publish"
                            ? "success"
                            : "warning"
                        }
                        onClick={() =>
                          handleToggleStatus(
                            book._id,
                            book.status
                          )
                        }
                      >
                        {book.status === "publish"
                          ? "Unpublish"
                          : "Publish"}
                      </Button>

                      <Button
                        size="sm"
                        className="bg-red-500"
                        onClick={() =>
                          handleDelete(book._id)
                        }
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
  );
}