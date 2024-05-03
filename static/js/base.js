// Incrementar valores nos inputs
function incredec(x, y, z) {
    // Abrir o drop down & popular seus filhos
    $(function(){
        

        // Duplicador de campo 
        $('.duplicatormaximus').off('click').on('click', function(){
            var copiar_div = document.querySelector('.coopyx_max');
            var new_copiar_div = copiar_div.cloneNode(true);
            var superindex = $(this).closest('.unicogenerated-field').find('.ihaveindex').data('myindexbloc');
            // Remove a classe pra não dar b.o na hora de adicionar o novovalor 
            new_copiar_div.classList.remove('coopyx_max');
            // Conta as divs e vê quanto add no inputer 
            
            qnt_divs = $(this).parent('.duplicator_turmas_materias').parent('.duplicater_add_div').children('.relacional_professorxmateria').length;

            new_copiar_div.innerHTML = new_copiar_div.innerHTML.replace(/REPLACEINDEX/g, superindex);    
            new_copiar_div.innerHTML = new_copiar_div.innerHTML.replace(/newreplaceindex/g, qnt_divs + 1);    


            // Finalmente adiciona a div duplicada
            $(this).parent('.duplicator_turmas_materias').parent('.duplicater_add_div').append(new_copiar_div);
            $(this).next('.count_materias').val(qnt_divs + 1);

            $(function(){
                $('.header-materiasturmas_repeater button').off('click').on('click', function(){
                    $(this).parent('.header-materiasturmas_repeater').next('.content_materias_turmas').slideToggle();
                });

                $('.fakeselect_').off('click').on('click', function() {
                    myturmas = $(this).parent('.dropdown-sendturmas').data('sendturma');
                    $(this).next('.body_dropdownsend').slideToggle();
                });

                $('.body_dropdownsend input').off('change').on('change', function(){
                    meutexto = $(this).data('mytext');
                    meuid = $(this).val();
                    meupaiturma = $(this).parent().parent().parent('.dropdown-sendturmas').data('sendturma');

                    // Alimenta a div com spans correspondentes aos selecionados
                    $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').each(function(){
                        if ($('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').length > 0) {
                            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').remove();
                        }
                        else{
                            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').append('<span data-spnexid="'+meuid+'"><button type="button">x</button>'+meutexto+'</span>');
                        }
                    });

                    
                });
            });
        }); 




        $('.header-materiasturmas_repeater button').off('click').on('click', function(){
            $(this).parent('.header-materiasturmas_repeater').next('.content_materias_turmas').slideToggle();
        });

        $('.fakeselect_').off('click').on('click', function() {
            myturmas = $(this).parent('.dropdown-sendturmas').data('sendturma');
            $(this).next('.body_dropdownsend').slideToggle();
        });

        $('.body_dropdownsend input').off('change').on('change', function(){
            meutexto = $(this).data('mytext');
            meuid = $(this).val();
            meupaiturma = $(this).parent().parent().parent('.dropdown-sendturmas').data('sendturma');
            $(this).parent().parent().parent('.dropdown-sendturmas').addClass('redCOLOR');
            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').addClass('redCOLOR');
            // Alimenta a div com spans correspondentes aos selecionados
            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').each(function(){
                if ($('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').length > 0) {
                    $('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').remove();
                }
                else{
                    $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').append('<span data-spnexid="'+meuid+'"><button type="button">x</button>'+meutexto+'</span>');
                }
            });

            
        });
    });

    
    var inputElements = document.getElementsByClassName('receive_val');
    
    // Verifique se há pelo menos um elemento com a classe 'receive_val'
    if (inputElements.length === 0) {
        console.error('Nenhum elemento com a classe receive_val encontrado.');
        return;
    }

    // Vamos assumir que estamos interessados no primeiro elemento com a classe 'receive_val'
    var inputval = inputElements[0];
    var valor_atual = parseInt(inputval.value);
    var counter_input = document.getElementById('counter');
    
    if (x === 'up') {
        novovalor = valor_atual + 1;
    } else {
        if (valor_atual === 0) {
            return;
        } else {
            novovalor = valor_atual - 1;
        }
    }

    inputval.value = novovalor;
    counter_input.value = novovalor;

    // Referência à div repeaterbody-line
    var repeaterBodyLine = document.getElementById('repeaterbody-line');
    
    if (x === 'up') {
        // Adicionar a div modelo
        var newDiv = document.createElement('div');
        if(z == 'type1'){
            newDiv.className = 'col-12 col-lg-6';
            newDiv.innerHTML = '<div class="formg_math"><label for="' + novovalor + '"><h3>'+ y +' ' + novovalor + '</h3><input class="required" type="text" name="'+ y.toLowerCase() +'_'+novovalor+'" id="' + novovalor + '"></label></div>';
            
        }
        else if(z == 'type2'){
            var type2Div = document.querySelector('.fieldto-copy');
            var newDiv = type2Div.cloneNode(true);
            
            // Remove a classe pra não dar b.o na hora de adicionar o novovalor 
            newDiv.classList.remove('fieldto-copy');

            // Substitiui tudo que é REPLACEINDEX pelo id necessário 
            newDiv.innerHTML = newDiv.innerHTML.replace(/REPLACEINDEX/g, novovalor);
        }
        else{
            newDiv.className = 'col-12 col-lg-6';
            newDiv.innerHTML = '<div class="formg_math"><label for="' + novovalor + '"><h3>'+ y +' ' + novovalor + '</h3><input class="required" type="text" name="'+ y.toLowerCase() +'_'+novovalor+'" id="' + novovalor + '"></label></div>';
    
        }
        repeaterBodyLine.appendChild(newDiv);
    } else {
        // Remover a última div modelo
        var lastChild = repeaterBodyLine.lastElementChild;
        if (lastChild) {
            repeaterBodyLine.removeChild(lastChild);
        }
    }


    checkSave();
}


