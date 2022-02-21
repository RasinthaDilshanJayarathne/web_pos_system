$("#custChombo").click(function (){
    $("#custChombo").empty();
    console.log("Enter");
    for (var i of customerDB){
        let option =`<option value="${i.id}">${i.id}</option>`;
        $("#custChombo").append(option);
    }

});
