import { TextPosition } from "../../types/Block";
import { Project, ProjectExerpt } from "../../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'cash-me',
  title: 'Cash.me',
  category: 'web development',
  coverImage: '/images/projects/cover-cashme-app.jpg'
};

export const cashMe: Project = {
  excerpt,
  blocks: [
    {
      paragraphs: `
        <p>A Fintech focused on fast and online loans.</p>
        <p>I’ve acted as Front End developer of the&nbsp;tool/admin (not the WordPress Institutional&nbsp;site), working initially creating static views and after that&nbsp;helping on the implementation of&nbsp;the real views&nbsp;made with Laravel + Vue.js.</p>
        <p>I’ve joined the project as a freelancer, working for <a href="https://meza1618.com.br/">MeZA,&nbsp;</a>the agency that was responsible for developing the project.</p>
        <p><small>[ circa 2018/07 ]</small></p>
      `,
      textPosition: TextPosition.full,
    },
    {
      image: {
        src: '/images/projects/cashme/cashme-mobile.jpeg',
        width: 800,
        heigth: 463,
      }
    },
    {
      image: {
        src: '/images/projects/cashme/cashme-desk.jpeg',
        width: 320,
        heigth: 706,
      }
    },
    {
      paragraphs: `p><em>PS: Knowing that the pages I did are all visible&nbsp;only on a “</em>restric<em> area”, I’ve left here the link of the first static deliverables. The real&nbsp;ones are now live at <a href="http://cashme.com.br" target="_blank" rel="noopener">cashme.com.br</a></em></p>`
    }
  ],
  links: [
    'http://cliente.diegoesteves.ink/cash-me/'
  ]
};

export default excerpt;

