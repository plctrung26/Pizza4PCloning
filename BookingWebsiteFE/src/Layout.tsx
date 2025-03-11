import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

console.log("Layout component rendered");

const Layout = () => {

    console.log("Layout rendered");

    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default Layout;
