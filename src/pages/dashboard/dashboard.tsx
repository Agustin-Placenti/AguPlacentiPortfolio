import Header from "../../components/header";
import Spacer from "../../components/spacer";
import VideoWithDescription from "../../components/videoWithDescription/videoWithDescription";
import { useStore } from "../../store/store";
import { PORTFOLIO } from "../../utils/consts";
import constants from "../../utils/texts.json";
import "./dashboard.css";

export default function Dashboard() {
  const headerData = {
    title: constants.HEADER.TITLE,
    subtitle: constants.HEADER.SUBTITLE,
    description1: constants.HEADER.DESCRIPTION,
    description2: constants.HEADER.DESCRIPTION_2,
    mailTo: "mailto:agustinplacenti@gmail.com",
    linkedinProfile: "https://www.linkedin.com/in/agustìn-placenti-12a0a8161/",
  };
  const videoUrl = "https://www.youtube.com/embed/your-video-id";
  const description = "This is a video description.";
  const active = useStore((state) => state.active);

  return (
    <>
      <div className={active === PORTFOLIO ? "portfolio-layout" : ""}>
        <Spacer space={130} />
        <Header headerData={headerData} />
        <Spacer space={100} />
      </div>
      <VideoWithDescription videoUrl={videoUrl} description={description} />
    </>
  );
}
