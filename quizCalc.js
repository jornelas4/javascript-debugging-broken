$(document).ready(function () {
    $("form").submit (calculate);

    function calculate(event) {
        event.preventDefault();

        var quiz1 = parseFloat ($("#quiz1").val());
        var quiz2 = parseFloat($("#quiz2").val());
        var quiz3 = parseFloat($("#quiz3").val());

        var average = (quiz1 + quiz2 + quiz3) / 3;

        var min = Math.min(quiz1, quiz2, quiz3);
        var max = Math.max(quiz1, quiz3, quiz3);

        var gradeToPass = (73 * 4) - (quiz1 + quiz2 + quiz3);

        $("#average").text(average.toFixed(1) + "%");
        $("#minMax").text(`${min}/${max}`);
        $("#quiz4Grade").text(gradeToPass.toFixed(1));
    }
});