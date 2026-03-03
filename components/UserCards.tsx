import Image from 'next/image'

const UserCards = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-purple even:bg-green p-4 flex-1 min-w-32.5 shadow-md'>
        <div className="flex justify-between items-center mb-4 gap-2">
          <span className='bg-white rounded-full px-2 py-1 text-green-600 text-[13px]'>2026/27</span>
          <Image src="/more.png" alt='' width={15} height={15}/>
        </div>

        <h1 className='text-2xl font-semibold my-4 text-gray-100 bg-gray-600 rounded-xl flex items-center justify-center'>1,500</h1>
        <h2 className='capitalize text-sm font-medium text-gray-600' >{type}s</h2>
    </div>
  )
}

export default UserCards