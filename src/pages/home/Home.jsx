import css from './Home.module.scss';

function Home() {
  return (
    <div className={css.home_block}>
      <h1 className={css.home_title}>Welcome</h1>
      <img
        src="https://wallpaperaccess.com/full/2564176.jpg"
        alt="Dart Weider"
      />
    </div>
  );
}

export default Home;
