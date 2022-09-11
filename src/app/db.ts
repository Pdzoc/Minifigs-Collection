import Dexie, { Table } from 'dexie';
import { Minifig } from './minifig';

export class AppDB extends Dexie {
    minifigList;
    
    constructor() {
        super('ngdexieliveQuery');
        this.version(1).stores({
            minifigList: 'set_num, name, set_img_url'
        })
    }
}

export const db = new AppDB();