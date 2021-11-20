import Col_1 from './footer_col_1/col1';
import Col_2 from './footer_col_2/col2';
import Col_3 from './footer_col_3/col3';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Col_1 />
            <div></div>
            <Col_2 />
            <div></div>
            <Col_3 />
        </footer>
    )
}

export default Footer;