import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas con el componente <GifgridItem/>", () => {
  const title = "Un título";
  const url = "http://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   test("Debe de tener un párrafo con el title", () => {
  //     const p = wrapper.find("p");
  //     expect(p.text().trim()).toBe(title);
  //   });

  //   test("Debe tener la imagen igual al url y alt de los props", () => {
  //     const img = wrapper.find("img");

  //     expect(img.props("src")).toBe(url);
  //   });

  test("Debe tener el animate__fadeIn", () => {
    const div = wrapper.find("div");

    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
