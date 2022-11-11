import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {

  return <>

    <Header />
    <div id="content">

      <div id="me">
        <img src="/me.jpg" alt="Nazif Can DURGUT" />
      </div>

      <div id="page-content">
        {children}
      </div>

    </div>
    <Footer />

  </>
}

export default Layout;