export type Product = {
	id: number;
	name: string;
	price: number;
	discount: number;
	stock: number;
	image: string;
};

export type CartProduct = {
	id: number;
	product: Product;
	quantity: number;
};

export type Employee = {
	cpf: string;
	name: string;
	password: string;
	permission: string;
	salary: number;
	workedHours: number;
};

export type Sale = {
	id: number;
	total: number;
	createdAt: string;
	orderAmount: number;
};
