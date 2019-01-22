function firstName(first){
    function fullName(last){
        console.log(first + " " + last);
    }
    return fullName;
}
var name = firstName("Mister");
name("Smith");
name("Jones");