import { useEffect } from "react";
import ApexChart from "../components/ApexChart";
import Heading2 from "../components/Heading2";


const Statistics = () => {
   // Dynamic Title
    useEffect(() => {
      document.title= 'Statistics | Gadget Heaven'
    }, [])
  return (
    <div>
      <Heading2
        title={'Statistics'}
        subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
      ></Heading2>
       <div className="App mt-10 w-full md:w-10/12 mx-auto">
        <h2 className="text-center font-bold text-xl mb-5">Products Price($)</h2>
        <ApexChart />
      </div>
    </div>
  );
};

export default Statistics;