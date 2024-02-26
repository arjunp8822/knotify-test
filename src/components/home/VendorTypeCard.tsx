interface Props {
  title: string;
}

const VendorTypeCard = ({ title }: Props) => {
  return (
    <li className="text-sm sm:text-base text-center uppercase hover:text-primary transition-all font-semibold underline cursor-pointer box-border whitespace-nowrap">
      {title}
    </li>
  );
};

export default VendorTypeCard;
