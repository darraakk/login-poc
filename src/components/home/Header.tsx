import React, { useState } from "react";
import Icon from "../common/Icon/Icon";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import styles from "./Header.module.scss";
import Modal from "../common/Modal/Modal";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<"chatgpt" | "midjourney" | "poe" | "perplexity">("chatgpt");
    const [sharedAccount, setSharedAccount] = useState<boolean>(false);
    const [personalPlan, setPersonalPlan] = useState<boolean>(false);

    return (
        <div className={styles.header}>
            <div className={styles.headerContents}>
                <h1>
                    SharifGPT
                </h1>
                <p className={styles.headerDescription}>
                    دسترسی به جدیدترین اکانت‌های هوش مصنوعی مانند ChatGPT، Perplexity، Poe, Midjourney همراه با خدمات پشتیبانی
                </p>
                <Input
                    classNames={{
                        inputContainer: styles.searchInputContainer,
                        input: styles.searchInput
                    }}
                    inputProps={{
                        placeholder: "نام اکانت مورد نظر را جستجو کنید..."
                    }}
                    customChildren={(
                        <Icon name="magnifire" color="#0635c9" />
                    )}
                />
                <div className={styles.headerButtonsBox}>
                    <Button
                        title={(
                            <div className={styles.btnTitle}>
                                <h5 style={{ fontSize: "1.25rem" }}>
                                    Midjourney
                                </h5>
                                <p style={{ fontSize: "1rem" }}>
                                    فروش اکانت
                                </p>
                            </div>
                        )}
                        icon="midjourney"
                        direction="column_reverse"
                        iconColor="black"
                        iconHover="black"
                        isIconCircle
                        iconWidth="8rem"
                        iconAspectRatio="1"
                        classNames={{
                            container: `${styles.headerButton} ${styles.midjourneyButton}`,
                        }}
                        onClick={() => {
                            setIsModalOpen(true);
                            setModalType("midjourney");
                        }}
                    />
                    <Button
                        title={(
                            <div className={styles.btnTitle}>
                                <h5 style={{ fontSize: "1.25rem" }}>
                                    Poe
                                </h5>
                                <p style={{ fontSize: "1rem" }}>
                                    فروش اکانت
                                </p>
                            </div>
                        )}
                        icon="poe"
                        direction="column_reverse"
                        iconColor="white"
                        iconHover="white"
                        isIconCircle
                        iconWidth="8rem"
                        iconAspectRatio="1"
                        classNames={{
                            container: `${styles.headerButton} ${styles.poeButton}`,
                        }}
                        onClick={() => {
                            setIsModalOpen(true);
                            setModalType("poe");
                        }}
                    />
                    <Button
                        title={(
                            <div className={styles.btnTitle}>
                                <h5 style={{ fontSize: "1.25rem" }}>
                                    Preplexity
                                </h5>
                                <p style={{ fontSize: "1rem" }}>
                                    فروش اکانت
                                </p>
                            </div>
                        )}
                        icon="perplexity"
                        direction="column_reverse"
                        iconColor="white"
                        iconHover="white"
                        isIconCircle
                        iconWidth="8rem"
                        iconAspectRatio="1"
                        classNames={{
                            container: `${styles.headerButton} ${styles.perplexityButton}`,
                        }}
                        onClick={() => {
                            setIsModalOpen(true);
                            setModalType("perplexity");
                        }}
                    />
                    <Button
                        title={(
                            <div className={styles.btnTitle}>
                                <h5 style={{ fontSize: "1.25rem" }}>
                                    ChatGPT
                                </h5>
                                <p style={{ fontSize: "1rem" }}>
                                    فروش اکانت
                                </p>
                            </div>
                        )}
                        icon="chatgpt"
                        direction="column_reverse"
                        iconColor="white"
                        iconHover="white"
                        isIconCircle
                        iconWidth="8rem"
                        iconAspectRatio="1"
                        classNames={{
                            container: `${styles.headerButton} ${styles.chatgptButton}`,
                        }}
                        onClick={() => {
                            setIsModalOpen(true);
                            setModalType("chatgpt");
                        }}
                    />
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                classNames={{
                    bodyContainer: styles.modalContainer
                }}
            >
                <div style={{ overflowY: "auto" }}>
                    <div className={styles.modalHeader}>
                        <Button
                            fill="transparent"
                            color="gray"
                            icon="error"
                            iconWidth="2rem"
                            iconHeight="2rem"
                            classNames={{
                                container: styles.modalHeaderButton
                            }}
                            onClick={() => setIsModalOpen(false)}
                        />
                        <h5>
                            Purchase Plan
                        </h5>
                        <Icon
                            name={modalType}
                            width="3rem"
                            height="3rem"
                            color={modalType !== "midjourney" ? "white" : "black"}
                            classNames={styles.modalIcon}
                            style={{
                                backgroundColor: modalType === "chatgpt" ? "#74aa9c" : modalType === "midjourney" ? "white" : "black",
                                justifySelf: "end",
                                borderRadius: "10px"
                            }}
                        />
                        <div className={styles.stepsChart}>
                            <Icon
                                name="ok-mark"
                                color="#008000"
                                width="100%"
                                aspectRatio="1"
                            />
                            <Icon
                                name="right-arrow"
                                color="#008000"
                                width="4rem"
                                aspectRatio="1"
                                style={{ rotate: "180deg" }}
                            />
                            <Icon
                                name="circular-arrow"
                                color="#ffa500"
                                width="100%"
                                aspectRatio="1"
                                className={styles.circularArrow}
                            />
                            <Icon
                                name="right-arrow"
                                color="#808080"
                                width="4rem"
                                aspectRatio="1"
                                style={{ rotate: "180deg" }}
                            />
                            <Icon
                                name="pay-per-click"
                                color="#808080"
                                width="100%"
                                aspectRatio="1"
                            />
                            <p>
                                انتخاب اکانت
                            </p>
                            <p style={{ gridColumn: "3" }}>
                                تایید خرید
                            </p>
                            <p style={{ gridColumn: "5" }}>
                                پرداخت
                            </p>
                        </div>
                    </div>

                    <div className={styles.modalBody}>
                        <div className={styles.confirmation}>
                            <label>
                                شماره تلفن
                            </label>
                            <button>
                                تایید
                            </button>
                            <input placeholder="شماره تلفن خود را وارد کنید" />
                        </div>
                        <div className={styles.choosePlane}>
                            <div className={styles.sharedAccountHeader}>
                                <Button
                                    title="خرید اکانت اشتراکی"
                                    icon="down-arrow"
                                    color="success"
                                    fill="transparent"
                                    centered
                                    style={{
                                        container: {
                                            width: "100%",
                                            height: "2.75rem",
                                        },
                                        icon: {
                                            rotate: sharedAccount ? "180deg" : "",
                                        },
                                    }}
                                    onClick={() => {
                                        setPersonalPlan(false);
                                        setSharedAccount(!sharedAccount);
                                    }}
                                />
                            </div>
                            {sharedAccount && (
                                <div className={styles.sharedAccountBody}>
                                    <h5>
                                        مشخصات سفارش
                                    </h5>
                                    <p>
                                        {`وضعیت سفارش: در انتظار پرداخت`}
                                    </p>
                                    <p>
                                        {`شماره سفارش: 1234567`}
                                    </p>
                                    <div className={styles.discount}>
                                        <label>
                                            کد تخفیف
                                        </label>
                                        <button>
                                            اعمال کردن
                                        </button>
                                        <input placeholder="لطفا کد تخفیف خود را وارد کنید" />
                                    </div>
                                    <div style={{ borderBottom: "2px solid #e9ecef" }} />
                                    <p>
                                        {`هزینه قابل پرداخت از طریق درگاه: 11004000 ریال`}
                                    </p>
                                    <div className={styles.actionButtons}>
                                        <Button
                                            title="لغو سفارش"
                                            color="gray"
                                        />
                                        <Button
                                            title="پرداخت"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={styles.personalPlanHeader}>
                                <Button
                                    title="برنامه شخصی"
                                    icon="down-arrow"
                                    fill="transparent"
                                    centered
                                    style={{
                                        container: {
                                            width: "100%",
                                            height: "2.75rem"
                                        },
                                        icon: {
                                            rotate: personalPlan ? "180deg" : "",
                                        },
                                    }}
                                    onClick={() => {
                                        setSharedAccount(false);
                                        setPersonalPlan(!personalPlan);
                                    }}
                                />
                            </div>
                            {personalPlan && (
                                <div className={styles.personalPlanBody}>
                                    <h5>
                                        مشخصات سفارش
                                    </h5>
                                    <p>
                                        {`وضعیت سفارش: در انتظار پرداخت`}
                                    </p>
                                    <p>
                                        {`شماره سفارش: 1234567`}
                                    </p>
                                    <div className={styles.discount}>
                                        <label>
                                            کد تخفیف
                                        </label>
                                        <button>
                                            اعمال کردن
                                        </button>
                                        <input placeholder="لطفا کد تخفیف خود را وارد کنید" />
                                    </div>
                                    <div style={{ borderBottom: "2px solid #e9ecef" }} />
                                    <p>
                                        {`هزینه قابل پرداخت از طریق درگاه: 11004000 ریال`}
                                    </p>
                                    <div className={styles.actionButtons}>
                                        <Button
                                            title="لغو سفارش"
                                            color="gray"
                                        />
                                        <Button
                                            title="پرداخت"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Header;
