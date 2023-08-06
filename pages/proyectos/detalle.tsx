import { NextPage } from "next";
import Link from "next/link";
import Button from "@components/Button";

const DetalleProyecto: NextPage = () => {
  return (
    <div>
      <h1>Estos son los detalles del proyecto</h1>
      <Button>
        <Link href="../proyectos">
          <a>Proyectos</a>
        </Link>
      </Button>
    </div>
  );
};

export default DetalleProyecto;
