const parseData = function (input) {
    let result = [];
    for(let data of input.data){
        let person = {};
        let index = 0;
        for(let column of input.column){
            person[column.name] = data[index];
            index += 1;
        }
        result.push(person);
    }
    return result;
}
export { parseData };
