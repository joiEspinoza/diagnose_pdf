
const handler = ( event, context ) =>
{
    
    const pdf = 
    [{
    
        tituloDoc : "Diagnóstico", 
        
        page1: 
        {
            sec1 : 
            {

                title : event.page1.sec1.title, 
                score : event.page1.sec1.score, 
                textA : event.page1.sec1.textA, 
                correct : event.page1.sec1.correct, 
                incorrect : event.page1.sec1.incorrect, 
                medium : event.page1.sec1.medium

            }, 
            
            sec2: 
            { 
                title : event.page1.sec2.title, 
                length_Page: event.page1.sec2.length_Page,
                textA: event.page1.sec2.textA, 
                textB: event.page1.sec2.textB,
            }, 
            
            sec3: 
            {
                title: event.page1.sec3.title,
                level: event.page1.sec3.level,
                textA: event.page1.sec3.textA,
                textB: event.page1.sec3.textB,
            },
            
            sec4: 
            {
                title: event.page1.sec4.title, 
                time: event.page1.sec4.time, 
                textA: event.page1.sec4.textA, 
            }
        }, 
        
        page2 : 
        {
            sec1: 
            {
                title: event.page2.sec1.title, 
                words: event.page2.sec1.words, 
                textA: event.page2.sec1.textA,
                textB: event.page2.sec1.textB,
            }, 
                
            sec2: 
            {
                title: event.page2.sec2.title, 
                negations: event.page2.sec2.negations,  
                textA: event.page2.sec2.textA, 
                textB: event.page2.sec2.textB,
            }, 
            
            sec3: 
            {
                title: event.page2.sec3.title, 
                is_ordered: event.page2.sec3.is_ordered,  
                textA:  event.page2.sec3.textA, 
            }, 
            
            sec4: 
            {
                title: event.page2.sec4.title,  
                filename: event.page2.sec4.filename, 
                textA: event.page2.sec4.textA, 
            }
        }, 
        
        page3: 
        {
            sec1: 
            {
                title: event.page3.sec1.title,  
                what_is_left: 
                {
                    name : 
                    { exists : event.page3.sec1.what_is_left.name.exists, position : event.page3.sec1.what_is_left.name.position }, 
                    
                    phone : 
                    { exists : event.page3.sec1.what_is_left.phone.exists, position : event.page3.sec1.what_is_left.phone.position }, 
                    
                    mail : 
                    { exists : event.page3.sec1.what_is_left.mail.exists, position : event.page3.sec1.what_is_left.mail.position }, 
                    
                    location : 
                    { exists : event.page3.sec1.what_is_left.location.exists, position : event.page3.sec1.what_is_left.location.position }, 
                    
                    work : 
                    { exists : event.page3.sec1.what_is_left.work.exists, position : event.page3.sec1.what_is_left.work.position }, 
                    
                    education : 
                    { exists : event.page3.sec1.what_is_left.education.exists, position : event.page3.sec1.what_is_left.education.position }, 
                    
                    skills: 
                    { exists : event.page3.sec1.what_is_left.skills.exists, position : event.page3.sec1.what_is_left.skills.position }, 
                    
                    idioms : 
                    { exists : event.page3.sec1.what_is_left.idioms.exists, position : event.page3.sec1.what_is_left.idioms.position }
                }, 
                    
                textA :  event.page3.sec1.textA
            }, 
                    
            sec2 : 
            {
                title : event.page3.sec2.title, 
                repeated : event.page3.sec2.repeated,
                textA :  event.page3.sec2.textA,
            }, 
            
            sec3 : 
            {
                title : event.page3.sec3.title, 
                level : event.page3.sec3.level, 
                textA : event.page3.sec3.textA,
                textB : event.page3.sec3.textB,
              
            }, 
            
            sec4: 
            {
                
                title : event.page3.sec4.title, 
                level: event.page3.sec4.level,  
                textA: event.page3.sec4.textA,
                textB:  event.page3.sec4.textB,
            }
        }, 
        
        page4: 
        {
            sec1: 
            {
                title: event.page4.sec1.title,  
                skills: event.page4.sec1.skills,  
                textA:  event.page4.sec1.textA,
                textB:  event.page4.sec1.textB,
            }, 
            
            sec2: 
            {
                title : event.page4.sec2.title,
                keywords : event.page4.sec2.keywords,
                textA : event.page4.sec2.textA,
            }, 
            
            sec3: 
            {
                title: event.page4.sec3.title,
                high: event.page4.sec3.high,
                medium: event.page4.sec3.medium,
                low: event.page4.sec3.low,
            },
            
            sec4: {}
        }
    
    }];

    return pdf;
};