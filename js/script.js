$(document).ready(function(){

    var myVideo = document.getElementById('videopromo'); /* traemos el elemento con el id "videopromo" */

    // el elemento #two lo pasamos a la derecha menos 100% en un tiempo de 100 milisegundos
    $('#two').animate({top:'-300px', right:'-100%'}, 100, function(){
        $(this).hide(); /* escondemos el elemento con el id "two", */
    });

    // cuando le demos click al boton, que tiene id "boton", nos ejecutará una función
    $('#boton').click(function(){
          // el id "one" lo sacamos de la pantalla en 200 milisegundos
        $('#one').animate({right:'+1000%'},200);

        // ahora mostramos id "two", que escondimos anteriormente de manera rápida con "fast"
        $('#two').show('fast', function(){
              // este mismo elemento "two", lo vamos a traer a la vista principal
            $(this).animate({right:'-28%'}, 200, function(){
                myVideo.play(); //reproduce el video cuando ya este en la vista principal
            });
            setTimeout(function(){
                document.location.href='http://www.liverpool.com.mx';
            },16000);
        });
    });
});
