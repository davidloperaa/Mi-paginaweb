import { useEffect } from "react";
import "@/App.css";

function App() {
  useEffect(() => {
    // Set page title for the iframe host
    document.title = "David Lopera · CX & Growth";
  }, []);

  return (
    <iframe
      title="David Lopera — CX & Growth"
      src="/standalone.html"
      className="dl-frame"
      data-testid="landing-iframe"
    />
  );
}

export default App;
