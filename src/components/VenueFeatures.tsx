import VenueFeature from "./VenueFeature";

interface Props {
  features: string[];
}

const VenueFeatures = ({ features }: Props) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2 text-gray-700">
      {features.map((f) => (
        <VenueFeature feature={f} />
      ))}
      {features.length === 0 && (
        <li className="text-sm sm:text-base">No features listed</li>
      )}
    </ul>
  );
};

export default VenueFeatures;
