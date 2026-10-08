import { useEffect, useState } from "react";

function App() {
  const [ api, setApi ] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setApi(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
    <h1>Random Dog Image</h1>
    {api ? <img src={api.message} alt="Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;