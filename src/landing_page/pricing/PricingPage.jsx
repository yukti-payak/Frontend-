import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Chargestable from "./Chargestable";
import AccountCharges from "./AccountCharges";
import OptionalCharges from "./OptionalCharges";

function PricingPage() {
  return (
    <>
      <Hero />
      <Chargestable />
      <Brokerage />
      < AccountCharges />
      <OptionalCharges />
    </>
  );
}

export default PricingPage;
