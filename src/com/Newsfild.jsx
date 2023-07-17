import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./fild.css";
import Loading from "./Loading";

export default function Newsfild(prop) {
  const [articals, setarticals] = useState([]);
  const [pages, setpages] = useState(1);
  const [tarticals, settarticals] = useState(0);
  const [loading, setloding] = useState(false);

  const updatenews = async () => {
    setloding(true);
    const url1 = `https://newsapi.org/v2/top-headlines?country=${prop.country}&category=${prop.category}&apiKey=0f332397158249468f772d8ae5247417&pageSize=${prop.pageSize}`;
    let data = await fetch(url1);
    let parseddata = await data.json();
    setloding(false);
    setarticals(parseddata.articles);
    settarticals(parseddata.totalResults);
  };
  useEffect(() => {
    updatenews();
  }, []);

  const handlenext = async () => {
    setloding(true);
    const url1 = `https://newsapi.org/v2/top-headlines?country=${prop.country}&category=${prop.category}&apiKey=0f332397158249468f772d8ae5247417&PAGE=${pages}&pageSize=${prop.pageSize}`;
    let data = await fetch(url1);
    let parseddata = await data.json();
    setloding(false);
    setarticals(parseddata.articles);
    setpages(pages + 1);
  };
  const handlepre = async () => {
    setloding(true);
    const url1 = `https://newsapi.org/v2/top-headlines?country=${prop.country}&category=${prop.category}&apiKey=0f332397158249468f772d8ae5247417&PAGE=${pages}&pageSize=${prop.pageSize}`;
    let data = await fetch(url1);
    let parseddata = await data.json();
    setloding(false);
    console.log(parseddata);
    setarticals(parseddata.articles);
    setpages(pages - 1);
  };

  return (
    <>
      <div className="container my-4 ">
        <h1 className="text-center my-4">I0-news Headline</h1>
        {loading && <Loading />}
        <div className="row">
          {!loading &&
            articals.map((e) => {
              return (
                <div className="col-md-4 my-4">
                  <Card
                    // key="{element.url}"
                    title={e.title}
                    discription={e.description}
                    imgurl={e.urlToImage}
                    key={e.imgurl}
                    gourl={e.url}
                    author={e.author}
                    time={e.publishedAt}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container btns">
        <button onClick={handlepre} disabled={pages <= 1} className="dis">
          &larr;previous{" "}
        </button>
        <button
          onClick={handlenext}
          disabled={pages === Math.ceil(tarticals / 20)}
        >
          next&rarr;{" "}
        </button>
      </div>
    </>
  );
}
