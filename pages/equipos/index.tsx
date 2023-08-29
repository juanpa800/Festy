import { NextPage } from "next";
import Link from "next/link";
import Button from "@components/Button";

const Equipos: NextPage = () => {
  return (
    <div>
      <h1>Equipos</h1>
      <Button>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Button>
    </div>
  );
};

export default Equipos;
