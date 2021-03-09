import React, { useEffect, useState } from "react";

import { TextSection } from "./Components/TextSection";
import Card from "./Components/Card";

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
      {slideToShow === 1 && (
        <Card>
          <TextSection id="welcome" />
        </Card>
      )}
      {slideToShow === 2 && (
        <Card>
          <TextSection id="blog_post" />
        </Card>
      )}
      {slideToShow === 3 && (
        <Card>
          <TextSection id="kitchen_sink" />
        </Card>
      )}
    </React.Fragment>
  );
}

export default App;
