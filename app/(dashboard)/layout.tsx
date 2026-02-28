import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*LEFT*/}
       <div className="w-[20%] md:w-[10%] lg:w-[20%] xl:w-[20%] bg-gray-200">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4 bg-gray-400 ">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block text-black"> Victory College</span>
        </Link>

        <Menu/>
       </div>
      {/*RIGHT*/}
      <div className="w-[80%] md:w-[90%] lg:w-[80%] xl:w-[80%] bg-gray-600">
        r
      </div>

    </div>
     
); 
} 