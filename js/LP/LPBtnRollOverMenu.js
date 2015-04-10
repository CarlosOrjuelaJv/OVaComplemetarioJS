/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 
 
 var glowAni = new TimelineMax();
 
 
 var animaFinal = new TimelineMax({});
 animaFinal.append(TweenMax.from($('#Stage_texto_final'), 1, {x: 1000}), 0);
 animaFinal.append(TweenMax.from($('#Stage_brazo_personaje2'), 1, {rotationZ: -15}), 0);
 animaFinal.append(TweenMax.from($('#Stage_nubeFinal'), 1, {css: {scaleY: 0, scaleX: 0}}), 0);
 animaFinal.stop();
 
 
 
 var mySplitText2 = new SplitText($('#Stage_titulo2'), {type: "words,chars"});
 var animaBanner = new TimelineMax({});
 animaBanner.append(TweenMax.to($('#Stage_fondo_instruc'), 0.0, {css: {scaleY: 1, scaleX: 1}}), 0);
 animaBanner.append(TweenMax.from($('#Stage_titulo3'), 1, {css: {y: -87, ease: Back.easeOut}}), 0);
 animaBanner.append(TweenMax.from($('#Stage_titulo3'), 1, {css: {scaleY: 1.2, scaleX: 1.2}}), 0);
 animaBanner.append(TweenMax.from($('#Stage_titulo1'), 1, {css: {y: -87, ease: Back.easeOut}}), 0);
 animaBanner.appendMultiple(TweenMax.allFrom(mySplitText2.words, 0.3, {scale: 0, transformOrigin: "0% 50% -50", ease: Back.easeOut}, 0.2), 0);
 animaBanner.call(function() {
 instucAnima.restart();
 });
 animaBanner.stop();
 
 */

var animaGanoActi = new TimelineMax({});
animaGanoActi.append(TweenMax.from($('#Stage_CALIFICACION'), 1, {scale: 0, ease: Back.easeOut}), 0);
animaGanoActi.append(TweenMax.from($('#Stage_boton_cerrar'), 1, {scale: 0, ease: Elastic.easeOut}), 0);
animaGanoActi.stop();

var animaActi = new TimelineMax({});


var soloUnaActi=true;
var aniEstructura = new TimelineMax({});
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_cosasAnima').children(), 0.5, {scale: 0, ease: Back.easeOut}, 0.4), 0);
aniEstructura.append(TweenMax.from($('#Stage_carro'), 2, {x: 1200}), 0);
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_ani1').children(), 0.5, {scale: 0, ease: Back.easeOut}, 0.4), 0);
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_ani2').children(), 0.5, {scale: 0, ease: Back.easeOut}, 1), 0);
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_ani3').children(), 0.5, {delay:1,scale: 0, ease: Back.easeOut}, 0.5), 0);
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_ani4').children(), 0.5, {delay:2,scale: 0, ease: Back.easeOut}, 1), 0);
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_ani6').children(), 0.5, {delay:4,scale: 0, ease: Back.easeOut}, 1), 0);
aniEstructura.append(TweenMax.to($('#Stage_mapa'), 3, {clip: "rect(0px 711px 253px 0px)"}), 0);
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_ani5').children(), 0.5, {delay:4,scale: 0, ease: Back.easeOut}, 1), 0);
aniEstructura.appendMultiple(TweenMax.allFrom($('#Stage_ani7').children(), 0.5, {delay:2,scale: 0, ease: Back.easeOut}, 0.4), 0);
aniEstructura.call(function() {
    if (soloUnaActi) {
        new LPResalteGenerico($('#Stage_ani7'), LPResalteGenerico.clicScaleMasOpa);
    }
    
});
aniEstructura.stop();

$('#Stage_mapa').css("clip", "rect(0px 0px 253px 0px)");
var animaInicial = new TimelineMax({});

