import React from "react";
import styles from "./Home.module.scss";

import Navbar from "../components/home/Navbar";
import Header from "../components/home/Header";
import Body from "../components/home/Body";
import Footer from "../components/home/Footer";

const Home = () => {
	return (
		<div className={styles.home}>
			<Navbar />
			<Header />
            <Body />
            <Footer />
		</div>
	);
};

export default Home;
