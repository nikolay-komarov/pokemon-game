import s from './style.module.css';

const Layout = () => {
  return (
    <section className={s.root} id="<-- ЗДЕСЬ props.id -->">
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>-- ЗДЕСЬ props.title --</h3>
            <span className={s.separator}/>
          </div>
          {/* eslint-disable-next-line no-template-curly-in-string */}
          <div className="${s.desc} ${s.full}">
            <p>-- ЗДЕСЬ props.desc --</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
