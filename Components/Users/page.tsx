"use client";
import React from "react";
import User from "../User/page";

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

interface UserProps {
  users: UserType[];
}

const Users: React.FC<UserProps> = ({ users }) => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-2 gap-4 w-full">
      {users.map((user, index) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
