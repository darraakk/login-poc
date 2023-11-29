import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Login from "../../pages/Login";
import Icon from "../common/Icon/Icon";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${styles.navbar}${isSticky ? " " + styles.sticky : ""}`}>
            <div className={styles.buttonContainer}>
                <Button
                    title="Login"
                    color="white"
                    fill="outline"
                    onClick={() => setIsModalOpen(true)}
                />
                <Button
                    title="History"
                    color="white"
                    fill="transparent"
                />
            </div>
            <Icon name="chatgpt" color="#ffffff" height="100%" aspectRatio="1" />

            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <Login />
            </Modal>
        </div>
    );
};

export default Navbar;
