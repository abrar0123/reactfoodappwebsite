import React from "react";
import "./layout.css";
import { Fragment } from "react";
import { NavBar } from "../../components";
import Feature2 from "../Features/Feature2";
import Features from "../Features/Features";

export default function GridDesign() {
  return (
    <Fragment>
      <NavBar />
      <div className="pt-28"></div>
      <div className="layoutGridContainer ">
        <div className="item1">Grid Box 1</div>
        <div className="item2">Grid Box 2</div>
        <div className="item3">
          Grid Box 3 ok that is good idea Grid Box 3 ok that is good idea Grid
          Box 3 ok that is good idea Grid Box 3 ok
        </div>
        <div className="item4">Grid Box 4</div>
        <div className="item5">Grid Box 5</div>
        <div className="item6">Grid Box 6</div>
        <div className="item7">Grid Box 7</div>
        <div className="item8"> Extra Grid Box 8</div>
        <div className="item9"> Grid Box 9</div>
        <div className="item8">Grid Box 10</div>
        <div className="item9">Grid Box 11</div>
        <div className="item8">Grid Box 12</div>
        <div className="item9">Grid Box 13</div>
        <div className="col-span-full bg-blue-600">Grid Box Footer </div>
      </div>
      <br />
      <br />
      <h3 style={{ textAlign: "center" }}>Grid Layout </h3>
      <div className="itemsgrid">
        <div className="items1">items 1</div>
        <div className="items2">items 2</div>
        <div className="items3">items 3</div>
        <div className="items4">items 4</div>
        <div className="items5">items 5</div>
        <div className="items3">items 3</div>
        <div className="items4">items 4</div>
        <div className="items5">items 5</div>
      </div>
    </Fragment>
  );
}
