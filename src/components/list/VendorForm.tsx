import { useState } from "react";
import SubmitModal from "../SubmitModal";

const VendorForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const data = {
      name,
      phone,
      email,
      website,
    };
    console.log(data); // change this to form submission
    setName("");
    setPhone("");
    setEmail("");
    setWebsite("");
  };

  return (
    <div>
      {submitted && <SubmitModal setSubmitted={setSubmitted} />}
      <form className="flex flex-col gap-4 lg:gap-6" onSubmit={submitHandler}>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Business Name"
            className="text-black"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="number"
            placeholder="Phone"
            className="text-black"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="text-black"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="text"
          placeholder="Website URL"
          className="text-black"
          onChange={(e) => setWebsite(e.target.value)}
          value={website}
          required
        />
        <button className="bg-primary border font-semibold border-primary text-white hover:bg-white hover:border hover:border-primary hover:text-primary transition-all">
          List with us
        </button>
      </form>
    </div>
  );
};

export default VendorForm;
