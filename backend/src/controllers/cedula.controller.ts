import Cedula from "../models/Cedula";

const create = async (req, res) => {
  try {
    const { ncedula, nombre, apellido, lugar_nacimiento, sexo, estado_civil } =
      req.body;
    let newCedula = await Cedula.create(
      {
        ncedula,
        nombre,
        apellido,
        lugar_nacimiento,
        sexo,
        estado_civil,
      },
      {
        fields: [
          "ncedula",
          "nombre",
          "apellido",
          "lugar_nacimiento",
          "sexo",
          "estado_civil",
        ],
      }
    );

    return res.json({
      message: "Cedula created",
      data: newCedula
    })
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  try {
    const cedulas = await Cedula.findAll({
      attributes: ["id", "ncedula", "nombre", "apellido", "lugar_nacimiento", "sexo", "estado_civil"],
    })
    return res.json({
      message: "Cedulas retrieved",
      data: cedulas
    })
  } catch (error) {
    console.log(error);
  }
}

export { create, getAll };
