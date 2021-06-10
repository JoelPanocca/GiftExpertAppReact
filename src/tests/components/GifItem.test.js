import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import { GifItem } from '../../components/GifItem';

describe('Test para GifGrid ITEMS', () => {
    const img = {titulo: 'Goku', url: 'https://goku.com/img.jpg'};
    const wrapper = shallow(<GifItem {...img} />);

    test('Debe evaluar correctamente contra su snapshot', () => {        
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe evaluar la imagen igual a los props enviados', () => {
        const imgn = wrapper.find('img');
        expect ( imgn.prop('src')) .toBe (img.url);
        expect ( imgn.prop('alt')) .toBe (img.titulo);
    })
    
    
})
