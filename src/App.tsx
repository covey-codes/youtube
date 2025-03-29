import React from "react";
import { HeroSection } from "./components/HeroSection";
import ReactQuery from "./components/ReactQuery";
import ReactConference from "./components/ReactConference";
import IconsCarousel from "./components/IconsCarousel";
import CommentSection from "./components/CommentSection";
import GitNationStore from "./components/GitNationStore";

function App() {
  return (
    <>
      <HeroSection />
      <ReactQuery />
      <ReactConference />
      <IconsCarousel />
      <CommentSection />
      <GitNationStore />
    </>
  );
}

export default App;
