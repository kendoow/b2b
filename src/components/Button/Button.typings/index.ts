import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
	className?: string;
	children: ReactNode;
	variant?: "primary" | "secondary";
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
