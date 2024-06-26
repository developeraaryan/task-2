"use client";
import Loader from "@/components/Loader/page";
import Users from "@/components/Users/page";
import React, { useEffect, useState } from "react";

interface UserType {
  createdAt: string;
  id: string;
  avatar: string;
  Bio: string;
  jobTitle: string;
  profile: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        const data = await response.json();
        setUsers(
          data?.filter(
            (user: UserType, index: number, self: UserType[]) =>
              index === self.findIndex((t) => t.id === user.id)
          )
        );
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="container mx-auto px-4 md:px-10 min-h-screen py-8 flex flex-col justify-center items-center gap-10">
      {users?.length > 0 ? (
        <>
          <h1
            className="text-5xl md:text-9xl font-extrabold bg-gradient-to-r from-[#FF9800] via-[#FF5722] to-[#FFC107] bg-clip-text  text-transparent"
            style={{
              WebkitTextFillColor: "transparent",
              filter: " drop-shadow(0 0 0.75rem #0d3a58)",
            }}
          >
            Users
            <div className="bg-gradient-to-r from-[#FF9800] via-[#FF5722] to-[#FFC107] h-1 md:h-2 rounded-full" />
          </h1>
          <Users users={users} />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default HomePage;
