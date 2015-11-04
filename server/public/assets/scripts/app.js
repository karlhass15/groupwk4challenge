var peopleInfo = {};

$(document).ready(function(){



    $("#employeeForm").submit(function(event) {

        var k = 0;
        event.preventDefault();


        $.each($(this).serializeArray(),function (i, field) {
            peopleInfo[field.name] = field.value;
        });

        $(this).find("input[type=text]").val("");

        while(k < peopleInfo.numOfEmployees){
            sendData();
            k++;
        }


        //console.log(peopleInfo);
    });
            //POSITIONING OF CALLS
});

function sendData () {

    $.ajax({
        type: "POST",
        url: "/data",
        data: peopleInfo,
        beforeSend: function(){
            $("#loadingEmployees").show();
            //setTimeout(function(){
            //    alert("Done");
            //}, 5000);
            //console.log("This is people ", peopleInfo);
        },

        complete: function(){
            $("#loadingEmployees").text("Employees loaded");
            $("#loadingEmployees").hide(4000);
        },

        success: function (data) {

            console.log(data);
        }
    });
}

