let footer = `
<div class="media-f">
            <div class="media-title">
                <h4>Redes de la academia</h4>
            </div>
            <div class="media-logos">
                <a href= "https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                <a href= "https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                <a href= "https://discord.com/"> <i class="fa-brands fa-discord"></i></a>
                <a href= "https://instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <div class="buttons-f">
            <div>
                <a href="under_construction.html">Términos y condiciones</a>
            </div>
            <div>
                <a href="under_construction.html">Política de Privacidad</a>
            </div>            
        </div>
`
document.getElementById("idfooter").innerHTML = footer


let copyright = `<p>
Copyright &copy;2022
<br>
Estamos en el día número <a id="data"></a> del año. 
</p>   
`

document.getElementById("copyright").innerHTML = copyright


let url = 'http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""   
       body+=`${data.day_of_year}`
    document.getElementById('data').innerHTML = body
}