import { TextPosition } from "../../types/Block";
import { Project, ProjectExerpt } from "../../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'cbf',
  title: 'CBF app',
  category: 'design',
  coverImage: '/cover-app-selecao.jpg'
};

export const cbf: Project = {
  excerpt,
  blocks: [
    {
      paragraphs: `
        <p>
          I was responsable to redesign the app of the Brazilian Soccer Team sponsered by Vivo. The app has oficial informations about the team, like news, photos, and a game calendar.
        </p>
        <p>
          This job was managed by&nbsp;<a href="http://www.pactodigital.com/" target="_blank" rel="noopener noreferrer">Pactodigital</a>, that invited me to make a whole new art direction fot the app. It was launched for iOS and Android, both avaliable for tablets and smartphones.
        </p>
      `,
      textPosition: TextPosition.full,
    },
    {
      image: {
        src: '/cbf/selecao-app.jpeg',
        alt: '',
        width: 1000,
        heigth: 653
      },
      textPosition: TextPosition.full,
    },
  ],
  links: [
    {
      url: 'https://itunes.apple.com/br/app/selecao/id343628206?mt=8',
      icon: 'apple'      
    },    
    {
      url: 'https://play.google.com/store/apps/details?id=br.com.mowasports.selecao',
      icon: 'android'      
    }
  ]
};

export default excerpt;

