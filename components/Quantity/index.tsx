import styles from './styles.module.css';

type Props = {
  color: string;
  count: number;
  onUpdateCount: (newCount: number) => void;
  min?: number;
  max?: number;
}

export const Quantity = ({ color, count, onUpdateCount, min, max }: Props) => {

  const handleRemove = () => {
    onUpdateCount(count - 1);
  }
  const handleAdd = () => {
    onUpdateCount(count + 1);
  }


  return (
    <div className={styles.container}>
      <div
        className={styles.button}
        onClick={handleRemove}
      >-</div>
      <div className={styles.qt}>{count}</div>
      <div
        className={styles.button}
        onClick={handleAdd}
      >+</div>
    </div>
  );
}