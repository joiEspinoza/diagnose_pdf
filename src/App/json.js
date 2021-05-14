const testJson1Diego = 
[{
    
    tituloDoc : "Diagnóstico", 
    
    page1: 
    {
        sec1 : 
        {
            title : "Resultado - Puedes hacerlo mejor", 
            score : "64", 
            textA : "Aún debes recorrer un trecho para llegar a obtener un CV completo, bien estructurado, y de alto impacto. Consíguelo atendiendo las recomendaciones que aparecen más abajo.", 
            correct : "5",
            incorrect : "3",
            medium : "2" 
        }, 
        
        
        sec2: 
        { 
            title : "Longitud de documento", 
            length_Page: "2", 
            textA: "!Vas por buen camino! Tu CV cuenta con el tama\u00f1o ideal, pasar\u00edas un filtro normal", 
            textB: "Hoy en d\u00eda no es recomendable tener m\u00e1s de 2 p\u00e1ginas en tu CV, recuerda ser breve e impactar en pocas p\u00e1ginas para tener m\u00e1s chances con los reclutadores"
        }, 
        
        sec3: 
        {
            title: "Legibilidad", 
            level: "Medio", 
            textA: "Tu CV es un poco d\u00edficil de leer, recuerda ser breve, una oraci\u00f3n no deber\u00eda tener m\u00e1s de 30 palabras para poder explicarte bien, mantenlo sencillo y directo", 
            textB: "No te preocupes, siempre hay formas de mejoras, ap\u00f3yate en los indicadores:\n - 48 promedio largo oraciones\n- 11 promedio largo palabras\n - 15 secuencias de +30 seguidas\nAplica esta regla en todo tu CV, y sobretodo dale prioridad a tu resumen y experiencias laborales"
        },
        
        sec4: 
        {
            title: "Tiempo de lectura", 
            time: "3 min 35 seg", 
            textA: "Tu documento se puede leer en menos de 4 minutos a un ritmo normal, bien hecho", "textB": "Sigues la recomendaciones de tama\u00f1o y legibilidad, hay reclutadores entrenados para leer en 30 segs, hay que generar impacto r\u00e1pido"
        }
    }, 
    
    page2 : 
    {
        sec1: 
        {
            title: "Ortograf\u00eda", 
            words: ["movil", "rvicios", "multidisciplanarios", "innmobiliario", "comites", "\u00e1res", "interes"], 
            textA: "Ups! Encontramos algunas fallas ortogr\u00e1ficas en tu CV, pasa tu documento por alg\u00fan corrector ortogr\u00e1fico\nRecuerda, nuestros correctores trabajan en ingl\u00e9s y espa\u00f1ol, por lo que pueden aparecer palabras en otros idiomas", 
            textB: "Los reclutados pueden llegar a ser muy estrictos y hasta un 60% podr\u00eda descartarte por una mera falla ortogr\u00e1fica"
        }, 
            
        sec2: 
        {
            title: "T\u00e9rminos Negativos", 
            negations: ["que_no_superaron", "que_no_superaban"], 
            textA: "Algunas de tus oraciones tienen connotaciones negativas, es recomendable reemplazarlos por aspectos negativos que se relacionen contigo", 
            textB: "Es recomendable cambiar las frases negativas por formas positivas\n- No pod\u00eda seguir\n- Quise ir por otro camino"
        }, 
        
        sec3: 
        {
            title: "Orden", 
            is_ordered: true, 
            textA: "Tu CV cumple con el orden cronol\u00f3gico inverso adecuado, de esta manera los reclutadores podr\u00e1n ver f\u00e1cilmente tu \u00faltima experiencia y as\u00ed compararlo con el que cargo al cual postulas"
        }, 
        
        sec4: 
        {
            title: "Nombre Archivo", 
            filename: "cv-diego-flaherty-m.pdf", 
            textA: "Nombraste tu archivo correctamente, hemos identificado el nombre y apellido extra\u00eddo previamente, adem\u00e1s colocaste un sigla o elemento respectivo del CV, siempre es buena idea incluir siglas y el cargo al que postulas:\n- CV-Fernanda-Gonz\u00e1lez-CEO.pdf"
        }
    }, 
    
    page3: 
    {
        sec1: 
        {
            title: "Qu\u00e9 falta", 
            what_is_left: 
            {
                name : 
                { exists : true, position : true }, 
                
                phone : 
                { exists : true, position : true }, 
                
                mail : 
                { exists : true, position : true }, 
                
                location : 
                { exists: false, position: false }, 
                
                work : 
                { exists : true, position : false }, 
                
                education : 
                { exists : true, position : false }, 
                
                skills: 
                { exists : false, position : false }, 
                
                idioms : 
                { exists : false, position : false }
            }, 
                
            textA : "Esta es la informaci\u00f3n que pudo ser detectada por un sistema de machine learning, toma en consideraci\u00f3n que estos elementos le dan orden al CV, por lo que si est\u00e1n ausentes tu CV puede perder un poco de l\u00f3gica.\n\u00bfC\u00f3mo corregirlo?\n- Verifica que no sea un archivo corrupto o que haya sido convertido m\u00faltiples veces\n- Mantenlo sencillo: gr\u00e1ficas, im\u00e1genes, grandes tablas, no son necesarias, utiliza un formato columnar y \u00e1gil.- Intenta colocar toda la informaci\u00f3n de la tabla para que al reclutador no le falte nada!"
        }, 
                
        sec2 : 
        {
            title : "Palabras repetidas", 
            repeated : ["desarrollo (10)", "plan (7)", "servicios (6)", "grupo (5)", "marcas (5)"], 
            textA : "Este es un conjunto de palabras que se repiten mucho en tu curr\u00edculum, debes intentar no tener m\u00e1s de 5 repeticiones, intenta ocupar sin\u00f3nimos y as\u00ed evitar redundancia, cada palabra tiene su n\u00famero de repetici\u00f3n."
        }, 
        
        sec3 : 
        {
            title : "Impacto en acciones", 
            level : "Medio", 
            textA : "Vemos que tienes varios verbos (23), sin embargo, menos de la mitad son verbos en acci\u00f3n, que te servir\u00e1n para describir mejor tu capacidad y llegar al reclutador", 
            textB : "Descarta verbos pasivos o t\u00e9rminos negativos, en su lugar emplea verbos de acci\u00f3n y t\u00e9rminos positivos, estos causar\u00e1n una mejor percepci\u00f3n cuando el reclutador se encuentre leyendo o incluso la m\u00e1quina, te dejamos un par de ejemplos:\n- Increment\u00e9 la tasa de respuesta en un 10%\n- Reduje en un 50% los costos"
        }, 
        
        sec4: 
        {
            
            title: "Impacto en magnitud", 
            level: "Alto", 
            textA: "Cuentas con varios indicadores de poder, demostrando tus habilidades en experiencias pasadas, bien hecho.", 
            textB: "- Si lideraste, coordinaste, ejecutaste un proyecto, indica el tiempo ahorrado, mejoras % y otros que describan claramente tu rol\n- Si incrementaste ventas o redujiste costos, qu\u00e9 fue exactamente y cu\u00e1nto\n - Enfocate en el KPI relevante de tu contexto, ya sea clietnes con grados de satisfacci\u00f3n o productividad en supply chain."
        }
    }, 
    
    page4: 
    {
        sec1: 
        {
            title: "Impacto en habilidades", 
            skills: [], 
            textA: "No pudimos detectar ninguna habilidad de tu CV, verifica que el formato sea simple para que el reclutador pueda encontrarlas r\u00e1pidamente. Tambi\u00e9n, investiga sobre habilidades que tengas en com\u00fan con el puesto al cual est\u00e1s postulando", 
            textB: "\u00bfC\u00f3mo las obtuvimos? Utilizamos machine learning para extraer informaci\u00f3n del CV, hoy en d\u00eda gran parte del mundo del reclutamiento est\u00e1 inclin\u00e1ndose por este tipo de tecnoog\u00eda por su eficiencia y precisi\u00f3n."
        }, 
        
        sec2: 
        {
            title : "Palabras que te definen", 
            keywords : ["comercial", "servicios", "desarrollo", "experiencia", "infraestructura"], 
            textA : "Este conjunto de palabras no son necesariamente frecuentes, pero si las definiste en lugares importantes como la introducci\u00f3n o experiencias laborales, pueden llegar a definirte, intenta que apunten donde tu quieras apuntar."
        }, 
        
        sec3: 
        {
            title: 'Diagnóstico - Ahora qué mejoramos',
            high: 'Incorpora los datos necesarios que un CV estándar requiere, asegurate que la información sea fácil de entender. Los elementos listados en la tabla son los requerimientos más comunes dentro del mundo del reclutamiento.\nIncrementa tus verbos de acción, te describen mejor: Construí un sistema de gestión es mejor que construir sistemas\nIncluye más números, cifras o porcentajes, estos demuestran el trabajo realizado: 18%, $10.5 MM, 165 tiendas, etc.',
            medium: 'Intenta enfocarte siempre en conceptos positivos para demostrar tus logros: No he podido lograr ... / Me estoy enfocando en lograr ...',
            low: 'Baja la frequencia de tus palabras repetidas, ocupa sinónimos y parafraseos, actualmente tu término más repetitivo es tecnologías (2)'
        },
        
        sec4: {}
    }

}];


