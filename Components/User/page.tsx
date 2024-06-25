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
  const [src, setSrc] = React.useState<string>(user?.avatar);
  return (
    <section
      key={user?.id}
      className="bg-gray-100 text-black p-4 rounded-lg shadow-lg grid grid-cols-4 gap-8"
    >
      <div className=" flex justify-center items-center">
        <Image
          src={`${src}`}
          alt="User"
          width={200}
          height={200}
          className="rounded-full grid  place-items-center bg-gray-300 shadow-inner shadow-gray-900 p-1"
          onError={() => setSrc("/avatar.svg")}
        />
      </div>
      <div className="details col-span-3 grid">
        <div className="name font-black text-lg">
          {(user?.profile?.firstName).concat(" ", user?.profile?.lastName)}
        </div>
        <div className="username text-gray-500 text-[0.75rem] md:text-base font-semibold">
          <strong>@{user?.profile?.username}</strong>
        </div>
        <div className="title text-sm md:text-base font-normal">
          <strong>{user?.jobTitle ? user?.jobTitle : "Anonymous User"}</strong>
        </div>
        <div className="bio font-thin text-xs md:text-base text-justify">
          {user?.Bio}
        </div>
        <div className="email">
          <a href={`mailto:${user?.profile?.email}`}>
            <strong>
              <span className="text-blue-400 text-xs md:text-base hover:text-blue-700 transition-colors duration-1000">
                {user?.profile?.email}
              </span>
            </strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default User;
