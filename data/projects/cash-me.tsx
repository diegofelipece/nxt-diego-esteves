import GenericBlock from "../../components/GenericBlock";
import ImageBlock from "../../components/ImageBlock";
import { Project, ProjectExerpt } from "../../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'cash-me',
  title: 'Cash.me',
  category: 'web development',
  coverImage: '/cover-cashme-app.jpg'
};

export const cashMe: Project = {
  excerpt,
  content: (
    <>
      <GenericBlock>
        <p>A Fintech focused on fast and online loans.</p>
        <p>I`ve developed the front-end of the tool dashboards, creating static views that later was integrated with Laravel + Vue.js.</p>
        <p>I`ve joined the project as a freelancer, working for <a href="https://meza1618.com.br/" target="_blank" rel="noreferrer">MeZA</a>, the agency that was responsible for developing the project.</p>
        <p>( ~ circa 2018/07 )</p>
      </GenericBlock>
      <ImageBlock 
        src='/projects/cashme/cashme-mobile.jpeg'
        width={800}
        heigth={463}
      />
      <ImageBlock 
        src='/projects/cashme/cashme-desk.jpeg'
        width={320}
        heigth={706}
      />
    </>
  ),
  links: [
    'http://cliente.diegoesteves.ink/cash-me/'
  ]
};

export default excerpt;

