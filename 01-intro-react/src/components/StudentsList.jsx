import StudentCard from "./StudentCard";

function StudentsList() {
    const students = [
        {id: 1, name:"Jessa", course: "IT"},
        {id: 2, name:"Dinavel", course: "CS"},
        {id: 3, name:"Denize", course: "Nursing"}
    ];

    return (
        <div>
            <h2>Students List: </h2>
            {students.map((student) => 
            <StudentCard key={student.id} name= {student.name} course={student.course}/>
            )}
        </div>
    );
}

export default StudentsList;