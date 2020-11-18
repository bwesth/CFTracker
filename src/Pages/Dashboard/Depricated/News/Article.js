import React from "react";

export default (props) => {

    console.log(props)
    const { datePublished, description, provider, title, url } = props.data
    
    const style = {
        // height: "1em",
        // width: "1em"
    }

  return <button style={style} onClick={() => props.click(props.index)}>
    <h1><a href={url}>{title}</a></h1>
    <h4>{description}</h4>
    <p>Date published: {datePublished}</p>
    <p>Source: {provider.name}</p>
  </button>;
};
