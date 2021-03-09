import React, { useEffect, useState } from "react";

import { TextSection } from "./TextSection";

function App() {
  const [slideToShow, setSlideToShow] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (slideToShow < 3) {
        setSlideToShow(slideToShow + 1);
      } else {
        setSlideToShow(1);
      }
    }, 5000);
  }, [slideToShow]);

  return (
    <React.Fragment>
      {slideToShow === 1 && <TextSection id="welcome" />}
      {slideToShow === 2 && <TextSection id="blog_post" />}
      {slideToShow === 3 && <TextSection id="kitchen_sink" />}
    </React.Fragment>
  );
}

export default App;
