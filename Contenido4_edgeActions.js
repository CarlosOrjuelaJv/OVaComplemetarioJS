/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         yepnope(
                 {
                   nope: [
                                     'js/jquery.corner.js',  
                                     'js/jquery-ui.js',                       
                                     'js/greensock/TweenMax.min.js',                         
                                     'js/greensock/TimelineMax.min.js',
                                     'js/greensock/utils/SplitText.min.js',
                                     'js/greensock/easing/EasePack.min.js',
                                     'js/howler.min.js',
                                     'js/LP/LPControZoom.js',
                                     'js/LP/LPContrTema.js',
                                     'js/LP/LPControMenu.js',               
                                     'js/LP/LPControladorIntefaz.js',               
                                     'js/LP/LPBtnRollOverMenu.js',
                                     'js/LP/LPResalteGenerico.js', 
                                     'js/LP/LPControladorMenuRoll.js', 
                                     'js/LP/LPControladorPopUp.js',
                                     'js/LP/LPDraggDropp.js',
         									 'filter.css'
         
         
         
                   			],
                complete: init
         
                }
         )
                     //se cuadra la perspectiva para el 3d
                     var pers = "800px";
         				var stage_js = document.getElementById("Stage");
         
         
                     //////////////////////////////////////////////// inicio...
                     function init()
                     {
         
                         ////3D....
         
                         stage_js.style.webkitPerspectiveOrigin = "50% 50%";
                         stage_js.style.webkitPerspective = pers;
                         stage_js.style.MozPerspectiveOrigin = stage_js.style.webkitPerspectiveOrigin;
                         stage_js.style.MozPerspective = pers;
                         $("#Stage").LPBtnRoll("iniciar");
                         ///
                     }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'indica'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("indica");
   //Edge symbol end:'indica'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

})(jQuery, AdobeEdge, "EDGE-58342570");