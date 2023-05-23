import "./videoWithDescription.css";

type VideoWithDescriptionProps = {
  videoUrl: string;
  description: string;
};

export default function VideoWithDescription({
  videoUrl,
  description,
}: VideoWithDescriptionProps) {
  return (
    <div className="video-background">
      <div className="video-with-description">
        <div className="video-container">
          <iframe src={videoUrl} allowFullScreen title="Video Player" />
        </div>
        <div className="description-container">{description}</div>
      </div>
    </div>
  );
}
