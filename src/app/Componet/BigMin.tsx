function BigMiniImg() {
  const images = ["/foto1.jpg", "/foto2.jpg", "/foto3.jpg"];

  return (
    <div className="flex justify-center items-center m-auto">
      <div className="flex items-center justify-center max-md:flex max-md:flex-col max-md:items-center max-md:gap-4">
        {images.map((src, index) => {
          let className = "transition-all duration-300 object-cover";

          if (src === "/foto2.jpg") {
            className += " w-[500px] h-[400px] rounded-2xl max-xl:w-[400px] h-[300px] max-lg:w-[300px] h-[200px] max-md: w-[180px] max-md:h-[180px]";
          } else if (src === "/foto3.jpg") {
            className += " w-[400px] h-[350px] rounded-tr-2xl rounded-br-2xl max-xl:w-[300px] h-[250px] max-lg:w-[220px] h-[150px] max-md: w-[180px] max-md:h-[180px] max-md:rounded-[5px]";
          } else {
            className += " w-[400px] h-[350px] rounded-tl-2xl rounded-bl-2xl max-xl:w-[300px] h-[250px] max-lg:w-[220px] h-[150px] max-md: w-[180px] max-md:h-[180px] max-md:rounded-[5px]";
          }

          return (
            <img
              key={index}
              src={src}
              alt={`Mini ${index + 1}`}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BigMiniImg;
