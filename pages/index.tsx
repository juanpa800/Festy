import Button from "@components/Button";
import Navbar from "@components/Navbar";
import { NextPage } from "next/types";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-row text-3xl text-center justify-center">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-row py-4 text-3xl text-center justify-center">
        <h1>Bienvenido</h1>
      </div>
      <div className="flex flex-row py-4 text-3xl text-center justify-center">
        <p className="text-red-500">Este es un mensaje de prueba</p>
      </div>
      <div className="flex flex-row py-4 text-3xl text-center justify-center">
        <Button>
          <Link href="proyectos">
            <a>Proyectos</a>
          </Link>
        </Button>
        <Button>
          <Link href="equipos">
            <a>Equipos</a>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
