import { API } from "aws-amplify";
import "./App.css";

function App() {
  const handleOnExecute = () => {
    console.log("Handle on execute");

    const apiName = "TypeScriptAPI";
    const path = "/test";
    const myInit = {
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {},
    };

    API.get(apiName, path, myInit)
      .then((response) => {
        console.log("[API] ", response);
      })
      .catch((error) => {
        console.log("[API Error]", error);
      });
  };

  return <button onClick={handleOnExecute}>Execute</button>;
}

export default App;
