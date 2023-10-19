import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArray from "./AddingAndRemovingDataToFromArray";
import ForLoops from "./ForLoops";
import MapFunctions from "./MapFunctions";
import JsonStringify from "./JsonStringify";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";


function WorkingWithArrays() {

    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped; let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];
    return (
    <>
        <h3> Working With Arrays</h3>
        numberArray1 = {numberArray1} <br />
        stringArray1 = {stringArray1} <br />
        variableArray1 = {variableArray1} <br />
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArray/>
        <ForLoops/>
        <MapFunctions/>
        <JsonStringify/>
        <FindIndex/>
        <FilterFunction/>
    </>
    )
}
export default WorkingWithArrays