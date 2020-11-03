import React, { useState } from "react";
import Article from "./Article";
import apidata from "./apidata";

export default () => {
  // var unirest = require("unirest");

  // var req = unirest(
  //   "GET",
  //   "https://rapidapi.p.rapidapi.com/api/search/NewsSearchAPI"
  // );

  // req.query({
  //   pageSize: "10",
  //   q: "climate change",
  //   autoCorrect: "true",
  //   pageNumber: "1",
  //   toPublishedDate: "null",
  //   fromPublishedDate: "null",
  // });

  // req.headers({
  //   "x-rapidapi-key": "16ab   df544amsha0481382609fe81p13c2a6jsn6126ebe31040",
  //   "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  //   useQueryString: true,
  // });

  const [newsArray, setNewsArray] = useState(apidata.value),
    [newsBody, setNewsbody] = useState("");

  // req.end(function (res) {
  //   if (res.error) throw new Error(res.error);
  //     setNewsArray(res.body.value)
  //   console.log(res.body);
  // });

  function showArticle(index) {
    setNewsbody(newsArray[index].body);
  }

  const test = newsArray[0];
  console.log(test);

  const style = {
    display: "grid",
    // flexDirection: "row",
  }

  return ( <>
    <div style={style}>
      {newsArray.map((item, index) => (
        <Article data={item} click={showArticle} index={index} />
      ))}
      </div>
      <p>{newsBody}</p>
    </>
  );
};
