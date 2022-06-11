import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el <AddCategory/>", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   test("Debe de cambiar la caja de texto", () => {
  //     const input = wrapper.find("input");
  //     const value = "Hola Mundo";

  //     input.simulate("change", { target: { value } });

  //     expect(wrapper.find("p").text().trim()).toBe(value);
  //   });
});
