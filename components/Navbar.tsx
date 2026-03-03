import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      {/*searchbar */}
      <div className="hidden md:flex bg-white rounded-full items-center justify-center p-1">
        <Image src="/search.png" alt="" width={14} height={14} className="mx-4"/>
        <input type="text" placeholder="Search..." className="w-50 p-1 bg-transparent outline-none text-black"/>
      </div>

      {/*icons and user */}
      <div className=" flex item-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20}/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20}/>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">5</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium not-odd text-black">Kwesi Amos</span>
          <span className="text-[10px] text-gray-500 text-right ">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
      </div>

    </div>
  )
}

export default Navbar