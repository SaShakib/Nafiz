import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Form from "./components/Form";
import axios from "axios";
import "./CSS/AddProduct.scss";

function AddProduct() {
  const [refList, setrefList] = useState([]);
  const [attrRefList, setattrRefList] = useState([]);
  const [getType, setgetType] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let data = {};

    refList.forEach((input) => {
      data[input.current.name] = input.current.value;
    });

    attrRefList.forEach((input) => {
      data[input.current.name] = input.current.value;
    });

    data["type"] = getType;

    if (refList.length <= 0) return;
    if (attrRefList.length <= 0) return;
    if (getType === "2" && attrRefList.length < 3) return;
    if (getType === "") return;
   

    axios
      .post(
        "https://nafiz.upozogi.com/products/addProduct/",
        {
          data: data,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          responseType: "json",
        }
      )
      .then((e) => console.log(e.data))
      .catch((err) => {
        console.log(err);
      });
 

    refList.forEach((input) => {
      input.current.value = "";
    });

    attrRefList.forEach((input) => {
      input.current.value = "";
    });
  };

  return (
    <>
      <header className="addProduct_page_header">
        <h1>Product ADD</h1>

        <div>
          <button onClick={handleClick} id="save_btn">
            SAVE
          </button>
          <Link to="/" id="cancle_btn">
            CANCLE
          </Link>
        </div>
      </header>

      <main className="addProduct_page_main">
        <Form
          setattrRefList={setattrRefList}
          setrefList={setrefList}
          setgetType={setgetType}
        />
      </main>

      <Footer />
    </>
  );
}

export default AddProduct;
