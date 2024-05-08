const serviceModel = require("../model/service-model")

const service = async (req, res, next) => {
  try {
    const response = await serviceModel.find()
    if(!response){
      return res.status(404).json({ message: "could not find any service !" })
    }
    res.status(200).json({ message: "contact created successfully", response })
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = { service }