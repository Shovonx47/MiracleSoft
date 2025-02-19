import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const CardComponent = ({
  title,
  description,
  image,
  isEven,
  icon,
}: {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  isEven: boolean;
}) => {
  return (
    <Card
      className={`border-none shadow-none group bg-transparent ${isEven ? "md:-mt-8 md:-mr-5" : "md:-mt-8"}`}
    >
      {" "}
      {/* Adjust for even/odd */}
      <CardBody>
        <div
          className={`bg-transparent ${!isEven ? "flex flex-col-reverse md:flex-row" : ""} md:flex md:gap-x-8 lg:gap-x-16 md:justify-end`}
        >
          {/* Conditionally render content based on whether it's even or odd */}
          {!isEven && (
            <div className="md:w-7/12 lg:w-1/2 mt-20 md:mt-7 lg:mt-28 mr-1 lg:mr-0">
              <h1 className="text-center md:text-right text-2xl md:text-3xl font-bold text-primary">
                {title}
              </h1>

              <p className="pt-4 text-center md:text-right text-lg leading-7 md:leading-8 font-light text-gray-800 dark:text-white">
                {description}
              </p>
            </div>
          )}

          {/* Image and heart icon section */}
          <div className={`h-full ${
            isEven 
              ? "mt-[85px] md:mt-[75px] md:ml-[185px] lg:ml-[115px]" 
              : "mt-[85px] md:mt-[75px] md:ml-[185px] lg:ml-[115px]"
          }`}>
            <div className={`${
              isEven 
                ? "hidden md:flex border-[9px] md:border-[11px] border-[#a10101] h-16 md:h-52 lg:h-80 relative w-full md:w-9/12 lg:w-full translate-x-[-8px] translate-y-[8px]" 
                : "hidden md:flex border-[9px] md:border-[11px] border-[#a10101] h-16 md:h-52 lg:h-80 relative w-full md:w-12/12 lg:w-full -translate-y-[40px]"
            }`} />
            <div
              className={`md:-mt-72 lg:-mt-96 ${isEven ? "md:ml-6" : "md:mr-12"} relative`}
            >
              <Image
                isZoomed
                alt="Album cover"
                className={`${isEven ? "object-cover h-80 md:h-[400px] lg:h-full w-full md:w-9/12 lg:w-full rounded-none" : "object-cover h-80 md:h-[400px] lg:h-full w-full md:w-12/12 lg:w-full rounded-none"}`}
                radius="none"
                src={image}
              />
              <div
                className={`${isEven ? "right-[30%] md:right-[36px] lg:-right-6" : "left-[30%] md:-left-6"} absolute -bottom-16   md:bottom-[30%] z-10 h-36 md:h-40 w-36 md:w-40 border-4 border-[#a10101] bg-[#a10101] flex justify-center items-center transition duration-700 ease-in-out group-hover:bg-white group-hover:rotate-45  `}
              >
                {icon}
              </div>
            </div>
          </div>

          {/* Conditionally render content for even cards */}
          {isEven && (
            <div className="md:w-7/12 lg:w-5/12 mt-10 md:mb-10 md:mt-5 md:-ml-12 lg:ml-0 lg:mt-28 ">
              <h1 className="text-center md:text-left text-2xl md:text-3xl font-bold text-primary">
                {title}
              </h1>

              <p className="pt-4 text-lg md:text-lg leading-7 md:leading-8 font-light text-gray-800 dark:text-white">
                {description}
              </p>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardComponent;