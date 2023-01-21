import Navbar from "../sections/Navbar";
import NotFoundImg from "../assets/sections/not-found.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/", { relative: "path" });
  }
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center gap-5 py-12">
        <img src={NotFoundImg} alt="This page is not found" />
        <h1 className="font-clashDisplay text-800">This page is not found</h1>
        <Button
          onClick={handleNavigate}
          name="Home Page"
          style="bg-darkPrimary text-white hover:bg-primary"
        />
      </main>
    </>
  );
};

export default NotFound;
