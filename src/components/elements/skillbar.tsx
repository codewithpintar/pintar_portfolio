import styles from '../../styles/components/skillbar.module.css';

const SkillBar = ({ label, percentage }: any) => {
    return (
        <div>
            <div className={styles.labelRow}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

export default SkillBar;
