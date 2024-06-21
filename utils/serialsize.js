import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";
import PostList from "../controllers/PostController.js";
import UsersList from "../controllers/UserController.js";
import PigeonApp from "../controllers/app.js";


const classesRegistry = {
    User,
    Post,
    UsersList,
    PostList,
    PigeonApp
};

export function serializeClassInstance(instance) {
    if (instance.toPlainObject){
        return JSON.stringify(instance.toPlainObject());
    } else return JSON.stringify(instance);
}

export function deserializeClassInstance(json) {
    const plainObject = JSON.parse(json);
    const classConstructor = classesRegistry[plainObject.__class__];
    
    if (classConstructor) {
        return classConstructor.fromPlainObject(plainObject);
    } else return plainObject;
}

//--------------------------------------

export function savePigeonAppToLocalStorage(pigeonApp) {
    const serializedApp = serializeClassInstance(pigeonApp);
    localStorage.setItem('pigeonApp', serializedApp);
}

export function loadPigeonAppFromLocalStorage() {
    const serializedApp = localStorage.getItem('pigeonApp');
    
    if (serializedApp) {
        return deserializeClassInstance(serializedApp);
    } else return new PigeonApp();
}