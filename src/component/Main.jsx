import React, { useEffect } from "react";
import Header from "../modules/Header/header";
import MainContent from "../modules/Main/main";
import Footer from "../modules/Footer/footer";
import { useSelector } from "react-redux";

export default function Main() {
  useEffect(() => {
    console.log(useSelector);
  }, []);
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
