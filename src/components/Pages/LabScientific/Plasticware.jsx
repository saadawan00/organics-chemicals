import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class Plasticware extends React.Component {
  render() {
    const picturesData = [
      { label: "Accessories", imageName: "Accessories.jpg" },
      { label: "Analyzer Consumables", imageName: "Analyzer Consumables.jpg" },
      { label: "Autoclave Tape", imageName: "Autoclave Tape.jpg" },
      { label: "Bags", imageName: "Bags.jpg" },
      { label: "Beakers", imageName: "Beakers.jpg" },
      { label: "Bio Reaction Tubes", imageName: "Bio Reaction Tubes.jpg" },
      { label: "Bottles", imageName: "Bottles.jpg" },
      { label: "Caps", imageName: "Caps.jpg" },
      { label: "Centifuge Tubes", imageName: "Centifuge Tubes.jpg" },
      { label: "Cleaners", imageName: "Cleaners.jpg" },
      { label: "Containers", imageName: "Containers.jpg" },
      { label: "Cryogenic Storage", imageName: "Cryogenic Storage.jpg" },
      { label: "Cryogenic Vials & Accessories", imageName: "Cryogenic Vials & Accessories.jpg" },
      { label: "Culture Tubes", imageName: "Culture Tubes.jpg" },
      { label: "Cylinders", imageName: "Cylinders.jpg" },
      { label: "Dipping Baskets", imageName: "Dipping Baskets.jpg" },
      { label: "Droppers", imageName: "Droppers.jpg" },
      { label: "Drug Testing", imageName: "Drug Testing.jpg" },
      { label: "Drying Racks", imageName: "Drying Racks.jpg" },
      { label: "Flask", imageName: "Flask.jpg" },
      { label: "Forceps & Tweezers", imageName: "Forceps & Tweezers.jpg" },
      { label: "Large Volume Centrifuge Tubes", imageName: "Large Volume Centrifuge Tubes.jpg" },
      { label: "Measuring Jugs", imageName: "Measuring Jugs.jpg" },
      { label: "Microtitration Plates", imageName: "Microtitration Plates.jpg" },
      { label: "PCR Tubes", imageName: "PCR Tubes.jpg" },
      { label: "Pumps", imageName: "Pumps.jpg" },
      { label: "Reagent Reservoir", imageName: "Reagent Reservoir.jpg" },
      { label: "Stir Bars", imageName: "Stir Bars.jpg" },
    ];
  
    return (
      <LabScientificLayout
        title="Plasticware"
        pagename="Plasticware"
        picturesData={picturesData}
        folderName="plasticware"
      />
    );
  }
}

export default Plasticware;
