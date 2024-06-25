import Image from "next/image";
import React from "react";

interface User {
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

interface UsersProps {
  user: User;
}

const User: React.FC<UsersProps> = ({ user }) => {
  return (
    <section
      key={user?.id}
      className="bg-gray-100 text-black p-4 rounded-lg shadow-lg grid grid-cols-4 gap-8"
    >
      <div className=" flex justify-center items-center">
        <Image
          src={`https://robohash.org/people`}
          alt="User"
          width={100}
          height={100}
          className="rounded-full grid  place-items-center bg-gray-300"
        />
      </div>
      <div className="details col-span-3 grid">
        <div className="name">
          {(user?.profile?.firstName).concat(" ", user?.profile?.lastName)}
        </div>
        <div className="username font-semibold">
          <strong>@{user?.profile?.username}</strong>
        </div>
        <div className="title font-normal">
          <strong>{user?.jobTitle ? user?.jobTitle : "Anonymous User"}</strong>
        </div>
        <div className="bio font-thin text-sm md:text-base text-justify">
          {user?.Bio}
        </div>
        <div className="email">
          <a href={`mailto:${user?.profile?.email}`}>
            <strong>
              <u>
                <span className="text-blue-700">{user?.profile?.email}</span>
              </u>
            </strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default User;
