

//Entity: Persona
//Persona. (Button) View: FormEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONEFSAASP_462937 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;

    entities.Persona.estadoCivil = 0;
    executeCommandEventArgs.commons.api.viewState.hide('G_ESTADOCLIL_647937');
    
};