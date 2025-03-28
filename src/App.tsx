import React from "react";
import { HeroSection } from "./components/HeroSection";
import ReactQuery from "./components/ReactQuery";
import ReactConfrence from "./components/ReactConfrence";
import IconsCarousel from "./components/IconsCarousel";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <>
      <HeroSection />
      <ReactQuery />
      <ReactConfrence />
      <IconsCarousel />
      <CommentSection />
    </>
  );
}

export default App;
