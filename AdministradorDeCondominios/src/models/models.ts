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