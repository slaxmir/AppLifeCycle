//actions.js file 
function actionBackHome(eventobject) {
    return AS_Button_25dc3574f1724dcaae0b8d1ab3fe615b(eventobject);
}

function AS_Button_25dc3574f1724dcaae0b8d1ab3fe615b(eventobject) {
    frmStart.show();
}
function actionExit(eventobject) {
    return AS_Button_3a8b845b62bd4ba3b5835b5b8cb91dc4(eventobject);
}

function AS_Button_3a8b845b62bd4ba3b5835b5b8cb91dc4(eventobject) {
    kony.application.exit();
}
function actionPostAppInit(eventobject) {
    return AS_AppEvents_7713e4ce810b4f3892352257c35b5c81(eventobject);
}

function AS_AppEvents_7713e4ce810b4f3892352257c35b5c81(eventobject) {
    return setDynamicForm.call(this);
}
function actionScreen1(eventobject) {
    return AS_Button_dbf47c1a885d4f24b9303cfc500a52b5(eventobject);
}

function AS_Button_dbf47c1a885d4f24b9303cfc500a52b5(eventobject) {
    kony.store.setItem("userPreference", "screenOne");
}
function actionScreen2(eventobject) {
    return AS_Button_94356b2d8deb464396eaa4517c671b51(eventobject);
}

function AS_Button_94356b2d8deb464396eaa4517c671b51(eventobject) {
    kony.store.setItem("userPreference", "screenTwo");
}
function AS_Button_86dd0fda07cb48289b7557ef9cea835b(eventobject) {
    frmStart.show();
}