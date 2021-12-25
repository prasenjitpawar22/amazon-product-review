import "./App.css";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import Card from "./components/Card";

function App() {
  const [data, setdata] = useState({});
  const [loader, setloader] = useState(false);

  const getdata = async () => {
    try {
      setloader(true);
      const response = await fetch(
        "https://amazon-product-review-app.herokuapp.com/"
      );
      const data = await response.json();

      setdata(data.data);
      setloader(false);
    } catch (e) {
      console.log("this is error", e);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return loader ? (
    <Spinner />
  ) : (
    <Card
      person={data.person}
      img_url={data.img_url}
      main_titl={data.main_title}
      rating={data.rating}
      reviewtitle={data.reviewtitle}
      verify={data.verify}
      content={data.content}
    />
  );
}

export default App;
