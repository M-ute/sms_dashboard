"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';



// #region Sample data
const data = [

 {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 40,
    fill: '#fae27c',
  },
  {
    name: 'Boys',
    count: 60,
    fill: '#c3ebfa',
  },
];

// #endregion
// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4 shadow-md'>
        {/*TITLE*/}
        <div className='flex justify-between items-center '>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>


        {/*CHART*/}
        <div className="relative w-full h-3/4 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                    cx="50%"
                    barSize={30}
                    data={data}
                    >
                    <RadialBar  background dataKey="count" />
                    <Tooltip contentStyle={{borderRadius:"10px"}} />
                    </RadialBarChart>
                </ResponsiveContainer>

                <Image src="/maleFemale.png" alt='' width={42} height={42} className='absolute top-1/2 left-1/2 -translate-1/2 -translate-1/2' />
            </div>
        </div>


        {/*BOTTOM*/}
        <div className='flex justify-center gap-10'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-[#c3ebfa] rounded-full' />
                    <h1 className='font-bold'>130</h1>
                    <h2 className='text-xs text-gray-500'>Boys (60%)</h2>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-fifth rounded-full' />
                    <h1 className='font-bold'>130</h1>
                    <h2 className='text-xs text-gray-500'>Girls (40%)</h2>
            </div>
        </div>
    </div>
  )
}

export default CountChart