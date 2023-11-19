import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class Chromatography extends React.Component {
  render() {
    const picturesData = [
      { label: "Chromatographic Columns", imageName: "Chromatographic Columns.jpg" },
      { label: "Chromatographic Flash Reservoirs", imageName: "Chromatographic Flash Reservoirs.jpg" },
      { label: "Fitting and Acessories", imageName: "Fitting and Acessories.jpg" },
      { label: "Fitting and Acessories", imageName: "Fitting and Acessories.jpg" },
      { label: "HPLC Columns", imageName: "HPLC Columns.jpg" },
    ];
  
    return (
      <LabScientificLayout
        title="Chromatography"
        pagename="Chromatography"
        picturesData={picturesData}
        folderName="chromatography"
      />
    );
  }
}

export default Chromatography;

