process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";

describe('UserFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        User.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });
        User.create({
            id: 2,
            name: 'test',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
            });
    });

    describe('FindAll', () => {
        it('should return one user', async () => {
            const User: any[] = await UserFacade.findAll();
            expect(2).equal(User.length);
        });
    });

    describe('Update', () => {
        it('should return one user', async () => {
            let user ={
                id:0,
                name: 'Ricardo',
                email: 'rjaforever@gmail.com'
            }
            let response = await UserFacade.update(1, user);
            expect(response).equal(1);
        });
    });


    describe('Update Parameter Error', () => {
        it('should return one user', async () => {
            let user ={
                id:0,
                name: 'Ricardo',
                email: 'rjaforever@gmail.com'
            }
            try {
                let response = await UserFacade.update(3, user);
                
            } catch (error:any) {
                expect(error.message).equal('User Not Found');
            }
        });
    });



    describe('Update Parameters Error', () => {
        it('should return one user', async () => {
            let user ={
                id:0,
                email: 'rjaforever@gmail.com'
            }
            try {
                let response = await UserFacade.update(2, user);
                
            } catch (error:any) {
                expect(error.message).equal('name is required');
            }
        });
    });
    describe('Delete Happy path', () => {
        it('Error 1', async () => {
            try {
                let response = await UserFacade.deleteUser({ id: "rytr" });
            } catch (error:any) {
                expect(error.message).equals('id is number')
            }
        });
    });
    describe('Delete Parameters Error', () => {
        it('should return one user', async () => {
            try {
                let response = await UserFacade.deleteUser({});
            } catch (error:any) {
                expect(error.message).equal('id is required');
            }
        });
    });
    describe('Delete Parameters Error 2numeric', () => {
        it('should return one user', async () => {
            try {
                let response = await UserFacade.deleteUser({id:14});
                
            } catch (error:any) {
                expect(error.message).equal('user not found');
            }
        });
    });
    describe('Delete Not found error', () => {
        it('should return one user', async () => {
            let response = await UserFacade.deleteUser({ id: 2 });
            expect(response).equals(1)
        });
    });
    
        


});