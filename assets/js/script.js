$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


function display() {

    var presentHour = moment().hour();

    //time taken for for loop 25 hours window to display dynamically  
    //the for loop will exit at 24th hour.
    var randomID = 25;
    var storeID = randomID
    for (var i = 0; i < 25; i++) {
        var text = localStorage.getItem(storeID);
        var divRow = $("<div>")
            .addClass("row time-block");
        timeLine = moment().hour(i).format("h A");
        var divCol = $("<div>")
            .addClass("col-1 hour")
            .html(timeLine)
            .attr("id", storeID);
        console.log(storeID);

        var plan = $("<textarea>")
            .addClass("col-10 input")
            .attr("id", i)
            .val(text);
        console.log(i);
        var save = $("<button>")
            .addClass("col-1 saveBtn far fa-save")
            .attr("dataId", i);
        console.log(i);
        $(".container").append(divRow);
        divRow.append(divCol, plan, save);


        if (i > presentHour) {
            $(plan).addClass("future");
        } else if (i === presentHour) {
            $(plan).addClass("present");
        } else {
            $(plan).addClass("past");
        }

    }
    //var savebtn = $(".saveBtn");
    $(".saveBtn").on("click", function() {

        var time = $(this).attr("dataId");
        var input = $("#" + time).val();

        //  the text for this event is saved in local storage
        localStorage.setItem(time, input);
    });



}





//to retrieve back whats saved
function retrieve() {

    $(".input").each(function() {
        var hour = $(this).text();
        var input = localStorage.getItem(hour);

        if (input !== null) {
            $(this).siblings(".hour").text(input);
        }
    });
}
retrieve();


display();