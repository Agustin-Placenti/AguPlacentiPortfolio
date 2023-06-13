import Header from "components/header";
import Spacer from "components/spacer";
import { useStore } from "store/store";
import { PORTFOLIO } from "utils/consts";
import texts from "utils/texts.json";
import SkillSection from "components/skillSection/skillSection";
import "./dashboard.css";
import ContactForm from "components/contactForm/contactForm";

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
      <div >
        <Spacer space={60} />
        <SkillSection />
        <Spacer space={60} />
        <ContactForm />
        <Spacer space={100} />
      </div>
    </>
  );
}
