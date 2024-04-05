import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;



    /**
     * @returns {Promise<void>}
     * @memberof IUserFacade
     */
    create(user:UserTo): Promise<void>;

    
    /**
     * @returns {Promise<number>}
     * @memberof IUserFacade
     */
    update(id:number, user:UserTo): Promise<number>;


    /**
     * @returns {Promise<number>}
     * @memberof IUserFacade
     */
    deleteUser(user:any): Promise<number>;

}