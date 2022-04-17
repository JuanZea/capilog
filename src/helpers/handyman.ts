export const getNameInitials = (name: string): string => {
	const words = name.split(' ').map((word) => word.charAt(0));
	const initials = words.join('').toUpperCase();

	let final = 1;

	if (words.length >= 3) final = 2;

	return `${initials.charAt(0)}${initials.charAt(final)}`;
};
