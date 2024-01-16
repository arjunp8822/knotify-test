const VendorForm = () => {
  return (
    <form className="flex flex-col gap-4 lg:gap-6">
      <div className="flex gap-4">
        <input type="text" placeholder="Business Name" />
        <input type="number" placeholder="Phone" />
      </div>
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Website URL" />
      <button className="bg-primary text-white">List with us</button>
    </form>
  );
};

export default VendorForm;
