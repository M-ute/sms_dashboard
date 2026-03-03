"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//import { RechartsDevtools } from '@recharts/devtools';
import  Image  from 'next/image';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 995,
    absent: 5,
     
  },
  {
    name: 'Tue',
    present: 850,
    absent: 150,
     
  },
  {
    name: 'Wed',
    present: 910,
    absent: 90,
     
  },
  {
    name: 'Thurs',
    present: 940,
    absent: 60,
     
  },
  {
    name: 'Fri',
    present: 920,
    absent: 80,
     
  },
];


const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4 shadow-lg'>
        <div className='flex justify-between items-center mb-10'> 
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        {/*CHART*/}
         <BarChart
            //style={{ width: '100%', maxWidth: '700px', maxHeight: '100vh', aspectRatio: 1.618 }}
            width="100%"
            height="80%"
            responsive
            data={data}
            barSize={20}
            
           
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
            <YAxis width="auto" axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{borderRadius:"10px"}}/>
            <Legend wrapperStyle={{paddingTop: "20px"}} />
            <Bar dataKey="present" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} legendType='circle'/>
            <Bar dataKey="absent" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
        </BarChart>
    </div>
  )
}

export default AttendanceChart