document.getElementById("save").onclick = function() {
    var toValue = document.getElementById("redirect_to").value;
    var fromValue = document.getElementById("redirect_from").value;

    alert(toValue + " " + fromValue);
}

