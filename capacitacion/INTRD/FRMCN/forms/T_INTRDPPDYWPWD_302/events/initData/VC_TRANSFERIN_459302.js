
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: FormTransferencia
task.initData.VC_TRANSFERIN_459302 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    entities.CuentaOrigen.numeroCuenta = '123456';
    entities.CuentaOrigen.saldo = 2000;
    
    entities.CuentaDestino.numeroCuenta = '654321';
    entities.CuentaDestino.saldo = 1000;

	initDataEventArgs.commons.api.viewState.disable('VA_8497LVCTKTJKJEK_325665');    
	initDataEventArgs.commons.api.viewState.disable('VA_8337MOQDYWVRJXY_831665');    
	initDataEventArgs.commons.api.viewState.disable('VA_5913LNVCSIABOEE_169665');    
	initDataEventArgs.commons.api.viewState.disable('VA_8618FANTUKJJMTV_307665');    

};