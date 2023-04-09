import React from "react";
import "./mainpage.css";
import Header from "../../components/header/header";
import Headersection from "../../components/headersection/headersection";
import Card from "../../components/UI/Card/card";
import CourseSection from "../../components/courseSection/courseSection";
import Footer from "../../components/footer/footer";
export default function mainpage() {
  return (
    <Card className="mainpagestyle">
      <Header />
      <Headersection />
      <CourseSection />
      <Footer />
    </Card>
  );
}
