import { useEffect } from "react";

const AxeptioInjector = () => {
    useEffect(() => {
      const el = document.createElement("script");
      el.setAttribute("src", "https://static.axept.io/sdk.js");
      el.setAttribute("type", "text/javascript");
      el.setAttribute("async", "true");
      el.setAttribute("data-id", "625de4147eb5e3ae97c10608");
      if (document.body !== null) {
        document.body.appendChild(el);
      }
    }, []);
  
    return null;
  };
  
  export default AxeptioInjector;