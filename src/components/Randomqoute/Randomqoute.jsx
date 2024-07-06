import React, { useState } from "react";
import "./Randomqoute.css";
import Tiwtter_img from "../assets/twitter.png";
import Reload_img from "../assets/reload-1024.webp";

const RAndomqoute = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  const getRandomQuote = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };
  const twitter = () => {
   window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(", ")[0]}`,)
  };

  const [quote, setQuote] = useState({
    text: "Your Honest Feedback Can Change Candidates Direction",
    author: "AHMEDRDEV",
  });

  loadQuotes();
  return (
   
    <div className="container">
      <h1 className="heading">（ 🆀🆄🅾🆃🅴🆂 ）</h1>
        <div className="qoute"> ♥ {quote.text} ♥</div>
        <div>
          <div className="line"></div>
          <div className="bottom">
            <div className="author">:- 【{quote.author.split(",")[0]}】</div>
            <div className="icon">
              <img
                src={Reload_img}
                onClick={() => {
                  getRandomQuote();
                } }
                alt=""
                height={35} />
              <img src={Tiwtter_img} onClick={() => {
                twitter();
              } } alt="" height={35} />
            </div>
          </div>
        </div>
      </div>
  );
};
export default RAndomqoute;
