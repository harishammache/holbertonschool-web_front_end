function createClassRoom(numbersOfStudents){
    function studentSeat(seat) {
        return function () {
            return seat
        }
    }
    let students = []
    for (let index = 1; index <= numbersOfStudents; index++){
        students.push(studentSeat(index))
    }
    return students
}

let classRoom = createClassRoom(10);
