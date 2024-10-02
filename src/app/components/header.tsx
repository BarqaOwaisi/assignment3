import Link from "next/link";
import Image from "next/image";
import logo from "../logo2.png";

export default function Header() {
    return (
        <div className="header">
            <div className="img">
                <Image src={logo} alt="Serviso Logo" className="img" />
            </div>
            <div className="name">
                <h1><b><i>Serviso</i></b></h1>
            </div>
            <ul className="headerButtons">
                <Link href="/" passHref>
                    <li>Home</li>
                </Link>
                <Link href="/services" passHref>
                    <li>Services</li>
                </Link>
                <Link href="/about" passHref>
                    <li>About Us</li>
                </Link>
                <Link href="/contact" passHref>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    );
}




