import React, { useState } from "react";
import SplashView from "./SplashView";

const AnimatedAppLoader = ({ children }: { children: React.ReactNode }) => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>{splashDone ? <>{children}</> : <SplashView exit={setSplashDone} />}</>
  );
};

export { AnimatedAppLoader };
