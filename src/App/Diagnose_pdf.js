import React from 'react';
import { jsPDF } from "jspdf";
import { testJson1Diego, testJsonCristian } from './json';


//////<<<<<------------------------------------------------``


const Diagnose_pdf = () => 
{

    const semaforoLevel = ( level, num = 0 ) =>
    {
        let semaforo;

        if( num === 0 )
        {
            if( level === "Sencillo" )
            {
                semaforo =  "var/task/img/futureimgs/sgreen.png";
            }
            else if( level === "Medio" )
            {
                semaforo =  "var/task/img/futureimgs/syellow.png";
            }
            else if( level === "Alto" )
            {
                semaforo =  "var/task/img/futureimgs/sred.png";
            };  
        };


        if( num === 1 )
        {
            if( level === "Sencillo" )
            {
                semaforo =  "var/task/img/futureimgs/sred.png";
            }
            else if( level === "Medio" )
            {
                semaforo =  "var/task/img/futureimgs/syellow.png";
            }
            else if( level === "Alto" )
            {
                semaforo =  "var/task/img/futureimgs/sgreen.png";
            };  
        };
        

        return semaforo;

    };

    
    const semaforoLength = ( array, num = 0 ) =>
    {
        let semaforo; 

        if( num === 0 )
        {
            if( array.length > 0 )
            {
                semaforo =  "var/task/img/futureimgs/sred.png";
            }
            else if( array.length <= 0 )
            {
                semaforo =  "var/task/img/futureimgs/sgreen.png";
            };
        };


        if( num === 1 )
        {
            if( array.length > 0 )
            {
                semaforo =  "var/task/img/futureimgs/sgreen.png";
            }
            else if( array.length <= 0 )
            {
                semaforo =  "var/task/img/futureimgs/sred.png";
            };
        };
        

        return semaforo;
    };


    const handlePDF = ( jsonBase ) =>
    {
        const doc = new jsPDF();
        
        jsonBase.map( ( json ) =>  
        {

            //---|| PORTADA  || x - y ||--------------------------------------------------------------
            

            doc.setTextColor( "black" );
            doc.setFontSize( 63 );
            doc.setFont( "helvetica", "bold" );
            doc.text( json.tituloDoc , 40, 135 ); 
            doc.setFontSize( 20 );
            doc.text( "Future-Diagnostico-Test.pdf" , 40, 149 ,{
                maxWidth: 125,
                align: 'left'
            });
            
          
            doc.addImage( "var/task/img/futureimgs/logotipo2.png", "PNG", 132, 106 , 33, 7 );

            doc.addImage( "var/task/img/futureimgs/brainBase.png", "PNG", 60, 170, 80, 60 );
           

             //--|| Pilar ||
             doc.setFillColor( 16, 38, 71 );
             doc.rect( 194, 0, 17, 300, 'F' );



            //----|| FIN PORTADA ||----------------------------------------------------------------------------



            //---|| PAG1  || x - y ||--------------------------------------------------------------

            doc.addPage();

            doc.setGState(new doc.GState({opacity: 0.1}));
            doc.addImage( "var/task/img/futureimgs/logotipo2.png", "PNG", 55, 140 , 100, 20 );
            doc.setGState(new doc.GState({opacity: 1}));

            //SECC1
            
            doc.addImage( "var/task/img/futureimgs/EfectividaddelCV.png", "PNG", 50, 14, 7, 7 );
            json.page1.sec1.score <= 35 && doc.addImage( "var/task/img/futureimgs/sred.png", "PNG", 143, 16, 5, 5 );
            json.page1.sec1.score > 35 && json.page1.sec1.score <= 75 && doc.addImage( "var/task/img/futureimgs/syellow.png", "PNG", 143, 16, 5, 5 );
            json.page1.sec1.score > 75 && json.page1.sec1.score <= 100 && doc.addImage( "var/task/img/futureimgs/sred.png", "PNG", 143, 16, 5, 5 );
            doc.setFontSize( 14 );
            doc.setTextColor( 16, 38, 71 );
          
            doc.text( json.page1.sec1.title, 100, 20 ,{
                maxWidth: 80,
                align: 'center'
             });

             
             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 17 )
             doc.text( json.page1.sec1.score+"%", 100, 40 ,{
                maxWidth: 30,
                align: 'center'
            });


             doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page1.sec1.textA, 95, 50 ,{
                maxWidth: 165,
                align: 'center'
            });

            doc.setFont( "helvetica", "bold" );
            doc.setTextColor( 142, 84, 233 );
            doc.setFontSize( 12 );
            doc.text( "Aciertos : "+json.page1.sec1.correct, 33, 70 );
            doc.text( "Problemas : "+json.page1.sec1.medium, 86, 70 );
            doc.text( "Errores : "+json.page1.sec1.incorrect, 143, 70 );

         


             //SECC2
             
             doc.setTextColor( 16, 38, 71 );
             doc.addImage( "var/task/img/futureimgs/Longituddedocumento.png", "PNG", 50, 107, 6, 7 );
             json.page1.sec2.length_Page <= 2 && doc.addImage( "var/task/img/futureimgs/sgreen.png", "PNG", 143, 108, 5, 5 );
             json.page1.sec2.length_Page === 3 && doc.addImage( "var/task/img/futureimgs/syellow.png", "PNG", 143, 108, 5, 5 );
             json.page1.sec2.length_Page >= 4 && doc.addImage( "var/task/img/futureimgs/sred.png", "PNG", 143, 108, 5, 5 );
             doc.setFontSize( 14 );
             doc.text( json.page1.sec2.title, 100, 113 ,{
                maxWidth: 80,
                align: 'center'
             });

             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 17 )
             doc.text( json.page1.sec2.length_Page+" Pag", 99, 130 ,{
                maxWidth: 30,
                align: 'center'
            });


             doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page1.sec2.textA, 100, 140,{
                maxWidth: 165,
                align: 'center'
            });


            doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 15, 150, 5, 5 );
             doc.setFont( "helvetica", "bold" );
             doc.text( json.page1.sec2.textB, 100, 160,{
                maxWidth: 165,
                align: 'center'
            });



             //SECC3
             
             doc.setTextColor( 16, 38, 71 );
             doc.addImage( "var/task/img/futureimgs/Legibilidad.png", "PNG", 50, 207, 7, 7 );
             doc.addImage( semaforoLevel( json.page1.sec3.level ), "PNG", 143, 208, 5, 5 );
             doc.setFontSize( 14 );
             doc.text( json.page1.sec3.title, 100, 213 ,{
                maxWidth: 80,
                align: 'center'
             });


             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 17 )
             doc.text( json.page1.sec3.level, 99, 233 ,{
                maxWidth: 30,
                align: 'center'
            });


            doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page1.sec3.textA, 100, 244,{
                maxWidth: 165,
                align: 'center'
            });


            doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 32, 255, 5, 5 );
            doc.setFont( "helvetica", "bold" );
            doc.text( json.page1.sec3.textB, 100, 264,{
               maxWidth: 165,
               align: 'center'
           });
             

            //--|| Pilar ||
            doc.setDrawColor( 0 );
            doc.setFillColor( 16, 38, 71 );
            doc.rect( 194, 0, 17, 300, 'F' );


            //--|| Separadores ||
            doc.setFillColor( "white" );
            doc.setDrawColor( 224, 224, 224 );
            
            //1
            doc.rect( 194, 100, 18, 1.3, 'F' );


            doc.setLineDash( [1.5] );
            doc.line( 0, 101, 192, 101 );

             //2
             doc.rect( 194, 200, 18, 1.3, 'F' );
             
    
             doc.setLineDash( [1.5] );
             doc.line( 0, 201, 192, 201 );


             //--|| Numeros ||
             doc.setTextColor( "white" );
             doc.setFont( "helvetica", "bold" );
             doc.text( "1", 201, 50 );
             doc.text( "2", 201, 150 );
             doc.text( "3", 201, 250 );


            //----|| FIN PAG1 ||----------------------------------------------------------------------------




            //---|| PAG2  || x - y ||--------------------------------------------------------------

            doc.addPage();


            doc.setGState(new doc.GState({opacity: 0.1}));
            doc.addImage( "var/task/img/futureimgs/logotipo2.png", "PNG", 55, 140 , 100, 20 );
            doc.setGState(new doc.GState({opacity: 1}));

            //SECC1
            
            doc.addImage( "var/task/img/futureimgs/Tiempolectura.png", "PNG", 50, 14, 7, 7 );
            json.page1.sec4.time.substr( 0,1 ) <= 4 && doc.addImage( "var/task/img/futureimgs/sgreen.png", "PNG", 143, 16, 5, 5 );
            json.page1.sec4.time.substr( 0,1 ) === 5 && doc.addImage( "var/task/img/futureimgs/syellow.png", "PNG", 143, 16, 5, 5 );
            json.page1.sec4.time.substr( 0,1 ) >= 6 && doc.addImage( "var/task/img/futureimgs/sred.png", "PNG", 143, 16, 5, 5 );
            doc.setFontSize( 14 );
            doc.setTextColor( 16, 38, 71 );
            doc.text( json.page1.sec4.title, 100, 20 ,{
                maxWidth: 80,
                align: 'center'
             });


             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 17 )
             doc.text( json.page1.sec4.time, 98, 40 ,{
                maxWidth: 50,
                align: 'center'
            });


            doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page1.sec4.textA, 95, 50 ,{
                maxWidth: 165,
                align: 'center'
            });


             doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 8, 60, 5, 5 );
             doc.setFont( "helvetica", "bold" );
             doc.text( json.page1.sec4.textB, 95, 70 ,{
                maxWidth: 165,
                align: 'center'
            });
         


             //SECC2
             
             doc.setTextColor( 16, 38, 71 );
             doc.addImage( "var/task/img/futureimgs/Ortografía.png", "PNG", 50, 107, 7, 7 );
             doc.addImage( semaforoLength( json.page2.sec1.words ), "PNG", 143, 108, 5, 5 );
             doc.setFontSize( 14 );
             doc.text( json.page2.sec1.title, 100, 113 ,{
                maxWidth: 80,
                align: 'center'
             });

             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 12 )
             doc.text( json.page2.sec1.words.join( " - " ), 25, 130 ,{
                maxWidth: 160,
                align: 'justify'
            });


            
            doc.setTextColor( "black" );
            doc.setFontSize( 9.5 );
            doc.setFont( "helvetica", "normal" );
            doc.text( json.page1.sec2.textA, 100, 150,{
               maxWidth: 165,
               align: 'center'
           });


           doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 15, 160, 5, 5 );
            doc.setFont( "helvetica", "bold" );
            doc.text( json.page1.sec2.textB, 100, 170,{
               maxWidth: 165,
               align: 'center'
           });

             //SECC3
             
             doc.setTextColor( 16, 38, 71 );
             doc.addImage( "var/task/img/futureimgs/polaridad.png", "PNG", 50, 207, 8, 7 );
             doc.addImage( semaforoLength( json.page2.sec2.negations ), "PNG", 143, 208, 5, 5 );
             doc.setFontSize( 14 );
             doc.text( json.page2.sec2.title, 100, 213 ,{
                maxWidth: 80,
                align: 'center'
             });


             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 12 )
             doc.text( json.page2.sec2.negations.join( " - " ), 98, 233 ,{
                maxWidth: 160,
                align: 'center'
            });


            doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page2.sec2.textA, 100, 244,{
                maxWidth: 165,
                align: 'center'
            });


            doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 38, 255, 5, 5 );
            doc.setFont( "helvetica", "bold" );
            doc.text( json.page2.sec2.textB, 100, 264,{
               maxWidth: 165,
               align: 'center'
           });
             
             

            //--|| Pilar ||
            doc.setDrawColor( 0 );
            doc.setFillColor( 16, 38, 71 );
            doc.rect( 194, 0, 17, 300, 'F' );


            //--|| Separadores ||
            doc.setFillColor( "white" );
            doc.setDrawColor( 224, 224, 224 );
            
            //1
            doc.rect( 194, 100, 18, 1.3, 'F' );


            doc.setLineDash( [1.5] );
            doc.line( 0, 101, 192, 101 );

             //2
             doc.rect( 194, 200, 18, 1.3, 'F' );
             
    
             doc.setLineDash( [1.5] );
             doc.line( 0, 201, 192, 201 );


             //--|| Numeros ||
             doc.setTextColor( "white" );
             doc.setFont( "helvetica", "bold" );
             doc.text( "4", 201, 50 );
             doc.text( "5", 201, 150 );
             doc.text( "6", 201, 250 );


            //----|| FIN PAG2 ||----------------------------------------------------------------------------


             //---|| PAG3  || x - y ||--------------------------------------------------------------

             doc.addPage();

             doc.setGState(new doc.GState({opacity: 0.1}));
             doc.addImage( "var/task/img/futureimgs/logotipo2.png", "PNG", 55, 140 , 100, 20 );
             doc.setGState(new doc.GState({opacity: 1}));

             //SECC1

             doc.addImage( "var/task/img/futureimgs/orden.png", "PNG", 50, 14, 9, 7 );
             json.page2.sec3.is_ordered ? doc.addImage( "var/task/img/futureimgs/sgreen.png", "PNG", 143, 16, 5, 5 ) : doc.addImage( "var/task/img/futureimgs/sred.png", "PNG", 143, 16, 5, 5 );
             doc.setFontSize( 14 );
             doc.setTextColor( 16, 38, 71 );
             doc.text( json.page2.sec3.title, 100, 20 ,{
                 maxWidth: 80,
                 align: 'center'
              });
 
              doc.setTextColor( 142, 84, 233 );
              doc.setFontSize( 17 )
              doc.text( json.page2.sec3.is_ordered ? "Correcto" : "Cuidado", 100, 40 ,{
                 maxWidth: 30,
                 align: 'center'
             });


             doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page1.sec4.textA, 98, 50 ,{
                maxWidth: 165,
                align: 'center'
            });
          
 
 
              //SECC2
              
              doc.setTextColor( 16, 38, 71 );
              doc.addImage( "var/task/img/futureimgs/NombreArchivo.png", "PNG", 50, 107, 7, 7 );
              doc.addImage( "var/task/img/futureimgs/sgreen.png", "PNG", 143, 108, 5, 5 );
              doc.setFont( "helvetica", "bold" );
              doc.setFontSize( 14 );
              doc.text( json.page2.sec4.title, 100, 113 ,{
                 maxWidth: 80,
                 align: 'center'
              });
 

              doc.setTextColor( 142, 84, 233 );
              doc.setFontSize( 17 )
              doc.text( json.page2.sec4.filename, 99, 130 ,{
                maxWidth: 80,
                align: 'center'
              });


             doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page2.sec4.textA, 100, 150,{
              maxWidth: 165,
              align: 'center'
             });
 

              //SECC3
              
              doc.setTextColor( 16, 38, 71 );
              doc.addImage( "var/task/img/futureimgs/Palabrasrepetidas.png", "PNG", 50, 207, 7, 7 );
              doc.addImage( semaforoLength( json.page3.sec2.repeated ), "PNG", 143, 208, 5, 5 );
              doc.setFontSize( 14 );
              doc.setFont( "helvetica", "bold" );
              doc.text( json.page3.sec2.title, 100, 213 ,{
                 maxWidth: 80,
                 align: 'center'
              });


             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 12 )
             doc.text( json.page3.sec2.repeated.join( " - " ), 100, 233 ,{
                maxWidth: 160,
                align: 'center'
             });


             doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page3.sec2.textA, 100, 245,{
                maxWidth: 165,
                align: 'center'
            });
              
 
             //--|| Pilar ||
             doc.setDrawColor( 0 );
             doc.setFillColor( 16, 38, 71 );
             doc.rect( 194, 0, 17, 300, 'F' );
 
 
             //--|| Separadores ||
             doc.setFillColor( "white" );
             doc.setDrawColor( 224, 224, 224 );
             
             //1
             doc.rect( 194, 100, 18, 1.3, 'F' );
 
 
             doc.setLineDash( [1.5] );
             doc.line( 0, 101, 192, 101 );
 
              //2
              doc.rect( 194, 200, 18, 1.3, 'F' );
              
     
              doc.setLineDash( [1.5] );
              doc.line( 0, 201, 192, 201 );
 
 
              //--|| Numeros ||
              doc.setTextColor( "white" );
              doc.setFont( "helvetica", "bold" );
              doc.text( "7", 201, 50 );
              doc.text( "8", 201, 150 );
              doc.text( "9", 201, 250 );
 
 
             //----|| FIN PAG3 ||----------------------------------------------------------------------------
             

             
            //---|| PAG4 TABLE  || x - y ||--------------------------------------------------------------

            doc.addPage();


            doc.setGState(new doc.GState({opacity: 0.1}));
            doc.addImage( "var/task/img/futureimgs/logotipo2.png", "PNG", 55, 140 , 100, 20 );
            doc.setGState(new doc.GState({opacity: 1}));

            //SECC1
            
            doc.addImage( "var/task/img/futureimgs/Quefalta.png", "PNG", 50, 14, 6, 7 );
            doc.setFontSize( 14 );
            doc.setTextColor( 16, 38, 71 );
            doc.text( json.page3.sec1.title, 100, 20 ,{
                maxWidth: 80,
                align: 'center'
             });

             doc.addImage( "var/task/img/futureimgs/table.png", "PNG", 48, 30, 108, 70 );
            doc.setFontSize( 9 );

            json.page3.sec1.what_is_left.name.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.name.exists ? "O" : "X", 92, 40 );

            json.page3.sec1.what_is_left.phone.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.phone.exists ? "O" : "X", 92, 47 );


            json.page3.sec1.what_is_left.mail.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.mail.exists ? "O" : "X", 92, 56 );


            json.page3.sec1.what_is_left.location.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.location.exists ? "O" : "X", 92, 63 );


            json.page3.sec1.what_is_left.work.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.work.exists ? "O" : "X", 92, 71 );


            json.page3.sec1.what_is_left.education.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.education.exists ? "O" : "X", 92, 80 );


            json.page3.sec1.what_is_left.skills.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.skills.exists ? "O" : "X", 92, 89 );

            json.page3.sec1.what_is_left.idioms.exists ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.idioms.exists ? "O" : "X", 92, 99 );


            //-------------------------------------------------------------------------------//


            json.page3.sec1.what_is_left.name.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.name.position ? "O" : "X", 134, 40 );


            json.page3.sec1.what_is_left.phone.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.phone.position ? "O" : "X", 134, 47 );


            json.page3.sec1.what_is_left.mail.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.mail.position ? "O" : "X", 134, 56 );


            json.page3.sec1.what_is_left.location.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.location.position ? "O" : "X", 134, 63 );


            json.page3.sec1.what_is_left.work.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.work.position ? "O" : "X", 134, 71 );


            json.page3.sec1.what_is_left.education.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.education.position ? "O" : "X", 134, 80 );


            json.page3.sec1.what_is_left.skills.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.skills.position ? "O" : "X", 134, 89 );


            json.page3.sec1.what_is_left.idioms.position ? doc.setTextColor( "gray" ) : doc.setTextColor( 142, 84, 233 );
            doc.text( json.page3.sec1.what_is_left.idioms.position ? "O" : "X", 134, 99 );


            //-------------------------------------------------------------------------------//


            doc.setTextColor( "black" );
            doc.setFontSize( 9.5 );
            doc.setFont( "helvetica", "normal" );

            doc.text( json.page3.sec1.textA, 98, 130 , {
                maxWidth: 165,
                align: 'center'
            });
         

             //SECC2
             
             doc.setTextColor( 16, 38, 71 );
             doc.addImage( "var/task/img/futureimgs/impacto.png", "PNG", 50, 207, 7, 7 );
             doc.addImage( semaforoLevel( json.page3.sec3.level ), "PNG", 143, 208, 5, 5 );
             doc.setFont( "helvetica", "bold" );
             doc.setFontSize( 14 );
             doc.text( json.page3.sec3.title, 100, 213 ,{
                maxWidth: 80,
                align: 'center'
             });


             doc.setTextColor( 142, 84, 233 );
             doc.setFontSize( 17 )
             doc.text( json.page3.sec3.level, 99, 233 ,{
                maxWidth: 30,
                align: 'center'
            });


             doc.setTextColor( "black" );
             doc.setFontSize( 9.5 );
             doc.setFont( "helvetica", "normal" );
             doc.text( json.page3.sec3.textA, 100, 244,{
                maxWidth: 165,
                align: 'center'
            });


            doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 18, 255, 5, 5 );
            doc.setFont( "helvetica", "bold" );
            doc.text( json.page3.sec3.textB, 100, 264,{
               maxWidth: 165,
               align: 'center'
           });
             

            //--|| Pilar ||
            doc.setDrawColor( 0 );
            doc.setFillColor( 16, 38, 71 );
            doc.rect( 194, 0, 17, 300, 'F' );


            //--|| Separadores ||
            doc.setFillColor( "white" );
            doc.setDrawColor( 224, 224, 224 );
            
            //1
            doc.rect( 194, 200, 18, 1.3, 'F' );


            doc.setLineDash( [1.5] );
            doc.line( 0, 201, 192, 201 );


             //--|| Numeros ||
             doc.setTextColor( "white" );
             doc.setFont( "helvetica", "bold" );
             doc.text( "10", 200, 100 );
             doc.text( "11", 200, 250 );


            //----|| FIN PAG4 ||----------------------------------------------------------------------------





            //---|| PAG5 || x - y ||--------------------------------------------------------------

              doc.addPage();

              
                doc.setGState(new doc.GState({opacity: 0.1}));
                doc.addImage( "var/task/img/futureimgs/logotipo2.png", "PNG", 55, 140 , 100, 20 );
                doc.setGState(new doc.GState({opacity: 1}));

              //SECC1
 
              doc.addImage( "var/task/img/futureimgs/impactoMagnitud.png", "PNG", 50, 14, 7, 7 );
              doc.addImage( semaforoLevel( json.page3.sec4.level, 1 ), "PNG", 143, 16, 5, 5 );
              doc.setFontSize( 14 );
              doc.setTextColor( 16, 38, 71 );
              doc.text( json.page3.sec4.title, 100, 20 ,{
                  maxWidth: 80,
                  align: 'center'
               });
  
               doc.setTextColor( 142, 84, 233 );
               doc.setFontSize( 17 )
               doc.text( json.page3.sec4.level, 98, 40 ,{
                maxWidth: 50,
                align: 'center'
               
                });
                

                doc.setTextColor( "black" );
                doc.setFontSize( 9.5 );
                doc.setFont( "helvetica", "normal" );
                doc.text( json.page3.sec4.textA, 95, 50 ,{
                   maxWidth: 165,
                   align: 'center'
               });
   
   
                doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 10, 60, 5, 5 );
                doc.setFont( "helvetica", "bold" );
                doc.text( json.page3.sec4.textB, 95, 70 ,{
                   maxWidth: 165,
                   align: 'center'
               });
  
  
               //SECC2
               
               doc.setTextColor( 16, 38, 71 );
               doc.addImage( "var/task/img/futureimgs/impactoHabilidades.png", "PNG", 50, 107, 7, 7 );
               doc.addImage( semaforoLength( json.page4.sec1.skills, 1 ), "PNG", 143, 108, 5, 5 );
               doc.setFontSize( 14 )
               doc.text( json.page4.sec1.title, 100, 113 ,{
                  maxWidth: 80,
                  align: 'center'
               });
  
               doc.setTextColor( 142, 84, 233 );
               doc.setFontSize( 12 )
               doc.text( json.page4.sec1.skills.join( " - " ), 23, 130 ,{
                  maxWidth: 160,
                  align: 'justify'
              });
            

                doc.setTextColor( "black" );
                doc.setFontSize( 9.5 );
                doc.setFont( "helvetica", "normal" );
                doc.text( json.page4.sec1.textA, 100, 155,{
                maxWidth: 165,
                align: 'center'
                
                });


                doc.addImage( "var/task/img/futureimgs/ayuda.png", "PNG", 15, 173, 5, 5 );
                doc.setFont( "helvetica", "bold" );
                doc.text( json.page4.sec1.textB, 100, 180,{
                maxWidth: 165,
                align: 'center'
                
                });
    
               //SECC3
               
               doc.setTextColor( 16, 38, 71 );
               doc.addImage( "var/task/img/futureimgs/palabrasclaves.png", "PNG", 50, 207, 8, 7 );
               doc.addImage( semaforoLength( json.page4.sec2.keywords, 1 ), "PNG", 143, 208, 5, 5 );
               doc.setFontSize( 14 );
               doc.text( json.page4.sec2.title, 100, 213 ,{
                  maxWidth: 80,
                  align: 'center'
               });
               

              doc.setTextColor( 142, 84, 233 );
              doc.setFontSize( 12 )
              doc.text( json.page4.sec2.keywords.join( " - " ), 100, 233 ,{
                maxWidth: 160,
                align: 'center'
             });


              doc.setTextColor( "black" );
              doc.setFontSize( 9.5 );
              doc.setFont( "helvetica", "normal" );
              doc.text( json.page4.sec2.textA, 100, 248,{
                maxWidth: 165,
                align: 'center'
             });
  

              //--|| Pilar ||
              doc.setDrawColor( 0 );
              doc.setFillColor( 16, 38, 71 );
              doc.rect( 194, 0, 17, 300, 'F' );
  
  
              //--|| Separadores ||
              doc.setFillColor( "white" );
              doc.setDrawColor( 224, 224, 224 );
              
              //1
              doc.rect( 194, 100, 18, 1.3, 'F' );
  
  
              doc.setLineDash( [1.5] );
              doc.line( 0, 101, 192, 101 );
  
               //2
               doc.rect( 194, 200, 18, 1.3, 'F' );
               
      
               doc.setLineDash( [1.5] );
               doc.line( 0, 201, 192, 201 );
  
  
               //--|| Numeros ||
               doc.setTextColor( "white" );
               doc.setFont( "helvetica", "bold" );
               doc.text( "12", 200, 50 );
               doc.text( "13", 200, 150 );
               doc.text( "14", 200, 250 );
  
  
              //----|| FIN PAG5 ||----------------------------------------------------------------------------
               



              //---|| PAG6 || x - y ||--------------------------------------------------------------

              doc.addPage();


              doc.setGState(new doc.GState({opacity: 0.1}));
              doc.addImage( "var/task/img/futureimgs/logotipo2.png", "PNG", 55, 140 , 100, 20 );
              doc.setGState(new doc.GState({opacity: 1}));

              //SECC1
 
              doc.addImage( "var/task/img/futureimgs/Mejoras.png", "PNG", 50, 14, 7, 7 );
              doc.setFontSize( 14 );
              doc.setTextColor( 16, 38, 71 );
              doc.text( json.page4.sec3.title, 105, 20 ,{
                  maxWidth: 90,
                  align: 'center'
               });
  
    
               doc.addImage( "var/task/img/futureimgs/sred.png", "PNG", 25, 30, 5, 5 );
               doc.setFontSize( 14 );
               doc.setTextColor( 142, 84, 233 );
               doc.text( "Alta" , 33, 35 , {
                maxWidth: 150,
                align: 'left'
                });


                doc.setTextColor( "black" );
                doc.setFont( "helvetica", "normal" );
                doc.setFontSize( 9.5 );
                doc.text( "- "+json.page4.sec3.high , 25, 45,{
                maxWidth: 150,
                align: 'left'
                });


                doc.addImage( "var/task/img/futureimgs/syellow.png", "PNG", 25, 105, 5, 5 );
                doc.setFont( "helvetica", "bold" );
                doc.setFontSize( 14 );
                doc.setTextColor( 142, 84, 233 );
                doc.text( "Media" , 33, 110 , {
                maxWidth: 150,
                align: 'left'
                });

                doc.setTextColor( "black" );
                doc.setFont( "helvetica", "normal" );
                doc.setFontSize( 9.5 );
                doc.text( "- "+json.page4.sec3.medium , 25, 120,{
                maxWidth: 150,
                align: 'left'
                });


                doc.setFont( "helvetica", "bold" );
                doc.setFontSize( 14 );
                doc.setTextColor( 142, 84, 233 );
                doc.addImage( "var/task/img/futureimgs/sgreen.png", "PNG", 25, 175, 5, 5 );
                doc.text( "Baja" , 33, 180 , {
                maxWidth: 150,
                align: 'left'
                });


                doc.setTextColor( "black" );
                doc.setFont( "helvetica", "normal" );
                doc.setFontSize( 9.5 );
                doc.text( "- "+json.page4.sec3.low , 25, 190,{
                maxWidth: 150,
                align: 'left'
                });
           
  
  
              
  
              //--|| Pilar ||
              doc.setDrawColor( 0 );
              doc.setFillColor( 16, 38, 71 );
              doc.rect( 194, 0, 17, 300, 'F' );
  
  
              //----|| FIN PAG6 ||----------------------------------------------------------------------------
              


            
            
            //---|| FIN ||-------------------------------------------------------------------//
            
            doc.save( "Future-Diagnostico-Test.pdf" );
                
        });

        
        
    };
    
    

    //*********************************************************************************//
    
    
    return (
        
        <div>
            
            <button onClick={ () => { handlePDF( testJsonCristian ) } } style={{ width : "100%", height : "10rem" }}>PDF</button>
      
        </div>
    )
}



export default Diagnose_pdf;
