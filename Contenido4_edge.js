/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Arial']='';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'fondo',
                type: 'group',
                rect: ['-3', '0','1029','764','auto', 'auto'],
                c: [
                {
                    id: 'fondo1',
                    type: 'image',
                    rect: ['3px', '0','1026px','646px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"fondo1.png",'0px','0px']
                },
                {
                    id: 'bola_izq3',
                    type: 'image',
                    rect: ['0px', '255px','565px','389px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bola_izq.png",'0px','0px']
                },
                {
                    id: 'bola_der2',
                    type: 'image',
                    rect: ['612px', '0px','416px','650px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bola_der.png",'0px','0px']
                }]
            },
            {
                id: 'menu',
                display: 'none',
                type: 'group',
                rect: ['14', '192','681','607','auto', 'auto'],
                c: [
                {
                    id: 'anima',
                    type: 'group',
                    rect: ['427', '-20','263','422','auto', 'auto'],
                    c: [
                    {
                        id: 'enchufe12',
                        type: 'image',
                        rect: ['-166px', '165px','166px','28px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"enchufe1.png",'0px','0px']
                    },
                    {
                        id: 'caja_btn22',
                        type: 'image',
                        rect: ['0px', '166px','254px','256px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"caja_btn2.png",'0px','0px']
                    },
                    {
                        id: 'indica',
                        type: 'rect',
                        rect: ['168', '272','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'bombillo_btn22',
                        type: 'image',
                        rect: ['93px', '0px','170px','255px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"bombillo_btn2.png",'0px','0px']
                    },
                    {
                        id: 'mano_btn1',
                        type: 'image',
                        rect: ['27px', '293px','77px','334px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"mano_btn1.png",'0px','0px']
                    },
                    {
                        id: 'palo_btn2',
                        type: 'image',
                        rect: ['244px', '364px','61px','17px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"palo_btn.png",'0px','0px']
                    }]
                },
                {
                    id: 'pinon2',
                    type: 'image',
                    rect: ['629px', '168px','86px','86px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"pinon2.png",'0px','0px'],
                    transform: [[],['-11']]
                },
                {
                    id: 'pinon1',
                    type: 'image',
                    rect: ['-36px', '353px','95px','107px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"pinon1.png",'0px','0px']
                },
                {
                    id: 'boton2',
                    type: 'group',
                    rect: ['707', '19','278','411','auto', 'auto'],
                    c: [
                    {
                        id: 'boton_2',
                        type: 'image',
                        rect: ['0px', '0px','278px','411px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"btn2.png",'0px','0px']
                    },
                    {
                        id: 'chulinCopy',
                        display: 'none',
                        type: 'image',
                        rect: ['11px', '317px','57px','62px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chulin.png",'0px','0px']
                    }]
                },
                {
                    id: 'boton1',
                    type: 'group',
                    rect: ['0px', '0px','531','607','auto', 'auto'],
                    c: [
                    {
                        id: 'boton_1',
                        type: 'image',
                        rect: ['0px', '0px','354px','454px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"btn1.png",'0px','0px']
                    },
                    {
                        id: 'chulin',
                        display: 'none',
                        type: 'image',
                        rect: ['256px', '367px','57px','62px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chulin.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'btn_estrucCopy',
                type: 'image',
                rect: ['981px', '545px','37px','36px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"btn_estruc.png",'0px','0px']
            },
            {
                id: 'btn_insCopy',
                type: 'image',
                rect: ['982px', '596px','37px','36px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"btn_ins2.png",'0px','0px']
            },
            {
                id: 'roll2',
                display: 'none',
                type: 'image',
                rect: ['316px', '148px','203px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"globo2.png",'0px','0px']
            },
            {
                id: 'roll1',
                display: 'none',
                type: 'image',
                rect: ['320px', '150px','203px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"globo1.png",'0px','0px']
            },
            {
                id: 'contendor1',
                display: 'none',
                type: 'group',
                rect: ['-1px', '116px','1025','528','auto', 'auto'],
                c: [
                {
                    id: 'fondo_contenedor',
                    type: 'rect',
                    rect: ['0px', '-2px','1025px','530px','auto', 'auto'],
                    fill: ["rgba(6,21,28,0.99)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'contenedor',
                    type: 'image',
                    rect: ['47px', '28px','932px','464px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"contenedor.png",'0px','0px']
                }]
            },
            {
                id: 'cabezote3',
                type: 'image',
                rect: ['0px', '0px','1025px','124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cabezote.png",'0px','0px']
            },
            {
                id: 'tema1',
                display: 'none',
                type: 'group',
                rect: ['96', '95','830','478','auto', 'auto'],
                c: [
                {
                    id: 'slide1',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1',
                        type: 'text',
                        rect: ['9px', '-2px','auto','auto','auto', 'auto'],
                        text: "1. ¿QUÉ ES UN PLAN DE ACCIÓN DE MEJORA?",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'title',
                        type: 'text',
                        rect: ['19px', '110px','415px','17px','auto', 'auto'],
                        text: "1. ¿QUÉ ES UN PLAN DE ACCIÓN DE MEJORA?",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,48,63,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'papel2',
                        type: 'group',
                        rect: ['67px', '294px','681px','38px','auto', 'auto'],
                        c: [
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['-11px', '-111px','86px','85px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,134,135,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8',
                            type: 'rect',
                            rect: ['36px', '-83px','630px','230px','auto', 'auto'],
                            fill: ["rgba(0,168,169,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['-14px', '-111px','83px','81px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(89,196,198,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnSonido',
                            type: 'group',
                            rect: ['-16px', '-113px','86px','86px','auto', 'auto'],
                            cursor: ['default'],
                            userClass: "suena",
                            transform: [[],[],[],['0.79','0.79']],
                            c: [
                            {
                                id: 'sip_sound1',
                                type: 'image',
                                rect: ['2px', '0px','82px','82px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"sip_sound2.png",'0px','0px']
                            },
                            {
                                id: 'no_sound',
                                display: 'none',
                                type: 'image',
                                rect: ['0px', '0px','86px','86px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"no_sound.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contenidoCopy2',
                            type: 'text',
                            rect: ['89px', '-46px','525px','155px','auto', 'auto'],
                            text: "El Plan de acción de mejora es el instrumento que recoge y articula todas las acciones pertinentes, para que el programa mejore aquellas características que tienen mayor impacto en las prácticas vinculadas con los resultados y el logro de las competencias requeridas. Por tal motivo, éste necesita de una serie de acciones específicas, que gradualmente en el tiempo, estarán orientadas a mejorar las condiciones de calidad del programa. Cabe anotar, que cada acción debe establecer: objetivo, acciones, metas, cronograma, responsables, indicadores, recursos y un medio de verificación (monitoreo y control), en un periodo de tiempo determinado . <br><br><br><br><br><br><br><br><br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""]
                        }]
                    }]
                },
                {
                    id: 'slide1_1',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy2',
                        type: 'text',
                        rect: ['9px', '-2px','auto','auto','auto', 'auto'],
                        text: "1. ¿QUÉ ES UN PLAN DE ACCIÓN DE MEJORA?",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'contenidoCopy4',
                        type: 'text',
                        rect: ['420px', '131px','395px','337px','auto', 'auto'],
                        text: "Del mismo modo, dicho Plan permite replantear el plan o programa de formación para ajustarse a las necesidades del contexto o demandas del sector productivo, a las necesidades de formación del aprendiz o a las acciones pedagógicas y didácticas del proyecto de formación. Es por esto que una de sus cualidades es la flexibilidad, ya que se adapta a las diferentes variables de análisis.  <br><br>Por tal motivo, es fundamental situarlo en un periodo de tiempo determinado y hacer la autoevaluación de manera periódica para que se pueda ajustar a las necesidades reales, así como formularlo de manera concreta, con el fin de poder determinar las acciones a seguir y establecer su importancia o prioridad. Así como también se pueden detectar las desviaciones del plan o proyecto de formación con los resultados de la evaluación de los procesos formativos.<br><br>De esta manera, se puede decir que el Plan de acción de mejora es flexible, periódico, concreto y se ajusta a las necesidades. Es decir, tiene las siguientes características. ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    },
                    {
                        id: 'cuadro12',
                        type: 'image',
                        rect: ['-6px', '124px','403px','352px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"cuadro1.png",'0px','0px']
                    },
                    {
                        id: 'Text',
                        type: 'text',
                        rect: ['53px', '220px','290px','165px','auto', 'auto'],
                        text: "El Plan de acción de mejora se concibe como un sistema de mejoramiento continuo, debido a que está conformado por una serie de acciones interrelacionadas y planeadas, las cuales inician con la reflexión y terminan con la ejecución de acciones de mejora; para luego volver a iniciar con la autoevaluación del plan o proyecto de formación y así avanzar en el mejoramiento.",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'slide1_2',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy7',
                        type: 'text',
                        rect: ['3px', '-2px','auto','auto','auto', 'auto'],
                        text: "1. ¿QUÉ ES UN PLAN DE ACCIÓN DE MEJORA?",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'figura',
                        type: 'group',
                        rect: ['-11', '104px','849','289','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['22px', '-12px','795px','381px','auto', 'auto'],
                            opacity: 0.63238147867137,
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'figura1_',
                            type: 'image',
                            rect: ['0px', '6px','849px','289px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"figura1.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['22px', '87px','133px','75px','auto', 'auto'],
                            text: "Identificar las causas que provocan las debilidades, falencias  o  desviaciones detectadas.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['180px', '99px','133px','53px','auto', 'auto'],
                            text: "Identificar las acciones de mejora <br>a aplicar.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['364px', '102px','133px','35px','auto', 'auto'],
                            text: "Analizar <br>su viabilidad.<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text2Copy4',
                            type: 'text',
                            rect: ['700px', '82px','126px','107px','auto', 'auto'],
                            text: "Disponer de un plan de las acciones a desarrollar en un futuro; así como de un sistema de seguimiento y control de las mismas.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1)", "400", "none", "normal"]
                        },
                        {
                            id: 'Text2Copy3',
                            type: 'text',
                            rect: ['525px', '99px','133px','54px','auto', 'auto'],
                            text: "Establecer<br>prioridades en las líneas de actuación.<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1)", "400", "none", "normal"]
                        }]
                    },
                    {
                        id: 'referencia',
                        type: 'group',
                        rect: ['450px', '417px','350px','56','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['0px', '0px','356px','99.2%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy',
                            type: 'text',
                            rect: ['17px', '7px','322px','47px','auto', 'auto'],
                            text: "Figura 1. Características del Plan de acción de mejora<br>Fuente: Adaptado de Agencia Nacional de Evaluación de la Calidad y Acreditación (ANECA), 2007. <br> ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    }]
                },
                {
                    id: 'slide2',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy8',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'titleCopy3',
                        type: 'text',
                        rect: ['32px', '119px','759px','17px','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,48,63,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'papel2Copy2',
                        type: 'group',
                        rect: ['53px', '305px','681px','38px','auto', 'auto'],
                        c: [
                        {
                            id: 'EllipseCopy5',
                            type: 'ellipse',
                            rect: ['-18px', '-98px','86px','85px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,134,135,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8Copy2',
                            type: 'rect',
                            rect: ['22px', '-83px','711px','110px','auto', 'auto'],
                            fill: ["rgba(0,168,169,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy4',
                            type: 'ellipse',
                            rect: ['-21px', '-98px','83px','81px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(89,196,198,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnSonidoCopy3',
                            type: 'group',
                            rect: ['-23px', '-100px','86px','86px','auto', 'auto'],
                            cursor: ['default'],
                            userClass: "suena",
                            transform: [[],[],[],['0.79','0.79']],
                            c: [
                            {
                                id: 'sip_sound1Copy3',
                                type: 'image',
                                rect: ['2px', '0px','82px','82px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"sip_sound2.png",'0px','0px']
                            },
                            {
                                id: 'no_soundCopy3',
                                display: 'none',
                                type: 'image',
                                rect: ['0px', '0px','86px','86px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"no_sound.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contenidoCopy5',
                            type: 'text',
                            rect: ['91px', '-64px','602px','83px','auto', 'auto'],
                            text: "El Plan de acción de mejora permite optimizar el diseño, ejecución y seguimiento de un plan o proyecto de formación, con el fin de minimizar las desviaciones en su desarrollo. Es por eso que es fundamental elaborarlo con objetividad y establecer un intervalo de tiempo preciso para su realización. <br><br><br><br><br><br><br><br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""]
                        }]
                    },
                    {
                        id: 'contenidoCopy6',
                        type: 'text',
                        rect: ['89px', '367px','697px','63px','auto', 'auto'],
                        text: "Teniendo en cuenta la metodología de la Ingeniería Pedagógica (IP), la cual es en donde se relacionan las diferentes fases del diseño instruccional como un proceso sistemático, es primordial tener presentes los siguientes pasos:  ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    }]
                },
                {
                    id: 'slide2_1',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy9',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'figura2',
                        type: 'group',
                        rect: ['88px', '76px','617','388','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['-53px', '15px','759px','366px','auto', 'auto'],
                            opacity: 0.67289870648549,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'referenciaCopy',
                            type: 'group',
                            rect: ['350px', '362px','350px','56px','auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle2Copy2',
                                type: 'rect',
                                rect: ['0px', '0px','356px','80.4%','auto', 'auto'],
                                fill: ["rgba(0,169,157,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'ref1Copy2',
                                type: 'text',
                                rect: ['14px', '9px','322px','30px','auto', 'auto'],
                                text: "Figura 2. Metodología de un plan de acción de mejora acorde con la Ingeniería Pedagógica. Fuente: Propia<br><br>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                            }]
                        },
                        {
                            id: 'cuadros',
                            type: 'group',
                            rect: ['-36', '32','727','378','auto', 'auto'],
                            c: [
                            {
                                id: 'diseno',
                                type: 'image',
                                rect: ['223px', '2px','185px','261px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"diseno.png",'0px','0px']
                            },
                            {
                                id: 'implementa',
                                type: 'image',
                                rect: ['543px', '32px','184px','236px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"implementa.png",'0px','0px']
                            },
                            {
                                id: 'evalua',
                                type: 'image',
                                rect: ['383px', '101px','184px','237px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"evalua.png",'0px','0px']
                            },
                            {
                                id: 'analisis3',
                                type: 'image',
                                rect: ['4px', '0px','177px','257px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"analisis3.png",'0px','0px']
                            },
                            {
                                id: 'desarrollo',
                                type: 'image',
                                rect: ['6px', '153px','289px','238px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"desarrollo.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'numeral',
                            type: 'group',
                            rect: ['0', '0','79','78','auto', 'auto'],
                            c: [
                            {
                                id: 'numeros5png',
                                type: 'image',
                                rect: ['317px', '195px','79px','78px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"numeros5png.png",'0px','0px']
                            },
                            {
                                id: 'numeros4',
                                type: 'image',
                                rect: ['474px', '108px','79px','78px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"numeros4.png",'0px','0px']
                            },
                            {
                                id: 'numeros3',
                                type: 'image',
                                rect: ['54px', '241px','69px','68px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"numeros3.png",'0px','0px']
                            },
                            {
                                id: 'numeros2png',
                                type: 'image',
                                rect: ['147px', '98px','79px','78px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"numeros2png.png",'0px','0px']
                            },
                            {
                                id: 'numeros1',
                                type: 'image',
                                rect: ['-88px', '114px','79px','78px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"numeros1.png",'0px','0px']
                            }]
                        }]
                    }]
                },
                {
                    id: 'slide2_2',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy10',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'titleCopy5',
                        type: 'text',
                        rect: ['32px', '118px','350px','17px','auto', 'auto'],
                        text: "2.1. Identificación de los Factores a Intervenir ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,48,63,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'scroll1',
                        type: 'group',
                        rect: ['32', '167px','395px','304px','auto', 'auto'],
                        c: [
                        {
                            id: 'contenidoCopy9',
                            type: 'text',
                            rect: ['0px', '0px','364px','502px','auto', 'auto'],
                            text: "La base para estructurar un Plan de acción de mejora es la identificación de la situación problema o de la oportunidad para mejorar y sus posibles causas;  es decir, resolver qué factores requieren intervención.<br><br>Esto se determina a través del diagnóstico que puede llevarse a cabo, utilizando los registros de las diferentes evaluaciones realizadas durante la ejecución del proceso de formación, la autoevaluación del proyecto y/o las diferentes técnicas de identificación que se consideraron en la  __________   como el Árbol del problemas, el diagrama de Pareto, el ¿por qué, por qué, por qué? y la espina de pescado o una combinación de ellas.<br><br>Con la ayuda de dichas técnicas se detectan las diferentes causas que originan las desviaciones o problemas presentados en su diseño y ejecución; así como las debilidades del programa de formación, que son entendidas como aquellos factores que no permiten desarrollar el programa para la adecuada obtención de las competencias requeridas. Igualmente permite estimar las fortalezas o aquellas actividades que han potenciado el desarrollo del programa de formación.<br><br>Si en el diagnóstico se evidencian varias falencias u oportunidades se hace necesario priorizarlas, para saber qué procedimiento seguir y en algunos casos agruparlas por características similares.  <br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                        },
                        {
                            id: 'linkSemana1',
                            type: 'text',
                            rect: ['49px', '169px','87px','27px','auto', 'auto'],
                            cursor: ['pointer'],
                            text: "semana 1",
                            align: "justify",
                            font: ['Arial', 14, "rgba(5,5,5,1.00)", "600", "none", "normal"]
                        }]
                    },
                    {
                        id: 'referenciaCopy2',
                        type: 'group',
                        rect: ['453px', '426px','350px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['11px', '0px','331px','80.4%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy3',
                            type: 'text',
                            rect: ['25px', '8px','304px','30px','auto', 'auto'],
                            text: "Imagen 1. Para iniciar el diseño del Plan de acción de mejora primero se debe identificar el problema. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        },
                        {
                            id: 'img',
                            type: 'group',
                            rect: ['13', '-260px','329','254px','auto', 'auto'],
                            c: [
                            {
                                id: 'imagen_12',
                                type: 'image',
                                rect: ['0px', '-20px','329px','280px','auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"imagen_1.jpg",'0px','0px']
                            }]
                        }]
                    }]
                },
                {
                    id: 'slide2_3',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'referenciaCopy3',
                        type: 'group',
                        rect: ['438px', '425px','350px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy5',
                            type: 'rect',
                            rect: ['13px', '0px','343px','80.4%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy4',
                            display: 'block',
                            type: 'text',
                            rect: ['32px', '9px','304px','30px','auto', 'auto'],
                            text: "Imagen 2. Es importante pensar en la estrategia que se va a utilizar para el mejoramiento del problema. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Title1Copy11',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'titleCopy6',
                        type: 'text',
                        rect: ['32px', '118px','350px','17px','auto', 'auto'],
                        text: "2.2. Identificación de Ajustes Necesarios ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,48,63,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'contenido2_2',
                        type: 'text',
                        rect: ['32px', '163px','378px','307px','auto', 'auto'],
                        text: "Una vez definidas las debilidades, desviaciones o cualquier otro aspecto a mejorar en los procesos de diseño y ejecución del plan o proyecto de formación, se identifican las posibles acciones de mejora a aplicar. Si se plantean varias opciones, se deben ordenar priorizando aquella que dé solución al factor que más incida en el problema que se quiere resolver. Sin embargo, es indispensable tener presente su importancia, su pertinencia y su factibilidad; para que de esta manera se puedan establecer las acciones de mejora más adecuadas y oportunas.<br><br>Por ende, la viabilidad de las acciones de mejora dependen de diferentes factores como: tiempo de implementación, recursos disponibles asociados al problema, actores que intervienen, infraestructura y normatividad.<br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    },
                    {
                        id: 'imagen_22',
                        type: 'image',
                        rect: ['452px', '166px','341px','250px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"imagen_2.jpg",'0px','0px']
                    }]
                },
                {
                    id: 'slide2_4',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy12',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'contenidoCopy12',
                        type: 'text',
                        rect: ['32px', '101px','760px','52px','auto', 'auto'],
                        text: "Esas fortalezas y/o dificultades o debilidades se pueden listar de forma ordenada de tal manera que se pueda especificar a qué proceso pertenece, es decir, si al diseño, a la instalación y/o a la ejecución, como se observa en la siguiente tabla (Ver Tabla 1). <br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    },
                    {
                        id: 'Rectangle5',
                        type: 'rect',
                        rect: ['33px', '178px','761px','293px','auto', 'auto'],
                        opacity: 0.82025862068966,
                        fill: ["rgba(255,255,255,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'referenciaCopy4',
                        type: 'group',
                        rect: ['437px', '426px','350px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy7',
                            type: 'rect',
                            rect: ['62px', '6px','294px','69.6%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy5',
                            type: 'text',
                            rect: ['74px', '12px','267px','30px','auto', 'auto'],
                            text: "Tabla 1. Registro de fortalezas y debilidades<br>Fuente: SENA<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'tabla13',
                        type: 'image',
                        rect: ['77px', '210px','662px','205px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"tabla1.png",'0px','0px']
                    }]
                },
                {
                    id: 'slide2_5',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy13',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'contenidoCopy13',
                        type: 'text',
                        rect: ['33px', '107px','760px','38px','auto', 'auto'],
                        text: "Es conveniente establecer y registrar los riesgos o puntos críticos, debido a que pueden configurar un obstáculo para llevar a cabo las acciones que se pretenden desarrollar (Ver Tabla 2).",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    },
                    {
                        id: 'Rectangle5Copy',
                        type: 'rect',
                        rect: ['33px', '166px','761px','305px','auto', 'auto'],
                        opacity: 0.82025862068966,
                        fill: ["rgba(255,255,255,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'referenciaCopy5',
                        type: 'group',
                        rect: ['460px', '426px','389px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy8',
                            type: 'rect',
                            rect: ['26px', '6px','308px','69.6%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy6',
                            type: 'text',
                            rect: ['40px', '12px','279px','30px','auto', 'auto'],
                            text: "Tabla 2. Registro de riesgos – situación que dificultan un correcto desarrollo. Fuente: SENA<br><br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'tabla22',
                        type: 'image',
                        rect: ['65px', '250px','691px','145px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"tabla2.png",'0px','0px']
                    }]
                },
                {
                    id: 'slide2_6',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy14',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'contenidoCopy14',
                        type: 'text',
                        rect: ['19px', '101px','787px','293px','auto', 'auto'],
                        text: "Finalmente, en la tabla 3 se busca consolidar la información correspondiente a cada fase y a cada debilidad u oportunidad, y se deja claramente establecido qué acción de mejora se determina en cada caso. En el caso de que lleguen a existir varios instructores encargados del programa de formación, es indispensable saber quién es el responsable de cada acción de mejora acordada.<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>Todas las acciones y sus tiempos de ejecución deben estar consignados en un cronograma, para que se pueda visualizar de forma clara el calendario de las diferentes actividades y sus fechas de ejecución. ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    },
                    {
                        id: 'Rectangle6',
                        type: 'rect',
                        rect: ['19px', '198px','787px','222px','auto', 'auto'],
                        opacity: 0.79129849137931,
                        fill: ["rgba(255,255,255,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'referenciaCopy6',
                        type: 'group',
                        rect: ['480px', '375px','389px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy9',
                            type: 'rect',
                            rect: ['39px', '6px','287px','69.6%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy7',
                            type: 'text',
                            rect: ['41px', '11px','279px','30px','auto', 'auto'],
                            text: "Tabla 3. Registro de situaciones a mejorar y responsables. Fuente: SENA<br><br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'tabla3',
                        type: 'image',
                        rect: ['37px', '228px','753px','132px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"tabla3.png",'0px','0px']
                    }]
                },
                {
                    id: 'slide2_7',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'referenciaCopy7',
                        type: 'group',
                        rect: ['453px', '424px','350px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy11',
                            type: 'rect',
                            rect: ['11px', '0px','345px','80.4%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['29px', '9px','308px','30px','auto', 'auto'],
                            text: "Imagen 3. Es indispensable saber con qué recursos se cuenta para llevar a cabo la acción de mejoramiento. <br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Title1Copy15',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'titleCopy8',
                        type: 'text',
                        rect: ['32px', '118px','350px','17px','auto', 'auto'],
                        text: "2.3  Establecimiento de Recursos ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,48,63,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'scroll2',
                        type: 'group',
                        rect: ['32', '163','388px','307','auto', 'auto'],
                        c: [
                        {
                            id: 'contenidoCopy15',
                            type: 'text',
                            rect: ['0px', '0px','361px','307px','auto', 'auto'],
                            text: "Luego de haber definido las acciones que se llevarán a cabo para subsanar las debilidades o fortalecer las oportunidades, es indispensable disponer de los recursos y apoyos con que el instructor pretende llevar a cabo los ajustes diseñados.<br><br><br><br><br><br><br><br><br><br>Cuando se refiere a los recursos se hace alusión a:<br><br>•\tRecursos Materiales: herramientas, equipos e infraestructura.<br>•\tRecursos técnicos: las tecnologías que se utilizarán.<br>•\tRecursos didácticos: Material que facilita el desarrollo del proceso de enseñanza-aprendizaje<br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                        }]
                    },
                    {
                        id: 'Rectangle2Copy10',
                        type: 'rect',
                        rect: ['464px', '161px','344px','254px','auto', 'auto'],
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'papel2Copy5',
                        type: 'group',
                        rect: ['-34px', '352px','681px','38px','auto', 'auto'],
                        c: [
                        {
                            id: 'EllipseCopy11',
                            type: 'ellipse',
                            rect: ['28px', '-71px','86px','85px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,134,135,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8Copy5',
                            type: 'rect',
                            rect: ['67px', '-74px','364px','89px','auto', 'auto'],
                            fill: ["rgba(0,168,169,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy10',
                            type: 'ellipse',
                            rect: ['25px', '-71px','83px','81px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(89,196,198,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnSonidoCopy4',
                            type: 'group',
                            rect: ['22px', '-74px','86px','86px','auto', 'auto'],
                            cursor: ['pointer'],
                            userClass: "suena",
                            transform: [[],[],[],['0.79','0.79']],
                            c: [
                            {
                                id: 'sip_sound1Copy4',
                                type: 'image',
                                rect: ['2px', '0px','82px','82px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"sip_sound2.png",'0px','0px']
                            },
                            {
                                id: 'no_soundCopy4',
                                display: 'none',
                                type: 'image',
                                rect: ['0px', '0px','86px','86px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"no_sound.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contenidoCopy16',
                            type: 'text',
                            rect: ['124px', '-64px','290px','68px','auto', 'auto'],
                            text: "Es necesario recordar, que los recursos son todos aquellos elementos o medios, que son utilizados para realizar una actividad, lograr un fin o satisfacer una necesidad.  <br><br><br><br><br><br><br><br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""]
                        }]
                    },
                    {
                        id: 'imagen_3',
                        type: 'image',
                        rect: ['465px', '181px','344px','229px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"imagen_3.jpg",'0px','0px']
                    }]
                },
                {
                    id: 'slide2_8',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'referenciaCopy8',
                        type: 'group',
                        rect: ['437px', '424px','350px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy13',
                            type: 'rect',
                            rect: ['0px', '0px','356px','80.4%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy9',
                            type: 'text',
                            rect: ['11px', '8px','329px','30px','auto', 'auto'],
                            text: "Imagen 4. Cuando se va a llevar a cabo la acción de mejoramiento se debe cumplir con el tiempo establecido. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Title1Copy16',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'titleCopy9',
                        type: 'text',
                        rect: ['32px', '118px','350px','17px','auto', 'auto'],
                        text: "2.4  Implementación de los Ajustes Planeados  ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,48,63,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'contenidoCopy18',
                        type: 'text',
                        rect: ['32px', '244px','365px','141px','auto', 'auto'],
                        text: "Corresponde a la puesta en marcha de las acciones de mejora planeadas, las cuales requieren de un estricto cumplimiento de los tiempos acordados para su implementación. Igualmente, se han de tener en cuenta los momentos que componen un ambiente de aprendizaje como proceso pedagógico, el cual tiene secuencialidad, profundidad y adaptación a las características de los aprendices. ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    },
                    {
                        id: 'imagen_4',
                        type: 'image',
                        rect: ['437px', '177px','356px','237px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"imagen_4.jpg",'0px','0px']
                    }]
                },
                {
                    id: 'slide2_9',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'referenciaCopy9',
                        type: 'group',
                        rect: ['437px', '424px','350px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy15',
                            type: 'rect',
                            rect: ['-7px', '0px','363px','80.4%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy10',
                            type: 'text',
                            rect: ['9px', '8px','329px','30px','auto', 'auto'],
                            text: "Imagen 5. Es importante hacer un seguimiento de las acciones de mejoramiento que se implementan. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Title1Copy17',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'titleCopy10',
                        type: 'text',
                        rect: ['32px', '118px','350px','17px','auto', 'auto'],
                        text: "2.5  Evaluación ",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,48,63,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'contenidoCopy19',
                        type: 'text',
                        rect: ['32px', '178px','350px','207px','auto', 'auto'],
                        text: "Es imprescindible hacer el seguimiento y evaluación al Plan de acción de mejora, para evidenciar el cumplimiento de lo propuesto y verificar avances o dificultades en el logro de la instalación de las competencias requeridas en el programa de formación; además de que el contexto o la normatividad pueden variar; por lo que es imprescindible replantear el diseño del Plan. <br> <br>Algunas de las herramientas que ayudan a evaluar el Plan de acción de mejora se pueden mencionar: el cronograma, que sirve como herramienta de monitoreo, y el diseño de indicadores de seguimiento, los cuales permiten determinar el cumplimiento de lo definido en el Plan de acción de mejora, medir el avance o el logro de lo planeado. <br>",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", ""]
                    },
                    {
                        id: 'imagen_5',
                        type: 'image',
                        rect: ['429px', '168px','365px','250px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"imagen_5.jpg",'0px','0px']
                    }]
                },
                {
                    id: 'slide2_10',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title1Copy18',
                        type: 'text',
                        rect: ['9px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'papel2Copy8',
                        type: 'group',
                        rect: ['75px', '281px','681px','38px','auto', 'auto'],
                        c: [
                        {
                            id: 'EllipseCopy17',
                            type: 'ellipse',
                            rect: ['-11px', '-111px','86px','85px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,134,135,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8Copy8',
                            type: 'rect',
                            rect: ['36px', '-83px','630px','219px','auto', 'auto'],
                            fill: ["rgba(0,168,169,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy16',
                            type: 'ellipse',
                            rect: ['-14px', '-111px','83px','81px','auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(89,196,198,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btnSonidoCopy5',
                            type: 'group',
                            rect: ['-16px', '-114px','86px','86px','auto', 'auto'],
                            cursor: ['default'],
                            userClass: "suena",
                            transform: [[],[],[],['0.79','0.79']],
                            c: [
                            {
                                id: 'sip_sound1Copy5',
                                type: 'image',
                                rect: ['2px', '0px','82px','82px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"sip_sound2.png",'0px','0px']
                            },
                            {
                                id: 'no_soundCopy5',
                                display: 'none',
                                type: 'image',
                                rect: ['0px', '0px','86px','86px','auto', 'auto'],
                                cursor: ['pointer'],
                                fill: ["rgba(0,0,0,0)",im+"no_sound.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contenidoCopy21',
                            type: 'text',
                            rect: ['90px', '-43px','525px','155px','auto', 'auto'],
                            text: "Cabe recordar, que un indicador es una unidad de medida que relaciona variables cuantitativas o cualitativas y ayudan a controlar el progreso o el logro del objetivo planteado, en un periodo de tiempo determinado. Por lo tanto, debe tener la capacidad de medir realmente el fenómeno que se quiere medir y no otro.<br><br>Entonces, el diseñar una ruta permite concentrase en lo que se pretende mejorar u optimizar y hacer el seguimiento a la implementación del Plan de acción de mejora. A continuación se presenta un ejemplo de una posible ruta:<br><br><br><br><br><br><br><br><br>",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""]
                        }]
                    }]
                },
                {
                    id: 'slide2_11',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle7',
                        type: 'rect',
                        rect: ['32px', '91px','761px','373px','auto', 'auto'],
                        opacity: 0.78661099137931,
                        fill: ["rgba(255,255,255,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'scroll_mapa',
                        type: 'group',
                        rect: ['149px', '101px','555px','363px','auto', 'auto'],
                        c: [
                        {
                            id: 'figura323',
                            type: 'image',
                            rect: ['0px', '0px','504px','841px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"figura32.png",'0px','0px']
                        }]
                    },
                    {
                        id: 'referenciaCopy10',
                        type: 'group',
                        rect: ['460px', '420px','389px','56px','auto', 'auto'],
                        c: [
                        {
                            id: 'Rectangle2Copy16',
                            type: 'rect',
                            rect: ['16px', '6px','318px','94.6%','auto', 'auto'],
                            fill: ["rgba(0,169,157,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ref1Copy11',
                            type: 'text',
                            rect: ['37px', '13px','279px','30px','auto', 'auto'],
                            text: "Figura 3. Ejemplo de una ruta del diseño de un Plan de acción de mejora. Fuente: Aristizábal, M., Ramírez, P., Sánchez, M., 2005<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 12.4, "rgba(255,255,255,1.00)", "100", "none", "normal"]
                        }]
                    },
                    {
                        id: 'Title1Copy19',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    }]
                },
                {
                    id: 'slide2_12',
                    type: 'group',
                    rect: ['0px', '0px','830','478','auto', 'auto'],
                    c: [
                    {
                        id: 'Title2',
                        type: 'text',
                        rect: ['22px', '-2px','auto','auto','auto', 'auto'],
                        text: "2. METODOLOGÍA PARA ELABORAR UN PLAN DE ACCIÓN DE MEJORA",
                        align: "justify",
                        font: ['Arial, Helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                    },
                    {
                        id: 'Rectangle9',
                        type: 'rect',
                        rect: ['30px', '114px','276px','355px','auto', 'auto'],
                        fill: ["rgba(242,229,125,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Rectangle9Copy',
                        type: 'rect',
                        rect: ['35px', '115px','759px','354px','auto', 'auto'],
                        opacity: 0.64207974137931,
                        fill: ["rgba(232,206,103,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'final_personaje3',
                        type: 'image',
                        rect: ['-1px', '148px','774px','321px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"final_personaje3.png",'0px','0px']
                    },
                    {
                        id: 'Text4',
                        type: 'text',
                        rect: ['363px', '272px','375px','84px','auto', 'auto'],
                        text: "Finalmente, se debe tener en cuenta que el diseño de acciones, actividades o tareas que permitan disminuir la brecha entre la situación actual y la situación deseada, tienen que ir en correspondencia con las competencias a producir.<br>",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "600", "none", "normal"]
                    }]
                }]
            },
            {
                id: 'btnRefe',
                type: 'image',
                rect: ['979px', '446px','37px','36px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"btn_ref.png",'0px','0px']
            },
            {
                id: 'btnToogleSound',
                type: 'group',
                rect: ['983', '495px','37','38','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'btn_audio',
                    type: 'image',
                    rect: ['0px', '0px','37px','37px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"btn_audio.png",'0px','0px']
                },
                {
                    id: 'btn_no_audio',
                    display: 'none',
                    type: 'image',
                    rect: ['0px', '0px','37px','37px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"btn_no_audio.png",'0px','0px']
                }]
            },
            {
                id: 'estruc',
                display: 'none',
                type: 'group',
                rect: ['0', '118px','1025','528','auto', 'auto'],
                c: [
                {
                    id: 'fondo_est',
                    type: 'rect',
                    rect: ['0px', '-2px','1025px','530px','auto', 'auto'],
                    opacity: 0.84827588919936,
                    fill: ["rgba(0,39,45,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'estruc_fondo',
                    type: 'image',
                    rect: ['73px', '13px','861px','499px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"estruc_fondo2.png",'0px','0px']
                },
                {
                    id: 'cerrarCopy3',
                    display: 'none',
                    type: 'image',
                    rect: ['904px', '9px','35px','35px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"cerrar2.png",'0px','0px']
                },
                {
                    id: 'pendulo_btn_estruc',
                    type: 'image',
                    rect: ['455px', '0px','109px','305px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"pendulo_btn_estruc.png",'0px','0px']
                },
                {
                    id: 'roll_pendulo',
                    type: 'text',
                    rect: ['457px', '317px','auto','auto','auto', 'auto'],
                    text: "Estructura<br> de Aprendizaje",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'instrucciones',
                display: 'block',
                type: 'group',
                rect: ['-1', '116','1025','529','auto', 'auto'],
                c: [
                {
                    id: 'fondo_insCopy',
                    type: 'rect',
                    rect: ['0px', '0px','1025px','528px','auto', 'auto'],
                    opacity: 0.84827588919936,
                    fill: ["rgba(0,53,61,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'insCopy',
                    type: 'image',
                    rect: ['207px', '34px','589px','495px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ins.png",'0px','0px']
                },
                {
                    id: 'Text6Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['344px', '202px','356px','154px','auto', 'auto'],
                    text: "A continuación usted encontrará unos botones con los temas principales, y algunos con subtemas, de esta semana de estudio. La activación de los mismos se hará de manera consecutiva, ya que es importante que estudie un tema para comprender el siguiente, y sólo hasta finalizar su navegación le aparecerá el botón Ir al menú principal, para continuar con la lectura de los demás. <br>",
                    align: "justify",
                    font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'Text7Copy',
                    display: 'none',
                    type: 'text',
                    rect: ['344px', '169px','356px','25px','auto', 'auto'],
                    text: "Estimado Aprendiz: <br>",
                    align: "justify",
                    font: ['Arial, Helvetica, sans-serif', 15, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'cerrarCopy2',
                    type: 'image',
                    rect: ['743px', '91px','35px','35px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"cerrar.png",'0px','0px']
                }]
            },
            {
                id: 'btns',
                display: 'none',
                type: 'group',
                rect: ['492px', '594px','78','28','auto', 'auto'],
                c: [
                {
                    id: 'btn_prevCopy',
                    type: 'image',
                    rect: ['0px', '0px','28px','28px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"btn_prev2.png",'0px','0px']
                },
                {
                    id: 'btn_nextCopy',
                    type: 'image',
                    rect: ['50px', '0px','28px','28px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"btn_next2.png",'0px','0px']
                },
                {
                    id: 'cerrarCopy4',
                    display: 'none',
                    type: 'image',
                    rect: ['460px', '-457px','35px','35px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"cerrar3.png",'0px','0px']
                },
                {
                    id: 'volver_btn',
                    type: 'image',
                    rect: ['-474px', '-36px','111px','64px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"volver_btn.png",'0px','0px']
                },
                {
                    id: 'btnSonidoCopy',
                    display: 'none',
                    type: 'group',
                    rect: ['82px', '-463px','86','86','auto', 'auto'],
                    cursor: ['pointer'],
                    c: [
                    {
                        id: 'sip_sound1Copy',
                        type: 'image',
                        rect: ['2px', '0px','82px','82px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"sip_sound2.png",'0px','0px']
                    },
                    {
                        id: 'no_soundCopy',
                        type: 'image',
                        rect: ['0px', '0px','86px','86px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"no_sound.png",'0px','0px']
                    }]
                }]
            },
            {
                id: 'referecia',
                display: 'none',
                type: 'group',
                rect: ['-42', '0','1069','648','auto', 'auto'],
                c: [
                {
                    id: 'fondoCopy',
                    type: 'image',
                    rect: ['42px', '0','1027px','648px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                },
                {
                    id: 'fondo2',
                    type: 'image',
                    rect: ['159px', '75px','812px','516px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"fondo2.png",'0px','0px']
                },
                {
                    id: 'compu',
                    type: 'image',
                    rect: ['0px', '410px','311px','234px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"compu.png",'0px','0px']
                },
                {
                    id: 'bola',
                    type: 'image',
                    rect: ['14px', '460px','187px','203px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bola.png",'0px','0px']
                },
                {
                    id: 'btn_prev',
                    display: 'none',
                    type: 'image',
                    rect: ['541px', '577px','28px','28px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"btn_prev3.png",'0px','0px']
                },
                {
                    id: 'btn_next',
                    type: 'image',
                    rect: ['593px', '577px','28px','28px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"btn_next3.png",'0px','0px']
                },
                {
                    id: 'Title',
                    type: 'group',
                    rect: ['807px', '44px','195','135','auto', 'auto'],
                    c: [
                    {
                        id: 'globo',
                        type: 'image',
                        rect: ['0px', '0px','195px','135px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"globo.png",'0px','0px']
                    },
                    {
                        id: 'TextCopy',
                        type: 'text',
                        rect: ['30px', '42px','auto','auto','auto', 'auto'],
                        text: "REFERENCIAS",
                        font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "600", "none", ""],
                        transform: [[],['-2']]
                    }]
                },
                {
                    id: 'slide2Copy',
                    display: 'none',
                    type: 'group',
                    rect: ['223px', '183px','637','337','auto', 'auto'],
                    c: [
                    {
                        id: 'Group3',
                        type: 'group',
                        rect: ['40px', '-15px','572px','374','auto', 'auto'],
                        c: [
                        {
                            id: 'Text2Copy7',
                            type: 'text',
                            rect: ['0px', '0px','531px','374px','auto', 'auto'],
                            text: "Figura 1. Características del Plan de acción de mejora\t<br><br><br>Figura 2. Metodología de un plan de acción de mejora acorde con la Ingeniería Pedagógica\t<br><br><br>Figura 3. Ejemplo de una ruta del diseño de un Plan de acción de mejora\t<br><br><br>Tabla 1. Registro de fortalezas y debilidades\t<br><br><br>Tabla 2. Registro de riesgos – situación que dificultan un correcto desarrollo\t<br><br><br>Tabla 3. Registro de situaciones a mejorar  y responsables\t<br><br><br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                        }]
                    }]
                },
                {
                    id: 'slide1Copy',
                    type: 'group',
                    rect: ['287px', '200px','637','337px','auto', 'auto'],
                    c: [
                    {
                        id: 'Text2Copy5',
                        type: 'text',
                        rect: ['24px', '-30px','592px','371px','auto', 'auto'],
                        text: "Imagen 1. (s.n.). Identificación de los Factores a Intervenir. Tomada de <br><br><br><br>Imagen 2. (s.n.). Identificación de Ajustes Necesarios. Tomada de  <br><br><br><br>Imagen 3. (s.n.). Establecimiento de Recursos. <br><br><br><br>Imagen 4. (s.n.). Implementación de los Ajustes Planeados. Tomada de <br><br><br><br>Imagen 5. (s.n.). Evaluación. Tomada de <br><br><br><br><br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy5',
                        type: 'text',
                        rect: ['24px', '-11px','481px','38px','auto', 'auto'],
                        text: "http://4.bp.blogspot.com/wNIbYLmMEdk/Tf5cJY0I9I/AAAAAAAAAHo/U7TFoJlk8WI/s<br>1600/workgroup_psok_final_en.jpg",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,84,104,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy4',
                        type: 'text',
                        rect: ['24px', '58px','522px','22px','auto', 'auto'],
                        text: "http://www.proactivanet.com/blog/wp-content/uploads/2012/11/nueva-imagen-9.jpg<br><br>",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,84,104,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy3',
                        type: 'text',
                        rect: ['24px', '121px','522px','22px','auto', 'auto'],
                        text: "http://www.publicdomainpictures.net/pictures/10000/nahled/1-12551053876PIT.jpg",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,84,104,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7Copy2',
                        type: 'text',
                        rect: ['24px', '185px','448px','22px','auto', 'auto'],
                        text: "http://blogs.eafit.edu.co/eev/files/2012/08/93151881.jpg",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,84,104,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'Text7',
                        type: 'text',
                        rect: ['24px', '245px','558px','38px','auto', 'auto'],
                        text: "http://blogs.scansource.com/wp-content/uploads/2011/05/checklist_web.jpg",
                        align: "left",
                        font: ['Arial, Helvetica, sans-serif', 14, "rgba(14,84,104,1)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'cerrarREfe',
                    display: 'block',
                    type: 'image',
                    rect: ['460px', '-457px','35px','35px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"cerrar3.png",'0px','0px']
                }]
            },
            {
                id: 'estruc4',
                display: 'none',
                type: 'group',
                rect: ['0', '-71','2043','712','auto', 'auto'],
                c: [
                {
                    id: 'cosasAnima',
                    type: 'group',
                    rect: ['0', '71','1042','641','auto', 'auto'],
                    c: [
                    {
                        id: 'fondoCopy2',
                        type: 'image',
                        rect: ['0px', '0px','1024px','641px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"fondo3.png",'0px','0px']
                    },
                    {
                        id: 'carretera',
                        type: 'image',
                        rect: ['0px', '531px','1024px','109px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"carretera.png",'0px','0px']
                    },
                    {
                        id: 'casas',
                        type: 'image',
                        rect: ['685px', '311px','357px','255px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"casas.png",'0px','0px']
                    }]
                },
                {
                    id: 'carro',
                    type: 'image',
                    rect: ['5px', '518px','484px','180px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"carro.png",'0px','0px']
                },
                {
                    id: 'ani1',
                    type: 'group',
                    rect: ['0', '72','300','100','auto', 'auto'],
                    c: [
                    {
                        id: 'Rectangle',
                        type: 'rect',
                        rect: ['73px', '18px','223px','64px','auto', 'auto'],
                        fill: ["rgba(202,67,67,1.00)"],
                        stroke: [2,"rgba(255,255,255,1.00)","solid"]
                    },
                    {
                        id: 'Text4Copy',
                        type: 'text',
                        rect: ['82px', '29px','218px','43px','auto', 'auto'],
                        text: "Lea con especial <br>atención la información",
                        align: "center",
                        font: ['Arial', 18, "rgba(255,255,255,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'icono',
                        type: 'image',
                        rect: ['0px', '0px','103px','100px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"icono.png",'0px','0px']
                    }]
                },
                {
                    id: 'ani2',
                    type: 'group',
                    rect: ['371', '80','221','86','auto', 'auto'],
                    c: [
                    {
                        id: 'recuadro3',
                        type: 'image',
                        rect: ['0px', '0px','221px','86px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"recuadro32.png",'0px','0px']
                    },
                    {
                        id: 'TextCopy8',
                        type: 'text',
                        rect: ['17px', '26px','195px','15px','auto', 'auto'],
                        text: "En la cuarta",
                        align: "center",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'TextCopy6',
                        type: 'text',
                        rect: ['14px', '43px','195px','23px','auto', 'auto'],
                        text: "GUÍA DE APRENDIZAJE",
                        align: "center",
                        font: ['Arial', 14, "rgba(221,73,73,1.00)", "700", "none", ""]
                    }]
                },
                {
                    id: 'ani3',
                    type: 'group',
                    rect: ['24', '191','266','110','auto', 'auto'],
                    c: [
                    {
                        id: 'Text3Copy3',
                        type: 'text',
                        rect: ['60px', '0px','157px','21px','auto', 'auto'],
                        text: "Se trabaja con",
                        align: "center",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
                    },
                    {
                        id: 'recuadro1',
                        type: 'image',
                        rect: ['0px', '4px','266px','106px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"recuadro12.png",'0px','0px']
                    },
                    {
                        id: 'TextCopy11',
                        type: 'text',
                        rect: ['27px', '31px','24px','13px','auto', 'auto'],
                        text: "La",
                        align: "justify",
                        font: ['Arial', 14, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'TextCopy9',
                        type: 'text',
                        rect: ['47px', '33px','95px','16px','auto', 'auto'],
                        text: "COMPETENCIA",
                        align: "left",
                        font: ['Arial', 12, "rgba(221,73,73,1.00)", "700", "none", ""]
                    },
                    {
                        id: 'TextCopy10',
                        type: 'text',
                        rect: ['141px', '33px','24px','13px','auto', 'auto'],
                        text: "de:",
                        align: "justify",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'TextCopy14',
                        type: 'text',
                        rect: ['27px', '56px','218px','39px','auto', 'auto'],
                        text: "Estructurar proyectos para la formación según perfil de salida del estudiante.",
                        align: "justify",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    }]
                },
                {
                    id: 'ani4',
                    type: 'group',
                    rect: ['327', '178','305','202','auto', 'auto'],
                    c: [
                    {
                        id: 'Text3Copy2',
                        type: 'text',
                        rect: ['81px', '0px','157px','21px','auto', 'auto'],
                        text: "Para obtener los",
                        align: "center",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
                    },
                    {
                        id: 'recuadro2',
                        type: 'image',
                        rect: ['0px', '8px','305px','194px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"recuadro2.png",'0px','0px']
                    },
                    {
                        id: 'TextCopy3',
                        type: 'text',
                        rect: ['30px', '30px','190px','22px','auto', 'auto'],
                        text: "RESULTADOS DE APRENDIZAJE:<br>",
                        align: "left",
                        font: ['Arial', 12, "rgba(221,73,73,1.00)", "700", "none", ""]
                    },
                    {
                        id: 'TextCopy13',
                        type: 'text',
                        rect: ['30px', '53px','248px','114px','auto', 'auto'],
                        text: "Validar los procesos de diseño y ejecución del proyecto formativo, de acuerdo con la metodología establecida en la Ingeniería Pedagógica.<br><br>Ajustar los procesos de diseño y ejecución del proyecto formativo, de acuerdo con la metodología de la Ingeniería Pedagógica.",
                        align: "justify",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    }]
                },
                {
                    id: 'ani5',
                    type: 'group',
                    rect: ['669', '108','343','302','auto', 'auto'],
                    c: [
                    {
                        id: 'Text3Copy',
                        type: 'text',
                        rect: ['102px', '6px','157px','21px','auto', 'auto'],
                        text: "Con el fin de alcanzar <br>",
                        align: "center",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
                    },
                    {
                        id: 'recuadro3Copy',
                        type: 'image',
                        rect: ['0px', '0px','343px','302px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"recuadro3.png",'0px','0px']
                    },
                    {
                        id: 'TextCopy5',
                        type: 'text',
                        rect: ['115px', '34px','190px','15px','auto', 'auto'],
                        text: "CRITERIOS DE EVALUACIÓN:",
                        align: "center",
                        font: ['Arial', 12, "rgba(221,73,73,1.00)", "700", "none", ""]
                    },
                    {
                        id: 'TextCopy12',
                        type: 'text',
                        rect: ['39px', '34px','258px','242px','auto', 'auto'],
                        text: "\t\tLos siguientes<br><br>•  Enuncia las situaciones que han dificultado el desarrollo de los procesos de diseño y ejecución del proyecto de formación, de acuerdo con la metodología de la Ingeniería Pedagógica.<br><br>•  Realiza seguimiento a los procesos de diseño y ejecución del programa de formación teniendo en cuenta la metodología de la ingeniería pedagógica.<br><br>• Efectúa los ajustes a los procesos de diseño y ejecución del proyecto de formación, teniendo en cuenta la identificación y etapas del Plan de acción de mejora.",
                        align: "justify",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    }]
                },
                {
                    id: 'ani6',
                    type: 'group',
                    rect: ['5', '0','2038','618','auto', 'auto'],
                    c: [
                    {
                        id: 'TextCopy7',
                        type: 'text',
                        rect: ['111px', '331px','195px','15px','auto', 'auto'],
                        text: "Requiere y aborda",
                        align: "center",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "700", "none", ""]
                    },
                    {
                        id: 'TextCopy4',
                        type: 'text',
                        rect: ['114px', '356px','106px','15px','auto', 'auto'],
                        text: "El siguiente ",
                        align: "center",
                        font: ['Arial', 12, "rgba(255,255,255,1.00)", "400", "none", ""]
                    },
                    {
                        id: 'TextCopy2',
                        type: 'text',
                        rect: ['204px', '357px','82px','22px','auto', 'auto'],
                        text: "CONTENIDO:",
                        align: "left",
                        font: ['Arial', 12, "rgba(221,73,73,1.00)", "700", "none", ""]
                    },
                    {
                        id: 'mapa',
                        type: 'image',
                        rect: ['0px', '365px','711px','253px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"mapa.png",'0px','0px']
                    },
                    {
                        id: 'recuadro4',
                        type: 'image',
                        rect: ['1780px', '0px','258px','318px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"recuadro42.png",'0px','0px']
                    }]
                },
                {
                    id: 'ani7',
                    type: 'group',
                    rect: ['765', '429','209','109','auto', 'auto'],
                    cursor: ['pointer'],
                    c: [
                    {
                        id: 'nubes',
                        type: 'image',
                        rect: ['0px', '0px','209px','109px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"nubes.png",'0px','0px']
                    },
                    {
                        id: 'Text2Copy6',
                        type: 'text',
                        rect: ['76px', '49px','106px','39px','auto', 'auto'],
                        text: "PREGUNTA<br>CLAVE",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 17, "rgba(202,67,67,1.00)", "700", "none", ""]
                    }]
                },
                {
                    id: 'cerrarEstruc',
                    display: 'none',
                    type: 'image',
                    rect: ['904px', '9px','35px','35px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"cerrar2.png",'0px','0px']
                }]
            },
            {
                id: 'activi',
                display: 'block',
                type: 'group',
                rect: ['49px', '137px','936','475','auto', 'auto'],
                c: [
                {
                    id: 'fondoCopy3',
                    type: 'image',
                    rect: ['-50px', '-25px','1026px','536px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"fondo4.png",'0px','0px']
                },
                {
                    id: 'screen_1',
                    type: 'group',
                    rect: ['0px', '10px','936','465','auto', 'auto'],
                    c: [
                    {
                        id: 'casasCopy',
                        type: 'image',
                        rect: ['533px', '285px','403px','137px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"casas2.png",'0px','0px']
                    },
                    {
                        id: 'estrellas',
                        type: 'image',
                        rect: ['225px', '11px','706px','415px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"estrellas.png",'0px','0px']
                    },
                    {
                        id: 'personaje',
                        type: 'image',
                        rect: ['-54px', '225px','145px','273px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"personaje.png",'0px','0px']
                    },
                    {
                        id: 'mas_nubes',
                        type: 'image',
                        rect: ['508px', '44px','428px','160px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"mas_nubes.png",'0px','0px']
                    }]
                },
                {
                    id: 'INSTRUCCIONES',
                    type: 'group',
                    rect: ['0px', '0px','498','217','auto', 'auto'],
                    c: [
                    {
                        id: 'nubes_intro',
                        type: 'image',
                        rect: ['0px', '0px','498px','217px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"nubes_intro.png",'0px','0px']
                    },
                    {
                        id: 'TextCopy15',
                        type: 'text',
                        rect: ['195px', '56px','242px','137px','auto', 'auto'],
                        text: "Con base a la información expuesta en las cuatro (4) estructuras de aprendizaje, a continuación se presentan conocimientos requeridos para el desarrollo de las guías de aprendizaje, los cuales deberá organizar mediante un arrastre y suelte, siguiendo el orden de cada guía.",
                        align: "justify",
                        font: ['Arial', 13, "rgba(79,79,79,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'Text3Copy4',
                        type: 'text',
                        rect: ['30px', '55px','124px','53px','auto', 'auto'],
                        text: "PREGUNTA <br>CLAVE",
                        align: "center",
                        font: ['Arial', 20, "rgba(221,73,73,1.00)", "700", "none", "normal"]
                    }]
                },
                {
                    id: 'CALIFICACION',
                    type: 'group',
                    rect: ['523px', '16px','264','160','auto', 'auto'],
                    c: [
                    {
                        id: 'nuube_calificacion',
                        type: 'image',
                        rect: ['0px', '0px','258px','160px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"nuube_calificacion.png",'0px','0px']
                    },
                    {
                        id: 'Text4Copy2',
                        type: 'text',
                        rect: ['38px', '51px','182px','62px','auto', 'auto'],
                        text: "Ha realizado correctamente la actividad, ahora continúe con el estudio del último contenido.<br>",
                        align: "justify",
                        font: ['Arial', 14, "rgba(79,79,79,1)", "400", "none", "normal"]
                    },
                    {
                        id: 'boton_cerrar',
                        type: 'image',
                        rect: ['198px', '6px','66px','57px','auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ["rgba(0,0,0,0)",im+"boton_cerrar.png",'0px','0px']
                    }]
                },
                {
                    id: 'actividad',
                    type: 'group',
                    rect: ['167px', '223px','713','229','auto', 'auto'],
                    c: [
                    {
                        id: 'contenedor_frases',
                        type: 'image',
                        rect: ['451px', '0px','262px','229px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"contenedor_frases.png",'0px','0px']
                    },
                    {
                        id: 'contenedor_respuestas',
                        type: 'image',
                        rect: ['0px', '6px','424px','217px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"contenedor_respuestas.png",'0px','0px']
                    }]
                },
                {
                    id: 'FASE',
                    type: 'rect',
                    rect: ['680px', '228px','146px','220px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'camp2a',
                    type: 'rect',
                    rect: ['390px', '240px','142px','41px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,0,0,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'camp1a',
                    type: 'rect',
                    rect: ['391px', '290px','142px','41px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,0,0,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'camp3a',
                    type: 'rect',
                    rect: ['390px', '340px','142px','41px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,0,0,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'camp4a',
                    type: 'rect',
                    rect: ['389px', '391px','142px','41px','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(255,0,0,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'resp4',
                    type: 'rect',
                    rect: ['681px', '240px','142px','41px','auto', 'auto'],
                    cursor: ['move'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(92,114,212,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    c: [
                    {
                        id: 'Text5Copy3',
                        type: 'text',
                        rect: ['6px', '5px','124px','29px','auto', 'auto'],
                        text: "Plan de acción<br>de Mejora",
                        align: "center",
                        font: ['Arial', 14, "rgba(27,27,27,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'resp3',
                    type: 'rect',
                    rect: ['688px', '290px','142px','41px','auto', 'auto'],
                    cursor: ['move'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(92,114,212,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    c: [
                    {
                        id: 'Text5Copy2',
                        type: 'text',
                        rect: ['-1px', '5px','124px','29px','auto', 'auto'],
                        text: "Evidencias <br>de aprendizaje",
                        align: "center",
                        font: ['Arial', 14, "rgba(27,27,27,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'resp2',
                    type: 'rect',
                    rect: ['681px', '340px','142px','41px','auto', 'auto'],
                    cursor: ['move'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(92,114,212,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    c: [
                    {
                        id: 'Text5Copy',
                        type: 'text',
                        rect: ['7px', '6px','124px','29px','auto', 'auto'],
                        text: "Oferta y Demanda de Competencias",
                        align: "center",
                        font: ['Arial', 14, "rgba(27,27,27,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'resp1',
                    type: 'rect',
                    rect: ['678px', '391px','142px','41px','auto', 'auto'],
                    cursor: ['move'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(92,114,212,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    c: [
                    {
                        id: 'Text5',
                        type: 'text',
                        rect: ['9px', '6px','124px','29px','auto', 'auto'],
                        text: "Proyecto <br>de Formación",
                        align: "center",
                        font: ['Arial', 14, "rgba(27,27,27,1.00)", "400", "none", "normal"]
                    }]
                },
                {
                    id: 'Rectangle10',
                    type: 'rect',
                    rect: ['-55px', '-24px','1029px','533px','auto', 'auto'],
                    fill: ["rgba(0,169,157,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'cabezote3Copy',
                    type: 'image',
                    rect: ['-48px', '-138px','1025px','124px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"cabezote.png",'0px','0px']
                }]
            }],
            symbolInstances: [
            {
                id: 'indica',
                symbolName: 'indica',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_referenciaCopy6}": [
                ["style", "top", '375px'],
                ["style", "left", '480px'],
                ["style", "width", '389px']
            ],
            "${_referecia}": [
                ["style", "display", 'none']
            ],
            "${_cerrarEstruc}": [
                ["style", "display", 'none'],
                ["style", "top", '79px'],
                ["style", "left", '974px'],
                ["style", "cursor", 'pointer']
            ],
            "${_no_soundCopy4}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_TextCopy15}": [
                ["style", "line-height", '16px'],
                ["style", "width", '242px'],
                ["style", "text-align", 'justify'],
                ["style", "top", '56px'],
                ["color", "color", 'rgba(79,79,79,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '195px'],
                ["style", "font-size", '13px']
            ],
            "${_titleCopy3}": [
                ["style", "top", '119px'],
                ["style", "font-size", '14px'],
                ["style", "height", '17px'],
                ["color", "color", 'rgba(14,48,63,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '32px'],
                ["style", "width", '759px']
            ],
            "${_numeros4}": [
                ["style", "left", '474px'],
                ["style", "top", '108px']
            ],
            "${_btn_prevCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text2Copy7}": [
                ["style", "top", '0px'],
                ["style", "font-size", '14px'],
                ["style", "height", '374px'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '531px']
            ],
            "${_TextCopy8}": [
                ["style", "top", '26px'],
                ["style", "width", '195px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '15px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '17px'],
                ["style", "font-size", '12px']
            ],
            "${_FASE}": [
                ["style", "left", '680px'],
                ["style", "top", '228px']
            ],
            "${_menu}": [
                ["style", "display", 'none']
            ],
            "${_ref1Copy11}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '37px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '13px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '279px']
            ],
            "${_Title1Copy2}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '9px'],
                ["style", "font-size", '13px']
            ],
            "${_resp3}": [
                ["style", "top", '290px'],
                ["color", "background-color", 'rgba(92,114,212,0.00)'],
                ["style", "height", '41px'],
                ["style", "cursor", 'move'],
                ["style", "left", '688px'],
                ["style", "width", '142px']
            ],
            "${_slide2_2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_referenciaCopy7}": [
                ["style", "top", '424px'],
                ["style", "left", '453px'],
                ["style", "width", '350px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '102px'],
                ["style", "text-align", 'center'],
                ["style", "height", '35px'],
                ["style", "font-weight", '400'],
                ["style", "left", '364px'],
                ["style", "width", '133px']
            ],
            "${_btn_audio}": [
                ["style", "top", '0px'],
                ["style", "height", '37px'],
                ["style", "left", '0px'],
                ["style", "width", '37px']
            ],
            "${_btn_estrucCopy}": [
                ["style", "top", '545px'],
                ["style", "left", '981px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Title1Copy13}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_boton_1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Text3Copy2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '81px'],
                ["style", "width", '157px']
            ],
            "${_roll_pendulo}": [
                ["style", "top", '317px'],
                ["style", "left", '457px'],
                ["style", "text-align", 'center']
            ],
            "${_mapa}": [
                ["style", "left", '0px'],
                ["style", "top", '365px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '82px'],
                ["style", "text-align", 'center'],
                ["style", "height", '107px'],
                ["style", "font-weight", '400'],
                ["style", "left", '700px'],
                ["style", "width", '126px']
            ],
            "${_estruc_fondo}": [
                ["style", "left", '73px'],
                ["style", "top", '13px']
            ],
            "${_personaje}": [
                ["style", "top", '225px'],
                ["style", "left", '-54px'],
                ["style", "-webkit-transform-origin", [0,98], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,98],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_contenidoCopy2}": [
                ["style", "line-height", '18px'],
                ["style", "width", '525px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '155px'],
                ["style", "top", '-46px'],
                ["style", "left", '89px'],
                ["style", "font-size", '14px']
            ],
            "${_TextCopy14}": [
                ["style", "top", '56px'],
                ["style", "font-size", '12px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '27px'],
                ["style", "width", '218px']
            ],
            "${_numeros3}": [
                ["style", "top", '241px'],
                ["style", "height", '68px'],
                ["style", "left", '54px'],
                ["style", "width", '69px']
            ],
            "${_palo_btn2}": [
                ["style", "left", '244px'],
                ["style", "top", '364px']
            ],
            "${_slide2_12}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_EllipseCopy5}": [
                ["style", "top", '-98px'],
                ["style", "height", '85px'],
                ["color", "background-color", 'rgba(0,134,135,1)'],
                ["style", "left", '-18px'],
                ["style", "width", '86px']
            ],
            "${_Text4}": [
                ["style", "top", '272px'],
                ["style", "text-align", 'center'],
                ["style", "height", '84px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '363px'],
                ["style", "font-size", '14px']
            ],
            "${_titleCopy9}": [
                ["style", "top", '118px'],
                ["style", "font-size", '14px'],
                ["style", "height", '17px'],
                ["color", "color", 'rgba(14,48,63,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '32px'],
                ["style", "width", '350px']
            ],
            "${_imagen_5}": [
                ["style", "left", '429px'],
                ["style", "top", '168px']
            ],
            "${_bola}": [
                ["style", "left", '14px'],
                ["style", "top", '460px']
            ],
            "${_imagen_22}": [
                ["style", "left", '452px'],
                ["style", "top", '166px']
            ],
            "${_slide2_5}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_cabezote3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text7}": [
                ["style", "height", '38px'],
                ["style", "top", '245px'],
                ["style", "left", '24px'],
                ["style", "width", '558px']
            ],
            "${_Rectangle10}": [
                ["style", "left", '-55px'],
                ["color", "background-color", 'rgba(0,169,157,1)']
            ],
            "${_titleCopy6}": [
                ["style", "top", '118px'],
                ["style", "font-size", '14px'],
                ["style", "height", '17px'],
                ["color", "color", 'rgba(14,48,63,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '32px'],
                ["style", "width", '350px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(202,67,67,1)'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '18px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '223px']
            ],
            "${_slide1_2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sip_sound1Copy5}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer']
            ],
            "${_tabla22}": [
                ["style", "left", '65px'],
                ["style", "top", '250px']
            ],
            "${_resp1}": [
                ["style", "top", '391px'],
                ["color", "background-color", 'rgba(92,114,212,0.00)'],
                ["style", "height", '41px'],
                ["style", "cursor", 'move'],
                ["style", "left", '678px'],
                ["style", "width", '142px']
            ],
            "${_Title1Copy20}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '9px'],
                ["style", "font-size", '13px']
            ],
            "${_btn_no_audio}": [
                ["style", "top", '0px'],
                ["style", "height", '37px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '37px']
            ],
            "${_btns}": [
                ["style", "top", '594px'],
                ["style", "display", 'none']
            ],
            "${_papel2Copy5}": [
                ["style", "height", '38px'],
                ["style", "top", '352px'],
                ["style", "left", '-34px'],
                ["style", "width", '681px']
            ],
            "${_TextCopy9}": [
                ["color", "color", 'rgba(221,73,73,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '47px'],
                ["style", "font-size", '12px'],
                ["style", "top", '33px'],
                ["style", "text-align", 'left'],
                ["style", "height", '16px'],
                ["style", "font-family", 'Arial'],
                ["style", "width", '95px']
            ],
            "${_tabla13}": [
                ["style", "left", '77px'],
                ["style", "top", '210px']
            ],
            "${_linkSemana1}": [
                ["style", "line-height", 'normal'],
                ["color", "color", 'rgba(5,5,5,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '49px'],
                ["style", "font-size", '15px'],
                ["style", "top", '169px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'Arial'],
                ["style", "width", '87px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text2}": [
                ["style", "top", '87px'],
                ["style", "text-align", 'center'],
                ["style", "height", '75px'],
                ["style", "font-weight", '400'],
                ["style", "left", '22px'],
                ["style", "width", '133px']
            ],
            "${_mas_nubes}": [
                ["style", "top", '44px'],
                ["style", "left", '508px']
            ],
            "${_btnSonidoCopy}": [
                ["style", "display", 'none'],
                ["style", "top", '-463px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '82px']
            ],
            "${_sip_sound1Copy3}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text4Copy}": [
                ["style", "top", '29px'],
                ["style", "width", '218px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '43px'],
                ["style", "font-weight", '400'],
                ["style", "left", '82px'],
                ["style", "font-size", '18px']
            ],
            "${_INSTRUCCIONES}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_carro}": [
                ["style", "left", '5px'],
                ["style", "top", '518px']
            ],
            "${_numeros1}": [
                ["style", "left", '-88px'],
                ["style", "top", '114px']
            ],
            "${_btnSonidoCopy3}": [
                ["style", "top", '-100px'],
                ["transform", "scaleY", '0.79'],
                ["transform", "scaleX", '0.79'],
                ["style", "left", '-23px'],
                ["style", "cursor", 'default']
            ],
            "${_casas}": [
                ["style", "top", '311px'],
                ["style", "left", '685px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_contenidoCopy23}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '525px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '155px'],
                ["style", "top", '-46px'],
                ["style", "left", '89px'],
                ["style", "font-size", '14px']
            ],
            "${_bombillo_btn22}": [
                ["style", "top", '0px'],
                ["style", "left", '93px'],
                ["style", "-webkit-transform-origin", [50,101], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_chulin}": [
                ["style", "top", '367px'],
                ["style", "left", '256px'],
                ["style", "display", 'none']
            ],
            "${_contenidoCopy13}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "font-size", '14px'],
                ["style", "height", '38px'],
                ["style", "top", '107px'],
                ["style", "left", '33px'],
                ["style", "width", '760px']
            ],
            "${_ref1Copy5}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '74px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '12px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '267px']
            ],
            "${_slide2_10}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text7Copy3}": [
                ["style", "height", '22px'],
                ["style", "top", '121px'],
                ["style", "left", '24px'],
                ["style", "width", '522px']
            ],
            "${_carretera}": [
                ["style", "left", '0px'],
                ["style", "top", '531px']
            ],
            "${_Text7Copy2}": [
                ["style", "top", '185px'],
                ["style", "left", '24px'],
                ["style", "width", '448px']
            ],
            "${_no_soundCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_slide2_11}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text}": [
                ["style", "top", '220px'],
                ["style", "height", '165px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "line-height", '18px'],
                ["style", "left", '53px'],
                ["style", "width", '290px']
            ],
            "${_ref1Copy6}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '40px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '12px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '279px']
            ],
            "${_recuadro1}": [
                ["style", "top", '4px'],
                ["style", "left", '0px']
            ],
            "${_Title}": [
                ["style", "top", '44px'],
                ["style", "left", '807px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_fondoCopy}": [
                ["style", "left", '42px']
            ],
            "${_bola_izq3}": [
                ["style", "left", '0px'],
                ["style", "top", '255px']
            ],
            "${_Rectangle2Copy5}": [
                ["style", "top", '0px'],
                ["style", "height", '80.36%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '13px'],
                ["style", "width", '343px']
            ],
            "${_figura2}": [
                ["style", "left", '88px'],
                ["style", "top", '76px']
            ],
            "${_TextCopy5}": [
                ["color", "color", 'rgba(221,73,73,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '115px'],
                ["style", "width", '190px'],
                ["style", "top", '34px'],
                ["style", "text-align", 'center'],
                ["style", "height", '15px'],
                ["style", "font-family", 'Arial'],
                ["style", "font-size", '12px']
            ],
            "${_btnSonidoCopy5}": [
                ["style", "top", '-114px'],
                ["transform", "scaleY", '0.79'],
                ["transform", "scaleX", '0.79'],
                ["style", "left", '-16px'],
                ["style", "cursor", 'default']
            ],
            "${_Title1Copy10}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_ref1Copy2}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '14px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '9px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '322px']
            ],
            "${_btnRefe}": [
                ["style", "top", '446px'],
                ["style", "height", '36px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '979px'],
                ["style", "width", '37px']
            ],
            "${_contenido2_2}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "font-size", '14px'],
                ["style", "height", '307px'],
                ["style", "top", '163px'],
                ["style", "left", '32px'],
                ["style", "width", '378px']
            ],
            "${_btn_next}": [
                ["style", "top", '577px'],
                ["style", "left", '593px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btnToogleSound}": [
                ["style", "top", '495px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle2Copy15}": [
                ["style", "top", '0px'],
                ["style", "height", '80.36%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '-7px'],
                ["style", "width", '363px']
            ],
            "${_slide1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '99px'],
                ["style", "text-align", 'center'],
                ["style", "height", '54px'],
                ["style", "font-weight", '400'],
                ["style", "left", '525px'],
                ["style", "width", '133px']
            ],
            "${_referenciaCopy}": [
                ["style", "top", '362px'],
                ["style", "left", '350px'],
                ["style", "width", '350px']
            ],
            "${_nubes}": [
                ["style", "top", '0px'],
                ["style", "height", '109px'],
                ["style", "left", '0px'],
                ["style", "width", '209px']
            ],
            "${_TextCopy3}": [
                ["color", "color", 'rgba(221,73,73,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '30px'],
                ["style", "font-size", '12px'],
                ["style", "top", '30px'],
                ["style", "text-align", 'left'],
                ["style", "height", '22px'],
                ["style", "font-family", 'Arial'],
                ["style", "width", '190px']
            ],
            "${_scroll2}": [
                ["style", "overflow", 'auto'],
                ["style", "width", '388px']
            ],
            "${_img}": [
                ["style", "top", '-260px'],
                ["style", "height", '254px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cuadro12}": [
                ["style", "top", '124px'],
                ["style", "height", '352px'],
                ["style", "left", '-6px'],
                ["style", "width", '403px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '198px'],
                ["style", "height", '222px'],
                ["style", "opacity", '0.79129849137931'],
                ["style", "left", '19px'],
                ["style", "width", '787px']
            ],
            "${_scroll1}": [
                ["style", "top", '167px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '304px'],
                ["style", "width", '395px']
            ],
            "${_EllipseCopy4}": [
                ["style", "top", '-98px'],
                ["style", "height", '81px'],
                ["color", "background-color", 'rgba(89,196,198,1)'],
                ["style", "left", '-21px'],
                ["style", "width", '83px']
            ],
            "${_roll2}": [
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [45,91], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [45,91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [45,91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [45,91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [45,91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [45,91],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '316px'],
                ["style", "top", '148px']
            ],
            "${_Title1Copy19}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_Text5Copy2}": [
                ["style", "top", '5px'],
                ["color", "color", 'rgba(27,27,27,1)'],
                ["style", "left", '-1px'],
                ["style", "text-align", 'center']
            ],
            "${_recuadro3Copy}": [
                ["style", "height", '302px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '343px']
            ],
            "${_referencia}": [
                ["style", "top", '417px'],
                ["style", "left", '450px'],
                ["style", "width", '350px']
            ],
            "${_estrellas}": [
                ["style", "left", '225px'],
                ["style", "top", '11px']
            ],
            "${_nubes_intro}": [
                ["style", "top", '0px'],
                ["style", "height", '217px'],
                ["style", "-webkit-transform-origin", [50,37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "width", '498px']
            ],
            "${_insCopy}": [
                ["style", "left", '207px'],
                ["style", "top", '34px']
            ],
            "${_slide2_9}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_figura323}": [
                ["style", "top", '0px'],
                ["style", "height", '841px'],
                ["style", "left", '0px'],
                ["style", "width", '504px']
            ],
            "${_actividad}": [
                ["style", "left", '167px'],
                ["style", "top", '223px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '202px'],
                ["style", "font-size", '15px'],
                ["style", "line-height", '19px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "display", 'none'],
                ["style", "height", '154px'],
                ["style", "left", '344px'],
                ["style", "width", '356px']
            ],
            "${_implementa}": [
                ["style", "left", '543px'],
                ["style", "top", '32px']
            ],
            "${_EllipseCopy16}": [
                ["style", "top", '-111px'],
                ["style", "height", '81px'],
                ["color", "background-color", 'rgba(89,196,198,1)'],
                ["style", "left", '-14px'],
                ["style", "width", '83px']
            ],
            "${_CALIFICACION}": [
                ["style", "left", '523px'],
                ["style", "top", '16px']
            ],
            "${_imagen_12}": [
                ["style", "top", '-20px'],
                ["style", "height", '280px'],
                ["style", "left", '0px'],
                ["style", "width", '329px']
            ],
            "${_analisis3}": [
                ["style", "left", '4px'],
                ["style", "top", '0px']
            ],
            "${_TextCopy}": [
                ["style", "top", '42px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "font-weight", '600'],
                ["style", "left", '30px'],
                ["style", "font-size", '18px']
            ],
            "${_contenidoCopy18}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "font-size", '14px'],
                ["style", "height", '141px'],
                ["style", "top", '244px'],
                ["style", "left", '32px'],
                ["style", "width", '365px']
            ],
            "${_no_soundCopy3}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_referenciaCopy9}": [
                ["style", "top", '424px'],
                ["style", "left", '437px'],
                ["style", "width", '350px']
            ],
            "${_Text3Copy4}": [
                ["style", "top", '55px'],
                ["style", "text-align", 'center'],
                ["style", "height", '53px'],
                ["color", "color", 'rgba(221,73,73,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '30px'],
                ["style", "font-size", '20px']
            ],
            "${_estruc4}": [
                ["style", "display", 'none']
            ],
            "${_Title2}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_slide2_6}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_instrucciones}": [
                ["style", "display", 'block']
            ],
            "${_contenidoCopy12}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "width", '760px'],
                ["style", "height", '52px'],
                ["style", "top", '101px'],
                ["style", "left", '32px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "height", '305px'],
                ["style", "opacity", '0.820258617401123'],
                ["style", "top", '166px']
            ],
            "${_Rectangle2Copy10}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '464px'],
                ["style", "width", '344px']
            ],
            "${_ref1Copy4}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '32px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '9px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "display", 'block'],
                ["style", "width", '304px']
            ],
            "${_papel2}": [
                ["style", "height", '38px'],
                ["style", "top", '294px'],
                ["style", "left", '67px'],
                ["style", "width", '681px']
            ],
            "${_ref1Copy7}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '41px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '11px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '279px']
            ],
            "${_sip_sound1}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer']
            ],
            "${_slide1Copy}": [
                ["style", "top", '200px'],
                ["style", "left", '287px']
            ],
            "${_cerrarCopy4}": [
                ["style", "display", 'none'],
                ["style", "top", '-457px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '460px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '644px'],
                ["style", "width", '1024px']
            ],
            "${_Rectangle2Copy11}": [
                ["style", "top", '0px'],
                ["style", "height", '80.36%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '11px'],
                ["style", "width", '345px']
            ],
            "${_ref1Copy9}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '11px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '8px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '329px']
            ],
            "${_contenidoCopy20}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '602px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '83px'],
                ["style", "top", '-64px'],
                ["style", "left", '91px'],
                ["style", "font-size", '14px']
            ],
            "${_pinon1}": [
                ["style", "left", '-36px'],
                ["style", "top", '353px']
            ],
            "${_EllipseCopy11}": [
                ["style", "top", '-71px'],
                ["style", "height", '85px'],
                ["color", "background-color", 'rgba(0,134,135,1)'],
                ["style", "left", '28px'],
                ["style", "width", '86px']
            ],
            "${_mano_btn1}": [
                ["style", "left", '27px'],
                ["style", "top", '293px']
            ],
            "${_EllipseCopy17}": [
                ["style", "top", '-111px'],
                ["style", "height", '85px'],
                ["color", "background-color", 'rgba(0,134,135,1)'],
                ["style", "left", '-11px'],
                ["style", "width", '86px']
            ],
            "${_Text7Copy}": [
                ["style", "top", '169px'],
                ["style", "font-size", '15px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "display", 'none'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '344px'],
                ["style", "width", '356px']
            ],
            "${_Rectangle2Copy16}": [
                ["style", "top", '6px'],
                ["style", "height", '94.64%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '16px'],
                ["style", "width", '318px']
            ],
            "${_Rectangle7}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.78661099137931'],
                ["style", "top", '91px'],
                ["style", "height", '373px']
            ],
            "${_contenidoCopy21}": [
                ["style", "line-height", '18px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '155px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "top", '-43px'],
                ["style", "left", '90px'],
                ["style", "width", '525px']
            ],
            "${_no_soundCopy5}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text4Copy2}": [
                ["style", "height", '62px'],
                ["style", "top", '51px'],
                ["style", "left", '38px'],
                ["style", "width", '182px']
            ],
            "${_evalua}": [
                ["style", "left", '383px'],
                ["style", "top", '101px']
            ],
            "${_screen_1}": [
                ["style", "left", '0px'],
                ["style", "top", '10px']
            ],
            "${_bola_der2}": [
                ["style", "left", '612px'],
                ["style", "top", '0px']
            ],
            "${_TextCopy13}": [
                ["style", "top", '53px'],
                ["style", "width", '248px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '114px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '30px'],
                ["style", "font-size", '12px']
            ],
            "${_ref1Copy10}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '9px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '8px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '329px']
            ],
            "${_slide2_3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_activi}": [
                ["style", "top", '137px'],
                ["style", "left", '49px'],
                ["style", "display", 'block']
            ],
            "${_ref1Copy3}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '25px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '8px'],
                ["style", "text-align", 'center'],
                ["style", "height", '30px'],
                ["style", "width", '304px']
            ],
            "${_slide2Copy}": [
                ["style", "top", '183px'],
                ["style", "left", '223px'],
                ["style", "display", 'none']
            ],
            "${_pinon2}": [
                ["style", "top", '168px'],
                ["transform", "rotateZ", '-11deg'],
                ["style", "height", '86px'],
                ["style", "left", '629px'],
                ["style", "width", '86px']
            ],
            "${_titleCopy5}": [
                ["style", "top", '118px'],
                ["style", "width", '350px'],
                ["color", "color", 'rgba(14,48,63,1)'],
                ["style", "height", '17px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '32px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle8}": [
                ["style", "top", '-83px'],
                ["style", "height", '230px'],
                ["color", "background-color", 'rgba(0,168,169,1)'],
                ["style", "left", '36px'],
                ["style", "width", '630px']
            ],
            "${_compu}": [
                ["style", "top", '410px'],
                ["style", "left", '0px']
            ],
            "${_Title1Copy17}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_recuadro4}": [
                ["style", "top", '0px'],
                ["style", "left", '1780px'],
                ["style", "height", '318px']
            ],
            "${_fondoCopy2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_camp1a}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '41px'],
                ["style", "top", '290px'],
                ["style", "left", '391px'],
                ["style", "width", '142px']
            ],
            "${_sip_sound1Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer']
            ],
            "${_numeros2png}": [
                ["style", "left", '147px'],
                ["style", "top", '98px']
            ],
            "${_fondo_est}": [
                ["color", "background-color", 'rgba(0,39,45,1)'],
                ["style", "height", '530px'],
                ["style", "opacity", '0.848275899887085'],
                ["style", "left", '0px'],
                ["style", "top", '-2px']
            ],
            "${_camp3a}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '41px'],
                ["style", "top", '340px'],
                ["style", "left", '390px'],
                ["style", "width", '142px']
            ],
            "${_Rectangle9Copy}": [
                ["color", "background-color", 'rgba(232,206,103,1.00)'],
                ["style", "top", '115px'],
                ["style", "height", '354px'],
                ["style", "opacity", '0.64207974137931'],
                ["style", "left", '35px'],
                ["style", "width", '759px']
            ],
            "${_Rectangle2Copy7}": [
                ["style", "top", '6px'],
                ["style", "height", '69.64%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '62px'],
                ["style", "width", '294px']
            ],
            "${_Title1Copy14}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_imagen_4}": [
                ["style", "top", '177px'],
                ["style", "height", '237px'],
                ["style", "left", '437px'],
                ["style", "width", '356px']
            ],
            "${_Rectangle5}": [
                ["style", "opacity", '0.82025862068966']
            ],
            "${_Title1Copy11}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_referenciaCopy10}": [
                ["style", "top", '420px'],
                ["style", "left", '460px'],
                ["style", "width", '389px']
            ],
            "${_desarrollo}": [
                ["style", "top", '153px'],
                ["style", "left", '6px']
            ],
            "${_camp2a}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '41px'],
                ["style", "top", '240px'],
                ["style", "left", '390px'],
                ["style", "width", '142px']
            ],
            "${_Title1Copy18}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '9px'],
                ["style", "font-size", '13px']
            ],
            "${_sip_sound1Copy4}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["style", "cursor", 'pointer']
            ],
            "${_papel2Copy2}": [
                ["style", "top", '305px'],
                ["style", "height", '38px'],
                ["style", "left", '53px'],
                ["style", "width", '681px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '15px'],
                ["style", "opacity", '0.67289870648549'],
                ["style", "left", '-53px'],
                ["style", "height", '366px']
            ],
            "${_contenedor_respuestas}": [
                ["style", "left", '0px'],
                ["style", "top", '6px']
            ],
            "${_camp4a}": [
                ["color", "background-color", 'rgba(255,0,0,0.00)'],
                ["style", "height", '41px'],
                ["style", "top", '391px'],
                ["style", "left", '389px'],
                ["style", "width", '142px']
            ],
            "${_btn_insCopy}": [
                ["style", "top", '596px'],
                ["style", "left", '982px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Title1Copy9}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_EllipseCopy10}": [
                ["style", "top", '-71px'],
                ["style", "height", '81px'],
                ["color", "background-color", 'rgba(89,196,198,1)'],
                ["style", "left", '25px'],
                ["style", "width", '83px']
            ],
            "${_TextCopy12}": [
                ["style", "top", '34px'],
                ["style", "font-size", '12px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '242px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '39px'],
                ["style", "width", '258px']
            ],
            "${_volver_btn}": [
                ["style", "top", '-36px'],
                ["style", "left", '-474px'],
                ["style", "cursor", 'pointer']
            ],
            "${_referenciaCopy8}": [
                ["style", "top", '424px'],
                ["style", "left", '437px'],
                ["style", "width", '350px']
            ],
            "${_chulinCopy}": [
                ["style", "top", '317px'],
                ["style", "left", '11px'],
                ["style", "display", 'none']
            ],
            "${_papel2Copy8}": [
                ["style", "top", '281px'],
                ["style", "height", '38px'],
                ["style", "left", '75px'],
                ["style", "width", '681px']
            ],
            "${_TextCopy7}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '111px'],
                ["style", "font-size", '12px'],
                ["style", "top", '331px'],
                ["style", "text-align", 'center'],
                ["style", "height", '15px'],
                ["style", "font-family", 'Arial'],
                ["style", "width", '195px']
            ],
            "${_resp4}": [
                ["style", "top", '240px'],
                ["color", "background-color", 'rgba(92,114,212,0.00)'],
                ["style", "height", '41px'],
                ["style", "cursor", 'move'],
                ["style", "left", '681px'],
                ["style", "width", '142px']
            ],
            "${_fondo_contenedor}": [
                ["style", "top", '-2px'],
                ["style", "height", '530px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(6,21,28,0.9922)']
            ],
            "${_recuadro2}": [
                ["style", "height", '194px'],
                ["style", "top", '8px'],
                ["style", "left", '0px'],
                ["style", "width", '305px']
            ],
            "${_ref1Copy}": [
                ["style", "line-height", '14px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '17px'],
                ["style", "font-size", '12.4px'],
                ["style", "top", '7px'],
                ["style", "text-align", 'center'],
                ["style", "height", '47px'],
                ["style", "width", '322px']
            ],
            "${_boton_cerrar}": [
                ["style", "top", '6px'],
                ["style", "left", '198px'],
                ["style", "cursor", 'pointer']
            ],
            "${_referenciaCopy5}": [
                ["style", "top", '426px'],
                ["style", "left", '460px'],
                ["style", "width", '389px']
            ],
            "${_Title1Copy7}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '3px'],
                ["style", "font-size", '13px']
            ],
            "${_TextCopy11}": [
                ["style", "top", '31px'],
                ["style", "width", '24px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '13px'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '27px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "top", '0px'],
                ["style", "height", '80.36%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '11px'],
                ["style", "width", '331px']
            ],
            "${_cabezote3Copy}": [
                ["style", "left", '-48px'],
                ["style", "top", '-138px']
            ],
            "${_Text3}": [
                ["style", "left", '29px'],
                ["style", "top", '9px']
            ],
            "${_slide2_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_contenidoCopy5}": [
                ["style", "line-height", '18px'],
                ["style", "font-size", '14px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '83px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "top", '-64px'],
                ["style", "left", '91px'],
                ["style", "width", '602px']
            ],
            "${_cerrarCopy2}": [
                ["style", "top", '91px'],
                ["style", "left", '743px'],
                ["style", "cursor", 'pointer']
            ],
            "${_tema1}": [
                ["style", "display", 'none']
            ],
            "${_Rectangle9}": [
                ["color", "background-color", 'rgba(242,229,125,1.00)'],
                ["style", "height", '355px'],
                ["style", "top", '114px'],
                ["style", "left", '30px'],
                ["style", "width", '276px']
            ],
            "${_figura1_}": [
                ["style", "top", '6px'],
                ["style", "left", '0px'],
                ["style", "width", '849px']
            ],
            "${_enchufe12}": [
                ["style", "top", '165px'],
                ["style", "left", '-166px'],
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_nuube_calificacion}": [
                ["style", "top", '0px'],
                ["style", "height", '160px'],
                ["style", "left", '0px'],
                ["style", "width", '258px']
            ],
            "${_contenedor}": [
                ["style", "left", '47px'],
                ["style", "top", '28px']
            ],
            "${_Rectangle2Copy8}": [
                ["style", "top", '6px'],
                ["style", "height", '69.64%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '26px'],
                ["style", "width", '308px']
            ],
            "${_boton2}": [
                ["style", "-webkit-transform-origin", [50,93], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,93],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_resp2}": [
                ["style", "top", '340px'],
                ["color", "background-color", 'rgba(92,114,212,0.00)'],
                ["style", "height", '41px'],
                ["style", "cursor", 'move'],
                ["style", "left", '681px'],
                ["style", "width", '142px']
            ],
            "${_Text2Copy5}": [
                ["style", "top", '-30px'],
                ["style", "font-size", '14px'],
                ["style", "height", '371px'],
                ["style", "font-weight", '400'],
                ["style", "left", '24px'],
                ["style", "width", '592px']
            ],
            "${_fondo1}": [
                ["style", "left", '3px']
            ],
            "${_contenidoCopy15}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "width", '361px'],
                ["style", "height", '307px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_referenciaCopy3}": [
                ["style", "top", '425px'],
                ["style", "left", '438px'],
                ["style", "width", '350px']
            ],
            "${_Text2Copy6}": [
                ["style", "line-height", '18px'],
                ["color", "color", 'rgba(202,67,67,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '76px'],
                ["style", "font-size", '17px'],
                ["style", "top", '49px'],
                ["style", "text-align", 'center'],
                ["style", "height", '39px'],
                ["style", "width", '106px']
            ],
            "${_Rectangle2Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '99.16%'],
                ["color", "background-color", 'rgba(0,169,157,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '356px']
            ],
            "${_contenidoCopy19}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "width", '350px'],
                ["style", "height", '207px'],
                ["style", "top", '178px'],
                ["style", "left", '32px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle8Copy2}": [
                ["style", "top", '-83px'],
                ["style", "height", '110px'],
                ["color", "background-color", 'rgba(0,168,169,1)'],
                ["style", "left", '22px'],
                ["style", "width", '711px']
            ],
            "${_Rectangle2Copy13}": [
                ["style", "top", '0px'],
                ["style", "height", '80.36%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '0px'],
                ["style", "width", '356px']
            ],
            "${_cerrarCopy3}": [
                ["style", "display", 'none'],
                ["style", "left", '904px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '9px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '99px'],
                ["style", "text-align", 'center'],
                ["style", "height", '53px'],
                ["style", "font-weight", '400'],
                ["style", "left", '180px'],
                ["style", "width", '133px']
            ],
            "${_slide2_7}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_slide2_4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_TextCopy6}": [
                ["color", "color", 'rgba(221,73,73,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '14px'],
                ["style", "width", '195px'],
                ["style", "top", '43px'],
                ["style", "text-align", 'center'],
                ["style", "height", '23px'],
                ["style", "font-family", 'Arial'],
                ["style", "font-size", '14px']
            ],
            "${_imagen_3}": [
                ["style", "left", '465px'],
                ["style", "top", '181px']
            ],
            "${_TextCopy4}": [
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '114px'],
                ["style", "width", '106px'],
                ["style", "top", '356px'],
                ["style", "text-align", 'center'],
                ["style", "height", '15px'],
                ["style", "font-family", 'Arial'],
                ["style", "font-size", '12px']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '60px'],
                ["style", "width", '157px']
            ],
            "${_EllipseCopy}": [
                ["style", "top", '-111px'],
                ["style", "height", '85px'],
                ["color", "background-color", 'rgba(0,134,135,1)'],
                ["style", "left", '-11px'],
                ["style", "width", '86px']
            ],
            "${_fondo_insCopy}": [
                ["color", "background-color", 'rgba(0,53,61,1.00)'],
                ["style", "height", '528px'],
                ["style", "opacity", '0.848275899887085'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text7Copy5}": [
                ["style", "height", '38px'],
                ["style", "top", '-11px'],
                ["style", "left", '24px'],
                ["style", "width", '481px']
            ],
            "${_pendulo_btn_estruc}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '455px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px']
            ],
            "${_fondoCopy3}": [
                ["style", "top", '-25px'],
                ["style", "height", '536px'],
                ["style", "left", '-50px'],
                ["style", "width", '1026px']
            ],
            "${_tabla3}": [
                ["style", "left", '37px'],
                ["style", "top", '228px']
            ],
            "${_Rectangle8Copy5}": [
                ["style", "top", '-74px'],
                ["style", "height", '89px'],
                ["color", "background-color", 'rgba(0,168,169,1)'],
                ["style", "left", '67px'],
                ["style", "width", '364px']
            ],
            "${_Ellipse}": [
                ["style", "top", '-111px'],
                ["style", "height", '81px'],
                ["color", "background-color", 'rgba(89,196,198,1)'],
                ["style", "left", '-14px'],
                ["style", "width", '83px']
            ],
            "${_slide1_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_final_personaje3}": [
                ["style", "left", '-1px'],
                ["style", "top", '148px']
            ],
            "${_contenidoCopy4}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "width", '395px'],
                ["style", "height", '337px'],
                ["style", "top", '131px'],
                ["style", "left", '420px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle8Copy8}": [
                ["style", "top", '-83px'],
                ["style", "height", '219px'],
                ["color", "background-color", 'rgba(0,168,169,1)'],
                ["style", "left", '36px'],
                ["style", "width", '630px']
            ],
            "${_estruc}": [
                ["style", "display", 'none'],
                ["style", "top", '118px']
            ],
            "${_globo}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_casasCopy}": [
                ["style", "left", '533px'],
                ["style", "top", '285px']
            ],
            "${_titleCopy8}": [
                ["style", "top", '118px'],
                ["style", "width", '350px'],
                ["color", "color", 'rgba(14,48,63,1)'],
                ["style", "height", '17px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '32px'],
                ["style", "font-size", '14px']
            ],
            "${_diseno}": [
                ["style", "left", '223px'],
                ["style", "top", '2px']
            ],
            "${_boton_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_referenciaCopy2}": [
                ["style", "top", '426px'],
                ["style", "left", '453px'],
                ["style", "width", '350px']
            ],
            "${_Text5Copy3}": [
                ["style", "top", '5px'],
                ["color", "color", 'rgba(27,27,27,1)'],
                ["style", "left", '6px'],
                ["style", "text-align", 'center']
            ],
            "${_Title1Copy12}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_no_sound}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_contenidoCopy14}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "width", '787px'],
                ["style", "height", '293px'],
                ["style", "top", '101px'],
                ["style", "left", '19px'],
                ["style", "font-size", '14px']
            ],
            "${_contenidoCopy9}": [
                ["style", "line-height", '17px'],
                ["style", "text-align", 'justify'],
                ["style", "width", '364px'],
                ["style", "height", '502px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_Group3}": [
                ["style", "top", '-15px'],
                ["style", "width", '572px'],
                ["style", "left", '40px'],
                ["style", "overflow", 'auto']
            ],
            "${_contendor1}": [
                ["style", "display", 'none']
            ],
            "${_referenciaCopy4}": [
                ["style", "top", '426px'],
                ["style", "left", '437px'],
                ["style", "width", '350px']
            ],
            "${_Title1}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '9px'],
                ["style", "font-size", '13px']
            ],
            "${_Title1Copy8}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_slide2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_contenedor_frases}": [
                ["style", "left", '451px'],
                ["style", "top", '0px']
            ],
            "${_Title1Copy16}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_Title1Copy6}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '9px'],
                ["style", "font-size", '13px']
            ],
            "${_Rectangle2Copy9}": [
                ["style", "top", '6px'],
                ["style", "height", '69.64%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '39px'],
                ["style", "width", '287px']
            ],
            "${_Text5Copy}": [
                ["style", "top", '6px'],
                ["color", "color", 'rgba(27,27,27,1)'],
                ["style", "left", '7px'],
                ["style", "text-align", 'center']
            ],
            "${_ani7}": [
                ["style", "cursor", 'pointer']
            ],
            "${_scroll_mapa}": [
                ["style", "top", '101px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '363px'],
                ["style", "left", '149px'],
                ["style", "width", '555px']
            ],
            "${_fondo2}": [
                ["style", "top", '75px'],
                ["style", "left", '159px'],
                ["style", "width", '812px']
            ],
            "${_slide2_8}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_numeros5png}": [
                ["style", "left", '317px'],
                ["style", "top", '195px']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '0px'],
                ["style", "height", '80.36%'],
                ["color", "background-color", 'rgba(0,169,157,1)'],
                ["style", "left", '0px'],
                ["style", "width", '356px']
            ],
            "${_TextCopy2}": [
                ["color", "color", 'rgba(221,73,73,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '204px'],
                ["style", "font-size", '12px'],
                ["style", "top", '357px'],
                ["style", "text-align", 'left'],
                ["style", "height", '22px'],
                ["style", "font-family", 'Arial'],
                ["style", "width", '82px']
            ],
            "${_recuadro3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_TextCopy10}": [
                ["style", "top", '33px'],
                ["style", "font-size", '12px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '13px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'Arial'],
                ["style", "left", '141px'],
                ["style", "width", '24px']
            ],
            "${_icono}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_roll1}": [
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [43,95], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [43,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [43,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [43,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [43,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [43,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '320px'],
                ["style", "top", '150px']
            ],
            "${_boton1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [50,74], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,74],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_titleCopy10}": [
                ["style", "top", '118px'],
                ["style", "width", '350px'],
                ["color", "color", 'rgba(14,48,63,1)'],
                ["style", "height", '17px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '32px'],
                ["style", "font-size", '14px']
            ],
            "${_title}": [
                ["style", "top", '110px'],
                ["style", "width", '415px'],
                ["color", "color", 'rgba(14,48,63,1)'],
                ["style", "height", '17px'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '19px'],
                ["style", "font-size", '14px']
            ],
            "${_btnSonido}": [
                ["style", "top", '-113px'],
                ["transform", "scaleY", '0.79'],
                ["transform", "scaleX", '0.79'],
                ["style", "left", '-16px'],
                ["style", "cursor", 'default']
            ],
            "${_Text3Copy}": [
                ["style", "top", '6px'],
                ["style", "text-align", 'center'],
                ["style", "height", '21px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '102px'],
                ["style", "width", '157px']
            ],
            "${_btn_nextCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '50px'],
                ["style", "cursor", 'pointer']
            ],
            "${_caja_btn22}": [
                ["style", "left", '0px'],
                ["style", "top", '166px']
            ],
            "${_cerrarREfe}": [
                ["style", "top", '3px'],
                ["style", "left", '1030px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_btn_prev}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '541px'],
                ["style", "top", '577px']
            ],
            "${_btnSonidoCopy4}": [
                ["style", "top", '-74px'],
                ["transform", "scaleY", '0.79'],
                ["transform", "scaleX", '0.79'],
                ["style", "left", '22px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Title1Copy15}": [
                ["style", "top", '-2px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '22px'],
                ["style", "font-size", '13px']
            ],
            "${_contenidoCopy16}": [
                ["style", "line-height", '17px'],
                ["style", "width", '290px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "height", '68px'],
                ["style", "top", '-64px'],
                ["style", "left", '124px'],
                ["style", "font-size", '14px']
            ],
            "${_contenidoCopy6}": [
                ["style", "line-height", '18px'],
                ["style", "text-align", 'justify'],
                ["style", "font-size", '14px'],
                ["style", "height", '63px'],
                ["style", "top", '367px'],
                ["style", "left", '89px'],
                ["style", "width", '697px']
            ],
            "${_Text7Copy4}": [
                ["style", "top", '58px'],
                ["style", "height", '22px'],
                ["style", "left", '24px'],
                ["style", "width", '522px']
            ],
            "${_Text5}": [
                ["style", "top", '6px'],
                ["color", "color", 'rgba(27,27,27,1)'],
                ["style", "left", '9px'],
                ["style", "text-align", 'center']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["style", "height", '381px'],
                ["style", "opacity", '0.63238147867137'],
                ["style", "left", '22px'],
                ["style", "width", '795px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${_no_soundCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_slide2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_estruc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_activi}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_tema1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_Text7Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_chulin}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_cerrarEstruc}", "top", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_estruc4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_contendor1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_btnSonidoCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_roll2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_cerrarCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_roll1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_referecia}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${_btns}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_cerrarEstruc}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_no_sound}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_cerrarEstruc}", "left", '974px', { fromValue: '974px'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_ref1Copy4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_no_soundCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_no_soundCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_menu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_cerrarREfe}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_btn_no_audio}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_cerrarCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_btn_prev}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_chulinCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_cerrarREfe}", "left", '1030px', { fromValue: '1030px'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_instrucciones}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_cerrarREfe}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "style", "${_estruc}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 }            ]
        }
    }
},
"indica": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['46%', '79%']],
                    id: 'indicador_btn2',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '44px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/indicador_btn2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '44px'],
                ["style", "width", '20px']
            ],
            "${_indicador_btn2}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [46,79], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [46,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [46,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [46,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [46,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [46,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "transform", "${_indicador_btn2}", "rotateZ", '-75deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid9", tween: [ "transform", "${_indicador_btn2}", "rotateZ", '0deg', { fromValue: '-75deg'}], position: 2000, duration: 3000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-58342570");
