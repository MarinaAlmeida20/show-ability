import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/home.css";
import Preloader from "./Preloader";
import Selection from "./Selection";

const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const [lang, setLang] = useState("");
  useEffect(() => {
    setShow(true);
    fetch("")
      .then((res) => {
        if (res && res.status) {
          return res.json();
        }
      })
      .then((all) => {
        setShow(false);
        setData(all);
      });
  }, []);
  return (
    <article className="home">
      {show && <Preloader></Preloader>}
      <Header></Header>
      <Selection id={id} setId={setId}></Selection>
      <Footer></Footer>
    </article>
  );
};

export default Home;
