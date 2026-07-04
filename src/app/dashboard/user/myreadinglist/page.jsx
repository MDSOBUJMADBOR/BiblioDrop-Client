import React from "react";

const UserMyReadingListPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className="border-b bg-base-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">My Reading List</h1>
          <p className="text-sm text-gray-500 mt-2">
            Manage all the books you want to read.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-base-200 rounded-xl p-6">
            <h3 className="text-sm text-gray-500">Total Books</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-base-200 rounded-xl p-6">
            <h3 className="text-sm text-gray-500">Currently Reading</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-base-200 rounded-xl p-6">
            <h3 className="text-sm text-gray-500">Completed</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <input
            type="text"
            placeholder="Search books..."
            className="input input-bordered w-full md:max-w-sm"
          />

          <select className="select select-bordered w-full md:w-56">
            <option>All Books</option>
            <option>Want to Read</option>
            <option>Reading</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Book List */}
        <div className="bg-base-200 rounded-xl overflow-hidden">

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-6 font-semibold border-b px-6 py-4">
            <p>Book</p>
            <p>Author</p>
            <p>Status</p>
            <p>Added</p>
            <p>Progress</p>
            <p className="text-right">Action</p>
          </div>

          {/* Empty State */}
          <div className="py-20 text-center">
            <div className="text-6xl mb-4">📚</div>

            <h2 className="text-2xl font-bold">
              Your Reading List is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Start adding your favorite books to keep track of your reading.
            </p>

            <button className="btn btn-primary mt-6">
              Browse Books
            </button>
          </div>

          {/* Render books here */}
          {/* books.map(book => <ReadingListCard key={book._id} book={book} />) */}

        </div>
      </div>
    </div>
  );
};

export default UserMyReadingListPage;