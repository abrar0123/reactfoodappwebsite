import React from "react";
import "./mainpage.css";
import Header from "../../components/header/header";
import Headersection from "../../components/headersection/headersection";
import Card from "../../components/UI/Card/card";
import CourseSection from "../../components/courseSection/courseSection";
import Footer from "../../components/footer/footer";
import { Routes } from "react-router-dom";
import { useEffect } from "react";
import { Cartpage } from "../../components/cart/cartpage";
import { Route } from "react-router-dom";

export default function Mainpage() {
  return (
    <Card className="mainpagestyle">
      <Header />
      <Headersection />
      <CourseSection />
      <Footer />
      <Routes>
        <Route path="/Cartpage" Component={Cartpage} />
        <Route path="/" Component={Header} />

        {/* <Route path="/" Component={CourseSection} /> */}
      </Routes>
    </Card>
  );
}
