import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Login } from "./Login";
import { Lab4 } from "./domain/Lab4";
import { MyComponent } from "./lab5/Store";

function App() {
  return (
    <div className="main_cont">
      <Router>
        <Menu mode="inline">
          <Menu.Item key="home" icon={<MailOutlined />}>
            <Link to="/">Pagina Principală</Link>
          </Menu.Item>
          <Menu.Item key="login" icon={<AppstoreOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="evidence" icon={<AppstoreOutlined />}>
            <Link to="/evidence">Evidenta</Link>
          </Menu.Item>
        </Menu>

        <Routes>
          <Route path="/" element={<Lab4 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/evidence" element={<MyComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
