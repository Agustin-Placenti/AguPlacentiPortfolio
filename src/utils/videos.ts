import texts from "./texts.json";
import { VideoWithDescriptionProps } from "../components/videoWithDescription"

const videoUrl = "//www.youtube.com/embed/uvKAHpIvbl8?wmode=opaque";
const videoUrl2 = "//www.youtube.com/embed/dKFy4tx8av0?wmode=opaque";
const subtitle = texts.VIDEO_WITH_DESCRIPTION.SUBTITLE1;
const subtitle2 = texts.VIDEO_WITH_DESCRIPTION.SUBTITLE2;
const description = texts.VIDEO_WITH_DESCRIPTION.DESCRIPTION1;
const description2 = texts.VIDEO_WITH_DESCRIPTION.DESCRIPTION2;
const genre = texts.VIDEO_WITH_DESCRIPTION.GENRE1;
const genre2 = texts.VIDEO_WITH_DESCRIPTION.GENRE2;
const engine = texts.VIDEO_WITH_DESCRIPTION.ENGINE1;
const engine2 = texts.VIDEO_WITH_DESCRIPTION.ENGINE2;
const platforms = texts.VIDEO_WITH_DESCRIPTION.PLATFORMS1;
const platforms2 = texts.VIDEO_WITH_DESCRIPTION.PLATFORMS2;

export const video1: VideoWithDescriptionProps = {
    url: videoUrl,
    subtitle: subtitle,
    description: description,
    genre: genre,
    engine: engine,
    platforms: platforms
}

export const video2: VideoWithDescriptionProps = {
    url: videoUrl2,
    subtitle: subtitle2,
    description: description2,
    genre: genre2,
    engine: engine2,
    platforms: platforms2
}
