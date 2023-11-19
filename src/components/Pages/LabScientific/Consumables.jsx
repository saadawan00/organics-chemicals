import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class Consumables extends React.Component {
  render() {
    const picturesData = [
      { label: "Clamps", imageName: "Clamps.jpg" },
      { label: "Compound Microscope", imageName: "Compound Microscope.jpg" },
      { label: "Condensers", imageName: "Condensers.jpg" },
      { label: "Crucibles", imageName: "Crucibles.jpg" },
      { label: "Cuvettes, Cells", imageName: "Cuvettes, Cells.jpg" },
      { label: "Desiccator Plates", imageName: "Desiccator Plates.jpg" },
      { label: "Dispensers", imageName: "Dispensers.jpg" },
      { label: "Evaporating Dishes", imageName: "Evaporating Dishes.jpg" },
      { label: "Funnels", imageName: "Funnels.jpg" },
      { label: "Impeller Assemblies", imageName: "Impeller Assemblies.jpg" },
      { label: "Lab Supplies", imageName: "Lab Supplies.jpg" },
      { label: "Labels", imageName: "Labels.jpg" },
      { label: "Lens", imageName: "Lens.jpg" },
      { label: "Liquid Handling", imageName: "Liquid Handling.jpg" },
      { label: "Organizers", imageName: "Organizers.jpg" },
      { label: "Parafilm", imageName: "Parafilm.jpg" },
      { label: "PCR Tube", imageName: "PCR Tube.jpg" },
      { label: "pH Measure", imageName: "pH Measure.jpg" },
      { label: "Pipet Racks", imageName: "Pipet Racks.jpg" },
      { label: "Prism", imageName: "Prism.jpg" },
      { label: "Rods", imageName: "Rods.jpg" },
      { label: "Rotar and Cap", imageName: "Rotar and Cap.jpg" },
      { label: "Sample Handling", imageName: "Sample Handling.jpg" },
      { label: "Scoops", imageName: "Scoops.jpg" },
      { label: "Slides", imageName: "Slides.jpg" },
      { label: "Soxhlet Extractor", imageName: "Soxhlet Extractor.jpg" },
      { label: "Tapes", imageName: "Tapes.jpg" },
      { label: "Weighing Dishes", imageName: "Weighing Dishes.jpg" },
    ];
  
    return (
      <LabScientificLayout
        title="Consumables"
        pagename="Consumables"
        picturesData={picturesData}
        folderName="consumables"
      />
    );
  }
}

export default Consumables;

