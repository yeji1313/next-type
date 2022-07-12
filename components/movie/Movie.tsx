import classNames from 'classnames/bind';
import styles from './movie.scss';

const cx = classNames.bind(styles);

interface Props {
  children?: string;
}

const Movie = ({ children }: Props) => {
  console.log(children);

  return (
    <>
      <div className={cx()}>Movie</div>
    </>
  );
};

export default Movie;
