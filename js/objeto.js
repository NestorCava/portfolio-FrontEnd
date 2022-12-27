var porfolio = {
    Nombre: "",
    Apellido: "",
    About: "",
    Titulos: ["", ""]
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("apellido");
    a.textContent = apellido;
    return porfolio.Apellido = apellido;
}
function GetAbout(about) {
    var a = document.getElementById("text-about");
    a.textContent = about;
    return porfolio.About = about;
}
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("titulos");
    a.textContent = titulo1, titulo2;
    return porfolio.Titulos[0] = titulo1, porfolio.Titulos[1] = titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);
        var arr = s.split('\n');
        GetAbout(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
    };
}
