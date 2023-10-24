import GenericBlock from "../components/GenericBlock";
import ImageBlock from "../components/ImageBlock";
import SeoTags from "../components/SeoTags";
import { Project, ProjectExerpt } from "../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'gucci-interactive-videos',
  title: 'Gucci Interactive Videos',
  category: 'web development and design',
  coverImage: '/gucci-interactive-videos/cover.jpg',
};

export const gucciInteractiveVideos: Project = {
  // hidden: true,
  excerpt,
  content: (
    <>
      <SeoTags pageDescription="Diego Esteves portfolio" pageTitle={excerpt.title} pageSlug={excerpt.slug} />
      <GenericBlock>
        <p>
          I was responsible for engineering, designing, and coordinating the creation of a small interactive video platform for Gucci. It is a stand-alone micro front-end piece, thought to be integrated into other brand projects, consisting of two sides: the first is a dashboard for video tagging and upload and the other is a responsive interactive video player.
        </p>
        <p>
          The idea came from Gucci Project Manager while I was the team leader of a 4 developers squad, working at Euris. We used the stack the client had defined as default: PHP/Lumen/MariaDb for the back end and Angular on the front end.
        </p>
        <p>( ~ circa 2022/06 )</p>
      </GenericBlock>
      <ImageBlock 
        src='/projects/gucci-interactive-videos/web.jpg'
        width={1760}
        heigth={1148}
      />
      <ImageBlock 
        src='/projects/gucci-interactive-videos/web-2.jpg'
        width={1760}
        heigth={984}
      />
    </>
  ),
};

export default excerpt;