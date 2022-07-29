import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import FeedScreen from "./screens/FeedScreen";
import Message from "./screens/Message";


const App = () => {
  return <Layout>
    <Routes>
      <Route path="/" element={<FeedScreen />} />
     < Route path="Message" element={<Message />} />
    </Routes>

  </Layout>
};

export default App;
