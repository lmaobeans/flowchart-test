function main() {
    var no;

    no = "";
    while (no != "123") {
        window.alert("enter guess");
        no = window.prompt('Enter a value for no');
        if (no == "123") {
            window.alert("pasword right");
        } else {
            window.alert("wrong");
            window.alert("try again");
        }
    }
}
