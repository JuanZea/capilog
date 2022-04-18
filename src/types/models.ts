export declare type User = {
	dni: string;
	name: string;
	email: string;
	phone: string;
	lastname?: string;
	role: { role: string };
	farm: { farm: Farm };
	createdAt: Date;
};

export declare type Role = {
	id: string;
	role: string;
};

export declare type Farm = {
	idFarm: number;
	farm: string;
	location: string;
	createdAt: Date;
	updatedAt: Date;
};

export declare type Statement = {
	idOrderStatement: number;
	description: string;
	createdAt: Date;
	updatedAt: Date;
};

export declare type Truck = {
	license: string;
	driverName: string;
	dniDriver: string;
	createdAt: Date;
	updatedAt: Date;
};

export declare type Order = {
	idOrder: number;
	startDate: string;
	description: string;
	arriveDate?: Date;
	exitDate?: Date;
	destinationArriveDate?: Date;
	finishDate?: Date;
	isBill: boolean;
	firstFarm: Farm;
	lastFarm: Farm;
	statement: Statement;
	requestUser: User;
	truck?: Truck;
};