animaInicial.appendMultiple(TweenMax.allFrom([$('#Stage_pinon1'), $('#Stage_pinon2')], 0.5, {scale: 0, ease: Back.easeOut}, 0.2), 0);
animaInicial.call(function() {
    instucAnima.restart();

})
var animaMenuSoloUna = true;
var animaMenu = new TimelineMax({});
animaMenu.append(TweenMax.from($('#Stage_anima'), 2, {delay: 0.5, y: 500}), 0);
animaMenu.append(TweenMax.from($('#Stage_bombillo_btn22'), 1, {scale: 0, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_mano_btn1'), 1, {x: 1, y: 400, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.to($('#Stage_mano_btn1'), 0.5, {x: 79, y: 54, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.to($('#Stage_mano_btn1'), 0.5, {x: 92, y: 86, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.to($('#Stage_mano_btn1'), 0.5, {x: 47, y: 54, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_boton2'), 2, {y: -800, ease: Bounce.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_palo_btn2'), 1, {scale: 0, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_boton1'), 0.5, {y: 500, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_enchufe12'), 0.5, {scaleX: 0}), 0);
animaMenu.append(TweenMax.from($('#Stage_btn_insCopy'), 0.5, {scale: 0, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_btn_estrucCopy'), 0.5, {scale: 0, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_btnToogleSound'), 0.5, {scale: 0, ease: Back.easeOut}), 0);
animaMenu.append(TweenMax.from($('#Stage_btnRefe'), 0.5, {scale: 0, ease: Back.easeOut}), 0);
animaMenu.call(function() {
    new LPResalteGenerico($('#Stage_boton1'), "clicScaleMenos");
})
animaMenu.stop();

var instucAnima = new TimelineMax({onReverseComplete: terminoAnima});

var mySplitText1 = new SplitText($('#Stage_Text6Copy'), {type: "words,chars"});

instucAnima.append(TweenMax.from($('#Stage_instrucciones'), 0, {y: 640}), 0);
instucAnima.append(TweenMax.from($('#Stage_fondo_insCopy'), 0.5, {css: {scaleY: 0, scaleX: 0}}), 0);
instucAnima.append(TweenMax.from($('#Stage_insCopy'), 1, {y: 700}), 0);
//instucAnima.append(TweenMax.from($('#Stage_Text7Copy'), 0.5, {css: {scaleX: 0, scaleY: 0}}), 0);
instucAnima.append(TweenMax.from($('#Stage_cerrarCopy2'), 0.5, {css: {scaleX: 0, scaleY: 0}}), 0);
instucAnima.appendMultiple(TweenMax.allFrom(mySplitText1.words, 0.1, {scale: 0, transformOrigin: "0% 50% -50", ease: Back.easeOut}, 0.1), 0);
instucAnima.stop();

var soloUnaEstruc = true;

var estrucAnima = new TimelineMax({onReverseComplete: terminoAnimaPendulo});

var animaPendulo;


estrucAnima.append(TweenMax.from($('#Stage_fondo_est'), 0.5, {css: {scaleY: 0, scaleX: 0}}), 0);
estrucAnima.append(TweenMax.from($('#Stage_estruc_fondo'), 1, {y: -700, ease: Back.easeOut}), 0);
estrucAnima.append(TweenMax.from($('#Stage_cerrarCopy3'), 0.2, {scale: 0, ease: Back.easeOut}), 0);
estrucAnima.append(TweenMax.from($('#Stage_pendulo_btn_estruc'), 1, {y: -600}), 0);
estrucAnima.call(function() {

    if (soloUnaEstruc) {
        animaPendulo = new TimelineMax();
        //TweenMax.to($('#Stage_pendulo_btn_estruc'), 0.5, {y: 0});
        // animaPendulo.append( TweenLite.to($("#Stage_pendulo_btn_estruc"), 1, {rotation:30, ease:Sine.easeOut}));
        //animaPendulo.append( TweenLite.to($("#Stage_pendulo_btn_estruc"), 1, {rotation:-30, ease:Sine.easeOut}));
        // animaPendulo.append( TweenLite.to($("#Stage_pendulo_btn_estruc"), 1, {rotation:0, ease:Sine.easeOut, }));
        animaPendulo.append(TweenMax.to($('#Stage_pendulo_btn_estruc'), 0.5, {rotationZ: 32}), 0);
        animaPendulo.append(TweenMax.to($('#Stage_pendulo_btn_estruc'), 2, {repeat: -1, yoyo: true, rotationZ: -32, ease: Sine.easeInOut}), 0);
        soloUnaEstruc = true;
    }

})
estrucAnima.stop();


/*
 var animaCreditos = new TimelineMax({});
 animaCreditos.append(TweenMax.from($('#Stage_creditos_bombillo'), 1, {delay: 1, scaleY: 0, scaleX: 0}), 0);
 animaCreditos.appendMultiple(TweenMax.allFrom([$('#Stage_creditos_btn1'), $('#Stage_creditos_btn7'), $('#Stage_creditos_btn3'), $('#Stage_creditos_btn6'), $('#Stage_creditos_btn4'),
 $('#Stage_creditos_btn2'), $('#Stage_creditos_btn5')], 1, {scaleY: 0, scaleX: 0, ease: Back.easeOut}, 0.2), 0);
 
 animaCreditos.appendMultiple(TweenMax.allFrom([$('#Stage_Rectangle10'), $('#Stage_Rectangle20'), $('#Stage_Rectangle30'), $('#Stage_Rectangle40'), $('#Stage_Rectangle50'),
 $('#Stage_Rectangle60'), $('#Stage_Rectangle70'), $('#Stage_Rectangle80'), $('#Stage_Rectangle90'), $('#Stage_Rectangle100'), $('#Stage_Rectangle110')], 1, {scaleY: 0, scaleX: 0, ease: Back.easeOut}, 0.2), 0);
 animaCreditos.call(function() {
 new LPResalteGenerico($('#Stage_EllipseGlow'), "glow")
 });
 animaCreditos.stop();
 */
function terminoAnimaPendulo() {
    $('#Stage_estruc').hide();

}
var direcciones;
var controMenuPrin;
var controREfe;
var soloUnaAnimaIni = true;
var animaTodo = function(objAnima) {

    var x = 0.2;

    var puzz = $(objAnima);
    //console.log($(puzz).children());
    $(puzz).children().each(function() {
        TweenMax.from($(this), 0.8, {css: {scaleX: 0, scaleY: 0}, delay: x});
        x += 0.3;
    });
}

$.fn.LPBtnRoll = function(dniefect)
{
    switch (dniefect) {
        case 'iniciar':
            
            setTimeout(function(){

                $.LPDraggDropp([
                    {
                        n_element: 4,
                        containerstar: $("#Stage_FASES").attr('id'),
                        onfailgame: 'failgame()',
                        onwingame: 'wingame()'
                    },
                    {
                        id_dragg: $("#Stage_resp1").attr('id'),
                        id_dropp: $("#Stage_camp1a").attr('id')
                    },
                    {
                        id_dragg: $("#Stage_resp2").attr('id'),
                        id_dropp: $("#Stage_camp2a").attr('id')
                    },
                    {
                        id_dragg: $("#Stage_resp3").attr('id'),
                        id_dropp: $("#Stage_camp3a").attr('id')
                    },
                    {
                        id_dragg: $("#Stage_resp4").attr('id'),
                        id_dropp: $("#Stage_camp4a").attr('id')
                    }
                ]);
                $.configuration();
                console.log("listo");
                $('#Stage_activi').hide();
                $('#Stage_Rectangle10').hide();
                animaActi.append(TweenMax.from($('#Stage_nubes_intro'), 1, {scale: 0, ease: Back.easeOut}), 0);
                animaActi.append(TweenMax.from($('#Stage_Text3Copy4'), 1, {scale: 0, ease: Back.easeOut}), 0);
                animaActi.append(TweenMax.from($('#Stage_TextCopy15'), 1, {scale: 0, ease: Back.easeOut}), 0);
                animaActi.appendMultiple(TweenMax.allFrom($('#Stage_screen_1').children(), 0.5, {scale: 0, ease: Back.easeOut}, 0.4), 0);
                animaActi.appendMultiple(TweenMax.allFrom($('#Stage_actividad').children(), 0.5, {scale: 0, ease: Back.easeOut}, 0.4), 0);
                animaActi.appendMultiple(TweenMax.allFrom([$('#Stage_resp1'),$('#Stage_resp2'),$('#Stage_resp3'),$('#Stage_resp4')], 0.5, {scale: 0, ease: Back.easeOut}, 0.4), 0);
                animaActi.stop();

            },1000);
            //crea menus <----------------------------------
            crearMenuPrinci();
            $('#Stage_instrucciones').show();
            $('#Stage_estruc').show();
            $('#Stage_menu').show();
            $('#Stage_roll1').show();
            $('#Stage_roll2').show();
            $('#Stage_btns').show();

            //  $('#Stage_instrucciones').show();
            // $('#Stage_ruta').css("clip", "rect(0px 0px 279px 0px)");       
            $('#Stage_mapa').css("clip", "rect(0px 0px 253px 0px)");
             direcciones = new xmlLector('direc.xml');
            $("#Stage_boton1").LPRollOverScaleXY($("#Stage_roll1"));
            $("#Stage_boton2").LPRollOverScaleXY($("#Stage_roll2"));
            $("#Stage_pendulo_btn_estruc").LPRollOverAparece($("#Stage_roll_pendulo"));
            $("#Stage_boton2").css('cursor', 'not-allowed');
            $("#Stage_boton_2").css('cursor', 'not-allowed');
            //new LPClickTogle($("#Stage_btnSonido"));
            // new LPClickTogle($("#Stage_btnSonidoCopy3"));
            // new LPClickTogle($("#Stage_btnSonidoCopy4"));
            // new LPClickTogle($("#Stage_btnSonidoCopy5"));

            new LPClickTogle($("#Stage_btnToogleSound"));
            //actividad
            

            controREfe= new LPCControSecuenciaSimple([$('#Stage_slide1Copy'),$('#Stage_slide2Copy')],$('#Stage_btn_next'),$('#Stage_btn_prev'));

            //animaBanner.restart();
            ///////////////////////
            // for (i = 2; i <= 5; i++) {
            // new LPResalteGenerico($('#Stage_boton' + i), "desactivado");
            // }
            ///////////////////////////////////roll de menu lateral
            //new LPRollOverSprite($("#Stage_iconoDescargable"), 200, 40, $('#Stage_rollover_descargable'));
            // crearMenuInterior1();
            // crearZooms();

            //audios
            // $('#Stage_boton1').LPaudioFX("overSound", "bubble.mp3");
            // new LPClickSpriteTogle($('#Stage_botonSonido2'), 40);
            /////<------------------------------------------------------------------------------------------
            sonido1 = new Howl({
                urls: ['audio/A1.mp3']
            });
            sonido2 = new Howl({
                urls: ['audio/A2.mp3']
            });
            sonido3 = new Howl({
                urls: ['audio/A3.mp3']
            });
            sonido4 = new Howl({
                urls: ['audio/A4.mp3']
            });
            sonido5 = new Howl({
                urls: ['audio/A5.mp3']
            });
            eventosDeMouse();
            break;
    }
};
var soloUnaEstrucAnima = true;
function wingame(){
//$('#Stage_enviar').show();	
puntajeFinal=true;
console.log("gano");
animaGanoActi.restart();
}
function failgame(){
//$('#Stage_enviar').show();	
console.log("perdio");


}
function eventosDeMouse() {
    //creditos
    //icono DEscarga
    //$('#Stage_iconoDescargable').click(function() {
    // window.open(direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[0].getElementsByTagName("href")[0].childNodes[0].nodeValue);
    // });
    // ///link
     
    $('#Stage_linkSemana1').click(function() {
        window.open(direcciones.getElementsByTagName("lista")[0].getElementsByTagName("link")[0].getElementsByTagName("href")[0].childNodes[0].nodeValue);
    });
    //menu principal
    $('#Stage_boton_1').click(function() {
        controMenuPrin.verTema(1);
    });
    $('#Stage_boton_2').click(function() {
        controMenuPrin.verTema(2);
    });
    $('#Stage_btn_nextCopy').click(function() {
        if (btnSiguienteAct) {
            controMenuPrin.verSiguiente(2);
        }

    });
    $('#Stage_btn_prevCopy').click(function() {
        if (btnSiguienteAct)
        {
            controMenuPrin.verAnterior(2);
        }
    });
    $('#Stage_volver_btn').click(function() {
        controMenuPrin.volver();
    });
    ///instrucciones
    $('#Stage_cerrarCopy2').click(function() {
        $('#Stage_btnToogleSound').show();
        instucAnima.reverse(2);
        if (soloUnaEstrucAnima) {
            setTimeout(function() {
                estrucAnima.restart();
            }, 2000)

            soloUnaEstrucAnima = false;
        }

    });
    $('#Stage_btn_insCopy').click(function() {
        $('#Stage_btnToogleSound').hide();
        instucAnima.restart();
    });
    //estructura
    $('#Stage_pendulo_btn_estruc').click(function() {

        animaPendulo.stop();
        animaPendulo.kill();
        TweenMax.to($('#Stage_pendulo_btn_estruc'), 0.5, {rotationZ: 0});
        TweenMax.to($('#Stage_pendulo_btn_estruc'), 2, {delay: 2, y: -700});
        $('#Stage_cerrarCopy3').show();
        TweenMax.from($('#Stage_cerrarCopy3'), 1, {scale: 0, ease: Elastic.easeOut});

        $('#Stage_estruc4').show();
        aniEstructura.restart();
    })
    $('#Stage_btn_estrucCopy').click(function() {
        $('#Stage_btnToogleSound').hide();
        $('#Stage_estruc').show();
        $('#Stage_estruc4').show();
        //aniEstructura.restart();
       // estrucAnima.restart();
    });
    $('#Stage_cerrarCopy3').click(function() {

        $('#Stage_estruc4').hide();
        $('#Stage_pendulo_btn_estruc').hide();
        $('#Stage_btnToogleSound').show();
        estrucAnima.reverse();
        if (animaMenuSoloUna) {
            animaMenu.restart();
            animaMenuSoloUna = false;
        }

    });
    $('#Stage_cerrarEstruc').click(function() {

        $('#Stage_estruc4').hide();
        $('#Stage_estruc').hide();
        $('#Stage_pendulo_btn_estruc').hide();
        $('#Stage_btnToogleSound').show();
      //  estrucAnima.reverse();
        if (animaMenuSoloUna) {
            animaMenu.restart();
            animaMenuSoloUna = false;
        }

    });
    ///btn sonido
    ///referencia 
    $('#Stage_btnRefe').click(function() {
        $('#Stage_referecia').show();
        animaTodo($('#Stage_referecia'));

    });
    $('#Stage_cerrarREfe').click(function() {
        $('#Stage_referecia').hide();

    });
    $('#Stage_btn_next').click(function() {
        controREfe.siguiente();
    });
    $('#Stage_btn_prev').click(function() {
        controREfe.anterior();

    });
    //actividad 
    $('#Stage_ani7').click(function() {
        $('#Stage_activi').show();
        animaActi.restart();

    });
    $('#Stage_boton_cerrar').click(function() {
        $('#Stage_activi').hide();
        $('#Stage_cerrarEstruc').show();
        new LPResalteGenerico($('#Stage_cerrarEstruc'),LPResalteGenerico.siempreScale);
    });
    //cabezote
//    $('#Stage_estruc4').mouseenter(function(){
//        TweenMax.to($('#Stage_cabezote3'), 1, { y: -105});
//    })
//     $('#Stage_estruc4').mouseleave(function(){
//        TweenMax.to($('#Stage_cabezote3'), 1, {y: 0});
//    })

}
;
function crearMenuPrinci()
{
    var subSlidesNum = new Array(2, 12);//numero subslide
    controMenuPrin = new LPControladorInterfaz(subSlidesNum.length, "#Stage_boton_", "#Stage_slide", subSlidesNum, $("#Stage_btn_nextCopy"), $("#Stage_btn_prevCopy"), $("#Stage_volver_btn"), $("#Stage_contendor1"), true)

}



function terminoAnima() {

    // $('#Stage_instrucciones').hide();
}
;
function crearZooms()
{
    var arrayZoom = new Array();
    var arrayBtnZoom = new Array();
    var numZoom = 3;//numero Zoom
    var cerrarZo = document.getElementsByClassName('cerrarZoom');//ponerle la clase o acada boton ponerle su clic
    for (var i = 0; i < numZoom; i++)
    {
        arrayZoom.push($('#Stage_zoom' + (i + 1)));
        arrayBtnZoom.push(document.getElementById("Stage_lupa" + (i + 1)));
        $('#Stage_boton-cerrar3').css('cursor', "pointer");
        arrayBtnZoom[i].style.cursor = "pointer";
        //new LPResalteGenerico($(arrayBtnZoom[i]), "clicScaleMas");  

        //$(arrayBtnZoom[i]).LPefects("glowRedondoInt")

        new LPResalteGenerico(arrayBtnZoom[i], "clic");
        // cerrarZo[i].style.cursor = "pointer";
        arrayBtnZoom[i].addEventListener("click", function(event)
        {
            $('#Stage_zooms').show();

            var nombre = event.target.id.replace("Stage_lupa", "");
            console.log(nombre);
            controZoom.verZoom((parseInt(nombre) - 1));

        });

        $(cerrarZo[i]).click(function() {
            $('#Stage_zooms').hide();
            controZoom.ocultarZoom();
            $('#Stage_boton-cerrar3').hide();
        });

    }

    controZoom = new LPControZoom(arrayZoom, $('#Stage_fondo_zoom'), arrayBtnZoom);
}



///////////////////////Clases Utils///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////codigo logica diapo
var animaBtn = new TimelineMax();

var LPCControSecuenciaSimple = function(arrSecuen, btnSi, btnAnte)
{
    this.btnSi = btnSi;
    this.btnAnte = btnAnte;
    this.secActual = 0;
    this.arrSecuen = arrSecuen;
    //console.log(this.btnSi, this.btnAnte,this.arrSecuen);
    for (i = 1; i < arrSecuen.length; i++) {
        this.arrSecuen[i].hide();
    }
    if (arrSecuen.length > 1) {
        this.btnSi.show();
        this.btnAnte.hide();
    } else {
        this.btnSi.hide();
        this.btnAnte.hide();
    }
};

LPCControSecuenciaSimple.prototype.setActualCero = function() {
    this.secActual = 0;
};

LPCControSecuenciaSimple.prototype.siguiente = function() {
    if (this.secActual < (this.arrSecuen.length - 1)) {
        this.secActual++;
        this.actualizar();
        this.btnAnte.show();
    }
    if (this.secActual == (this.arrSecuen.length - 1)) {
        this.btnSi.hide();
    }
};

LPCControSecuenciaSimple.prototype.anterior = function() {
    if (this.secActual > 0) {
        this.secActual--;
        this.actualizar();
        this.btnSi.show();
    }
    if (this.secActual == (0)) {
        this.btnAnte.hide();
    }

};

LPCControSecuenciaSimple.prototype.actualizar = function() {
    for (i = 0; i < this.arrSecuen.length; i++) {
        this.arrSecuen[i].hide();
    }
    this.arrSecuen[this.secActual].show();
    animaBtn.append(TweenMax.to(this.arrSecuen[this.secActual], 0, {alpha: 0, x: -90}), 0);
    animaBtn.append(TweenMax.to(this.arrSecuen[this.secActual], 0.5, {alpha: 1, x: 0}), 0);
};



var ctrlSound = true;
$.fn.LPaudioFX = function(tipo, sounds) {

    switch (tipo) {
        //Efectod de audio
        case 'clicSound':

            clicSound = new Howl({
                urls: ['audio/' + sounds]
            });
            $(this).click(function() {

                if (ctrlSound == true)
                {
                    clicSound.play();
                }
            });
            break;

        case 'overSound':
            overSound = new Howl({
                urls: ['audio/' + sounds],
                volume: 0.6
            });
            $(this).mouseenter(function() {
                if (ctrlSound == true)
                {
                    overSound.play();
                }
            });
            break;
    }
}
var LPRollOverSprite = function(objet, disRoll, disSprit, roll) {
    //publicas
    //console.log(document.getElementById( $(objet).attr("id")));
    $(objet).css('cursor', 'pointer');



    $(objet).mouseenter(function() {
        $(roll).show();
        TweenMax.to($(roll), 1, {css: {x: "0px"}});
        $($(objet)[0].firstChild).css('backgroundPosition', (disSprit * -1) + 'px 0px');
    });

    $(objet).mouseleave(function() {
        TweenMax.to(roll, 1, {css: {x: (disRoll * -1) + "px"}});
        $($(objet)[0].firstChild).css('backgroundPosition', '0px 0px');
    });



};


var LPClickTogle = function(objet) {

    //console.log($(objet)[0],$(objet)[0].children[1]);
    $($(objet)[0].children[1]).hide();
    $(objet).click(function() {
        console.log("apaga sonido");
        sonido1.stop();
        sonido2.stop();
        sonido3.stop();
        sonido4.stop();
        sonido5.stop();
        ctrlSound = !ctrlSound;
        if (ctrlSound) {
            $($(objet)[0].children[1]).hide();

        } else {
            $($(objet)[0].children[1]).show();

        }
    });
};
var LPClickSpriteTogle = function(objet, disSprit) {
    $(objet).css('cursor', 'pointer');
    $(objet).click(function() {
        ctrlSound = !ctrlSound;
        if (ctrlSound) {
            $($(objet)[0].firstChild).css('backgroundPosition', '0px 0px');
        } else {
            $($(objet)[0].firstChild).css('backgroundPosition', (disSprit * -1) + 'px 0px');
        }
    });
};
$.fn.LPRollOverAparece = function(objt)
{

    $(objt).hide();
    $(this).mouseenter(function() {
        $(objt).show();
    });
    $(this).mouseleave(function() {
        $(objt).hide();
    });
}
$.fn.LPRollOverScale = function(objt, objt2)
{

    TweenMax.to(objt, 0, {css: {scaleY: 0, scaleX: 0}});
    TweenMax.to(objt2, 0, {rotationX: 90});
    $(this).mouseenter(function() {
        TweenMax.to(objt, 1, {css: {scaleY: 1, scaleX: 1}});
        TweenMax.to(objt2, 1, {rotationX: 0, ease: Back.easeOut});
    });
    $(this).mouseleave(function() {
        TweenMax.to(objt, 1, {css: {scaleY: 0, scaleX: 0}});
        TweenMax.to(objt2, 1, {rotationX: 90});
    });
}
$.fn.LPRollOverScaleX = function(objt)
{

    TweenMax.to(objt, 0, {css: {scaleX: 0}});

    $(this).mouseenter(function() {
        TweenMax.to(objt, 1, {css: {scaleX: 1}});

    });
    $(this).mouseleave(function() {
        TweenMax.to(objt, 0.5, {css: {scaleX: 0}});

    });
}
$.fn.LPRollOverMovX = function(objt)
{

    TweenMax.to(objt, 0, {css: {x: 300}});

    $(this).mouseenter(function() {
        TweenMax.to(objt, 1, {css: {x: 1}});

    });
    $(this).mouseleave(function() {
        TweenMax.to(objt, 0.5, {css: {x: 300}});

    });
}
$.fn.LPRollOverScaleXY = function(objt)
{

    TweenMax.to(objt, 0, {css: {scaleY: 0, scaleX: 0}});

    $(this).mouseenter(function() {
        TweenMax.to(objt, 1, {css: {scaleY: 1, scaleX: 1}});

    });
    $(this).mouseleave(function() {
        TweenMax.to(objt, 0.5, {css: {scaleY: 0, scaleX: 0}});

    });
}

$.fn.LPRollOverAlpha = function(objt)
{
    $(objt).show();
    TweenMax.to(objt, 0, {css: {alpha: 0}});

    $(this).mouseenter(function() {
        TweenMax.to(objt, 1, {css: {alpha: 1}});

    });
    $(this).mouseleave(function() {
        TweenMax.to(objt, 1, {css: {alpha: 0}});

    });
}
var xmlLector = function(archivoXML) {
    var xmlDoc;

    if (window.XMLHttpRequest)
    {
        xmlDoc = new window.XMLHttpRequest();
        xmlDoc.open("GET", archivoXML, false);
        xmlDoc.send("");
        return xmlDoc.responseXML;
    }
    // para IE 5 y IE 6
    else if (ActiveXObject("Microsoft.XMLDOM"))
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.load(archivoXML);
        return xmlDoc;
    }
    console.log("Error cargando el documento.");
    return null;
}




