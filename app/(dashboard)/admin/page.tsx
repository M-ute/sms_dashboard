import UserCards from "@/components/UserCards"
import CountCharts from "@/components/CountCharts"
//import { type } from '../../../.next/types/routes.d';

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/*LEFT*/}
      <div className="w-full lg:w-2/3 text-black flex flex-col gap-8">
        {/*USER CARDS*/}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCards type="student"/>
          <UserCards type="teacher"/>
          <UserCards type="parent"/>
          <UserCards type="staff"/>
        </div>

        {/*MIDDLE CHARTS*/}
        <div className="flex flex-col lg:flex-row gap-4">
          {/*COUNT CHART*/}
          <div className="w-full lg:w-1/3 h-112.5">
            <CountCharts/>
          </div>

          {/*ATTENDANCE CHART*/}
          <div className="w-full lg:w-2/3 h-112.5">
          
          </div>
        </div>

        {/*BOTTOM CHARTS*/}
        <div className="">

        </div>
      </div>

      {/*RIGHT*/}
      <div className="w-full lg:w-1/3 text-black"> 
        right
      </div>

    </div>
  )
}

export default AdminPage