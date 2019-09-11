import React from "react";
import Home from "./pages/home.jsx";
import useFetch from "./helpers/fetch.jsx";

export function App() {
  const res = useFetch("https://api.carbonintensity.org.uk/generation", {});
  if (!res.response) {
    return <div>Loading...</div>;
  }

  const data = res.response.data;

  return <Home data={data} />;
}
