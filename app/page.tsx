"use client";
import React, { useEffect, useState } from "react";
import Users from "@/Components/Users/page"; // Ensure the path is correct based on your project structure

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
    <main className="container mx-auto px-2 min-h-screen py-8 flex flex-col justify-center items-center gap-10 md:mx-auto">
      <h1 className="text-3xl">Users</h1>
      <Users users={users} />
    </main>
  );
};

export default HomePage;
