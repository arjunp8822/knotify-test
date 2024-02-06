import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip, FaCalendar } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmitModal from "../SubmitModal";

const VenueForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, phone, date, guests, message);
    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setDate(null);
    setGuests("");
    setMessage("");
  };

  return (
    <div>
      {submitted && <SubmitModal setSubmitted={setSubmitted} />}
      <form
        className="flex flex-col gap-2 w-full"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="flex justify-between relative">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <FaUser className="absolute right-[20px] h-full text-[12px]" />
        </div>
        <div className="flex justify-between relative">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <MdEmail className="absolute right-[18px] h-full text-[16px]" />
        </div>
        <div className="flex justify-between relative">
          <input
            type="number"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <FaPhoneFlip className="absolute right-[18px] h-full text-[16px]" />
        </div>
        <div className="flex justify-between relative">
          <DatePicker
            wrapperClassName="datepicker"
            className="w-[full]"
            selected={date}
            onChange={(d) => setDate(d)}
            dateFormat={"yyyy/MM/dd"}
            minDate={new Date()}
            placeholderText="Date"
            showYearDropdown
          />
          <FaCalendar className="absolute right-[19px] h-full text-[14px]" />
        </div>
        <div className="flex justify-between relative">
          <input
            type="number"
            placeholder="Guests"
            onChange={(e) => setGuests(e.target.value)}
            value={guests}
          />
          <BsFillPeopleFill className="absolute right-[18px] h-full text-[16px]" />
        </div>

        <textarea
          rows={10}
          className="resize-none"
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="bg-primary text-white font-semibold mt-4 text-sm sm:text-base">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default VenueForm;
