interface Props {
  icon: string;
  title: string;
}

const VendorBenefit = ({ icon, title }: Props) => {
  return (
    <div className="border p-3 rounded-xl flex gap-4 items-center">
      <img src={icon} alt={title} className="w-6" />
      <h5>{title}</h5>
    </div>
  );
};

export default VendorBenefit;
