"use client";

import Image from "next/image";
import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute bottom-14 left-5 text-black"><Alert color="info">Alert!</Alert></div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)] bg-state_300 overflow-hidden">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start dark:text-black light:text-white">
          <div
            className="w-[320px] h-[499px] rounded-[20px] bg-white p-200"
            style={{ boxShadow: "0px 25px 25px 0 rgba(0,0,0,0.05)" }}
          >
            <Image
              src="/images/image-qr-code.png"
              alt="QR Code"
              width={288}
              height={288}
              className="rounded-[10px] mb-300"
            />
            <div className="text-center">
              <div className="text-state_900 text-text_preset_1 font-bold mb-200">
                Improve your front-end skills by building projects
              </div>
              <p className="text-state_500 text-text_preset_2">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
