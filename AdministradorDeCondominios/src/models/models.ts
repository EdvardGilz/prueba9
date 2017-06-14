export class SuccessModel {
	success: number;
	id: number;
}

export class UserModel {
	success: number;
	data: Array<UserDataModel>;
}

export class UserDataModel {
	idCondominio: number;
	idUsuario: number;
	admin: number;
	dpto: string;
	nombreAdmin: string;
	passGral: string;
}

export class PagoModel {
	success: number;
	data: Array<PagoDataModel>;
}

export class PagoDataModel {
	idCondominio: number;
	idUser: number;
	cantidad: number;
	fecha: string;
	nota: string;
}