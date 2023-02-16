import Home from "./components/Home";
import IncludedPlans from "./components/IncludedPlans";
import LiveTv from "./components/LiveTv";
import WatchEvents from "./components/WatchEvents";
import LiveSports from "./components/LiveSports";
import SelectPlan from "./components/SelectPlan";
import BasePlanAddOns from "./components/BasePlanAddOns";
import BundlePlanAddOns from "./components/BundlePlanAddOns";
import FooterTop from "./components/FooterTop";
import { useState } from "react";
import FooterBottom from "./components/FooterBottom";

function App() {
  const [showBundle, setShowBundle] = useState(1)
  const [showAddOns, setShowAddOns] = useState(false)

    const switchBox = () => {
        setShowBundle(2)
    }

    const switchBox2 = () => {
        setShowBundle(1)
    }

    const changeShowAddOns = () => {
        setShowAddOns(!showAddOns)
    }

  return (
    <div className="App">
      <Home />
      <IncludedPlans />
      <LiveTv />
      <WatchEvents />
      <SelectPlan switchBox={switchBox} switchBox2={switchBox2} showBundle={showBundle} />
      <BasePlanAddOns showBundle={showBundle} showAddOns={showAddOns} changeShowAddOns={changeShowAddOns} />
      <BundlePlanAddOns showBundle={showBundle} showAddOns={showAddOns} changeShowAddOns={changeShowAddOns} />
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default App;
