import { GetGifs } from "../../helper/GetGifs";

describe('Evalua el metodo para traer items', () => {

    test('Debe traer 10 elementos ', async () => {
        const cat = 'goku';
        const result = await GetGifs(cat);
        expect(result.length).toBe(10);
    })
    
    
})
