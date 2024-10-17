"use client";
import { useState } from "react";
import Image from "next/image";
import Newsletter from "@/public/newsletter.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [copiado, setCopiado] = useState<boolean>(false);
  const email: string = "carlostech873@gmail.com";

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <div className="flex bg-neutral-900 pt-5 md:pt-3 lg:pt-10 w-screen h-64 lg:h-80 flex-col items-center">
      <EnvelopeIcon className="h-16 w-16 text-white mb-4" />
      <h1 className="font-bold text-white mb-3 md:mb-5 lg:mb-8 md:text-xl lg:text-2xl">
        Mande-me um email.
      </h1>
      <div
        className={`flex bg-white p-3 w-[17rem] md:w-[32rem] lg:w-[40rem] border border-[#808080] justify-center rounded md:rounded-b-none font-medium ${
          copiado ? "bg-white" : ""
        }`}
      >
        <h4>{email}</h4>
        {copiado && (
          <span role="img" aria-label="confirmacao">
            ✅
          </span>
        )}
      </div>
      <button
        onClick={copiarEmail}
        className="mt-1 p-3 w-[17rem] md:w-[32rem] lg:w-[40rem] bg-green-500 text-black rounded md:rounded-t-none hover:bg-[#808080]"
      >
        {copiado ? "EMAIL COPIADO!" : "COPIAR EMAIL"}
      </button>
    </div>
  );
};

export default Contact;
