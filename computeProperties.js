const key1 = "objkey1";
const key2 = "objkey2";
const value1 = "myValue1";
const value2 = "myValue2";
// I want this type of output
/*const obj = {
    objkay1 : myvalue1,
    objkey2 : myvalue2,
}*/

// const obj = {
//     key1 : value1,//value is computed
//     key2 : value2,
// }
// but here value of key is not computed
// for correcting this output
const obj = {
    [key1] : value1,
    [key2] : value2,
}
console.log(obj);
