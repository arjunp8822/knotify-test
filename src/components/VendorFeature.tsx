interface Props {
  data: {
    title: string;
    content: string;
    img: string;
    comingSoon: boolean;
    reverse: boolean;
  };
}

const VendorFeature = ({ data }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">
      <img src={data.img} alt={data.title} className="w-full lg:w-1/2" />
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        {data.comingSoon && (
          <span className="bg-green-500 text-white rounded-xl p-1 w-fit">
            Coming Soon
          </span>
        )}
        <h5 className="text-2xl lg:text-3xl font-semibold mb-4">
          {data.title}
        </h5>

        <p className="text-md lg:text-lg">{data.content}</p>
      </div>
    </div>
  );
};

export default VendorFeature;
