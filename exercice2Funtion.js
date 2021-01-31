let total = prompt("¿Cuantos alumnos son?");
let studens = [];
for (i = 0; i < total; i++) {
    studens[i] = [prompt("Nombre del alumno " + (i + 1)), 0];

}
const assistence = (name, p) => {
    let assit = prompt(name);

    if (assit == "p" || assit == "P") {
        studens[p][1]++;
    }

}

for (i = 0; i < 30; i++) {
    for (student in studens) {
        assistence(studens[student][0], student);
    }
}
for (student in studens) {
    let resp = `${studens [student][0]} : <br>
________________ Presentes : ${studens[student][1]}
<br>
________________ Ausencias : ${30-studens[student[1]]}
`;
    if (30 - studens[student][1] > 18) {
        resp += "<b style='color:red'> Reprobado por inasistencias </b> <br><br>";

    } else {
        resp += `<br><br>`;
    }
    document.write(resp);
}