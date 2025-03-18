import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";


const Home = () => {
  const categories = useLoaderData()
  // console.log(categories)
  return (
    <div className="">
      <Banner></Banner>
      <h2 className="font-bold text-3xl md:text-4xl mt-32 md:mt-56 lg:mt-72 text-center mb-10">Explore Cutting-Edge Gadgets</h2>
      <div className="flex gap-5 w-11/12 lg:w-10/12 mx-auto">
        <div className="md:w-1/4">
          <Categories categories={categories}></Categories>
        </div>
        <div className="md:w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;