import s from './style.module.css';

const Layout = (props) => {
  const {
    id,
    title,
    descr,
    urlBg,
    colorBg
  } = props;

  const styleRoot = {};
  if (urlBg) styleRoot.backgroundImage = `url(${urlBg})`;
  if (colorBg) styleRoot.backgroundColor = colorBg;

  return (
    <section
      className={s.root}
      id={id}
      style={styleRoot}
    >
      <div className={s.wrapper}>
        <article>
          {
            title &&
            <div className={s.title}>
              <h3>{title}</h3>
              <span className={s.separator}/>
            </div>
          }
          {
            descr &&
            <div className={s.desc + ' ' + s.full}>
              <p>{descr}</p>
            </div>
          }
        </article>
      </div>
    </section>
  );
};

export default Layout;
