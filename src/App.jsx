import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Project from "./components/portfolio/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { themes } from "./components/json/themes.js";

const App = () => {
  // State for current theme index
  const [themeIndex, setThemeIndex] = useState(0);

  // Function to apply the current theme
  const applyTheme = (theme) => {
    // Update CSS variables
    document.documentElement.style.setProperty('--color-bg', theme.colors.bg);
    document.documentElement.style.setProperty('--color-bg-variant', theme.colors.bgVariant);
    document.documentElement.style.setProperty('--color-primary', theme.colors.primary);
    document.documentElement.style.setProperty('--color-primary-variant', theme.colors.primaryVariant);
    document.documentElement.style.setProperty('--color-white', theme.colors.white);
    document.documentElement.style.setProperty('--color-light', theme.colors.light);

    // Return solid color for background (smoother transition)
    return theme.colors.bg;
  };

  // State for background gradient and text color
  const [bgColor, setBgColor] = useState(applyTheme(themes[themeIndex]));
  const [textColor, setTextColor] = useState(themes[themeIndex].colors.white);

  // Effect to change theme at intervals, cycling through themes
  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % themes.length;
        const newTheme = themes[newIndex];
        setBgColor(applyTheme(newTheme));
        setTextColor(newTheme.colors.white);
        return newIndex;
      });
    }, 2000); // Change theme every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Styles for the app with dynamic background gradient and smooth transition
  const appStyle = {
    background: bgColor,
    minHeight: '100vh', // Ensure full height of viewport
    transition: 'background 4s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth transition for gradients and text color
    flexDirection: 'column',
    alignItems: 'center',
    color: textColor, // Dynamic text color
  };

  return (
    <div style={appStyle}>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
