//calender dates limited by 12 days to match with the api weather prediction limit
// Date entry and exit defined in order to select a date first then the exit date will  display days only after the entry date.

function dateEntry () {
    const today = new Date();
    let max = new Date((today.getTime() + (12 * (1000 * 60 * 60 * 24))));
    let maxDate = new Date(max)
    let userInputdate = document.getElementById("startDate");
    userInputdate.min = today.toISOString().split("T")[0];
    userInputdate.max = maxDate.toISOString().split("T")[0];
    console.log(today)
   }
   function dateExit () {
        document.getElementById('startDate').addEventListener('blur', callback)
        function callback() {
        let newStartDate = document.getElementById("startDate").value;
        let newEndDate = document.getElementById("endDate").min = newStartDate;
    }
}
dateExit(); window.onload = dateEntry();

export {dateExit, dateEntry}