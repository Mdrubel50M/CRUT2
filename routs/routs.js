import { Router } from "express";
import *as Controller from '../controller/Controller.js'
const Apps = Router();


Apps.route('/home').post(Controller.Home);
Apps.route('/about').post(Controller.about);

export default Apps;