import { NextPage } from 'next';

interface Props {
  children?: string;
}

const Movies: NextPage<Props> = () => {
  return (
    <>
      <div>Movies</div>
    </>
  );
};

export default Movies;
