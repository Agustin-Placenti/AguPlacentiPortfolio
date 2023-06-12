export type skillProps = {
    name: string,
    iconClass?: string,
    percentage: number;
    iconUrl?: string,
}

export const skills: Array<skillProps> = [
    { name: 'HTML5', iconClass: 'fab fa-html5', percentage: 90 },
    { name: 'CSS3', iconClass: 'fab fa-css3', percentage: 90 },
    { name: 'SASS', iconClass: 'fab fa-sass', percentage: 100 },
    { name: 'JAVASCRIPT', iconClass: 'fab fa-js', percentage: 90 },
    { name: 'ReactJS', iconClass: 'fab fa-react', percentage: 100 },
    { name: 'NodeJS', iconClass: 'fab fa-node', percentage: 60 },
    { name: 'NextJS', iconUrl: 'next.png', percentage: 50 },
    { name: 'Typescript', iconUrl: 'typescript.png', percentage: 90 },
    { name: 'Express', iconUrl: 'express.png', percentage: 40 },
    { name: 'MongoDB', iconUrl: 'mongodb.png', percentage: 30 },
];
