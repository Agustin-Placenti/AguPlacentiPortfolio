import { PORTFOLIO, RESUME } from "./consts";
import texts from "utils/texts.json";

export type navbarPagesProps = {
    url: string,
    text: string
}

export const navbarPages: Array<navbarPagesProps> = [{ url: PORTFOLIO, text: texts.PORTFOLIO }, { url: RESUME, text: texts.RESUME }];
