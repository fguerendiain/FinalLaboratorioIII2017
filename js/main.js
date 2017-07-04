$(document).ready(function(){

        //datos de usuario ---------------

        //VERIFICO LA SESION
        var validSession = VerifySession(); 
        if(validSession != true){
            RedirectTo('./login.html');
        };


        //IMPRIMO SALUDO AL USUARIO
        loadUserGreeting();

        //TRAIGO LISTADO DE VEHICULOS EN PLAYA Y LO IMPRIMO
        loadParkedVehicles();

        //TRAIGO LISTADO DE COCHERAS Y LO IMPRIMO
        loadNonTakenPlaces();


        //botones ------------------

        //ELEGIR TIPO DE PATENTE (activa el cuadro de texto)
        $('input[id="patenteselectorNac"]').on('change', function() {
            $('input[name="txtPatenteNacVehicleIn"]').attr('disabled', false).focus();
            $('input[name="txtPatenteExtVehicleIn"]').attr('disabled', true).focus();
            $('input[name="txtPatenteExtVehicleIn"]').val('');
        });
        $('input[id="patenteselectorExt"]').on('change', function() {
            $('input[name="txtPatenteExtVehicleIn"]').attr('disabled', false).focus();
            $('input[name="txtPatenteNacVehicleIn"]').attr('disabled', true).focus();
            $('input[name="txtPatenteNacVehicleIn"]').val('');
        });


        //PANEL DE CONTROL
        $('#btnControlPanel').click(function(){
            alert("btnControlPanel");
        });


        //LOG OUT
        $('#btnLogout').click(function(){
            ClearLocalStorageSessionData();
            RedirectTo('./login.html');
        });


        //INGRESO VEHICULO
        $('#btnVehicleIn').click(function(){ 
            var license;
            var alien;            
            if(document.getElementById('patenteselectorNac').checked){
                license = $('#txtPatenteNacVehicleInId').val();
                alien = 'false';
            }else{
                license = $('#txtPatenteExtVehicleInId').val();
                alien = 'true';
            }
            
            var colour = $('#txtColorVehicleInId').val();
            var model = $('#txtModeloVehicleInId').val();
            var brand = $('#txtMarcaVehicleInId').val();
            var place = $('#selectedPlace option:selected').val();
            var name = GetNamePlaceById(place);
            var floor = GetNameFloorById(place);

            var newParking = CrateParking(license, alien, colour, model, brand, name, floor);
            if(newParking){
                alert("Se Ingreso el vehiculo correctamente");
                loadParkedVehicles();
                loadNonTakenPlaces();
            }
      
        });

       
        //CONSIGO EL ID AL CLICKEAR EN TABLA VEHICULOS EN PLAYA
        $(".clickOnTable").click(function(e) {
            e.preventDefault();

            $('#btnVehicleIn').attr("disabled", false); //oculto

            $('.datosVehiculo').html(""); //reseteo los campos 
            $('.importeAPagar').html(""); //reseteo los campos

            var id = $(this).attr("data-valor");
            var parkingInfoBox = GetParkingById(id);
            if(parkingInfoBox){
                $('.datosVehiculo').html(parkingInfoBox);
            }
            $('#btnVehicleOut').attr("disabled", false); //boton visible
        });

        //EGRESO VEHICULO
        $('#btnVehicleOut').click(function(){

            var id = $(".infobox").attr("data-valor");
            var parkingOutBox = OutParkingById(id);
            if(parkingOutBox){
                $('.importeAPagar').html(parkingOutBox);
            }
            loadParkedVehicles();
            $('#btnVehicleOut').attr("disabled", true); //oculto
        });









        //BOOTSTRAP VALIDATOR btnVehicleIn
        $('#formVehicleIn').bootstrapValidator({

            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },

            fields: {
                txtColorVehicleIn: {
                    validators: {
                            stringLength: {
                            min: 3,
                            max: 12,
                            message: 'Ingrese un color valido'
                        },
                            notEmpty: {
                            message: 'Debe ingresar un color'
                        }
                    }
                },
                txtModeloVehicleIn: {
                    validators: {
                            stringLength: {
                            min: 2,
                            max: 25,
                            message: 'Ingrese una marca valida'
                        },
                            notEmpty: {
                            message: 'Debe ingresar una marca'
                        }
                    }
                },
                txtMarcaVehicleIn: {
                    validators: {
                            stringLength: {
                            min: 2,
                            max: 25,
                            message: 'Ingrese una marca valida'
                        },
                            notEmpty: {
                            message: 'Debe ingresar una marca'
                        }
                    }
                },
                onSuccess: function(e, data) {
                    $('#btnVehicleIn').attr("disabled", false);
                }
            }
        //------------$('#formVehicleIn').bootstrapValidator
        });


    //-----------$(document).ready
});