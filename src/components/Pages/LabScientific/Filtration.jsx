import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class Filtration extends React.Component {
  render() {
    const picturesData = [
      { label: "Bottle Top Filters", imageName: "Bottle Top Filters.jpg" },
      { label: "Capsule Filters", imageName: "Capsule Filters.jpg" },
      { label: "Cellulose", imageName: "Cellulose.jpg" },
      { label: "Circle Filters", imageName: "Circle Filters.jpg" },
      { label: "Extraction Thimble", imageName: "Extraction Thimble.jpg" },
      { label: "Filter Disk", imageName: "Filter Disk.jpg" },
      { label: "Flat Sheet Memberanes", imageName: "Flat Sheet Memberanes.jpg" },
      { label: "Glass Microfiber", imageName: "Glass Microfiber.jpg" },
      { label: "Inline Filter", imageName: "Inline Filter.jpg" },
      { label: "Inline Holders", imageName: "Inline Holders.jpg" },
      { label: "MCE Membrane", imageName: "MCE Membrane.jpg" },
      { label: "PP Membranes", imageName: "PP Membranes.jpg" },
      { label: "Specialty Filter", imageName: "Specialty Filter.jpg" },
      { label: "Stirred Cells", imageName: "Stirred Cells.jpg" },
      { label: "Syringe Filters", imageName: "Syringe Filters.jpg" },
      { label: "Vacuum Kits", imageName: "Vacuum Kits.jpg" },
    ];
  
    return (
      <LabScientificLayout
        title="Filtration"
        pagename="Filtration"
        picturesData={picturesData}
        folderName="filtration"
      />
    );
  }
}

export default Filtration;

