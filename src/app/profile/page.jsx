"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { User, Mail, BadgeCheck, Calendar } from "lucide-react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-cyan-600 to-blue-700"></div>

        {/* Profile */}
        <div className="px-6 pb-8">
          <div className="-mt-16 flex flex-col items-center">
            <Image
              src={user.image || "/default-user.png"}
              alt={user.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover"
            />

            <h2 className="text-3xl font-bold mt-4">
              {user.name || "No Name"}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="border rounded-xl p-5 flex items-center gap-4">
              <User className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">
                  Full Name
                </p>
                <p className="font-semibold">
                  {user.name || "N/A"}
                </p>
              </div>
            </div>

            <div className="border rounded-xl p-5 flex items-center gap-4">
              <Mail className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>
                <p className="font-semibold">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="border rounded-xl p-5 flex items-center gap-4">
              <BadgeCheck className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">
                  Email Verified
                </p>
                <p
                  className={`font-semibold ${
                    user.emailVerified
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {user.emailVerified
                    ? "Verified"
                    : "Not Verified"}
                </p>
              </div>
            </div>

            <div className="border rounded-xl p-5 flex items-center gap-4">
              <Calendar className="text-cyan-600" />
              <div>
                <p className="text-sm text-gray-500">
                  Joined
                </p>
                <p className="font-semibold">
                  {user.createdAt
                    ? new Date(
                        user.createdAt
                      ).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="mt-8 border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              Account Information
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">
                  User ID
                </span>
                <span className="font-medium break-all">
                  {user.id}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">
                  Name
                </span>
                <span>{user.name}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">
                  Email
                </span>
                <span>{user.email}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Status
                </span>

                <span className="text-green-600 font-semibold">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;