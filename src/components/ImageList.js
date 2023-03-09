import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return (
      <div>
        <ImageShow key={image.id} image={image} />;
      </div>
    );
  });
  console.log(images);
  return <div className="image-list">{renderImages}</div>;
}

export default ImageList;
