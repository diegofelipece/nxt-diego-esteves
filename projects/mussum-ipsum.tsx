import GenericBlock from "../components/GenericBlock";
import ImageBlock from "../components/ImageBlock";
import SeoTags from "../components/SeoTags";
import { Project, ProjectExerpt } from "../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'mussum-ipsum',
  title: 'Mussum Ipsum',
  category: 'web development and design',
  coverImage: '/cover-mussum-ipsum.jpg'
};

export const mussumIpsum: Project = {
  excerpt,
  content: (
    <>
      <SeoTags pageDescription="Diego Esteves portfolio" pageTitle={excerpt.title} pageSlug={excerpt.slug} />
      <GenericBlock>
        <p>
          In 2012 I had the idea of creating a custom "lorem ipsum" generator based on a classic Brazilian TV character called Mussum, so I designed a two pages website and put it online in a week. On the second day the project got viral throught Brazilian designers and developers and reached an unexpected 36.294 pageviews, during the first 5 days. As I write this at 2023 October, term "mussum ipsum" reached more then <a href="https://www.google.com/search?q=mussum+ipsum&rlz=1C5CHFA_enIT990IT990&oq=mussum+ipsum&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPDIGCAMQRRg8MgYIBBBFGEEyBggFEEUYQTIGCAYQRRhB0gEIMTA0MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="__blank">16,600 results</a> on Google Search and it's present on more then <a href="https://github.com/search?q=mussum+ipsum&type=code" target="__blank">3,000</a> code files at Github.
        </p>
        <p>
          Currently, the project is on the 3rd version which is a work-in-progress as new features and content may come by as I try to make it profitable someway.
        </p>
        <p>( from 10/2012 until now )</p>
      </GenericBlock>
      <ImageBlock 
        src='/projects/mussum-ipsum/web.png'
        width={1761}
        heigth={1438}
      />
      <ImageBlock 
        src='/projects/mussum-ipsum/smartphone.png'
        width={320}
        heigth={685}
      />
    </>
  ),
  links: [
    'https://www.mussumipsum.com/',
    {
      url: 'https://github.com/diegofelipece/mussum-ipsum',
      icon: 'github',
    }
  ]
};

export default excerpt;