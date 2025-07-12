import styles from "./Container.module.css";

const Container = ({children}) => {
    return <div className={styles["container-box"]}>{children}</div>
};

export default Container;