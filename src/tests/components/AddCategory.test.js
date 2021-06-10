import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente <AddCategory />", () => {
  const setCategoriesFun = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategoriesFun} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategoriesFun} />);
  });

  test("El componente debe mostrarse segun su snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar el valor de la caja de texto", () => {
    const input = wrapper.find("input");
    const valor = "Pokemon";
    input.simulate("change", { target: { value: valor } });
    expect(wrapper.find("p").text().trim()).toBe(valor);
  });

  test("debe de llamar a setCategories y limpiar la caja de texto", () => {
    const valor = "Hola Mundo";
    //1. Simular el inputChange
    wrapper.find("input").simulate("change", { target: { value: valor } });

    //2. Simular el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    //3. SetCategories se debe haber llamado
    expect(setCategoriesFun).toHaveBeenCalled();
    expect(setCategoriesFun).toHaveBeenCalledTimes(1);

    //4. El valor del input debe ser ''
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
