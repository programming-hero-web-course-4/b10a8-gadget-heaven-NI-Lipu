

const Heading = ({title, subtitle, className}) => {
  
  return (
    <div className="text-center">
      <h1 className={`font-bold mb-5 text-3xl text-white ${className}`}>{title}</h1>
      <p className="text-white leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default Heading;