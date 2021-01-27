
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormEstadoCivil
task.initData.VC_ESTADOCILI_969647 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    entities.Persona.estadoCivil = 0;
    initDataEventArgs.commons.api.viewState.hide('G_ESTADOCLIL_647937');

};