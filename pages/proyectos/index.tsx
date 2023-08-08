import { NextPage } from "next";
import Link from "next/link";
import Button from "@components/Button";
import Navbar from "@components/Navbar";

const Proyectos: NextPage = () => {
  return (
    <div>
      <div className="flex flex-row text-3xl text-center justify-center">
        <Navbar></Navbar>
      </div>
      <h1>Proyectos</h1>
      <Button>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Button>
      <Button>
        <Link href="proyectos/detalle">
          <a>Detalle - Proyecto</a>
        </Link>
      </Button>
    </div>
  );
};

export default Proyectos;