// Pega os textos da unidade e período 
function gtvalue(x){
    // Pega o data attr 
    dataattr = x.options[x.selectedIndex].dataset.title;
    
    // Pega o id 
    idfield = x.id;

    // Alimentar o campo com o id
    fieldAlimenta = document.getElementById('r_'+idfield);
    fieldAlimenta.value = dataattr;
}



$('.fakeselect_').off('click').on('click', function() {
    myturmas = $(this).parent('.dropdown-sendturmas').data('sendturma');
    $(this).next('.body_dropdownsend').slideToggle();
});

$('.body_dropdownsend input').off('change').on('change', function(){
    meutexto = $(this).data('mytext');
    meuid = $(this).val();
    meupaiturma = $(this).parent().parent().parent('.dropdown-sendturmas').data('sendturma');
    $(this).parent().parent().parent('.dropdown-sendturmas').addClass('redCOLOR');
    $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').addClass('redCOLOR');

    $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').each(function(){
        if ($('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').length > 0) {
            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').remove();
        }
        else{
            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').append('<span data-spnexid="'+meuid+'"><button type="button">x</button>'+meutexto+'</span>');
        }
    });
});

$('.header-materiasturmas_repeater button').off('click').on('click', function(){
    $(this).parent('.header-materiasturmas_repeater').next('.content_materias_turmas').slideToggle();
});


// Duplicador de campo 
$('.duplicatormaximus').off('click').on('click', function(){
    var copiar_div = document.querySelector('.coopyx_max');
    var new_copiar_div = copiar_div.cloneNode(true);
            
    // Remove a classe pra não dar b.o na hora de adicionar o novovalor 
    new_copiar_div.classList.remove('coopyx_max');

    // Conta as divs e vê quanto add no inputer 
    // 
    qnt_divs = $(this).parent('.duplicator_turmas_materias').parent('.duplicater_add_div').children('.relacional_professorxmateria').length;

    new_copiar_div.innerHTML = new_copiar_div.innerHTML.replace(/REPLACEINDEX/g, 1);    
    new_copiar_div.innerHTML = new_copiar_div.innerHTML.replace(/newreplaceindex/g, qnt_divs + 1);    


    // Finalmente adiciona a div duplicada
    $(this).parent('.duplicator_turmas_materias').parent('.duplicater_add_div').append(new_copiar_div);
    $(this).next('.count_materias').val(qnt_divs + 1);

    $(function(){
        $('.header-materiasturmas_repeater button').off('click').on('click', function(){
            $(this).parent('.header-materiasturmas_repeater').next('.content_materias_turmas').slideToggle();
        });

        $('.fakeselect_').off('click').on('click', function() {
            myturmas = $(this).parent('.dropdown-sendturmas').data('sendturma');
            $(this).next('.body_dropdownsend').slideToggle();
        });

        $('.body_dropdownsend input').off('change').on('change', function(){
            meutexto = $(this).data('mytext');
            meuid = $(this).val();
            meupaiturma = $(this).parent().parent().parent('.dropdown-sendturmas').data('sendturma');
            $(this).parent().parent().parent('.dropdown-sendturmas').addClass('redCOLOR');
            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').addClass('redCOLOR');

            // Alimenta a div com spans correspondentes aos selecionados
            $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').each(function(){
                if ($('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').length > 0) {
                    $('.turmas_relational[data-receiveturma="'+meupaiturma+'"] span[data-spnexid="'+meuid+'"]').remove();
                }
                else{
                    $('.turmas_relational[data-receiveturma="'+meupaiturma+'"]').append('<span data-spnexid="'+meuid+'"><button type="button">x</button>'+meutexto+'</span>');
                }
            });

            
        });
    });
}); 



