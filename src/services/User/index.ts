import { UserTo } from '../../to/UserTo';
import UserService from './service';
import User from "../../models/User.model";
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await UserService.findAll();
}


/** 
* @export
* @returns {Promise <void >}
*/
export async function create(user : UserTo): Promise <void > {
    let usuario = await UserService.create(user);   
    return usuario
}


/** 
* @export
* @returns {Promise <boolean>}
*/
export async function validate(user : UserTo): Promise <boolean> {
    return await UserService.validate(user);
}

/** @export
* @returns {Promise <void>}
*/
export async function update(id:number, user : UserTo): Promise<[number, User[]]> {
    return await UserService.update(id,user);
}

/** @export
* @returns {Promise <void>}
*/
export async function deleteUser(id:number): Promise<number> {
    return await UserService.deleteUser(id);
}

/**
 * @export
 * @returns {Promise < number >}
 */
export async function validateDelete(user: any): Promise<void> {
    await UserService.validateDelete(user);
}