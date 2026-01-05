/*Frontend (React)
     ↓
Multer (Node.js)
     ↓
Cloud Storage (AWS S3 / Cloudinary)
     ↓
MongoDB (store image URL)
*/
import multer from 'multer'

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
const upload=multer({storage});
export default upload

