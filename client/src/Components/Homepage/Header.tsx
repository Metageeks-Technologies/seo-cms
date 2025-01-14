"use client";
import React, { useState } from "react";
import style from "../../styles/Header.module.css";
import Popup from "@/Components/clickable/popup";
import Link from "next/link";
import Image from "next/image";

const Headers = () => {
  const [navbar, setNavbar] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  const handleMenu = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
    closeNavbar();
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.headericon}>
            <div className={style.headerfix}>
              <div className={style.menu}>
                <div className={style.headerimgmobile}>
                  <Link href="/">
                    <Image
                      src="/image/headerlogo.svg"
                      alt="badge"
                      width={100}
                      height={23}
                    />
                  </Link>
                </div>
                <div className={style.headerimg}>
                  <Link href="/">
                    <Image
                      src="/image/headerlogo.svg"
                      alt="badge"
                      width={127}
                      height={29}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <nav
              className={
                navbar
                  ? `${style.navbar} ${style.navbaropen}`
                  : `${style.navbar}`
              }
            >
              <ul className={style["nav-list"]}>
                <li className={style.crossbtn} onClick={closeNavbar}>
                  <Image
                    src="/image/Menu.svg"
                    alt="menu"
                    width={40}
                    height={40}
                  />
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={() => handleActiveTab("/")}
                    className={activeTab === "/" ? style.active : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#aboutus"
                    onClick={() => handleActiveTab("#about")}
                    className={activeTab === "#about" ? style.active : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Service"
                    onClick={() => handleActiveTab("#service")}
                    className={activeTab === "#service" ? style.active : ""}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Testimonial"
                    onClick={() => handleActiveTab("#testimonial")}
                    className={
                      activeTab === "#testimonial" ? style.active : ""
                    }
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Project"
                    onClick={() => handleActiveTab("#pricing")}
                    className={activeTab === "#pricing" ? style.active : ""}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    onClick={() => handleActiveTab("#blog")}
                    className={activeTab === "#blog" ? style.active : ""}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Footer"
                    onClick={() => handleActiveTab("#contact")}
                    className={activeTab === "#contact" ? style.active : ""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <aside
              className={
                navbar
                  ? `${style.navbackdrop} ${style.navbackdropopen}`
                  : `${style.navbackdrop}`
              }
              onClick={handleMenu}
            ></aside>
            <div className={style.btnleft}>
              <button className={style.joinbtn} onClick={openPopup}>
                Free Consultation
                <Image
                  src="image/Arrow.svg"
                  alt="call"
                  width={18}
                  height={18}
                />
              </button>

              <span className={style.headerspan} onClick={handleMenu}>
                <Image src="/image/Menu.svg" alt="menu" width={40} height={40} />
              </span>
            </div>
          </div>
        </div>
      </header>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Headers;
