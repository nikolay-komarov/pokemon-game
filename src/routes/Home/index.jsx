import Header from "../../components/Header";
import Layout from "../../components/Layout";

import bg1 from '../../assets/bg1.jpg';
import bg3 from '../../assets/bg3.jpg';

const HomePage = () => {
  return (
    <>
      <Header
        title="Pokemon Game"
        descr="This is a simple triple triad card game"
      />
      <Layout
        id="1"
        title="layout title 01"
        urlBg={bg1}
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>
      <Layout
        id="2"
        title="layout title 02"
        titleColor="#FFFFFF"
        colorBg="#202736"
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>
      <Layout
        id="3"
        title="layout title 03"
        urlBg={bg3}
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>
    </>
  );
}

export default HomePage;
