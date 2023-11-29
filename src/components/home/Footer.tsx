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

            <p className={styles.tableData}>میزبانی مشترک</p>
            <p className={styles.tableData}>درباره ما</p>
            <p className={styles.tableData}>حساب کاربری شما</p>
            <p className={styles.tableData}>برنامه همکاری</p>
            <p className={styles.tableData}>بررسی دامنه</p>
            <p className={styles.tableData}>تماس با ما</p>

            <p className={styles.tableData}>میزبانی ابری</p>
            <p className={styles.tableData}>شرایط</p>
            <p className={styles.tableData}>مستندات</p>
            <p className={styles.tableData}>روش پرداخت</p>
            <p className={styles.tableData}>خرید دامنه</p>
            <p className={styles.tableData}>سوالات متداول</p>

            <p className={styles.tableData}>میزبانی VPS</p>
            <p className={styles.tableData}>حریم خصوصی</p>
            <p className={styles.tableData}>تایید ICANN</p>
            <p className={styles.tableData}>مقایسه</p>
            <p className={styles.tableData}>تبدیل دامنه</p>
            <p className={styles.tableData}>آموزش ها</p>
            
            <p className={styles.tableData}>میزبانی اختصاصی</p>
            <p className={styles.tableData}/>
            <p className={styles.tableData}>کوکی ها</p>
            <p className={styles.tableData}>نظرات</p>
            <p className={styles.tableData}>فروش دامنه</p>
            <p className={styles.tableData}>مرکز پشتیبانی</p>
        </div>
    );
};

export default Footer;
