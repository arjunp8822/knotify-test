import VendorBenefit from "./VendorBenefit";
import ad from "../assets/benefits/ad.png";
import admin from "../assets/benefits/admin.png";
import cash from "../assets/benefits/cash.png";
import click from "../assets/benefits/click.png";
import handshake from "../assets/benefits/handshake.png";
import plan from "../assets/benefits/plan.png";

const benefits = [
  { icon: ad, title: "Improved cash flow" },
  { icon: admin, title: "Less time on admin" },
  { icon: cash, title: "Better relationship with couples" },
  { icon: click, title: "Transparent Financial Planning" },
  { icon: handshake, title: "Increased booking conversion rates" },
  { icon: plan, title: "No money spent on advertising" },
];

const VendorBenefits = () => {
  return (
    <div className="mt-8 mb-16 sm:mb-24">
      <h3 className="mb-12 text-2xl lg:text-3xl font-semibold">
        Why our vendors choose us
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {benefits.map((x) => (
          <VendorBenefit icon={x.icon} title={x.title} />
        ))}
      </div>
    </div>
  );
};

export default VendorBenefits;
