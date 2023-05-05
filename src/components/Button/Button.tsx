import cn from 'classnames';

import type { ButtonProps } from './Button.typings';

import styles from './Button.module.scss';

export const Button = ({
	children,
	variant = 'primary',
	disabled = false,
	className,
	onClick,
	...props
}: ButtonProps) => {
	const buttonClassName = cn(
		styles.button,
		styles[variant],
		className,
	);

	return (
		<button onClick={onClick} {...props} disabled={disabled} className={buttonClassName}  >
			
			{children}
		</button>
	);
};