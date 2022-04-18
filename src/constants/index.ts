export enum roles {
	ADMIN = 'ADMIN',
	COORDINATOR = 'COORDINADOR DE TRANSPORTE',
	SUPERVISOR = 'SUPERVISOR DE FINCA',
	DOORMAN = 'PORTERO',
}

export enum navSections {
	ADMIN = 'Administración',
	MANAGEMENT = 'Gestión general',
	SHIPPING_MANAGEMENT = 'Gestión de envíos',
	SHIPPING = 'Envíos',
	TRACING = 'Seguimiento',
}

export enum orderStatus {
	REQUESTED = 'PEDIDA',
	FINISHED = 'TERMINADA',
	CANCELED = 'CANCELADA',
	ASSIGNED = 'ASIGNADA',
}
