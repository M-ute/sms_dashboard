import Image from 'next/image'

const UserCards = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-first even:bg-fifth p-4 flex-1 min-w-[130px'>
        <div className="flex justify-between items-center mb-4">
          <span className='bg-white rounded-full px-2 py-1 text-green-600 text-[13px]'>2026/27</span>
          <Image src="/more.png" alt='' width={20} height={20}/>
        </div>

        <h1 className='text-2xl font-semibold my-4'>1,500</h1>
        <h2 className='capitalize text-sm font-medium text-gray-600' >{type}s</h2>
    </div>
  )
}

export default UserCards