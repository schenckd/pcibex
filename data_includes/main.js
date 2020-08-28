PennController.ResetPrefix(null) // Shorten command names (keep this line here)
PennController.CheckPreloaded()

Sequence("intro", "practica1", "practica2", "empezar", "Experimento_espanol_nivel_1", "nivel_1", "Experimento_espanol_nivel_2", "nivel_2", 
"Experimento_espanol_nivel_3", "nivel_3", "Experimento_espanol_nivel_4", "nivel_4", "Experimento_espanol_nivel_5", "nivel_5", 
"Experimento_espanol_nivel_6", "nivel_6", "Experimento_espanol_nivel_7", "nivel_7", "Experimento_espanol_nivel_8", "nivel_8", "pause", 
"lengua_instrucciones", "Experimento_lengua_espanol_Level_1", "Spanish_Level_1", "Experimento_lengua_espanol_Level_2", "Spanish_Level_2", 
"Experimento_lengua_espanol_Level_3", "Spanish_Level_3", "Experimento_lengua_espanol_Level_4", "Spanish_Level_4")

// What is in Header happens at the beginning of every single trial

Header(
    // Delay of 250ms before every trial
    newTimer(2500)
        .start()
        .wait()
)

,
// This log command adds a column reporting the participant's name to every line saved to the results
newTrial("intro" ,
    newText("Universidad Autonoma de Queretaro")
        .settings.css("color","white")
        .settings.css("font-size", "80px")
        .print()
    ,
    newText("Estas invitado/a a participar de manera voluntaria a un estudio de vocabulario.")
        .settings.css ("color","white")
        .settings.css("font-size", "30px")
        .print()
    ,
    newText("Esto no es un examen. La informacion es estrictamente confidencial.")
        .settings.css("color", "white")
        .settings.css("font-size", "30px")
        .print()
    ,
    newText("Nos interesa saber sobre el vocabulario. Si estas de acuerdo en continuar, escribe tu nombre.")
        .settings.css ("color","white")
        .settings.css("font-size", "30px")
        .print()
    ,
    newTextInput("Entra tu nombre")
         .print()
    ,
    newButton("click", "Click para empezar")
        .print()
        .wait()
        .log()
    ,    
        newVar("ID")
        .global()
        .set( getTextInput("Entra tu nombre") )
        )
     .log( "ID" , getVar("ID") )   
        
        
  //Practica espanol
  newTrial( "Practica",
  newImage("Instructions","Math_Instruction_Spanish.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Instructions")
    .remove()
,
newImage("Practica","Practica.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Instructions")
    .remove()

)

Template("Practica_Espanol_ButtonNormal-1.csv" ,
	row => newTrial( "practica2" ,
   
	newImage("fixationpoint", row.Fixation)
	    .size(220,220)
        	//.print()
    ,
	newCanvas(500,50)
	.add(150,80, getImage("fixationpoint"))
	.print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
        
	newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        //.print()
     ,   
    newCanvas(10,10)
	.add(80,80, getText("num"))
	.print()
    ,
    newTimer(350) .start() .wait() 
    ,

     getText("num")
     .remove()
    ,

     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer   )	
     .log( "ID" , getVar("ID")   
))


  newTrial( "empezar",
  newImage("start","Math_Spanish_Begin.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("start")
    .remove()
)


// Experimento_espanol_nivel 1
Template(  "Math_Spanish_Level_1_2_Bloque1.csv" ,
    row => newTrial( "Experimento_espanol_nivel_1" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))

     newTrial( "nivel_1",
  newImage("Level_1","Math_Spanish_Level1.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_1")
    .remove()
)

// Experimento_espanol_nivel 2
Template(  "Math_Spanish_Level_3_4_Bloque2.csv" ,
    row => newTrial( "Experimento_espanol_nivel_2" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))

     newTrial( "nivel_2",
  newImage("Level_2","Math_Spanish_Level2.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_2")
    .remove()
)

// Experimento_espanol_nivel 3
Template(  "Math_Spanish_Level_5_6_Bloque3.csv" ,
    row => newTrial( "Experimento_espanol_nivel_3" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))

     newTrial( "nivel_3",
  newImage("Level_3","Math_Spanish_Level3.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_3")
    .remove()
)

// Experimento_espanol_nivel 4
Template(  "Math_Spanish_Level_7_8_Bloque4.csv" ,
    row => newTrial( "Experimento_espanol_nivel_4" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("primero",row.First_Operand)
        .play()
    ,
        newTimer(700).start()
        .wait()
    ,
    newAudio("segundo", row.Second_Operand)
        .play()
    ,
    newTimer(1150).start()
        .wait()
       ,
    getImage("fixationpoint")
        .remove()
    ,
    newText("num", row.Solution)
        .settings.css ("color","white")
        .settings.css("font-size", "200px")
        .print()
    ,
    newTimer(350) .start() .wait()
    ,
     getText("num")
     .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 5000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer     )	
     .log( "ID" , getVar("ID")   
))

     newTrial( "nivel_4",
  newImage("Level_4","Math_Spanish_Level4.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_4")
    .remove()
)