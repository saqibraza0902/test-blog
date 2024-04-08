import { PARTNERS_ARRAY } from "@/mock";
import AnimatedHoverLogo from "@/ui/components/AnimateHoverLogo";
import React from "react";

const PartnerSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4 grid-rows-2">
        {PARTNERS_ARRAY.map((item, index) => (
          <React.Fragment key={index}>
            <AnimatedHoverLogo
              imageSrc={item.img}
              index={index}
              textContent={item.text}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default PartnerSection;
