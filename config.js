import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const configs = {};
configs.port = 3000;
configs.homePage = __dirname + "/public/index.html";
configs.uploadDirectory = __dirname + "/uploads/";

export { configs };