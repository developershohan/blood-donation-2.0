import cloudinay from "cloudinary";

// configuration
cloudinay.v2.config({
  cloud_name: "dl1ru15me",
  api_key: "618321172373116",
  api_secret: "Laco4G0dv7C8ijypWE0Qv5JoBxs",
});

// file upload to cloude
export const fileUploadToCloud = async (path) => {
  const data = await cloudinay.v2.uploader.upload(path);
  return data;
};

// file delete form cloud
export const fileDeleteFromCloud = async (publicId) => {
  await cloudinay.v2.uploader.destroy(publicId);
};
