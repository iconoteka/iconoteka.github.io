import styles from './Search.module.css';

type SearchProps = {
  text: string
}

export default function Search(props: SearchProps) {
  return (<input type="text" 
            className={styles.Search} 
            placeholder="search on iconoteka"
          />);
}