const testJsonCristian =
[{
    
    tituloDoc : "Diagnóstico", 

    page1: 
    {
        sec1 : 
        {
            title : "Resultado - Puedes hacerlo mejor", 
            score : "35", 
            textA : "Aún debes recorrer un trecho para llegar a obtener un CV completo, bien estructurado, y de alto impacto. Consíguelo atendiendo las recomendaciones que aparecen más abajo.", 
            correct : "5",
            incorrect : "0",
            medium : "5"
        },
        
        sec2: 
        { 
          title: "Longitud de documento", 
          length_Page: "1", 
          textA: "!Vas por buen camino! Tu CV cuenta con el tama\u00f1o ideal, pasar\u00edas un filtro normal", "textB": "Hoy en d\u00eda no es recomendable tener m\u00e1s de 2 p\u00e1ginas en tu CV, recuerda ser breve e impactar en pocas p\u00e1ginas para tener m\u00e1s chances con los reclutadores"
        }, 
        
        sec3: 
        {
            title: "Legibilidad", 
            level: "Sencillo", 
            textA: "Tu CV es sencillo de leer, cuentas con un promedio de palabras normal entre 0-10, adem\u00e1s de utilizar un lenguaje m\u00e1s simple y directo, generando una lectura r\u00e1pida para el reclutador", "textB": "No te preocupes, siempre hay formas de mejoras, ap\u00f3yate en los indicadores:\n - 14 promedio largo oraciones\n- 6 promedio largo palabras\n - 0 secuencias de +30 seguidas\nAplica esta regla en todo tu CV, y sobretodo dale prioridad a tu resumen y experiencias laborales"
        }, 
        
        sec4: 
        {
            title: "Tiempo de lectura", 
            time: "1 min 40 seg", 
            textA: "Tu documento se puede leer en menos de 4 minutos a un ritmo normal, bien hecho", 
            textB: "Sigues la recomendaciones de tama\u00f1o y legibilidad, hay reclutadores entrenados para leer en 30 segs, hay que generar impacto r\u00e1pido"
        }
    }, 
    
    page2: 
    {
        sec1: 
        {
            title: "Ortograf\u00eda", 
            words: ["concocimientos", "ultimos", "uni\ufb01caron", "gest\u00edon"], 
            textA: "Ups! Encontramos algunas fallas ortogr\u00e1ficas en tu CV, pasa tu documento por alg\u00fan corrector ortogr\u00e1fico\nRecuerda, nuestros correctores trabajan en ingl\u00e9s y espa\u00f1ol, por lo que pueden aparecer palabras en otros idiomas", 
            textB: "Los reclutados pueden llegar a ser muy estrictos y hasta un 60% podr\u00eda descartarte por una mera falla ortogr\u00e1fica"
        }, 
        
        sec2: 
        {
            title: "T\u00e9rminos Negativos", 
            negations: ["pero_no_pod\u00eda", ",_no_he"], 
            textA: "Algunas de tus oraciones tienen connotaciones negativas, es recomendable reemplazarlos por aspectos negativos que se relacionen contigo", 
            textB: "Es recomendable cambiar las frases negativas por formas positivas\n- No pod\u00eda seguir\n- Quise ir por otro camino"
        }, 
        
        sec3: 
        {
            title: "Orden", 
            is_ordered: false, 
            textA: "Tu CV no cumple con el orden cronol\u00f3gico inverso de experiencias laborales, asegurate de que la m\u00e1s reciente arriba"
        }, 
        
        sec4: 
        {
            title: "Nombre Archivo", 
            filename: "Curriculum Cristian Sep\u00falveda.pdf", 
            textA: "Nombraste tu archivo correctamente, hemos identificado el nombre y apellido extra\u00eddo previamente, adem\u00e1s colocaste un sigla o elemento respectivo del CV, siempre es buena idea incluir siglas y el cargo al que postulas:\n- CV-Fernanda-Gonz\u00e1lez-CEO.pdf"
        }
    }, 
    
    page3: 
    {
        sec1: 
        {
            title: "Qu\u00e9 falta", 
            what_is_left: 
            {
                name: 
                {exists: true, position: false}, 
                
                phone: 
                {exists: true, position: true}, 
                
                mail: 
                {exists: true, position: true}, 
                
                location: 
                {exists: false, position: false}, 
                
                work: 
                {exists: true, position: false}, 
                
                education: 
                {exists: true, position: false}, 
                
                skills: 
                {exists: true, position: true}, 
                
                idioms: 
                {exists: false, position: false}
            }, 
                
            textA: "Esta es la informaci\u00f3n que pudo ser detectada por un sistema de machine learning, toma en consideraci\u00f3n que estos elementos le dan orden al CV, por lo que si est\u00e1n ausentes tu CV puede perder un poco de l\u00f3gica.\n\u00bfC\u00f3mo corregirlo?\n- Verifica que no sea un archivo corrupto o que haya sido convertido m\u00faltiples veces\n- Mantenlo sencillo: gr\u00e1ficas, im\u00e1genes, grandes tablas, no son necesarias, utiliza un formato columnar y \u00e1gil.- Intenta colocar toda la informaci\u00f3n de la tabla para que al reclutador no le falte nada!"
        }, 
            
        sec2: 
        {
            title: "Palabras repetidas", 
            repeated: ["tecnolog\u00edas (2)", "instituto (2)", "profesional (2)", "aiep (2)", "osorno (2)"], 
            textA: "Este es un conjunto de palabras que se repiten mucho en tu curr\u00edculum, debes intentar no tener m\u00e1s de 5 repeticiones, intenta ocupar sin\u00f3nimos y as\u00ed evitar redundancia, cada palabra tiene su n\u00famero de repetici\u00f3n."
        }, 
        
        sec3: 
        {
            title: "Impacto en acciones", 
            level: "Medio", 
            textA: "Vemos que tienes varios verbos (48), sin embargo, menos de la mitad son verbos en acci\u00f3n, que te servir\u00e1n para describir mejor tu capacidad y llegar al reclutador", 
            textB: "Descarta verbos pasivos o t\u00e9rminos negativos, en su lugar emplea verbos de acci\u00f3n y t\u00e9rminos positivos, estos causar\u00e1n una mejor percepci\u00f3n cuando el reclutador se encuentre leyendo o incluso la m\u00e1quina, te dejamos un par de ejemplos:\n- Increment\u00e9 la tasa de respuesta en un 10%\n- Reduje en un 50% los costos"
        }, 
        
        sec4: 
        {
            title: "Impacto en magnitud", 
            level: "Medio", 
            textA: "Cuenta con algunos indicadores, sin embargo, son pocos, an\u00edmate a seguir las recomendaciones y mejorar tu perfil.", 
            textB: "- Si lideraste, coordinaste, ejecutaste un proyecto, indica el tiempo ahorrado, mejoras % y otros que describan claramente tu rol\n- Si incrementaste ventas o redujiste costos, qu\u00e9 fue exactamente y cu\u00e1nto\n - Enfocate en el KPI relevante de tu contexto, ya sea clietnes con grados de satisfacci\u00f3n o productividad en supply chain."
        }
    }, 
    
    page4: 
    {
        sec1: 
        {
            title: "Impacto en habilidades", 
            skills: ["JavaScript", "HTML", "CSS", "Backend", "Node", "Express", "Java EE", "Python", "Django", "Sequelize", "React", "Node.js", "MySQL Material UI", "Gesti\u00f3n de Bases de Datos", "MySQL", "SQL Server", "Angular Material", "Desarrollo Web", "Git", "Adobe XD", "Postman", "Angular"], 
            textA: "Estas son las habilidades que destacan de tu CV, asegurate que tengan sentido con el cargo al cual estes postulando, enfocate en lo que el reclutador est\u00e1 buscando y no en todo lo que sabes.", 
            textB: "\u00bfC\u00f3mo las obtuvimos? Utilizamos machine learning para extraer informaci\u00f3n del CV, hoy en d\u00eda gran parte del mundo del reclutamiento est\u00e1 inclin\u00e1ndose por este tipo de tecnoog\u00eda por su eficiencia y precisi\u00f3n."
        }, 
        
        sec2: 
        {
            title: "Palabras que te definen", 
            keywords: ["tecnolog\u00edas", "desarrollo", "aplicaci\u00f3n", "react", "node.js"], 
            textA: "Este conjunto de palabras no son necesariamente frecuentes, pero si las definiste en lugares importantes como la introducci\u00f3n o experiencias laborales, pueden llegar a definirte, intenta que apunten donde tu quieras apuntar."
        }, 
        
        sec3: 
        {
            title: 'Diagnóstico - Ahora qué mejoramos',
            high: 'Incorpora los datos necesarios que un CV estándar requiere, asegurate que la información sea fácil de entender. Los elementos listados en la tabla son los requerimientos más comunes dentro del mundo del reclutamiento.\nIncrementa tus verbos de acción, te describen mejor: Construí un sistema de gestión es mejor que construir sistemas\nIncluye más números, cifras o porcentajes, estos demuestran el trabajo realizado: 18%, $10.5 MM, 165 tiendas, etc.',
            medium: 'Intenta enfocarte siempre en conceptos positivos para demostrar tus logros: No he podido lograr ... / Me estoy enfocando en lograr ...',
            low: 'Baja la frequencia de tus palabras repetidas, ocupa sinónimos y parafraseos, actualmente tu término más repetitivo es tecnologías (2)'
        },

        sec4: {}
    }

}];


//---------------------------------------------------------------------->


export { testJson1Diego, testJsonCristian }