const figlet = require('figlet');
const graphtea = require('graph-tea');


function printTeaGraph() {
	figlet('Tea Time!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
	});

}
printTeaGraph()
console.log(graphtea.printTea())

module.exports = {
    printTeaGraph
}