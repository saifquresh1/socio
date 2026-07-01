const ImageKit = require('@imagekit/nodejs/index.js')
const client = new ImageKit({
  privateKey: process.env.privateKey, // This is the default and can be omitted
});

async function uploadFile(buffer){
    const response = await client.files.upload({
    file: buffer.toString("base64"),
    fileName: 'image.jpg',
    });
    return response
}


module.exports = uploadFile