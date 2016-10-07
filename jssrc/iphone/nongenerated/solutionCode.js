function setDynamicForm() {
    var userPref = kony.store.getItem("userPreference");
    if (userPref == "screenOne") {
        return frmScreen1;
    } else if (userPref == "screenTwo") {
        return frmScreen2;
    } else {
        return frmStart;
    }
}