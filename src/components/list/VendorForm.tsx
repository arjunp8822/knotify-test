import { useRef, useState } from "react";
import SubmitModal from "../SubmitModal";
import emailjs from "@emailjs/browser";

const VendorForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_mmx23ii",
        "template_96ksz7p",
        form.current!,
        "twcfsdyMRI2RLLHE1"
      );
      setName("");
      setPhone("");
      setEmail("");
      setWebsite("");
      setSubmitted(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {submitted && <SubmitModal setSubmitted={setSubmitted} />}
      <form
        className="flex flex-col gap-4 lg:gap-6"
        onSubmit={submitHandler}
        ref={form}
        name="form"
      >
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Business Name"
            className="text-black"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            name="name"
          />
          <input
            type="number"
            placeholder="Phone"
            className="text-black"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            name="phone"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="text-black"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          name="email"
        />
        <input
          type="text"
          placeholder="Website URL"
          className="text-black"
          onChange={(e) => setWebsite(e.target.value)}
          value={website}
          required
          name="website"
        />
        <button className="bg-primary border font-semibold border-primary text-white hover:bg-white hover:border hover:border-primary hover:text-primary transition-all">
          List with us
        </button>
      </form>
    </div>
  );
};

export default VendorForm;
