"use client";

import React, { useEffect, useState } from "react";
import { Table, Button } from "@heroui/react";
import { Eye, Trash, Pencil } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import EditModal from "@/components/dashboard/librarian/EditModal";
import AddBookDelect from "@/components/dashboard/librarian/AddBookDelect";


const ManageInventory = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [books, setBooks] = useState([]);

  // ✅ fetch books
  useEffect(() => {
    const getBooks = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/bookpost?email=${user.email}`
        );
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, [user]);

  // ✅ status color
  const getStatusColor = (status) => {
    if (status === "Published") return "bg-green-500 text-white";
    if (status === "Unpublished") return "bg-red-500 text-white";
    return "bg-yellow-500 text-white";
  };

  // ✅ delete
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure?")) return;

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/bookpost/${id}`,
//         { method: "DELETE" }
//       );
//       const data = await res.json();

//       if (data.deletedCount > 0) {
//         setBooks((prev) => prev.filter((b) => b._id !== id));
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

  return (
    <div className="w-full">

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <Table className="min-w-[900px]">
          <Table.ScrollContainer>
            <Table.Content>

              <Table.Header>
                <Table.Column>Title</Table.Column>
                <Table.Column>Author</Table.Column>
                <Table.Column>Category</Table.Column>
                <Table.Column>Delivery Fee</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {books.length > 0 ? (
                  books.map((book) => (
                    <Table.Row key={book._id}>
                      <Table.Cell>{book.title}</Table.Cell>
                      <Table.Cell>{book.author}</Table.Cell>
                      <Table.Cell>{book.category}</Table.Cell>
                      <Table.Cell>${book.deliveryFee}</Table.Cell>

                      <Table.Cell>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                            book.status
                          )}`}
                        >
                          {book.status || "Pending"}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex gap-2">

                          <Link href={`/book/${book._id}`}>
                            <Button size="sm">
                              <Eye size={14} />
                            </Button>
                          </Link>

                          {/* <Link href={`/dashboard/edit-book/${book._id}`}>
                            <Button size="sm" color="primary">
                              
                              
                            </Button>
                          </Link> */}

                             <EditModal book={book}></EditModal> 
                            <AddBookDelect user={book}></AddBookDelect>
                        

                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell colSpan={6} className="text-center font-bold text-2xl py-10">
                      No Books Found
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
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book._id}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h2 className="font-bold text-lg">{book.title}</h2>

              <p className="text-sm text-gray-500">
                Author: {book.author}
              </p>

              <p className="text-sm text-gray-500">
                Category: {book.category}
              </p>

              <p className="text-sm text-gray-500">
                Fee: ${book.deliveryFee}
              </p>

              <p className="mt-2">
                Status:{" "}
                <span
                  className={`px-2 py-1 rounded text-sm ${getStatusColor(
                    book.status
                  )}`}
                >
                  {book.status || "Pending"}
                </span>
              </p>

              <div className="flex gap-2 mt-3">
                <Link href={`/book/${book._id}`}>
                  <Button size="sm">
                    <Eye size={14} />
                  </Button>
                </Link>

               <EditModal book={book}></EditModal>

                <Button
                  size="sm"
                  color="danger"
                 
                >
                  <Trash size={14} />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center border rounded-2xl text-2xl py-10">
            No Books Found
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageInventory;