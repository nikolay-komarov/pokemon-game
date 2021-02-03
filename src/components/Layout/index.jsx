import s from './style.module.css';
import cn from 'classnames';

const Layout = ({id, title, titleColor, urlBg, colorBg, children}) => {
  const styleRoot = {};
  if (urlBg) styleRoot.backgroundImage = `url(${urlBg})`;
  if (colorBg) styleRoot.backgroundColor = colorBg;
  const styleTitle = {color: `${titleColor ? titleColor :'#000000'}`};

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
              <h3 style={styleTitle}>{title}</h3>
              <span className={s.separator}/>
            </div>
          }
          {
            children &&
            <div className={cn(s.desc, s.full)}>
              {children}
            </div>
          }
        </article>
      </div>
    </section>
  );
};

export default Layout;
