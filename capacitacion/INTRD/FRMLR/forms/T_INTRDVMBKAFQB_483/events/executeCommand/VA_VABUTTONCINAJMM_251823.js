

//Entity: Persona
//Persona. (Button) View: EventosCliente
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONCINAJMM_251823 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    entities.Persona.nombreCompleto = entities.Persona.nombre + " " + entities.Persona.apellido;
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONKNLRBPL_711823');

};