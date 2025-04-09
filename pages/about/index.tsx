import { motion, useAnimation } from "framer-motion"
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import GenericBlock from '../../components/GenericBlock'
import ImageBlock from '../../components/ImageBlock'
import Logo from '../../components/Logo'
import SeoTags from '../../components/SeoTags'
import styles from '../../styles/pages/About.module.scss'
import { calculateAge } from '../../utils/ageHelper'

const age = calculateAge();

const About: NextPage = () => {
  const controls = useAnimation();
  const router = useRouter();

  controls.start({
    width: "0%",
    transition: { duration: 0.6, delay: 0.3 },
  })  

  const onReturnToHome = () => {
    controls.start({
      width: "100%",
      backgroundColor: '#896194',
      transition: { duration: 0.6 },  
    }).then(() => {
      router.push('/');
    });
  };

  return (
    <div className={styles.container}>
      <SeoTags pageDescription="Diego Esteves portfolio" pageTitle='About me' pageSlug='about'/>
      <main>
        <div className={styles.about_page}>
          <motion.span
            animate={controls}
            className={styles.about_page__layover}></motion.span>
          <div className={styles.about_page__header}>
            <Logo className={styles.about_page__header__logo} size='small' returnToHome={onReturnToHome} />
            <h1 className={styles.about_page__header__title}>About me</h1>
          </div>
          <div className={styles.about_page__body}>
            <GenericBlock>
              <p>
                Hi, I&apos;m Diego Esteves.
              </p>
              <p>
                I&apos;m {age} years old, born in São Paulo, Brazil, and currently living in Bologna, Italy. I graduated in 2012 with a degree in Advertising Design from <a href="https://www.linkedin.com/school/mackenzie1870" target="_blank" rel="noreferrer">Mackenzie</a> (São Paulo), and I’ve been working as a web designer and developer since 2010.
              </p>
              <p>
                It all started with design and advertising, with a strong focus on digital. Back in 2010, the internet looked quite different — my first steps were through creating personal blogs and building Flash websites. As the web evolved, I transitioned from Flash to HTML5, jQuery, and WordPress, and gradually moved deeper into what we now call front-end development. For years, I worked across both design and development, in digital and graphic formats.
              </p>
              <p>
                During that time, I had the opportunity to collaborate with small design studios and leading Brazilian e-commerce platforms like Netshoes, the B2W Group, and Dafiti. In 2015, I became a freelancer and began diving into the world of Single Page Applications—primarily using React and later Angular. I worked with companies and agencies such as Unilever, Nexxus, CuboCC, Itaú, Anglo, and others.
              </p>
              <p>
                In 2018, I moved to Italy — first to Bologna, then Milan. The following year, I joined Gruppo Euris, where I worked as an external consultant. I first collaborated with ShopFully (until May 2020), and then led a small team of four developers at Gucci. In September 2022, I left Gruppo Euris and joined ShopFully as a Fullstack Developer (React, Node, PHP), which is my current position.
              </p>
            </GenericBlock>
            <ImageBlock
              src='self.jpg'
              heigth={400}
              width={400} />
            <GenericBlock>
              <p>
                As an independent comic writer and illustrator, I self published some small stories (all in Portuguese): &quot;A Última Vez Que Vi Richard&quot; (2014), &quot;A Vida Marinha&quot; (2017), and &quot;Agouro&quot; (2017). I also participated in the first issue of the magazine &quot;Pé de Cabra&quot;. You can see them all, and a lot of other stuff, at my old Tumblr, <a href="https://oincriveltediocotidiano.tumblr.com/" target="_blank" rel="noreferrer">O Incrível Tédio Cotidiano</a>.
              </p>
              <p>
                You can find more information about my skills and experience on my LinkedIn or by sending me a “hello” at <a href="mailto:diegofelipece@gmail.com">diegofelipece@gmail.com</a>
              </p>
            </GenericBlock>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
