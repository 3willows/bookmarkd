import { useEffect } from 'react';
import { useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import "./App.css"

/* eslint-disable no-inner-declarations */
// import Navbar from "../Navbar/Navbar";
// import { BrowserRouter as Router } from "react-router-dom";
// import { useEffect, useState, createContext } from "react";
// import { bookmarkd } from "../../definitions/bookmarkdTheme.jsx";
// import { ThemeProvider } from "@mui/material/styles";
// import { supabase } from "../Supabase/client.js";
// import AppRoutes from "../AppRoutes/AppRoutes.jsx";
// import DesktopNavbar from "../DesktopNavbar/DesktopNavbar.jsx";
// export const TokenContext = createContext();
// export const SetTokenContext = createContext();

function App() {
  // const [token, setToken] = useState(false);
  // const [isMobile, setIsMobile] = useState(true);

  // function handleResize() {
  //   const screenSize = window.innerWidth;
  //   if (screenSize < 640) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   // Call handler right away so state gets updated with initial window size
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // if (token) {
  //   sessionStorage.setItem("token", JSON.stringify(token));
  // }

  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     let data = JSON.parse(sessionStorage.getItem("token"));
  //     setToken(data);
  //   }
  // }, []);

  const ref = useRef(null);
  const refLeft = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    resizeableEle.style.top = "50px";
    resizeableEle.style.left = "50px";

    // Right resize
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Top resize
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom resize
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Left resize
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      resizeableEle.style.right = styles.right;
      resizeableEle.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Add mouse down event listener
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);
    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);


  return (
    <>
      <div className="text-3xli text-heart-red font-bold underline">Hello</div>
      <ResizableBox 
      className="text-3xli text-heart-red border-8	 border-r-desktop-navbar font-bold underline"
      width={200} height={200} >
        <span>Contents</span>
      </ResizableBox>

      <div className="container">
      <div ref={ref} className="resizeable">
        <div ref={refLeft} className="resizer resizer-l"></div>
        <div ref={refTop} className="resizer resizer-t"></div>
        <div ref={refRight} className="resizer resizer-r"></div>
        <div ref={refBottom} className="resizer resizer-b"></div>
      </div>
    </div>
    </>

    // <TokenContext.Provider value={token}>
    //   <SetTokenContext.Provider value={setToken}>
    //     <ThemeProvider theme={bookmarkd}>
    //       <Router>
    //         {token && isMobile && <Navbar />}
    //         {token && !isMobile && <DesktopNavbar />}
    //         <div className="pb-16 lg:pl-[20rem] md:pl-[7.5rem]">
    //           <AppRoutes token={token} />
    //         </div>
    //       </Router>
    //     </ThemeProvider>
    //   </SetTokenContext.Provider>
    // </TokenContext.Provider>
  )
}

export default App
