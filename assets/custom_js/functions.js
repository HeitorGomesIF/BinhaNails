const submitForm = async (form,url) => {
    const response = await fetch(url,{method: "POST",body: form})
    return await response.json()
}

function seletor(selector) {
    return document.querySelector(`${selector}`)
}

function id(id) {
    return document.getElementById(`${id}`)
}


function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que nÃ£o Ã© dÃ­gito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parÃªnteses em volta dos dois primeiros dÃ­gitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hÃ­fen entre o quarto e o quinto dÃ­gitos
    return v;
}

function mcpf(v){
    v=v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    return v;
}

function mCep(v) {
    v=v.replace(/\D/g,""); //Remove tudo o que nÃ£o Ã© dÃ­gito
    v=v.replace(/^(\d{5})(\d)/,"$1-$2")
    return v;
}

function mData(v) {
    v=v.replace(/\D/g,""); //Remove tudo o que nÃ£o Ã© dÃ­gito
    v=v.replace(/(\d{2})(\d)/,"$1/$2")
    v=v.replace(/(\d{2})(\d)/,"$1/$2")
    return v;
}

const getCep = async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await  response.json()
}

function sleep(time) {
    return new Promise(res => setTimeout(res, time));
}

async function digit(nome,el) {
    el.innerHTML = "";
    let text = "";
    for (let i = 0; i < nome.length; i++) {
        text = text + nome[i];
    }

    el.innerHTML = text
}

function alerta(response) {
    alert(response.msg)
}