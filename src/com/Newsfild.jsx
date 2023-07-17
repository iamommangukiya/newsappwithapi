import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Newsfild(props) {
  const [articals, setarticals] = useState([]);
  const updatenews = async () => {
    const url1 =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f332397158249468f772d8ae5247417";
    let data = await fetch(url1);
    let parseddata = await data.json();
    setarticals(parseddata.articles);
  };
  useEffect(() => {
    updatenews();
  }, []);

  return (
    <>
      <div className="container my-4 ">
        <div className="row">
          {articals.map((e) => {
            return (
              <div className="col-md-4 my-4">
                <Card
                  // key="{element.url}"
                  title={e.title}
                  discription={e.discription}
                  imgurl={e.urlToImage}
                  key={e.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
