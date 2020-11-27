import * as path from "path";
import {User} from "./user.entity";
import {Controller, Get, Res} from '@nestjs/common';

@Controller()
export class AppController {

	constructor() {
	}

	@Get('list')
	public async getData(@Res() res): Promise<User[]> {

		return res.sendFile(
			path.resolve(__dirname + '/assets/users.json')
		);

	}

}
