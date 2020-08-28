
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
  newTrial( "practica1",
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

Template("Practica_Espanol_ButtonNormal.csv" ,
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
Template(  "Math_Spanish_Level_1_2.csv" ,
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
Template(  "Math_Spanish_Level_3_4.csv" ,
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
Template(  "Math_Spanish_Level_5_6.csv" ,
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
Template(  "Math_Spanish_Level_7_8.csv" ,
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

// Experimento_espanol_nivel 5
Template(  "Table_Espanol_ButtonNormal_nivel_5.csv" ,
    row => newTrial( "Experimento_espanol_nivel_5" ,
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

     newTrial( "nivel_5",
  newImage("Level_5","Auditory_Spanish_Level_5.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_5")
    .remove()
)

// Experimento_espanol_nivel 6
Template(  "Table_Espanol_ButtonNormal_nivel_6.csv" ,
    row => newTrial( "Experimento_espanol_nivel_6" ,
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

     newTrial( "nivel_6",
  newImage("Level_6","Auditory_Spanish_Level_6.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_6")
    .remove()
)

// Experimento_espanol_nivel 7
Template(  "Table_Espanol_ButtonNormal_nivel_7.csv" ,
    row => newTrial( "Experimento_espanol_nivel_7" ,
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

     newTrial( "nivel_7",
  newImage("Level_7","Auditory_Spanish_Level_7.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_7")
    .remove()
)

// Experimento_espanol_nivel 8
Template(  "Table_Espanol_ButtonNormal_nivel_8.csv" ,
    row => newTrial( "Experimento_espanol_nivel_8" ,
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

     newTrial( "nivel_8",
  newImage("Level_8","Auditory_Spanish_Level_8.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Level_8")
    .remove()
)

newTrial("pause", newButton("Presiona para continuar").print().wait() )


     newTrial( "lengua_instrucciones",
  newImage("Spanish_Instruction","N400_Spanish_Instructions.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Spanish_Instruction")
    .remove()
    ,
      newImage("Spanish_Begin","N400_Spanish_Begin.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("Spanish_Begin")
    .remove()
)



// Experimento_lengua_espanol
Template( "Table_PalabraEspanol_Normal_Level_1.csv" ,
    // Row will iteratively point to every row in myTable.csv
    row => newTrial( "Experimento_lengua_espanol_Level_1" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("palabra",row.Palabra)
        .play()
    ,
        newTimer(1450).start()
        .wait()
    ,
    getImage("fixationpoint")
        .remove()
    ,
    newImage("imagen",row.Imagen)
        .size(850,450)
        .print()
    ,
        newTimer(600).start()
        .wait()
    ,        
    getImage("imagen")
        .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 3000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer   )	
     .log( "ID" , getVar("ID")   
))  

     newTrial( "Spanish_Level_1",
  newImage("N400_Spanish_Level_1","N400_Spanish_Level_1.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("N400_Spanish_Level_1")
    .remove()
)

Template( "Table_PalabraEspanol_Normal_Level_2.csv" ,
    // Row will iteratively point to every row in myTable.csv
    row => newTrial( "Experimento_lengua_espanol_Level_2" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("palabra",row.Palabra)
        .play()
    ,
        newTimer(1450).start()
        .wait()
    ,
    getImage("fixationpoint")
        .remove()
    ,
    newImage("imagen",row.Imagen)
        .size(850,450)
        .print()
    ,
        newTimer(600).start()
        .wait()
    ,        
    getImage("imagen")
        .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 3000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer   )	
     .log( "ID" , getVar("ID")   
))  

     newTrial( "Spanish_Level_2",
  newImage("N400_Spanish_Level_2","N400_Spanish_Level_2.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("N400_Spanish_Level_2")
    .remove()
)

Template( "Table_PalabraEspanol_Normal_Level_3.csv" ,
    // Row will iteratively point to every row in myTable.csv
    row => newTrial( "Experimento_lengua_espanol_Level_3" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("palabra",row.Palabra)
        .play()
    ,
        newTimer(1450).start()
        .wait()
    ,
    getImage("fixationpoint")
        .remove()
    ,
    newImage("imagen",row.Imagen)
        .size(850,450)
        .print()
    ,
        newTimer(600).start()
        .wait()
    ,        
    getImage("imagen")
        .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 3000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer   )	
     .log( "ID" , getVar("ID")   
))  

     newTrial( "Spanish_Level_3",
  newImage("N400_Spanish_Level_3","N400_Spanish_Level_3.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("N400_Spanish_Level_3")
    .remove()
)

Template( "Table_PalabraEspanol_Normal_Level_4.csv" ,
    // Row will iteratively point to every row in myTable.csv
    row => newTrial( "Experimento_lengua_espanol_Level_4" ,
        newImage("fixationpoint", row.Fixation)
        .size(850,450)
        .print()
    ,
    newAudio("palabra",row.Palabra)
        .play()
    ,
        newTimer(1450).start()
        .wait()
    ,
    getImage("fixationpoint")
        .remove()
    ,
    newImage("imagen",row.Imagen)
        .size(850,450)
        .print()
    ,
        newTimer(600).start()
        .wait()
    ,        
    getImage("imagen")
        .remove()
    ,
     newKey("pressOnArrow", "ArrowLeft", "ArrowRight") .log() .callback( getTimer("timeout").stop() ).log("all") , newTimer("timeout", 3000).start().log().wait() , getKey("pressOnArrow") .disable() ) .log( "Correct_answer"  , row.Correct_answer   )	
     .log( "ID" , getVar("ID")   
))  

     newTrial( "Spanish_Level_4",
  newImage("N400_Spanish_Level_4","N400_Spanish_Level_4.jpg")
            .size(850,450)
            .print()
    ,
    newKey(" ")
    .wait()
    ,
    getImage("N400_Spanish_Level_4")
    .remove()
)



