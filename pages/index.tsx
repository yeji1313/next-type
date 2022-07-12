import type { NextPage } from 'next';
import Movie from '@components/movie/Movie';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Movie />
    </div>
  );
};

export default Home;
