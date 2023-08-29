// interface ButtonProps {
//     children: JSX.Element;
//   }

import Button from "@components/Button";
import Link from "next/link";


const Navbar = () => {
    return (
        <div
            className="bg-verde w-full h-auto grid grid-cols-3 gap-4 pb-8"
        >
            <div>
                <Button>
                    <Link href="proyectos">
                        <p>Proyectos</p>
                    </Link>
                </Button>
            </div>
            <div>
                <Button>
                    <Link href="equipos">
                        <p>Equipos</p>
                    </Link>
                </Button>
            </div>
            <div>
                <Button>
                    <Link href="/">
                        <p>Login</p>
                    </Link>
                </Button>
            </div>
            <div className="col-span-3">
                <h1 className="text-negro font-bold">App de fiestas</h1>
            </div>
        </div >

    );
};
export default Navbar;
