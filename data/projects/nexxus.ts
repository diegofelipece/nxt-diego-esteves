import { TextPosition } from "../../types/Block";
import { Project, ProjectExerpt } from "../../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'nexxus',
  title: 'Nexxus UK',
  category: 'design',
  coverImage: '/images/projects/cover-nexxus-app.jpg'
};

export const nexxus: Project = {
  excerpt,
  blocks: [
    {
      paragraphs: `
        <p>
          Design for a Nexxus UK iOS app created for a local marketing action on drugstores. The concept was to create a tool to help the clients on finding the perfect product for their hairs.
        </p>
        <p>
          Project made as freelacer for <a href="http://www.cubo.cc/" target="_blank" rel="noopener">CUBO.CC</a> working with <a href="http://www.raisatrinny.cc/" target="_blank" rel="noopener">Raisa Almeida</a> for <a href="https://www.nexxus.com/uk/home.html">Nexxus UK</a>.
        </p>
      `,
      textPosition: TextPosition.full,
    },
    {
      image: {
        src: '/images/projects/nexxus/section1.jpeg',
        width: 1000,
        heigth: 613,
      }
    },
    {
      image: {
        src: '/images/projects/nexxus/nexxus-app-diagnosis_ipad-Question-1-01-@2x.jpeg',
        width: 2049,
        heigth: 1537,
      }
    },
    {
      image: {
        src: '/images/projects/nexxus/nexxus-app-diagnosis_ipad-Question-7-Select-@2x.jpeg',
        width: 2049,
        heigth: 1537,
      }
    },
    {
      image: {
        src: '/images/projects/nexxus/nexxus-app-diagnosis_ipad-Question-9-Select-02-@2x.jpeg',
        width: 2049,
        heigth: 1537,
      }
    },
    {
      image: {
        src: '/images/projects/nexxus/nexxus-app-diagnosis_ipad-Result-Sharing-@2x.jpeg',
        width: 2049,
        heigth: 1537,
      }
    }
  ],
};

export default excerpt;
