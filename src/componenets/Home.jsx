import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/home.css";
import Preloader from "./Preloader";
import Selection from "./Selection";
import Languages from "./Languages";

const Home = () => {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);
  const [lang, setLang] = useState();
  console.log(id);
  useEffect(() => {
    setShow(true);
    fetch("http://localhost:4000/api/v1/modules/")
      .then((res) => {
        if (res && res.status) {
          return res.json();
        }
      })
      .then((all) => {
        console.log(all);
        setShow(false);
        setData(all);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/modules/${id}`)
      .then((res) => res.json())
      .then((all) => {
        console.log(all);
        setLang(all);
      });
  }, [id]);

  return (
    <article className="home">
      {show && <Preloader></Preloader>}
      <Header></Header>
      <h2 className="summery">
        Hello CYF trainees, click on the buttons below to learn about what
        London8 has learnt
      </h2>
      <article className="data_cont">
        <Selection id={id} setId={setId} data={data}></Selection>
        <Languages lang={lang}></Languages>
      </article>

      <Footer></Footer>
    </article>
  );
};

export default Home;
