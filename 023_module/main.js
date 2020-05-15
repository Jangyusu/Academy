var main = "hello";
var fun = function () {
    return 1000;
}

// export default main; //값이 하나일 때
// export { main as default }; //값이 하나일 때
export { main, fun }; //값이 여러개일 떄