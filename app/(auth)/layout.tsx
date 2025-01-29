/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="xl:2/5 hidden w-1/2 items-center justify-center bg-brand-100 p-10 lg:flex">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src={"/assets/images/logo-full.svg"}
            alt="logo"
            width={224}
            height={82}
            className="h-auto"
          />
          <div className="space-y-5 text-light-300">
            <h1 className="h1">Effortlessly Organize Your Files</h1>
            <p className="body-1">
              Securely store, access, and manage all your documents in one
              place—fast, reliable, and designed to make your life easier.
            </p>
          </div>
          <Image
            src="/assets/images/files.svg"
            alt="files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-light-300 p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
