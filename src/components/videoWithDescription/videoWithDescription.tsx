import texts from "utils/texts.json";
import "./videoWithDescription.css";

export interface VideoWithDescriptionProps {
  url: string;
  subtitle: string;
  description: string;
  genre?: string;
  engine?: string;
  platforms?: string;
}

export default function VideoWithDescription({
  url,
  subtitle,
  description,
  genre,
  engine,
  platforms,
}: VideoWithDescriptionProps) {
  const genreTitle = texts.VIDEO_WITH_DESCRIPTION.GENRE;
  const engineTitle = texts.VIDEO_WITH_DESCRIPTION.ENGINE;
  const platformsTitle = texts.VIDEO_WITH_DESCRIPTION.PLATFORMS;
  const videoInfo = texts.VIDEO_WITH_DESCRIPTION.VIDEO_INFO;

  return (
    <div className="video-background">
      <div className="divider-container">
        <hr className="divider" />
      </div>
      <div className="video-with-description">
        <div className="video-container">
          <iframe src={url} allowFullScreen title="Video Player" />
          <div style={{ fontSize: "10px" }}>{videoInfo}</div>
        </div>
        <div className="full-description-container">
          <div className="subtitle-container">{subtitle}</div>
          <div className="description-container">{description}</div>
          <div className="genre-container">
            <span style={{ fontWeight: "bold" }}>{genreTitle} </span>
            {genre}
          </div>
          <div className="engine-container">
            <span style={{ fontWeight: "bold" }}>{engineTitle} </span>
            {engine}
          </div>
          <div className="platform-container">
            <span style={{ fontWeight: "bold" }}> {platformsTitle} </span>
            {platforms}
          </div>
        </div>
      </div>
    </div>
  );
}
