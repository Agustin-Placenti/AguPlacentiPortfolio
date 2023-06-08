import Header from "components/header";
import Spacer from "components/spacer";
import VideoWithDescription from "components/videoWithDescription/videoWithDescription";
import { useStore } from "store/store";
import { PORTFOLIO } from "utils/consts";
import texts from "utils/texts.json";
import { video1, video2 } from "utils/videos";
import "./dashboard.css";

export default function Dashboard() {
  const headerData = {
    title: texts.HEADER.TITLE,
    subtitle: texts.HEADER.SUBTITLE,
    description1: texts.HEADER.DESCRIPTION,
    description2: texts.HEADER.DESCRIPTION_2,
    mailTo: "mailto:agustinplacenti@gmail.com",
    linkedinProfile: "https://www.linkedin.com/in/agustìn-placenti-12a0a8161/",
  };

  const active = useStore((state) => state.active);

  return (
    <>
      <div className={active === PORTFOLIO ? "portfolio-layout" : ""}>
        <Spacer space={130} />
        <Header headerData={headerData} />
        <Spacer space={130} />
      </div>
      <div className="video-background">
        <div className="video-section-title">
          {texts.VIDEO_WITH_DESCRIPTION.TITLE}
        </div>
        <VideoWithDescription
          url={video1.url}
          subtitle={video1.subtitle}
          description={video1.description}
          genre={video1.genre}
          engine={video1.engine}
          platforms={video1.platforms}
        />
        <Spacer space={30} />
        <VideoWithDescription
          url={video2.url}
          subtitle={video2.subtitle}
          description={video2.description}
          genre={video2.genre}
          engine={video2.engine}
          platforms={video2.platforms}
        />
        <Spacer space={100} />
      </div>
    </>
  );
}
