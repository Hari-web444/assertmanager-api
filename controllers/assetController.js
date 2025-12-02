const Asset = require('../models/Asset');

exports.getAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll();

    console.log("Fetched assets:", JSON.stringify(assets, null, 2)); // <-- show actual data

    res.json(assets); // must return array []
  } catch (err) {
    console.error("Get Assets Error:", err);
    res.status(500).json({ error: err.message });
  }
};


exports.createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.json(asset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    if (!asset) return res.status(404).json({ message: "Asset not found" });

    await asset.update(req.body);
    res.json(asset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
