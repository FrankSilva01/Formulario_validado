
    let senha = document.getElementById('senha').value;
    let senha2 = document.getElementById('senha2').value;
    let cpf = document.getElementById('cpfBr');
    let nascimento = document.getElementById('nascimento');

$(document).ready(function() {
    $('meuForm').validate({
        rules: {
            nome: {
                required: true,
                minlength: 4,       
            },
            cpfBr:{
                cpf: true,
                minlength:14,
                maxlength:14
               
                       },
            email: {
                required: true,
                email: true
            },
            nascimento: {
                required: true,
            },
            senha: {
                required: true,
                rangelength: [6,15]
            },
            senha2: {
                required: true,
                equalTo: 'senha'
            },
            genero: {
                required: true,
            }
        }
    }) 
}),  
        $('#nome').focus((e)=> {
        if (document.getElementById("nome").value ==""){
        document.getElementById("mensagem").innerHTML = 'Digite seu nome'
        return false;
    }

})
        $('#nome').focus(()=> {
        if (document.getElementById("nome").value.length <= 3){
        document.getElementById("mensagem").innerHTML = 'Digite pelo menos 4 letras no nome'
        return false;
    }
        $('#nome').blur(()=> {
        if (document.getElementById("nome").value.length == 4)
        document.getElementById("mensagem").innerHTML = ''
        return false;
    })  
 }
)
            $('#cpfBr').focus((e) => {
            if (document.getElementById("cpfBr").value ==""){
            document.getElementById("mensagem").innerHTML = 'Digite seu CPF'
            return false;
        }
                $('#cpfBr').blur(()=> {
                if (document.getElementById("cpfBr").value.length < 14){
                document.getElementById("mensagem").innerHTML = 'Coloque todos os dígitos do CPF'
                return false;
            }
           
                else  if (document.getElementById("cpfBr").value.length == 14)
                document.getElementById("mensagem").innerHTML = ''
                return false;
            })  
         }
        )

        $('#email').focus((e) => {
        if (document.getElementById("email").value ==""){
        document.getElementById("mensagem").innerHTML = 'Digite seu email'
        return false;
    }
        else if (document.getElementById("email").value != email) {
        document.getElementById("mensagem").innerHTML = 'Digite um e-mail valido'
        return false;
    }
})
      $('#email').blur((e) =>{
      if (document.getElementById("email").value != "") {
      document.getElementById("mensagem").innerHTML = ''
      return false;
    }
})
        $('#nascimento').focus((e)=>{
        if (document.getElementById("nascimento").value == "") {
        document.getElementById("mensagem").innerHTML = 'Digite sua data de nascimento'
        return false;
      }
        $('#nascimento').blur((e) =>{
        if (document.getElementById("nascimento").value.length === 10){
            document.getElementById("mensagem").innerHTML = ''
          }
      })    
})

    $('#senha').focus((e) => {
    if (document.getElementById("senha").value ==""){
        document.getElementById("mensagem").innerHTML = 'Digite uma senha'
        return false;
    }
    $('#senha').blur(()=> {
        if (document.getElementById("senha").value.length <= 3 && document.getElementById("senha").value.length < 4)
            document.getElementById("mensagem").innerHTML = 'A senha precisa ter no minimo 4 caracteres'
            return false;
        })  
     }
    )
    $('#senha').blur(()=> {
        if (document.getElementById("senha").value.length == 4)
            document.getElementById("mensagem").innerHTML = ''
            return false;
        })  

    $('#senha2').blur((e) => {
    if (document.getElementById("senha2").value != document.getElementById('senha').value){
        document.getElementById("mensagem").innerHTML = 'Digite a senha igual a anterior'
        return false;
    } 
})
    $('#senha2').blur((e)=> {
        if (document.getElementById("senha2").value != document.getElementById("senha").value){
            alert('Senhas diferentes, por favor corrija!')
            e.preventDefault();
        } 
    })  

    $('h1').fadeOut(6000).fadeIn(2000)

    // FUNÇÃO LIMPAR CAMPOS DO BOTAO CANCELAR
    function reset (){
        document.getElementById("nome").value = "";
        document.getElementById("cpfBr").value = "";
        document.getElementById("email").value = "";
        document.getElementById("aniversario").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("senha2").value = "";
    }

    // VERIFICAR SE TEM SOMENTE LETRAS NO NOME

    const inputName = document.querySelector('#nome')

    inputName.addEventListener('keypress', function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58){
        e.preventDefault ();
    }
})

     // MASCARA DO CPF
        cpfBr.addEventListener('keypress', () => {
        let inputlength = cpfBr.value.length;
        if (inputlength === 3 || inputlength === 7) {
            cpfBr.value += '.';
        }
        else if (inputlength === 11) {
            cpfBr.value += '-'
        }
        
    })

    //FILTRO PARA ACEITAR SOMENTE NÚMEROS CPF
            const cpfChecar = document.querySelector('cpfBr');
            cpf.addEventListener('keypress', function (e){
            const keyCode = (e.keyCode ? e.keyCode: e.wich);

            if (keyCode < 40 && keyCode >41 || keyCode <48 || keyCode >57 ) {
                e.preventDefault ();
            }
        })

    // FILTRO PARA ACEITAR SOMENTE NÚMEROS  DATA DE NASCIMENTO
        
            const nascimentoChecar = document.querySelector('nascimento');
            nascimento.addEventListener('keypress', function (e){
            const keyCode = (e.keyCode ? e.keyCode: e.wich);

            if (keyCode < 40 && keyCode >41 || keyCode <48 || keyCode >57 ) {
                e.preventDefault ();
        }
            })
    // MASCARA DATA DE NASCIMENTO

            nascimento.addEventListener('keypress', () => {
            let aniversario = nascimento.value.length;
            if (aniversario === 2 || aniversario === 5) {
            nascimento.value += '/';
        }
    });

     // VALIDAÇÃO DOS CAMPOS DO FORMULARIO
   function valida_form (e){   

    if(document.getElementById("nome").value =="")
    {
    document.getElementById('mensagem').innerHTML =('Por favor, preencha o campo *Nome');
    document.getElementById("nome").focus();
    return false
    }  
    else if (document.getElementById("cpfBr").value =="")
    {
        document.getElementById('mensagem').innerHTML =('Por favor, preencha o campo *CPF');
        document.getElementById("cpfBr").focus();
        return false
    }
        else if (document.getElementById("email").value =="")
        {
        document.getElementById('mensagem').innerHTML =('Por favor, preencha o campo *E-mail');
        document.getElementById("email").focus();
        return false
    }
    else if (document.getElementById("nascimento").value ==""){
        document.getElementById('mensagem').innerHTML =('Por favor, preencha o campo *Data de nascimento');
        document.getElementById("nascimento").focus();
        return false
    }

    else if (document.getElementById("senha").value ==""){
        document.getElementById('mensagem').innerHTML =('Por favor, preencha o campo *Senha');
        document.getElementById("senha").focus();
        return false
    }   
    else if (document.getElementById("senha2").value ==""){
     document.getElementById('mensagem').innerHTML = ('Por favor, preencha o campo *Confirmar senha');
        document.getElementById("senha2").focus();
        e.preventDefault();
    }
    }

    meuForm.addEventListener('submit', (e) =>{
        if (document.getElementById("senha").value != document.getElementById("senha2").value)
        {
            alert('Cadastro não realizado, senhas diferentes')
            document.getElementById("mensagem").innerHTML = 'Senhas diferentes, por favor corrija!'
            e.preventDefault ();
        }
        else {
            alert('Cadastrado com sucesso!')
            document.getElementById("mensagem").innerHTML = 'Cadastrado com sucesso!'
        }
    })