import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class Glassware extends React.Component {
  render() {
    const picturesData = [
      { label: "Beakers", imageName: "beakers.png" },
      { label: "Bottles", imageName: "bottles.png" },
      { label: "Burette", imageName: "burette.png" },
      { label: "Cylinders", imageName: "cylinders.png" },
      { label: "Chromware", imageName: "chromware.png" },
      { label: "Crystallising Dish", imageName: "crystalling-dish.png" },
      { label: "Flask", imageName: "flask.png" },
      { label: "Burner", imageName: "burner.png" },
      { label: "Droppers", imageName: "droppers.png" },
      { label: "Funnel", imageName: "funnel.png" },
      { label: "Evaporator Trap", imageName: "evaporator.png" },
      { label: "Pippette", imageName: "pippette.png" },
      { label: "Gas Apparatus", imageName: "gas-appratus.png" },
      { label: "Tube & Vials", imageName: "tube.png" },
      { label: "Other Glassware", imageName: "other.png" },
      { label: "Vessel", imageName: "vessel.png" },
      { label: "Tilting Dispensers", imageName: "tilting.png" },
      { label: "Tube Set", imageName: "tube-set.png" },
      { label: "Stirrer Bearing", imageName: "stirrer.png" },
      { label: "Viscosmeter", imageName: "viscosmeter.png" },
      { label: "NMR Sample Tube", imageName: "nmr.png" },
      { label: "Glass Plug", imageName: "glass-plug.png" },
      { label: "Replacement Parts", imageName: "replacement.png" },
    ];
  
    return (
      <LabScientificLayout
        title="Glassware"
        pagename="Glassware"
        picturesData={picturesData}
        folderName="glassware"
      />
    );
  }
}

export default Glassware;

