export interface Option {
	key: string;
	label: string;
}

export interface DropdownProps {
	state: string | null;
	setState: React.Dispatch<React.SetStateAction<string | null>>;
	options: Option[];
	onChange: (selectedOption: string) => void;
	placeholder?: string;
}
