

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <div className="w-fit mx-auto flex flex-col items-center">
        <h2 className="font-bold text-3xl">Gadget Heaven</h2>
        <p className="text-center font-medium text-[#6c6b6f]">Leading the way in cutting-edge technology and innovation</p>
      </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly w-3/4 mx-auto">
    <nav className="grid grid-flow-row">
      <h6 className="font-bold text-lg mb-2">Services</h6>
      <a className="text-[#6c6b6f] link link-hover">Product Support</a>
      <a className="text-[#6c6b6f] link link-hover">Order Tracking</a>
      <a className="text-[#6c6b6f] link link-hover">Shipping & Delivery</a>
      <a className="text-[#6c6b6f] link link-hover">Returns</a>
    </nav>
    <nav className="grid grid-flow-row">
      <h6 className="font-bold text-lg mb-2">Company</h6>
      <a className="text-[#6c6b6f] link link-hover">About us</a>
      <a className="text-[#6c6b6f] link link-hover">Careers</a>
      <a className="text-[#6c6b6f] link link-hover">Contact</a>
     
      
    </nav>
    <nav className="grid grid-flow-row">
      <h6 className="font-bold text-lg mb-2">Legal</h6>
      <a className="text-[#6c6b6f] link link-hover">Terms of use</a>
      <a className="text-[#6c6b6f] link link-hover">Privacy policy</a>
      <a className="text-[#6c6b6f] link link-hover">Cookie policy</a>
    </nav>
    </div>
  </footer>
  );
};

export default Footer;