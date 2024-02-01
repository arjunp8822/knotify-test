import accomodation from "/assets/features/accomodation.png";
import beach from "/assets/features/beach.png";
import car from "/assets/features/car.png";
import catering from "/assets/features/catering.png";
import ceremony from "/assets/features/ceremony.png";
import lightdark from "/assets/features/lightdark.png";
import other from "/assets/features/other.png";
import reception from "/assets/features/reception.png";

interface Props {
  feature: string;
}

const VenueFeature = ({ feature }: Props) => {
  return (
    <li className="flex text-sm sm:text-base justify-start items-center gap-2 sm:gap-4 p-2 rounded">
      {feature === "Accomodation" ? (
        <img src={accomodation} alt="Accomodation" className="w-4" />
      ) : feature === "Beachfront" ? (
        <img src={beach} alt="Accomodation" className="w-4" />
      ) : feature === "Parking" ? (
        <img src={car} alt="Accomodation" className="w-4" />
      ) : feature === "External Catering" ? (
        <img src={catering} alt="Accomodation" className="w-4" />
      ) : feature === "Ceremonies" ? (
        <img src={ceremony} alt="Accomodation" className="w-4" />
      ) : feature === "Receptions" ? (
        <img src={reception} alt="Accomodation" className="w-4" />
      ) : feature === "Indoor and Outdoor" ? (
        <img src={lightdark} alt="Accomodation" className="w-4" />
      ) : (
        <img src={other} alt="Other" className="w-4" />
      )}
      <div>{feature}</div>
    </li>
  );
};

export default VenueFeature;
