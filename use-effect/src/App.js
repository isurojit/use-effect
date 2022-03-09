import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handelResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handelResize);

  //   return () => {
  //     window.removeEventListener("resize", handelResize);
  //   };
  // }, []);

  const [resourstype, setResourceType] = useState("Posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourstype.toLowerCase()}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [resourstype]);

  const postChangeHnadler = () => {
    setResourceType(() => {
      return "Posts";
    });
  };

  const userChnageHandler = () => {
    setResourceType(() => {
      return "Users";
    });
  };

  const commentsChangeHandler = () => {
    setResourceType(() => {
      return "Comments";
    });
  };

  return (
    <div>
      <button onClick={postChangeHnadler}>Posts</button>
      <button onClick={userChnageHandler}>Users</button>
      <button onClick={commentsChangeHandler}>Comments</button>
      <h1>{resourstype}</h1>
      {data.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default App;
