import { Block, TextPosition } from "../../types/Block";
import { calculateAge } from "../ageHelper";

const age = calculateAge();

const aboutContent: Block[] = [
  {
    paragraphs: `
      <p>
        My name is Diego Esteves, I'm ${age} years old, born in São Paulo – Brazil, living at Milan - Italy. At 2012 I've got my university degree on Advertising Design, (<a href="https://www.linkedin.com/school/mackenzie1870">Mackenzie</a> – SP/Brazil) and I've been working as web developer and designer since 2010.
      </p>
      <p>
        To be more specific, it all started with design and advertising, with a considerable focus on web. Back in 2010 the internet was really different from what it looks like today, so I started by making my own blogs and then started working with Flash websites (R.I.P🪦). Slowly I got more into what we call today front-end developer, when I moved from flash to HTML5 websites done mostly with jQuery and WordPress. So for years I worked both as developer and designer for digital and also graphic stuff.
      </p>
      <p>
        On that period I had the opportunity to collaborate with many small design agencies and some of the lead Brazilian e-commerces, like Netshoes, B2W Group, and Dafiti. At 2015 I became freelancer and at some point I stated  diving into Single Page Application's world mainly with React and later Angular. I continued as freelancer until 2018 when I moved to Italy – initially Bologna and then Milan. During that period I had the opportunity to work with many companies and agencies, like Unilever, Nexxus, CuboCC, Itaú, Anglo and many others. At 2019 I started working at Gruppo Euris, which still my current employer, initially for a project with ShopFully and  since 2020/08 I lead a small group of 4 developers for Gucci as external consultants. 
      </p>
    `,
    textPosition: TextPosition.full,
  },
  {
    image: {
      src: 'self.jpg',
      heigth: 400,
      width: 400
    }
  },
  {
    paragraphs: `
      <p>
        As independent comic writer and illustrator, I collaborated with some publications (all in Portuguese): A Última Vez Que Vi Richard (2014), A Vida Marinha (2017) and Agouro (2017). I also participated with the first issue of the maganize Pé de Cabra. You can see them all, and a lot of other stuff, at my old Tumblr, <a href="https://oincriveltediocotidiano.tumblr.com/">O Incrível Tédio Cotidiano</a>.
      </p>
      <p>
        You can find more informations about my skills and experience at my LinkedIn or sending me a “hello” at <a href="mailto:diegofelipece@gmail.com">diegofelipece@gmail.com</a>
      </p>
    `,
    textPosition: TextPosition.full,
  },

];

export default aboutContent;