import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsContainer from "./components/NewsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  let [mode, setmode] = useState("light");

  const changemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2d2d2d";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="flex-wrapper">
      <div>
        <BrowserRouter>
          <Navbar changemode={changemode} />
          <LoadingBar
            color="#f11946"
            height={2}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/news"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="news"
                  country="in"
                  category="news"
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="home"
                  country="in"
                  category="news"
                />
              }
            />

            <Route
              exact
              path="/sport"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="sport"
                  country="in"
                  category="sport"
                />
              }
            />
            <Route
              exact
              path="/tech"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="tech"
                  country="in"
                  category="tech"
                />
              }
            />
            <Route
              exact
              path="/finance"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="finance"
                  country="in"
                  category="finance"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/travel"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="travel"
                  country="in"
                  category="travel"
                />
              }
            />
            <Route
              exact
              path="/music"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="music"
                  country="in"
                  category="music"
                />
              }
            />
            <Route
              exact
              path="/food"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="food"
                  country="in"
                  category="food"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/gaming"
              element={
                <NewsContainer
                  mode={mode}
                  progress={progress}
                  setProgress={setProgress}
                  key="gaming"
                  country="in"
                  category="gaming"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer mode={mode} />
    </div>
  );
}

export default App;
