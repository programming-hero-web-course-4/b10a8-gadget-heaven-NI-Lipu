import { Outlet } from "react-router-dom";
import Heading2 from "../components/Heading2";
import { useEffect } from "react";

const Dashboard = () => {
   // Dynamic Title
    useEffect(() => {
      document.title= 'Dashboard | Gadget Heaven'
    }, [])
  return (
   <>
    <div>
      <Heading2
      title={'Dashboard'}
      subtitle={
        <>
        'Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br> the coolest accessories, we have it all!'
        </>
      }
      ></Heading2>
    </div>
    <div className="w-11/12 lg:w-10/12 mx-auto"><Outlet></Outlet></div>
   </>
  );
};

export default Dashboard;