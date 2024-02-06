import { BsFillLightningChargeFill } from "react-icons/bs";

interface Props {
  data: {
    title: string;
    content: string;
    img: string;
    comingSoon: boolean;
    benefit: string;
  };
}

const VendorFeature = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 justify-center items-center border overflow-hidden p-2 rounded">
      <div className="relative h-[310px] w-full flex items-center">
        <img
          src={data.img}
          alt={data.title}
          className="object-cover w-full h-full"
        />
        {data.comingSoon && (
          <span className="font-semibold bg-black text-white rounded-xl px-2 py-1 w-fit absolute top-2 right-2 text-sm">
            Coming Soon
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h5 className="text-lg sm:text-xl font-semibold mb-4 h-[50px] flex items-center">
          {data.title}
        </h5>
        <p className="text-sm sm:text-base text-gray-700 h-fit lg:h-[150px]">
          {data.content}
        </p>
        <div className="mt-8 flex items-center gap-4 font-semibold h-[70px]">
          <div className="text-primary border border-primary p-2 rounded-full text-sm sm:text-base">
            <BsFillLightningChargeFill />
          </div>
          <span className="text-sm sm:text-base">{data.benefit}</span>
        </div>
      </div>
    </div>
  );
};

export default VendorFeature;
