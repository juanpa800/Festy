import { NextPage } from "next";
import Link from "next/link";
import Button from "@components/Button";

const Proyectos: NextPage = () => {
  return (
    <div>
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
