'use client'

import { useState } from "react";
import { MenuIcon, CloseIcon, planto_logo, emailIcon, githubIcon, leetCodeIcon, linkedInIcon, twitterIcon, cart_bag, menuIcon, ProfileIcon } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import { navLinks } from "@/public/constants"
import { styles } from "@/app/styles";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={styles.paddingX}>
                <nav className={`w-full flex items-center py-4`}>
                    <div className="w-full flex justify-between items-center mx-auto">
                        <Link
                            href="/"
                            className="flex items-end justify-center gap-2"
                            onClick={() => {
                                setActive("");
                                setToggle(false);
                                window.scroll(0, 0);
                            }}
                        >
                            <Image
                                src={planto_logo}
                                alt="planto_logo"
                                className="w-9 h-9 object-contain"
                            />
                            <span className="text-2xl text-content tracking-wider font-bold cursor-pointer">
                                Planto.
                            </span>
                        </Link>
                        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
                            {navLinks.map((LinkItem) => (
                                <li
                                    key={LinkItem.id}
                                    className={`${active === LinkItem.id ? "text-content" : "text-accent-1"
                                        }  hover:text-content text-sm font-medium cursor-pointer`}
                                    onClick={() => setActive(LinkItem.id)}
                                >
                                    <Link href={LinkItem.id}>{LinkItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
                            <li className={`cursor-pointer`}>
                                <Popover>
                                    <PopoverTrigger>
                                        <Image src={cart_bag} alt="cart_bag" className="h-5 w-5 object-contain" />
                                    </PopoverTrigger>
                                    <PopoverContent className="bg-background-2 text-white border border-background-2/50 mr-4">
                                        <div className="flex flex-col justify-center items-center">
                                            <h4 className="flex py-2 gap-2">Plants in Cart</h4>
                                            <Button className="bg-background-1 w-full">Checkout</Button>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </li>
                            <li className={`cursor-pointer`}>
                                <Popover>
                                    <PopoverTrigger>
                                        <Image src={menuIcon} alt="menuIcon" className="h-5 w-5 object-contain" />
                                    </PopoverTrigger>
                                    <PopoverContent className="bg-background-2 text-white border border-background-2/50 mr-4">
                                        <div className="flex flex-col justify-center items-center">
                                            <h4 className="flex py-2 gap-2">Profile <ProfileIcon /></h4>
                                            <Button className="bg-background-1 w-full">Edit Profile</Button>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </li>
                        </ul>
                        <div className="sm:hidden flex flex-1 justify-end items-center text-content">
                            <button onClick={() => setToggle(!toggle)}>
                                {toggle ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* -------------------------------------- MOBILE NAVIGATION -------------------------------------------------------- */}
                <div
                    className={`${!toggle ? "hidden" : "block"
                        } h-full bg-background-2 top-0 right-0 mt-0 w-10/12 py-7 fixed z-50`}
                >
                    <ul className="list-none flex justify-between mx-4">
                        <li className="w-6 h-6 flex justify-center items-center">
                            <button onClick={() => setToggle(!toggle)} className="text-content">
                                {toggle ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </li>
                        <li className={`cursor-pointer`}>
                            <ProfileIcon />
                        </li>
                    </ul>

                    <div className="py-12">
                        <Link
                            href="/"
                            className="flex items-end justify-center gap-2"
                            onClick={() => {
                                setActive("");
                                setToggle(false);
                                window.scroll(0, 0);
                            }}
                        >
                            <Image
                                src={planto_logo}
                                alt="logo"
                                className="w-20 h-20 object-contain"
                            />
                            <span className="text-4xl tracking-wider text-content font-bold cursor-pointer">
                                Planto
                            </span>
                        </Link>
                    </div>
                    <ul className="list-none flex flex-col gap-4">
                        {navLinks.map((LinkItem) => (
                            <li
                                key={LinkItem.id}
                            >
                                <Link
                                    className={`${active === LinkItem.id ? "text-content" : "text-accent-1"
                                        }  font-poppins font-medium cursor-pointer text-[18px] border-b border-b-secondary w-full flex justify-center items-center py-1`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(LinkItem.id);
                                    }}
                                    href={LinkItem.id}>{LinkItem.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute bottom-[20px] flex flex-col gap-4 justify-center items-center w-full text-content">
                        <p>Flow me on social media:</p>
                        <div className="flex justify-center items-center gap-4 w-full">
                            <a
                                href="https://x.com/scriptwithjatin"
                                target="_blank"
                                className={`rounded-full  h-10 w-10 flex justify-center items-center bg-gray-500`}
                            >
                                <Image src={twitterIcon} alt="icon" height={20} width={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/scriptwithjatin"
                                target="_blank"
                                className={`rounded-full  h-10 w-10 flex justify-center items-center bg-gray-500`}
                            >
                                <Image src={linkedInIcon} alt="icon" height={20} width={20} />
                            </a>
                            <a
                                href="https://github.com/jatin-yadav"
                                target="_blank"
                                className={`rounded-full  h-10 w-10 flex justify-center items-center bg-gray-500`}
                            >
                                <Image src={githubIcon} alt="icon" height={20} width={20} />
                            </a>
                            <a
                                href="https://leetcode.com/u/jatin-yadav/"
                                target="_blank"
                                className={`rounded-full  h-10 w-10 flex justify-center items-center bg-gray-500`}
                            >
                                <Image src={leetCodeIcon} alt="icon" height={20} width={20} />
                            </a>
                            <a
                                href="#contact"
                                className={`rounded-full  h-10 w-10 flex justify-center items-center bg-gray-500`}
                            >
                                <Image src={emailIcon} alt="icon" height={20} width={20} />
                            </a>
                        </div>
                        <p>
                            Copyright @ 2024 <a href="#">Jatin Yadav</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
