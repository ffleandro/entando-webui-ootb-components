import * as Footer from "./footer";
import * as Header from "./header";

export const Home = () => {
  return (
    <>
      <div>
        <Header></Header>

        <div
          style={{
            padding: "20px",
          }}
        >
          I am the page body
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
