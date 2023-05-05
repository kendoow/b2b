import { FC, useCallback, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import { DropdownProps } from './Dropdown.typings';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Dropdown: FC<DropdownProps> = ({state, setState, options, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = useCallback((option: string) => {
    setState(option);
    onChange(option);
    setIsOpen(false);
  }, [setState, onChange]);

  const outsideClick = useCallback(() => setIsOpen(false), []);

  useOutsideClick(ref, outsideClick);

  return (
    <div ref={ref} className={styles.dropdown}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        {state !== null ? state : placeholder || 'Выбери нужный вариант'}
        <span className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`} />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div className={styles.option} key={option.key} onClick={() => handleOptionClick(option.label)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
