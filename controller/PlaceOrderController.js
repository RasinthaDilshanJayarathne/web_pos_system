$("#custChombo").click(function (){
    console.log("Enter");
    for (var i of customerDB){
        let option =`<option>${i.id}</option>`;
        $("#custChomboBody").append(option);
    }
});
