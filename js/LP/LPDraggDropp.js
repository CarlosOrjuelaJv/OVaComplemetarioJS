//autor Edilson Laverde Molina 22/05/14 20:06
//nucleo contructor 

var moveswin = 0;
var movesfail = 0;
var finish = function() {
    moveswin = 0;
    movesfail = 0;
    for (var i = 1; i <= aciertos; i++) {
        if (datos[i][4] == 'none') {
            return 'none';
        }
        if (datos[i][4] == 'win') {
            moveswin += 1;
        }
        else {
            movesfail += 1;
        }
    }
    if (moveswin == aciertos) {
        return 'win';
    }
    else {
        return 'oushh'
    }
}
//function LPDraggDropp(w, f) {
//    this.win = w
//    this.fail = f
//}
var LPDraggDroppRestar = function() {
    for (var i = 1; i <= DraggDropp[0].n_element; i++) {
        $(datos[i][0]).attr("data-top", datos[i][2]);
        $(datos[i][0]).attr("data-left", datos[i][3]);
        $(datos[i][0]).animate({
            top: datos[i][2],
            left: datos[i][3]
        });
        datos[i][4] = 'none';
        stado[datos[i][1]] = 'nadie';
        $(datos[i][1]).droppable('enable');
    }
}
var dragg_LP = function(id) {//inicia el drag Jquery
    $(id).draggable({
        cursor: "move",
        opacity: 0.7,
        revert: true
    });
}
var dropp_LP = function(id, i) {
    $(id).droppable({
        drop: function(event, ui) {


            var idc = "#" + $(this).attr("id");

            if (stado[idc] == 'nadie') {//revisa si la casilla esta ocupada
                $(this).droppable('disable');//lo dessavilita pero no sirve o.o
                stado[idc] = "#" + $(ui.draggable).attr("id");
                // console.log(stado);
                if (idc == datos[relations["#" + $(ui.draggable).attr("id")]][1])
                {
                    datos[relations["#" + $(ui.draggable).attr("id")]][4] = 'win';
                }
                else
                {
                    datos[relations["#" + $(ui.draggable).attr("id")]][4] = 'osuhh';
                }

               $(ui.draggable).draggable("option", "revert", "invalid");//desabilita el auto reverse
                 eval(DraggDropp[0].onwinmove);
                ui.draggable.animate({
                    top: $(this).position().top,//<------valor
                    left: $(this).position().left
                });

                var eventodragdrop = finish();
               
                if (eventodragdrop == 'win') {
                    eval(DraggDropp[0].onwingame);
                }
                if (eventodragdrop == 'oushh') {
                    
                    LPDraggDroppRestar();
                    eval(DraggDropp[0].onfailgame);
                }

                var status = "#" + $(ui.draggable).attr("id");
                for (indice in stado) {
                    var valor = stado[indice];
                    if (status == valor) {
                        if (indice == "#" + $(this).attr("id") && status == valor) {
                           // console.log(status + '  ' + valor);
                           // console.log("----> " + indice);
                        }
                        else {
                           // console.log("xxxx----> " + indice);
                            $(indice).droppable('enable');
                            stado[indice] = "nadie";
                        }


                    }


                }
               // console.log(stado);

            } else {// se regresa automaticamente por el reverse:true
                /*$(datos[i][0]).attr("data-top", datos[i][2]);
                 $(datos[i][0]).attr("data-left", datos[i][3]);
                 $(datos[i][0]).animate( {
                 top:    datos[i][2],
                 left:   datos[i][3]
                 });*/
            }


        }
    });
}
jQuery.LPDraggDropp = function(args) {
    //Merge the contents of two or more objects together into the first object.
    DraggDropp = jQuery.extend({
    }, args);
}
//configurador juego
var datos = new Array([]);
var relations = new Array();
var stado = new Array();
var aciertos = 0;
jQuery.configuration = function() {
    aciertos = DraggDropp[0].n_element;
    //debuelve el elemnto dragado al container
    
    $("#" + DraggDropp[0].containerstar).droppable({
        drop: function(event, ui) {


            var status = "#" + $(ui.draggable).attr("id");

            for (indice in stado) {
                var valor = stado[indice];
                if (status == valor) {
                    $(indice).droppable('enable');
                    stado[indice] = "nadie"
                }
            }
            //console.log(stado);

            var dni = relations["#" + $(ui.draggable).attr("id")];
            $(ui.draggable).draggable("option", "revert", "invalid");
           // console.log(datos[relations["#" + $(ui.draggable).attr("id")]][4]);
            datos[relations["#" + $(ui.draggable).attr("id")]][4] = 'none';
            ui.draggable.animate({
                top: datos[dni][2],
                left: datos[dni][3]
            });
        }
    });
    for (var i = 1; i <= DraggDropp[0].n_element; i++) {
        datos[i] = new Array(6)
        datos[i][0] = '#' + DraggDropp[i].id_dragg;
        datos[i][1] = '#' + DraggDropp[i].id_dropp;
        datos[i][2] = $("#" + DraggDropp[i].id_dragg).position().top;
        datos[i][3] = $("#" + DraggDropp[i].id_dragg).position().left;
        datos[i][4] = 'none';
        datos[i][5] = 'vacio';
        dragg_LP(datos[i][0]);
        dropp_LP(datos[i][1], i);
        relations[datos[i][0]] = i;
        stado[datos[i][1]] = 'nadie';
        
    }
}
jQuery.siEstaEnDrop=function(){
    return stado;
};
