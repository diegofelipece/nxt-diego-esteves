import { TextPosition } from "../../types/Block";
import { Project, ProjectExerpt } from "../../types/Project";

export const excerpt: ProjectExerpt = {
  slug: 'cbf',
  title: 'CBF app',
  category: 'design',
  coverImage: '/images/projects/cover-app-selecao.jpg'
};

export const cbf: Project = {
  excerpt,
  blocks: [
    {
      paragraphs: `<p>
          Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Detraxit consequat et quo num tendi nada.Viva Forevis aptent taciti sociosqu ad litora torquent.Si num tem leite então bota uma pinga aí cumpadi! <br>
          Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. <br>
          Aenean aliquam molestie leo, vitae iaculis nisl.Per aumento de cachacis, eu reclamis.Paisis, filhis, espiritis santis.Mé faiz elementum girarzis, nisi eros vermeio.
        </p>`,
      textPosition: TextPosition.full,
    },
    {
      paragraphs: `<p>
          Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Detraxit consequat et quo num tendi nada.Viva Forevis aptent taciti sociosqu ad litora torquent.Si num tem leite então bota uma pinga aí cumpadi! <br>
          Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. <br>
          Aenean aliquam molestie leo, vitae iaculis nisl.Per aumento de cachacis, eu reclamis.Paisis, filhis, espiritis santis.Mé faiz elementum girarzis, nisi eros vermeio.
        </p>`,
      textPosition: TextPosition.full,
    },
    {
      paragraphs: `<p>
          Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Detraxit consequat et quo num tendi nada.Viva Forevis aptent taciti sociosqu ad litora torquent.Si num tem leite então bota uma pinga aí cumpadi! <br>
          Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. <br>
          Aenean aliquam molestie leo, vitae iaculis nisl.Per aumento de cachacis, eu reclamis.Paisis, filhis, espiritis santis.Mé faiz elementum girarzis, nisi eros vermeio.
        </p>`,
      textPosition: TextPosition.full,
    },
  ]
};

export default excerpt;