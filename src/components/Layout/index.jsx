import s from './style.module.css';

const Layout = (props) => {
  const {
    id,
    title,
    urlBg,
    colorBg,
    children
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
            children &&
            <div className={`${s.desc} ${s.full}`}>
              {children}
            </div>
          }
        </article>
      </div>
    </section>
  );
};

export default Layout;
