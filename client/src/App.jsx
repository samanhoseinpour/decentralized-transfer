import { Navbar, Welcome } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome full-height">
      <Navbar />
      <Welcome />
    </div>
  </div>
);

export default App;
