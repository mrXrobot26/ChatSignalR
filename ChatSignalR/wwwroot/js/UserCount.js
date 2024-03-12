//create connetction
var connectioToUserHub = new signalR.HubConnectionBuilder().withUri("/hubs/UserCount");
//connect to method that hub invoke
connectioToUserHub.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();

})
//invoke hub methods aka send notification to hub
function newWindowLoadedOnClient() {
    connectioToUserHub.send("NewWindowLoaded");
}

//start connection
function fulfilled() {
    //do something on start
    console.log("Connection to User Hub Successful");
}
function rejected() {
    //rejected logs
}

connectioToUserHub.start().then(fulfilled, rejected);