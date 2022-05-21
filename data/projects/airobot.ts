import { TextPosition } from "../../types/Block";
import { Project, ProjectExerpt } from "../../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'airobot',
  title: 'Airobot',
  category: 'web development',
  coverImage: '/cover-airobot-app.jpg'
};

export const airobot: Project = {
  excerpt,
  blocks: [
    {
      paragraphs: `
        <p>A travel business softwares company.</p>
        <p>Act as Front End Developer of the project, delivering a static site, based on the recieved layout. The animations are all HTML+jQuery.</p>
        <p>Job done as freelancer for&nbsp;<a href="https://www.mozestudio.com/" target="_blank" rel="noopener">Moze</a>&nbsp;studio.</p>
        <p>( circa 2018/12 )</p>
      `,
      textPosition: TextPosition.full,
    },
    {
      image: {
        src: '/projects/airobot/airobot-desk.jpeg',
        width: 800,
        heigth: 463,
      }
    },
    {
      image: {
        src: '/projects/airobot/airobot-mobile.jpeg',
        width: 320,
        heigth: 706,
      }
    },
  ],
  links: [
    'http://cliente.diegoesteves.ink/airobot/'
  ]
};

export default excerpt;
