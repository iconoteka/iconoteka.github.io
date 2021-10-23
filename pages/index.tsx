import type { NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';

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


type IconProps = {
  name: string,
  path: string,

}

const Icon: React.FC<IconProps> = ({ name, path }) => {
  return (
    <div className={styles.Icon}>
      <Image src={`/iconoteka/${path}` } width="48" height="48"  />
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
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <Head>
          <title>Create Next App</title>
          
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.Navigation}>
          <Search text="" />
        </div>
      <div className={styles.Footer}>
        Patreon <br />

      </div>
      <div className={styles.Content}>
        {iconoteka.items.map((category) => {
          return <Category name={category.name}>
              {category.items.map((icon) => {
                return <Icon name={icon.name} path={icon.path} />
              })}
          </Category>
        })}
        
      </div>
    </div>
  </div>
  )
}

export default Home
