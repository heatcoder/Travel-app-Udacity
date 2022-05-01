//date for planning is limited with in 8 days from the chosen date.
function dateEntry () {
    let date = new Date();
    let allowedDaysLength = new Date((date.getTime() + (8 * (1000 * 60 * 60 * 24))));
    let userInputdate = document.getElementById("start-date");
    input.currentDateDeparture = new Date().toISOString().split("T")[0];
    input.allowedDaysLength = allowedDaysLength.toISOString().split("T")[0];
    }
    
    function dateExit () {
        let startDate = document.getElementById('start-date');
        startDate.addEventListener('blur', value)
        function value() {
            let newStartDate = document.getElementById("start-date").value;
            let newEndDate = document.getElementById("to").currentDateDeparture = newStartDate;
            console.log(newEndDate)
    }
}
dateExit(); window.onload = dateEntry();

export {dateExit, dateEntry}