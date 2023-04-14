
  function getHash() {
const cryprto =require('crypto');
const fs = require('fs');

const fileBuffer =fs.readFileSync("hashedfile.js");
const hash = cryprto.createHash('sha256')
const finalHex= hash.update(fileBuffer).digest("hex");
   
    return finalHex
    console.log(finalHex);
   }
