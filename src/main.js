const proyectosFinales = [1, 3 ,5, 6, 8, 10];
for (let i = 0; i <= 5; i++) {
    if (proyectosFinales[i] == 10) {
        console.log('Sobresaliente ' + proyectosFinales[i])
    }
    else if(proyectosFinales[i] >= 6)
        console.log('Aprobado con ' + proyectosFinales[i]);
    else 
        console.log('No Aprobado ')
}