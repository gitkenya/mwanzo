import Image from "next/image";
import Link from "next/link";
import { IoMail } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Image
        className="object-cover"
        src="/assets/img/bg/mwanzo-place.jpg"
        fill
        priority
        alt="Mwanzo Place"
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-slate-950/[.5] to-slate-900/[.1] flex flex-col items-center justify-center gap-8">
        <Image
          className="rounded-lg"
          src="/assets/img/logos/logo.jpg"
          width={200}
          height={200}
          priority
          alt="Mwanzo Place"
        />
        <Link
          href="mailto:hello@mwanzo.co.ke"
          className="transition-all duration-300 text-slate-50 font-normal text-base flex flex-row items-center gap-2 border border-slate-50 px-4 py-2 rounded-full hover:bg-slate-50 hover:text-slate-800"
        >
          <IoMail size={28} />
          hello@mwanzo.co.ke
        </Link>
      </div>
    </main>
  );
}
