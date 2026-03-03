"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Image from 'next/image';


const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
    
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
    
},
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
    
},
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
    
},
  {
    name: 'May',
    income: 1890,
    expense: 4800,
    
},
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: 'Sep',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'Oct',
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },

]


const FinanceChart = () => {
  return (
    <div className='bg-white h-full w-full rounded-xl p-6 shadow-md'>
        <div className='flex justify-between items-center mb-10'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>

        {/*CHART*/}

        <LineChart
            style={{ width: '100%', height: '80%', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} fill="red"/>
            <YAxis width="auto" axisLine={false} tickLine={false}/>
            <Tooltip contentStyle={{borderRadius:"10px"}}/>
            <Legend verticalAlign='bottom' wrapperStyle={{paddingTop: "20px"}}/>
            <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={3}/>
            <Line type="monotone" dataKey="expense" stroke="#82ca9d"  strokeWidth={5}/>
        </LineChart>
    </div>
  )
}

export default FinanceChart