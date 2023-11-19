import React from "react";
import LabScientificLayout from "./LabScientificLayout";

export class BufferVolumetric extends React.Component {
  render() {
    const picturesData = [
      { label: "Buffer Solution", imageName: "Buffer Solution.jpg" },
      { label: "Percentage Solution", imageName: "Percentage Solution.jpg" },
      { label: "Solid Salt", imageName: "Solid Salt.jpg" },
      { label: "Volumatric Solution", imageName: "Volumatric Solution.jpg" },
    ];
    return (
      <LabScientificLayout
        title="Buffer & Volumetric"
        pagename="Buffer & Volumetric"
        picturesData={picturesData}
        folderName="buffer-volumatric"
      />
    );
  }
}

export default BufferVolumetric;
