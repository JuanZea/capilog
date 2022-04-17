export const formatLoginData = ({
	document,
	password,
}: {
	document: string;
	password: string;
}): { dni: string; password: string } => ({
	dni: document,
	password: password,
});
