import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addproduct = async (req, res) => {
  try {
    const { name, price, category, type } = req.body;

    if (!req.files || !req.files.image1) {
      return res.json({ success: false, message: "Images are required" });
    }

    const images = [
      req.files.image1?.[0],
      req.files.image2?.[0],
      req.files.image3?.[0],
      req.files.image4?.[0],
    ].filter(Boolean); // remove undefined images

    const imageUrls = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      price: Number(price),
      image: imageUrls,
      type,
        category,

      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    return res.json({
      success: true,
      message: "Product Added Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const listproduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.json({ success: true, products });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};

const removeproduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};

const singleproduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    return res.json({ success: true, product });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};

export {
  addproduct,
  removeproduct,
  listproduct,
  singleproduct,
};
