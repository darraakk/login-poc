import React from "react";
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.tableHeader}>میزبانی</p>
            <p className={styles.tableHeader}>شرکت</p>
            <p className={styles.tableHeader}>پیوندهای مفید</p>
            <p className={styles.tableHeader}>اطلاعات</p>
            <p className={styles.tableHeader}>دامنه‌ها</p>
            <p className={styles.tableHeader}>راه‌های ارتباطی</p>

            <a className={styles.tableData}>میزبانی مشترک</a>
            <a className={styles.tableData}>درباره ما</a>
            <a className={styles.tableData}>حساب کاربری شما</a>
            <a className={styles.tableData}>برنامه همکاری</a>
            <a className={styles.tableData}>بررسی دامنه</a>
            <a className={styles.tableData}>تماس با ما</a>

            <a className={styles.tableData}>میزبانی ابری</a>
            <a className={styles.tableData}>شرایط</a>
            <a className={styles.tableData}>مستندات</a>
            <a className={styles.tableData}>روش پرداخت</a>
            <a className={styles.tableData}>خرید دامنه</a>
            <a className={styles.tableData}>سوالات متداول</a>

            <a className={styles.tableData}>میزبانی VPS</a>
            <a className={styles.tableData}>حریم خصوصی</a>
            <a className={styles.tableData}>تایید ICANN</a>
            <a className={styles.tableData}>مقایسه</a>
            <a className={styles.tableData}>تبدیل دامنه</a>
            <a className={styles.tableData}>آموزش ها</a>
            
            <a className={styles.tableData}>میزبانی اختصاصی</a>
            <p className={styles.tableData}/>
            <a className={styles.tableData}>کوکی ها</a>
            <a className={styles.tableData}>نظرات</a>
            <a className={styles.tableData}>فروش دامنه</a>
            <a className={styles.tableData}>مرکز پشتیبانی</a>
        </div>
    );
};

export default Footer;
