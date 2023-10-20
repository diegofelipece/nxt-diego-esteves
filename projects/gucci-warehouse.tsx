import GenericBlock from "../components/GenericBlock";
import ImageBlock from "../components/ImageBlock";
import SeoTags from "../components/SeoTags";
import { Project, ProjectExerpt } from "../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'gucci-warehouse',
  title: 'Gucci Warehouse',
  category: 'web development',
  coverImage: '/cover-example.jpg',
};

export const gucciWarehouse: Project = {
  hidden: true,
  excerpt,
  content: (
    <>
      <SeoTags pageDescription="Diego Esteves portfolio" pageTitle={excerpt.title} pageSlug={excerpt.slug} />
      <GenericBlock>
        <p>
          I was responsable to redesign the app of the Brazilian Soccer Team sponsered by Vivo. The app has oficial informations about the team, like news, photos, and a game calendar.
        </p>
        <p>
          This job was managed by&nbsp; pactodigital, that invited me to make a whole new art direction for the app. It was launched for iOS and Android, both avaliable for tablets and smartphones.
        </p>
        <p>( ~ circa 2015/07 )</p>
      </GenericBlock>
      <ImageBlock 
        src='/projects/cbf/selecao-app.jpeg'
        width={1000}
        heigth={653}
      />
    </>
  ),
};

export default excerpt;