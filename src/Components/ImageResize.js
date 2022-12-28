import React, { useState } from "react";
import NoImage from "../assets/no-image.jpg";
import "./styles.css";

const ImageResize = () => {
  const [image, setImage] = useState(null);

  const onChange = async (e) => {
    const file = e.target.files[0];
    const img = URL.createObjectURL(file);
    setImage(img);
  };

  const onSizeChange = (e, type) => {
    const target = document.getElementById("crop-image");
    if (type === "width") {
      target.width = e.target.value;
    }
    if (type === "height") {
      target.height = e.target.value;
    }
  };

  return (
    <div className="image-body">
      <img
        id="crop-image"
        className="image"
        src={image || NoImage}
        alt="crop-images"
        width="242"
        height="363"
      />
      <div>
        <h4>Select Image</h4>
        <br />
        <input type="file" onChange={onChange} />
        <br />
        <label>Width</label>
        <input type="number" onChange={(e) => onSizeChange(e, "width")} />
        <br />
        <label>Height</label>
        <input type="number" onChange={(e) => onSizeChange(e, "height")} />
      </div>
    </div>
  );
};

export default ImageResize;
