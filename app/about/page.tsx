import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About Us - Banao Technologies",
  description: "About Us",
  keywords: "About Us",
};

const About: React.FC = () => {
  return (
    <main className="container px-6 about-page flex flex-col justify-center items-center gap-4 min-w-full h-full bg-gradient-to-r from-[#FFC107] via-[#FF9800] to-[#FF5722] text-white text-center py-10 bottom-0 min-h-screen md:px-10">
      <div className="about-content flex flex-col justify-center items-center gap-10">
        <p className="about-title text-3xl font-bold">About Us</p>
        <p className="about-text text-lg text-justify">
          Banao Technologies is a software development company that specializes
          in building web and mobile applications for businesses of all sizes.
          Our team of experienced developers and designers work together to
          create custom solutions that help our clients achieve their goals.
        </p>
        <p className="about-text text-lg text-justify">
          We believe in using the latest technologies to build high-quality
          software that is both reliable and scalable. Our goal is to provide
          our clients with the tools they need to succeed in today's digital
          world.
        </p>
        <p className="about-text text-lg text-justify">
          Whether you need a simple website or a complex web application, we can
          help. Contact us today to learn more about our services and how we can
          help your business grow.
        </p>
      </div>

      <ul className="about-project flex flex-col justify-start items-center gap-10 mt-20 list-disc w-full px-6 pb-8">
        <p className="about-title text-3xl font-bold">About This Project</p>
        <li className="text-lg text-justify w-full">
          This project was created as part of the Banao Technologies{" "}
          <span className="font-extrabold">
            Next.js Internship Program task.
          </span>
        </li>
        <li className="text-lg text-justify w-full">
          The goal of this project was to build a simple website using{" "}
          <Link
            href={`https://nextjs.org`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href={`https://tailwindcss.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#38bdf8]"
          >
            Tailwind CSS
          </Link>
          .
        </li>
        <li className="text-lg text-justify w-full">
          The website includes a home page and an about page, as well as a
          responsive layout that works on all devices.
        </li>
        <li className="text-lg text-justify w-full">
          It fetches shortlisted users from a{" "}
          <Link
            href={"https://602e7c2c4410730017c50b9d.mockapi.io/users"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:text-[#38bdf8] transition-colors duration-300 ease-in-out"
          >
            public API
          </Link>{" "}
          and displays them on home page as cards.
        </li>

        <li className="text-lg text-justify w-full">
          The website is hosted on Vercel and the source code is available on
          GitHub.
        </li>
      </ul>
    </main>
  );
};

export default About;
