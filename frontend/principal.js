$(document).ready(function(){

    $.getJSON("/tarefas.json", function(valores){
        
        valores.forEach(function(item){
            let nova = "<li>" 
                + "<b>"+ item.titulo +"</b>"
                + "<p>"+ item.descricao +"</p>"
                +"</li>";
            
            $(".tarefas-dia").append(nova);
        });

    });// fim do getJson

});