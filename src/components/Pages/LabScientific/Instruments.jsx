import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class Instruments extends React.Component {
  render() {
    const picturesData = [
      { label: "Analytical Balances", imageName: "analytical-balances.jpg" },
      { label: "Autoclave", imageName: "autoclave.jpg" },
      { label: "Bench Scales", imageName: "bench-scales.jpg" },
      { label: "Calibration Weights", imageName: "calibration-weights.jpg" },
      { label: "Centrifuges", imageName: "centrifuges.jpg" },
      { label: "clamps", imageName: "clamps.jpg" },
      { label: "Desiccators", imageName: "desiccators.jpg" },
      { label: "Digital Microscope", imageName: "digital-microscope.jpg" },
      { label: "Dry Block Heaters", imageName: "dry-block-heaters.jpg" },
      { label: "Dry Block Heaters Accessories", imageName: "dry-block-heater-accessories.jpg" },
      { label: "Glove Boxes", imageName: "glove-boxes.jpg" },
      { label: "Heating Mantles", imageName: "heating-mantles.jpg" },
      { label: "Hotplate Stirrers", imageName: "hotplate-stirrers.jpg" },
      { label: "Incubators", imageName: "incubators.jpg" },
      { label: "Indicators", imageName: "indicators.jpg" },
      { label: "Magnetic Stirrers", imageName: "magnetic-stirrers.jpg" },
      { label: "Melting Point", imageName: "melting-point.jpg" },
      { label: "Microscope Camera", imageName: "microscope-camera.jpg" },
      { label: "Microscope Filters", imageName: "microscope-filters.jpg" },
      { label: "Moisture Analyzers", imageName: "moisture-analyzers.jpg" },
      { label: "SDI Kits", imageName: "sdi-kits.jpg" },
      { label: "Suction System", imageName: "suction-system.jpg" },
      { label: "Test Chambers", imageName: "test-chambers.jpg" },
      { label: "Vacuum Pumps", imageName: "vacuum-pumps.jpg" },
      { label: "Visual Measurements", imageName: "visual-measurements.jpg" },
      { label: "Vortex Mixers", imageName: "vortex-mixers.jpg" },
      { label: "Water Analysis Accessories", imageName: "water-analysis-accessories.jpg" },
      { label: "Water Analysis Meter Electrode", imageName: "water-analysis-meter-electrode.jpg" },
    ];
  
    return (
      <LabScientificLayout
        title="Instruments"
        pagename="Instruments"
        picturesData={picturesData}
        folderName="instruments"
      />
    );
  }
}

export default Instruments;

