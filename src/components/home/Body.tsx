import React from "react";
import Icon from "../common/Icon/Icon";
import styles from "./Body.module.scss";

const Body = () => {
    return (
        <div className={styles.body}>
            <header className={styles.headerOfBody}>
                <div>
                    <div className={styles.badge}/>
                    <h6>
                        گارانتی 3 روزه بازگشت وجه
                    </h6>
                    <p>
                        فقط برای اکانت‌های اشتراکی
                    </p>
                </div>
                <div>
                    <div className={styles.taskList}/>
                    <h6>
                        آموزش استفاده از اکانت
                    </h6>
                    <p>
                        دسترسی به بهترین نحوه استفاده از اکانت
                    </p>
                </div>
                <div>
                    <div className={styles.service}/>
                    <h6>
                        گارانتی 30 روزه
                    </h6>
                    <p>
                        تعویض اکانت در صورت بوجود آمدن هر مشکلی
                    </p>
                </div>
                <div>
                    <div className={styles.speedometer}/>
                    <h6>
                        فعال‌سازی سریع
                    </h6>
                    <p>
                        فعال‌سازی تقریبا آنی پس از تأیید پرداخت
                    </p>
                </div>
            </header>

            <div className={styles.contentsOfBody}>
                <div style={{ gridColumn: "1/-1", alignItems: "center", gap: "2rem" }}>
                    <h2>
                        سوالات متداول
                    </h2>
                    <div className={styles.separator}>
                        <div/>
                        <span/>
                    </div>
                </div>
                
                <div>
                    <h5>
                        آیا تخفیف‌هایی برای موجود است؟
                    </h5>
                    <p>
                        بله، برای کاربرانی که برای اولین بار از سرویس ما استفاده می‌کنند، تخفیف ویژه‌ای در نظر گرفته شده است...
                    </p>
                </div>
                <div>
                    <h5>
                        چقدر طول می‌کشد تا اکانت فعال شود؟
                    </h5>
                    <p>
                        پس از تکمیل فرآیند خرید و پرداخت، اکانت شما در مدت حداکثر یک ساعت فعال و آماده استفاده خواهد بود...
                    </p>
                </div>
                <div>
                    <h5>
                        آیا امکان آزمایشی قبل از خرید وجود دارد؟
                    </h5>
                    <p>
                        ما امکان خرید آزمایشی را نداریم؛ ولیکن...
                    </p>
                </div>
                <div>
                    <h5>
                        در صورت مشکل با اکانت، چگونه می‌توان با پشتیبانی تماس گرفت؟
                    </h5>
                    <p>
                        در صورت بروز هر گونه مشکل یا نیاز به راهنمایی، می‌توانید با مراجعه به اکانت تلگرامی @sharifgptadmin و ارسال پیام...
                    </p>
                </div>
                <div style={{ transform: "translateY(-2.5rem)" }}>
                    <h5>
                        اکانت تا چه تعداد کاربر را پشتیبانی می‌کند؟
                    </h5>
                    <p>
                        اکانت‌های اختصاصی ما قادر به پشتیبانی از تا 5 کاربر همزمان هستند...
                    </p>
                </div>
                <div>
                    <h5>
                        آیا آموزش‌ها و منابعی برای استفاده بهینه از اکانت وجود دارد؟
                    </h5>
                    <p>
                        بله، ما مجموعه‌ای از آموزش‌ها و راهنماها را برای استفاده بهتر و موثرتر از اکانت‌ها در کانال تلگرامی @sharifGPT قرار داده‌ایم...
                    </p>
                </div>
            </div>

            <footer className={styles.footerOfBody}>
                <div className={styles.joinUs}>
                    <h3>
                        مشترک خبرنامه ما شوید
                    </h3>
                    <p>
                        برای دریافت آخرین اخبار و کوپن‌های تخفیف با ما در تماس باشید
                    </p>
                    <Icon
                        name="letter-open"
                        color="white"
                        height="100%"
                        aspectRatio="1"
                        className={styles.joinUsIcon}
                    />
                </div>
                <div className={styles.submitEmail}>
                    <button>
                        اکنون مشترک شوید!
                    </button>
                    <input placeholder="آدرس ایمیل خود را وارد کنید..."/>
                </div>
            </footer>
        </div>
    );
};

export default Body;
