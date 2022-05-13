import {
  Android,
  Apple,
  Behance,
  Facebook,
  Github,
  Link,
  Linkedin,
  Tumblr
} from '../icons';
import { ProjectLink } from '../types/Project';
import styles from '../styles/components/LinksList.module.scss';

const icons = {
  android: <Android/>,
  apple: <Apple/>,
  behance: <Behance/>,
  facebook: <Facebook/>,
  github: <Github/>,
  link: <Link/>,
  linkedin: <Linkedin/>,
  tumbl: <Tumblr/>
}

type availableIcons = keyof typeof icons;

type Props = {
  links: (ProjectLink|string)[]
}

const LinksList = ({ links }: Props) => {
  return links ? (
    <ul className={styles.links_list}>
      {links.map((link, i) => {
        const linkAsString = typeof link === 'string';
        const linkUrl = linkAsString ? link : link.url; 
        const icon = !linkAsString && link.icon && icons[link.icon as availableIcons] ? icons[link.icon as availableIcons] : <Link/>; 
        
        return (
          <li key={`${icon}-${i}`} className={styles.links_list__item}>
            <a href={linkUrl} target="__blank">{icon}</a>
          </li>
        );
      })}
    </ul>
  ) : null;
  
};

export default LinksList;