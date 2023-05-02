const Brand = require("../models/Brand.js")


const getBrands = async (req, res) => {
    try {
      const brands = await Brand.find();
      return res.json(brands);
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

const addBrand = async (req, res) => {
    const { name, logo_url} = req.body;

    console.log("hola" + name, logo_url)
  try {
    const newBrand = new Brand({
      name,
      logo_url,
    });

    await newBrand.save();
    return res.status(200).json(newBrand);
  } catch (e) {
    console.log(res.status(404).json({ msg: `Error 404 ${e}` }));
  }
};

const deleteBrand = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBrand = await Brand.findByIdAndDelete(id);
      if (!deletedBrand) return res.json({ msg: "Brand not found" });
      if (deletedBrand) return res.status(200).json({ msg: "Brand deleted" });
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

  const updateBrand = async (req, res) => {
    const { id } = req.params;
  
    try {
      const updateBrand = await Brand.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateBrand) return res.json({ msg: "Brand not found" });
      return res.json({ msg: "Brand Update" });
    } catch (e) {
      return res.json({ msg: `Error 404 - ${e}` });
    }
  };

module.exports = {getBrands, addBrand, deleteBrand, updateBrand}