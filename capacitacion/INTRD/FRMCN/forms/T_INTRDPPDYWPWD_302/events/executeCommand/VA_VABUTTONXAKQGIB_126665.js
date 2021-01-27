

//Entity: CuentaOrigen
//CuentaOrigen. (Button) View: FormTransferencia
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONXAKQGIB_126665 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    if (entities.CuentaOrigen.saldo<entities.CuentaOrigen.valorATransferir) {
        executeCommandEventArgs.commons.messageHandler.showMessagesError("Saldo Insuficiente");
    }
    else{
        entities.CuentaOrigen.saldo -= entities.CuentaOrigen.valorATransferir;
        entities.CuentaDestino.saldo += entities.CuentaOrigen.valorATransferir;
		entities.CuentaOrigen.valorATransferir = 0;
        executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("Transferencia Exitosa");
    }
    
};