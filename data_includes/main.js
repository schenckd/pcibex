PennController.ResetPrefix(null) // Shorten command names (keep this line here)
PennController.CheckPreloaded()
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