import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/pages/About.module.scss'
import { motion, useAnimation } from "framer-motion"
import Logo from '../../components/Logo'
import { useRouter } from 'next/router'
import { calculateAge } from '../../data/ageHelper'
import GenericBlock from '../../components/GenericBlock'
import ImageBlock from '../../components/ImageBlock'
import SeoTags from '../../components/SeoTags'

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
                My name is Diego Esteves, I&apos;m {age} years old, born in São Paulo – Brazil, and living in Milan - Italy. In 2012 I&apos;ve got my university degree in Advertising Design, (<a href="https://www.linkedin.com/school/mackenzie1870">Mackenzie</a> – SP/Brazil) and I&apos;ve been working as a web developer and designer since 2010.
              </p>
              <p>
                To be more specific, it all started with design and advertising, with a considerable focus on the web. Back in 2010, the internet was really different from what it looks like today, so I started by making my own blogs and then started working with Flash websites (R.I.P🪦). Slowly I got more into what we call today front-end development when I moved from flash to HTML5 websites done mostly with jQuery and WordPress. So, for years, I worked both as a developer and designer for digital and also graphic stuff.
              </p>
              <p>
                During that period I had the opportunity to collaborate with many small design agencies and some of the lead Brazilian e-commerces, like Netshoes, B2W Group, and Dafiti. In 2015 I became a freelancer and at some point, I started diving into the Single Page Application world mainly with React and later Angular. I continued as a freelancer until 2018 when I moved to Italy – initially Bologna and then Milan, and worked with many companies and agencies, like Unilever, Nexxus, CuboCC, Itaú, Anglo, and many others. In 2019 I started working at Gruppo Euris, which is still my current employer, initially for a project with ShopFully and since 2020/08 I lead a small group of 4 developers for Gucci as external consultants.
              </p>
            </GenericBlock>
            <ImageBlock
              src='self.jpg'
              heigth={400}
              width={400} />
            <GenericBlock>
              <p>
                As an independent comic writer and illustrator, I self published some small histories (all in Portuguese): &quot;A Última Vez Que Vi Richard&quot; (2014), &quot;A Vida Marinha&quot; (2017), and &quot;Agouro&quot; (2017). I also participated in the first issue of the magazine &quot;Pé de Cabra&quot;. You can see them all, and a lot of other stuff, at my old Tumblr, <a href="https://oincriveltediocotidiano.tumblr.com/">O Incrível Tédio Cotidiano</a>.
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
