// Your code here

function createEmployeeRecord(array){
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return testEmployee
}
function createEmployeeRecords(array) {
    let employeeRecords = array.map(createEmployeeRecord);
    return employeeRecords;
}
function createTimeInEvent(bpRecord, dateTimeString) {
     let objectTime = {
        type: "TimeIn",
        hour: timeInExtract(dateTimeString),
        date: dateInExtract(dateTimeString),
    };
    bpRecord.timeInEvents.push(objectTime);
    console.log(bpRecord);
    return bpRecord;
}
function dateInExtract(dateTimeString) {
    return dateTimeString.split(" ")[0];
}
function timeInExtract(dateTimeString) {
    return parseInt(dateTimeString.split(" ")[1]);
}
function createTimeOutEvent(bpRecord, dateTimeString) {
    let objectTime = {
       type: "TimeOut",
       hour: timeOutExtract(dateTimeString),
       date: dateOutExtract(dateTimeString),
   };
   bpRecord.timeOutEvents.push(objectTime);
   console.log(bpRecord);
   return bpRecord;
}
function dateOutExtract(dateTimeString) {
   return dateTimeString.split(" ")[0];
}
function timeOutExtract(dateTimeString) {
   return parseInt(dateTimeString.split(" ")[1]);
}
function hoursWorkedOnDate(bpRecord, dateString) {
    let timeIn, timeOut;

    bpRecord.timeInEvents.find(object => {
        if(object.date === dateString) {
            timeIn = object.hour/100;
        }
    })
    bpRecord.timeOutEvents.find(object => {
        if(object.date === dateString) {
            timeOut = object.hour/100;
        }
    })
    console.log(Math.abs(timeIn - timeOut))
    return Math.abs(timeIn - timeOut)
}
function wagesEarnedOnDate(bpRecord, dateString) {
    return bpRecord.payPerHour * hoursWorkedOnDate(bpRecord, dateString)
}

function allWagesFor(bpRecord) {
    const reducer = (accumulator, object) => {
        let total = accumulator + wagesEarnedOnDate(bpRecord, object.date)
        return total
    }
    return bpRecord.timeInEvents.reduce(reducer, 0)
}
function calculatePayroll(employees) {
    const reducer = (accumulator, emp) => {
        let grandTotal = accumulator + allWagesFor(emp)
        return grandTotal
    } 
    return employees.reduce(reducer, 0)
}
// createTimeInEvent({firstName: "Nastya",
//     familyName: "Tsoy",
//     title: "Security",
//     payPerHour: 3,
//     timeInEvents: [{
//         type: "TypeIn",
//         hour: 1000,
//         date: "2019-01-02"
//     }],
//     timeOutEvents: [{
//         type: "TypeOut",
//         hour: 2100,
//         date: "2019-01-02"
//     }
//     ],}, "1982-02-11 1800")

    hoursWorkedOnDate({firstName: "Nastya",
    familyName: "Tsoy",
    title: "Security",
    payPerHour: 3,
    timeInEvents: [{
        type: "TypeIn",
        hour: 500,
        date: "1982-02-11"
    }],
    timeOutEvents: [{
        type: "TypeOut",
        hour: 2100,
        date: "1982-02-11"
    }

    ],}, "1982-02-11")
//createEmployeeRecords(array);