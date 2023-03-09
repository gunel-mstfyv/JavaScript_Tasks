const students = [
    {
      id: 1,
      name: "Hüseynəli",
      surname: "Qədirov",
      group_id: 1,
    },
    {
      id: 2,
      name: "Faiq",
      surname: "Nəsrullayev",
      group_id: 2,
    },
    {
      id: 3,
      name: "Davud",
      surname: "Əhmədov",
      group_id: 1,
    },
    {
      id: 4,
      name: "Miriş",
      surname: "Bəşirli",
      group_id: 1,
    },
    {
      id: 5,
      name: "Rafət",
      surname: "Müzəffərli",
      group_id: 2,
    },
    {
      id: 6,
      name: "Sənan",
      surname: "Hüseynli",
      group_id: 1,
    },
  ];
  const groups = [
    {
      id: 1,
      name: "29 İyul Front End",
      instructor_id: 1,
    },
    {
      id: 2,
      name: "30 Oktyabr Back End",
      instructor_id: 2,
    },
  ];
  const instructors = [
    {
      id: 1,
      name: "Nicat",
      surname: "Məmmədli",
    },
    {
      id: 2,
      name: "Rəvan",
      surname: "Xankişiyev",
    },
  ];
  const marks = [
    {
      id: 1,
      mark: 75,
      student_id: 1,
    },
    {
      id: 2,
      mark: "q",
      student_id: 1,
    },
    {
      id: 3,
      mark: 45,
      student_id: 1,
    },
    {
      id: 4,
      mark: 100,
      student_id: 2,
    },
    {
      id: 14,
      mark: 10,
      student_id: 2,
    },
    {
      id: 5,
      mark: 80,
      student_id: 3,
    },
    {
      id: 6,
      mark: 90,
      student_id: 3,
    },
    {
      id: 7,
      mark: 50,
      student_id: 4,
    },
    {
      id: 8,
      mark: 50,
      student_id: 4,
    },
    {
      id: 9,
      mark: 96,
      student_id: 6,
    },
    {
      id: 10,
      mark: 91,
      student_id: 6,
    },
    {
      id: 11,
      mark: 90,
      student_id: 6,
    },
  ];
    

//1.Faiq Nəsrullayev -> xxxx group

students.map((a)=>{
 let group = groups.find((b)=>a.group_id===b.id);
        console.log(`${a.name} ${a.surname} ${group.name}`);
});  


//2.xxxxx group ->Orxan Karimli,

groups.map((a)=>{
    let student=students
    .filter((b)=>a.id===b.group_id)
     .map((c)=>`${c.name} ${c.surname}`);
     console.log(`${a.name} - ${student}`);
});



//3.Faiq Nəsrullayev -> 45,80,75

students.map((student)=>{
    let mark = marks.filter((mark)=>mark.student_id===student.id)
    .map((mark)=>mark.mark);
    console.log(`${student.name} ${student.surname} -> ${mark}`);
});

//4.xxxxx group ->Nijat Mammadli

groups.map((group)=>{
    let instructor = instructors.find((instructor)=>group.instructor_id===instructor.id);
    console.log(`${group.name} -> ${instructor.surname}  ${instructor.name}`);
});

//5.Faiq Nəsrullayev -> Nijat Mammadli

students.map((student)=>{
    let group = groups.find((group)=>student.group_id===group.id);
    let instructor = instructors.find((instructor)=>group.instructor_id===instructor.id);
        
console.log(`${student.name} ${student.surname} -> ${instructor.name} ${instructor.surname}`); 
    });
   
