function start(){
    var remocaoo = document.getElementById("remocaoo");
    remocaoo.style.display = "none"

}

function att(){  
    var puni = document.getElementById("punicaoo");
    var remocaoo = document.getElementById("remocaoo");
    if (document.getElementById('julgamento2').value == "APROVADO")
        {
        remocaoo.style.display = "none"
        puni.innerText = "REMOÇÃO"
        
    }
    if (document.getElementById('julgamento2').value == "NEGADO")
        {
        remocaoo.style.display = "none"
        puni.innerText = "PUNIÇÃO"
    }

        if (document.getElementById('julgamento2').value == "CONVERTIDA")
            {
            remocaoo.style.display = "block"
            puni.innerText = "PUNIÇÃO"}
}






function copy(){
    var r = document.getElementById('resultado');
    var julgamento = document.getElementById('julgamento2').value; //variavel criada apenas com o intuiro de existir
    var id = document.getElementById('id').value;
    var tdenuncia = document.getElementById('tdenuncia').value;
    var trevisao = document.getElementById('trevisao').value;
    var motivo = document.getElementById('motivo').value;
    var convertido = document.getElementById('convertido').value;
    var punicao = document.getElementById('punicao').value; 
        
    if (document.getElementById('julgamento2').value == "CONVERTIDA")
        {   
             r.innerHTML = 
             `\`\`\` 🔄 REVISÃO CONVERTIDA 🔄 \`\`\`<br><br> ` +
              `**ID:${id}** <br>` +
              `**TICKET DENUNCIA:${tdenuncia}** <br>` +
              `**TICKET REVISÃO:${trevisao}** <br>` +
              `**MOTIVO:${motivo}**<br>` + 
              `**PUNIÇÃO:**${punicao}<br>` + 
              `**CONVERTIDO:${convertido}**<br>`
              ;      
    copiarRelatorio();  
    
        }
    if(document.getElementById('julgamento2').value == "APROVADO"){
        r.innerHTML = 
             `\`\`\` ✅ REVISÃO ACEITA ✅ \`\`\`<br><br> ` +
              `**ID:**${id}<br>` + 
              `**TICKET DENUNCIA: ${tdenuncia}**<br>` +
              `**TICKET REVISAO: ${trevisao}**<br>` +
              `**MOTIVO: ${motivo} **<br>` +
              `**REMOÇÃO: ${punicao} **<br>` 
               ;      
    copiarRelatorio(); 
     }   
     if (document.getElementById('julgamento2').value == "NEGADO"){
        r.innerHTML = 
        `\`\`\` ❌ REVISÃO NEGADA ❌ \`\`\`<br><br> ` +
         `**ID:**${id}<br>` + 
         `**TICKET DENUNCIA: ${tdenuncia}**<br>` +
         `**TICKET REVISAO: ${trevisao}**<br>` +
         `**MOTIVO: ${motivo} **<br>` +
         `**PUNIÇÃO: ${punicao} **<br>` 
          ;
          copiarRelatorio();
     }

}

function copiarRelatorio(){
    var r = document.getElementById('resultado');
    var range = document.createRange();
    range.selectNode(r);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try{
        document.execCommand('copy');
        alert('Relatório copiado para a área de transferência');                
    } catch (err) {
        alert('Erro ao copiar o relatório.');
    }
    
    window.getSelection().removeAllRanges();
 
}
