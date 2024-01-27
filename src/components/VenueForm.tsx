import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";

const VenueForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, phone, date, guests, message);
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setGuests("");
    setMessage("");
  };

  return (
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
        {date.length === 0 && (
          <h5 className="text-gray-400 absolute flex items-center h-full pl-4 text-sm sm:text-base w-4/6">
            Wedding date
          </h5>
        )}
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="w-full appearance-none"
        />
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
  );
};

export default VenueForm;
