import React, { useEffect, useState } from "react";

import axiosWithAuth from '../helpers/axiosWithAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState(false);
  

  useEffect(() => {
    axiosWithAuth().get('/')
    .then(res => setColorList(res.data))
    .catch(err => console.log(err))
  }, [])
  
  const isLoading = () => {
    if (colorList){
      return <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      </>
    }
    else{
      return <div>Loading...</div>
    }
  }

  

  return (
    <div className="container">
      {isLoading()}
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
