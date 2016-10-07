function addWidgetsfrmStart() {
    frmStart.setDefaultUnit(kony.flex.DP);
    var flexStart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexStart",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexStart.setDefaultUnit(kony.flex.DP);
    var btnOne = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnOne",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_dbf47c1a885d4f24b9303cfc500a52b5,
        "skin": "slButtonGlossBlue",
        "text": "Start on Screen 1",
        "top": "28dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnTwo = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnTwo",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_94356b2d8deb464396eaa4517c671b51,
        "skin": "slButtonGlossBlue",
        "text": "Start on Screen 2",
        "top": "93dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var btnExit = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnExit",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_3a8b845b62bd4ba3b5835b5b8cb91dc4,
        "skin": "slButtonGlossBlue",
        "text": "Exit",
        "top": "158dp",
        "width": "260dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flexStart.add(
    btnOne, btnTwo, btnExit);
    frmStart.add(
    flexStart);
};

function frmStartGlobals() {
    frmStart = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmStart,
        "enabledForIdleTimeout": false,
        "id": "frmStart",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "inTransitionConfig": {
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionFlip"
        },
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
};