// Open professor calendar 
$('.header-looperdays button').on('click', function(){
   $(this).parent('.header-looperdays').next('.content-looperdays').slideToggle();
   $(this).toggleClass('active-loperdays');
});

// Check e uncheck all 
function checkun(x, y){
    if(x == 1){
        $('.bodhy-calendar[data-lopperdays="'+y+'"] input').each(function(){
            $(this).prop('checked', true);
        });
    }
    else{
        $('.bodhy-calendar[data-lopperdays="'+y+'"] input').each(function(){
            $(this).prop('checked', false);
        });
    }
}

/// Exportar para xlsx 
function exportarParaXLSX(x,y) {
    var tabela = document.getElementById(x);

    var dataTable = $('#'+x).DataTable();
    dataTable.page.len(-1).draw();

    var livro = XLSX.utils.table_to_book(tabela, { sheet: "Visualização" });
    XLSX.writeFile(livro, y+".xlsx");

    dataTable.page.len(10).draw();
}




//////////
/*  SUPER VALIDAÇÃO DE FORMULÁRIO/
////////*/
$('#fm').submit(function(event) {
    // Validar campos do formulário no lado do cliente
    var isValid = true;

    $('#fm .required').each(function(){
        if ($(this).is('select')) {
            sou = 'select';
            valor = $(this).find('option:selected').attr('value');
        }
        else{
            sou = 'outro';
            valor = $(this).val();
        }

        if (valor == '') {
            isValid = false;
            $(this).addClass('error_field');
        } 
        else {
            $(this).removeClass('error_field');
        }
        console.log(valor);
    });

    if (!isValid) {
        event.preventDefault(); // Impede o envio do formulário se houver erros
    }
});

$(window).on('load', function(){
    checkSave();
});

function checkSave(){
    qnt_fields = $('.receive_val').val();

    if(qnt_fields <= 0){
        $('.button-savestage button').attr('disabled', true);
    }
    else{
        $('.button-savestage button').attr('disabled', false);
    }
}

// Ativa o campo de unidade com base no de Escolas
$('#escola_newuser').on('change', function(){
    escola_id = $(this).val();
    $('#unidade_newuser option:first-of-type').prop('selected', true);

    // Tira o disabled da unidade
    $('#unidade_newuser').removeClass('disabled_unidadefield');

    // Agora, só fica exibindo os campos que tem o data como o id selecionado 
    $('#unidade_newuser option').addClass('disabled_opt');
    $('#unidade_newuser option[data-idescola="'+escola_id+'"]').removeClass('disabled_opt');
});

$(document).ready(function(){
    $("#2").keyup(function(){
        validarSenha();
    });

    $("#3").keyup(function(){
        validarSenha();
    });

    function validarSenha() {
        var senha = $("#2").val();
        var confirmarSenha = $("#3").val();
        var senhaValida = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(senha);
        
        if (!senhaValida) {
            $("#2").removeClass("valid-password").addClass("invalid-password");
            $(".error-message").remove();
            $(".formg_login_first:first").append('<p class="error-message">A senha não atende aos requisitos.</p>');
            $("button.altPass").prop("disabled", true);
        } else {
            $("#2").removeClass("invalid-password").addClass("valid-password");
            $(".error-message").remove();
            if (senha !== confirmarSenha) {
                $(".formg_login_first:eq(1)").append('<p class="error-message">As senhas não coincidem.</p>');
                $("button.altPass").prop("disabled", true);
            } else {
                $("button.altPass").prop("disabled", false);
            }
        }
    }
});

// Abrir configurações 
$('.flex-settings button').on('click', function(){
    $('.settings-guide').slideToggle();
});