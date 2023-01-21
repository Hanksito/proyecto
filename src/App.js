import { useState } from "react";
import Layout from "./componentes/Layout";
import MyContext from "./Context";

function App() {
  const [user, setUser] = useState({ name: "John Doe" });
  return (
    <MyContext.Provider value={{ user, setUser }}>
      <Layout />;
    </MyContext.Provider>
  );
}

export default App;
