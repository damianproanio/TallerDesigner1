

//Entity: Persona
//Persona.estadoCivil (ComboBox) View: FormEstadoCivil
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_1SXEWQHKJWGQCBW_598937 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;

    if(entities.Persona.estadoCivil==0) {
        changedEventArgs.commons.api.viewState.hide('G_ESTADOCLIL_647937');
    }
    if(entities.Persona.estadoCivil==1){
        changedEventArgs.commons.api.viewState.show('G_ESTADOCLIL_647937');
        entities.Persona.estadoCivilEtiqueta = "Soltero";
        entities.Persona.actividadActual = "Listo para la farra";
    }
    if(entities.Persona.estadoCivil==2){
        changedEventArgs.commons.api.viewState.show('G_ESTADOCLIL_647937');
        entities.Persona.estadoCivilEtiqueta = "Casado";
        entities.Persona.actividadActual = "Lavando los platos";
    }
    

};