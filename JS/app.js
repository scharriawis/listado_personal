const personas = [
    new Persona ('Alex', 'Amesquita'),
    new Persona ('Emily', 'García')
];

function mostrarPersonas(){
    console.log('mostrar personas');
    let texto = '';
    for(let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}
function agregarPersonas(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona (nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    } else{
        console.log('No se puede agregar personsa.')
    }
}