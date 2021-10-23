import type { NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Waypoint } from 'react-waypoint';

import Search from '../components/Search/Search';

import styles from '../styles/Home.module.css';
import { iconoteka as iconotekaRaw } from '../utils/iconoteka';
import iconotekaConfig from '../iconoteka.config';

const iconoteka = iconotekaConfig.prepareData(iconotekaRaw);
console.log(iconoteka);

type CategoryProps = {
  name: string,
  children: object

}


type IconCardProps = {
  name: string,
  path: string,
  isVisible: boolean,
  ref?: React.ForwardedRef<HTMLDivElement>,
  innerRef?: React.ForwardedRef<HTMLDivElement>
}

const Categories: React.FC = () => {
  return (
    <ul className={styles.Categories}>
      <li><a href="" className="active">All Categories</a></li>
      {iconoteka.items.map((group) => <li><a href="">{group.name}</a></li>)}
    </ul>
  )
}


const IconCardWithRef: React.FC<IconCardProps> = React.forwardRef<HTMLDivElement>((props: IconCardProps, ref) => {
  return <IconCard innerRef={ref} {...props} />;
});

const IconCard: React.FC<IconCardProps> = ({ name, path, innerRef, isVisible }) => {
  return (
    <div className={styles.Icon} ref={innerRef}>
      { isVisible && <Image src={`/iconoteka/${path}` } width="48" height="48"  /> }
    </div>
  )
}

const Category: React.FC<CategoryProps> = ({ name, ...props }) => {
 return (
   <div className={styles.Category}>
    <h3 className={styles.CategoryHeader}>{name}</h3>
    <div className={styles.CategoryItemsWrapper}>
      {props.children}
    </div>
   </div>
 )
}

const Home: NextPage = () => {

  const [isVisible, setIsVisible] = React.useState(false);
  
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <Head>
          <title>Create Next App</title>
          
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.Navigation}>
          <Search text="" />
          <Categories />
        </div>
      <div className={styles.Footer}>
        Patreon <br />

      </div>
      <div className={styles.Content}>
        {iconoteka.items.map((category) => {
          return <Category name={category.name}>
              {category.items.map((icon) => {
                return (
                  <Waypoint
                  key={icon.path}
                  onEnter={() => setIsVisible(true)}
                >
                <IconCardWithRef key={icon.path} isVisible={isVisible} name={icon.name} path={icon.path} />
                </Waypoint>
                )
              })}
          </Category>
        })}
        
      </div>
    </div>
  </div>
  )
}

export default Home
