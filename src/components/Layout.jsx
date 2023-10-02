import { Outlet } from "react-router-dom";
import tw from "tailwind-styled-components";

const Container = tw.div`
bg-gray-200 
max-w-screen-xl 
mx-auto 
h-screen 
grid 
grid-rows-[auto_1fr_auto]
`;
const Layout = () => {
  return (
    <Container>
      {/*<Header />*/}
      <Outlet />
      {/*<Footer />*/}
    </Container>
  );
};
export { Layout };
