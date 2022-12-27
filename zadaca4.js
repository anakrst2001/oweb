$(document).ready(function(){
    $("#kopce").on("keyup", function() {
    var vrednost=$(this).val().toLowerCase();
    $("#tabela tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(vrednost)>-1)
    });
});
});