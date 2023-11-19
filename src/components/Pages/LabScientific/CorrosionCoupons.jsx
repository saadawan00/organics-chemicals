import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class CorrosionCoupons extends React.Component {
  render() {
    const picturesData = [
      { label: "Admiralty Brass", imageName: "Admiralty Brass.jpg" },
      { label: "Aluminium", imageName: "Aluminium.jpg" },
      { label: "Carbon Steel C1018", imageName: "Carbon Steel C1018.jpg" },
      { label: "Carnon Steel", imageName: "Carnon Steel.jpg" },
      { label: "Copper & Nickel", imageName: "Copper & Nickel.jpg" },
      { label: "Copper Coupon", imageName: "Copper Coupon.jpg" },
      { label: "Corrosion Coupon Analysis", imageName: "Corrosion Coupon Analysis.jpg" },
      { label: "Glavanized Steel", imageName: "Glavanized Steel.jpg" },
      { label: "Lead", imageName: "Lead.jpg" },
      { label: "Passivated Carbon", imageName: "Passivated Carbon.jpg" },
      { label: "Picture124", imageName: "Picture124.jpg" },
      { label: "SS 316 316L", imageName: "SS 316 316L.jpg" },
      { label: "Stainless Steel 304,304L", imageName: "Stainless Steel 304,304L.jpg" },
    ];
  
    return (
      <LabScientificLayout
        title="Corrosion Coupons"
        pagename="Corrosion Coupons"
        picturesData={picturesData}
        folderName="corrosion-coupons"
      />
    );
  }
}

export default CorrosionCoupons;

