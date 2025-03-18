import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {
  // console.log(categories)
  return (
    <div className="flex flex-col bg-slate-400 rounded-lg gap-y-4 px-3 py-6">
      
      {
        categories.map(category => 
          <NavLink 
              key={category.id}
              className={({isActive}) => `${isActive ? 'text-[#9538e2] bg-white p-1 rounded-lg font-extrabold' : 'text-white'} font-medium hover:p-1 hover:bg-white hover:text-[#9538e2] hover:font-bold hover:rounded-lg`}  
              to={`/category/${category.category}`}
              end
              >
                {category.category}
          </NavLink>)
      }
    </div>
  );
};

export default Categories;