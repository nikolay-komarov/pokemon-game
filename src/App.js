import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg1 from './assets/bg1.jpg';
import bg3 from './assets/bg3.jpg';

const App = () => {
  return (
    <>
      <Header
        title="This is title"
        descr="This is Description!"
      />
      <Layout
        id="1"
        title="title_01"
        descr="descr_01"
        urlBg={bg1}
      />
      <Layout
        id="2"
        title="title_02"
        descr="descr_02"
        colorBg="yellow"
      />
      <Layout
        id="3"
        title="title_03"
        descr="descr_03"
        urlBg={bg3}
      />
      <Footer />
    </>
  );
}

export default App;
