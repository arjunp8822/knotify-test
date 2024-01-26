interface Props {
  data: {
    title: string;
    content: string;
    img: string;
    comingSoon: boolean;
    benefit: string;
    benefitIcon: string;
  };
}

const VendorFeature = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 justify-center items-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] overflow-hidden p-2 rounded">
      <div className="relative">
        <img
          src={data.img}
          alt={data.title}
          className="object-cover w-[450px]"
        />
        {data.comingSoon && (
          <span className="bg-green-500 text-white rounded-xl px-2 py-1 w-fit absolute top-2 right-2 text-sm">
            Coming Soon
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 h-[500px] px-4">
        <h5 className="text-xl font-semibold mb-4">{data.title}</h5>
        <p className="text-md">{data.content}</p>
        <div className="mt-8 flex items-center gap-4 border px-2 py-1">
          <img src={data.benefitIcon} alt={"Icon"} className="w-6" />
          <span>{data.benefit}</span>
        </div>
      </div>
    </div>
  );
};

export default VendorFeature;
