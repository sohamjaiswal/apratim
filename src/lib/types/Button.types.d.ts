export interface IButton {
	variant: "primary" | "secondary";
	label: string;
	onClick: (...args: any[]) => void;
	size: "large" | "medium" | "small";
}
