import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class Chemicals extends React.Component {
  render() {
    const picturesData = [
      { label: "Inorganic Reagents", imageName: "inorganic-chemistry.png" },
      { label: "Acid & Base", imageName: "acidbase.png" },
      { label: "Amino Acids & Resins", imageName: "aminoacids.png" },
      { label: "Bulk Chemicals", imageName: "bulkchemicals.png" },
      { label: "High Purity Solvents", imageName: "hps.png" },
      { label: "Peroxides", imageName: "peroxides.png" },
      { label: "Buffer & Volumatric Solutions", imageName: "buffervolumatric.png" },
      { label: "Organic Reagents", imageName: "organicreagents.png" },
      { label: "Titrating Agents", imageName: "titratingagents.png" },
      { label: "Reference Standards", imageName: "refstandards.png" },
    ];
  
    return (
      <LabScientificLayout
        title="Chemicals"
        pagename="Chemicals"
        picturesData={picturesData}
        folderName="chemicals"
      />
    );
  }
}

export default Chemicals;

