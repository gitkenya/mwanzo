import Image from "next/image";
import Link from "next/link";
import { IoCall, IoHomeOutline, IoMail } from "react-icons/io5";

export const revalidate = 86400;

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center relative">
      <Image
        className="object-cover"
        src="/assets/img/bg/mwanzo-place.webp"
        fill
        priority
        sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1200px"
        alt="Mwanzo Place"
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-slate-950/[.5] to-slate-900/[.1] flex flex-col items-center justify-center gap-8">
        <div className="text-center text-slate-50 flex flex-col items-center">
          <p className="text-slate-50 text-xl md:text-4xl font-light italic">
            Discover your dream home with us
          </p>
        </div>
        <Image
          className="rounded-lg"
          src="/assets/img/logos/logo.jpg"
          width={200}
          height={200}
          priority
          alt="Mwanzo Place"
        />

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="mailto:hello@mwanzo.co.ke"
            className="transition-all duration-300 text-slate-50 font-normal text-sm flex flex-row items-center gap-2 border border-slate-50 px-4 py-2 rounded hover:bg-slate-50 hover:text-slate-800"
          >
            <IoMail size={28} />
            hello@mwanzo.co.ke
          </Link>
          <Link
            href="tel:+254752993333"
            className="transition-all duration-300 text-slate-50 font-normal text-sm flex flex-row items-center gap-2 border border-slate-50 px-4 py-2 rounded hover:bg-slate-50 hover:text-slate-800"
          >
            <IoCall size={28} />
            0752 993 333
          </Link>
        </div>
      </div>
    </main>
  );
}
