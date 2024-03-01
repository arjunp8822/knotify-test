import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData | null;
  setFormData: (formData: FormData) => void;
}

const LocationInfo = ({ formData, setFormData }: Props) => {
  return <div>LocationInfo</div>;
};

export default LocationInfo;
