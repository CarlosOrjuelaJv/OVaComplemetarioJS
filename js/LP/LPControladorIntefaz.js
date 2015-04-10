/* 
 * LP-SENA 2014
 * Programacion
 * CarlosAOL
 */
//toma los numero de botones, el nombre del slide sin el secuencial, el array de los subslides, el boton anterior Jqury, boton volver jquery, fondo,y si es secuencial
//crea los temas del menu, un tema por cada boton del menu, los temas son los contenedores de los slides, pueden tener 1 o mas slides...
//un menu contiene uno o mas temas, un tema contiene uno o mas slides

var LPControladorInterfaz = function(numeroBotones, nombreBtn, nombreSlide, subSlidesNum, btnSiguiente, btnAnterior, btnVolver, fondoPrinci, secuencial) {

    ////////////////////////// crea con un bucle los temas(conjunto de slides)y los menu(conjuntos de temas)
    this.controMenu;
    this.numeroBotones = numeroBotones;
    var subSlides = new Array();
    var arrTemas = new Array();
    var arrBtnPrinci = new Array();
    var i = 0;
    //crea los temas del menu, un tema por cada boton del menu, los temas son los contenedores de los slides, pueden tener 1 o mas slides...
    for (i = 0; i < numeroBotones; i++)
    {

        arrBtnPrinci.push($(nombreBtn + parseInt(i + 1)));//crea aareglo de botones del menu
        //console.log(arrBtnPrinci[i]);
        arrBtnPrinci[i].css('cursor', 'pointer');
        subSlides.push(new Array());
        subSlides[i][0] = $(nombreSlide + parseInt(i + 1));//arreglo de slides del tema

        for (j = 1; j <= subSlidesNum[i]; j++)
        {
            subSlides[i][j] = $(nombreSlide + parseInt(i + 1) + '_' + j);//arreglo de slides del tema
        }
        //console.log(subSlides[i],btnSiguiente,btnAnterior,btnVolver,fondoPrinci);
        //crea los temas
        arrTemas.push(new LPContrTema(subSlides[i], btnSiguiente, btnAnterior, btnVolver, fondoPrinci));// crea los temas
    }
    // crea el controlador del menu
    this.controMenu = new LPControMenu(arrTemas, arrBtnPrinci, secuencial);// crea el menu
    ////////////////////////////////////////////////////
}

LPControladorInterfaz.prototype.getControlador = function() {// retorna el controlador del menu, para alguna funcion del menu
    return this.controMenu;
};

LPControladorInterfaz.prototype.volver = function() {// vuelve al menu, oculta los slides, fondo , siguiente, anterior y boton home, muestra los botones del menu
    this.controMenu.volverMenu();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    sonido1.pause();
    sonido2.pause();
    sonido3.pause();
    sonido4.pause();
    sonido5.pause();
    $('#Stage_tema1').hide();
    if (!this.controMenu.getYaVisitado(1)) {
        new LPResalteGenerico($('#Stage_boton2'), "clicScaleMenos");
        $('#Stage_boton2').css('cursor','pointer');
        $('#Stage_boton_2').css('cursor','pointer');
    }

};
var animaSlideInt=  new TimelineMax();
LPControladorInterfaz.prototype.verAnterior = function() {// muestra el siguiente slide del tema, si tiene
    this.controMenu.verAnterior();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    animaSlideInt.append(TweenMax.to($(this.controMenu.getTemaActualSLideActual()), 0, {alpha: 0, x: 90}), 0);
    animaSlideInt.append(TweenMax.to($(this.controMenu.getTemaActualSLideActual()), 0.5, {alpha: 1, x: 0}), 0);
};

LPControladorInterfaz.prototype.verSiguiente = function() {// muestra el anterior slide del tema,
    this.controMenu.verSiguiente();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    sonido1.pause();
    sonido2.pause();
    sonido3.pause();
    sonido4.pause();
    sonido5.pause();
animaSlideInt.append(TweenMax.to($(this.controMenu.getTemaActualSLideActual()), 0, {alpha: 0, x: -90}), 0);
 animaSlideInt.append(TweenMax.to($(this.controMenu.getTemaActualSLideActual()), 0.5, {alpha: 1, x: 0}), 0);
    if ($(this.controMenu.getTemaActualSLideActual()).attr("id") == "Stage_slide2_7") {
        if (ctrlSound) {
            sonido3.play();
            new LPResalteGenerico($('#Stage_btn_nextCopy'), "desactivado");
            btnSiguienteAct = false;
            setTimeout(function() {
                btnSiguienteAct = true;
                new LPResalteGenerico($('#Stage_btn_nextCopy'), "activado");
            }, 10000)
        }
    }
    if ($(this.controMenu.getTemaActualSLideActual()).attr("id") == "Stage_slide2_10") {
        if (ctrlSound) {
            sonido4.play();
            new LPResalteGenerico($('#Stage_btn_nextCopy'), "desactivado");
            btnSiguienteAct = false;
            setTimeout(function() {
                btnSiguienteAct = true;
                new LPResalteGenerico($('#Stage_btn_nextCopy'), "activado");
            }, 10000)
        }
    }
    if ($(this.controMenu.getTemaActualSLideActual()).attr("id") == "Stage_slide2_12") {
        if (ctrlSound)
        {
            sonido5.play();
        }
    }
};


var btnSiguienteAct = true;
LPControladorInterfaz.prototype.verTema = function(numBoton) {// muestra el primer slide del tema

    // console.log(this.numeroBotones);
    if (numBoton <= this.numeroBotones && numBoton > 0) {
        //console.log(numBoton);

        this.controMenu.verTema((numBoton - 1));
    } else {
        console.log("numero incorrecto del tema");
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (controMenuPrin.getControlador().siTemaDisponible((numBoton - 1))) {
        $('#Stage_tema1').show();
    }
    if (numBoton == 1) {
        $('#Stage_chulin').show();
        if (ctrlSound) {
            sonido1.play();
            new LPResalteGenerico($('#Stage_btn_nextCopy'), "desactivado");
            btnSiguienteAct = false;
            setTimeout(function() {
                btnSiguienteAct = true;
                new LPResalteGenerico($('#Stage_btn_nextCopy'), "activado");
            }, 10000)
        }
    }
    if (numBoton == 2) {
        if (this.controMenu.siTemaDisponible(1)) {
            $('#Stage_chulinCopy').show();
            if (ctrlSound) {
                sonido2.play();
                new LPResalteGenerico($('#Stage_btn_nextCopy'), "desactivado");
                btnSiguienteAct = false;
                setTimeout(function() {
                    btnSiguienteAct = true;
                    new LPResalteGenerico($('#Stage_btn_nextCopy'), "activado");
                }, 10000)
            }
        }
        
    }


};