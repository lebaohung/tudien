function search(){
    let word = document.getElementById("word"), result = "";
    let arr = [
        {
            eng : "house",
            vie : "ngoi nha"
        },
        {
            eng: "computer",
            vie: "may tinh"
        },
        {
            eng: "keyboard",
            vie: "ban phim"
        },
        {
            eng: "clock",
            vie: "dong ho"
        }
    ]
    switch (word.value) {
        case null:
        case "":
            alert("Please type the word you need to translate!");
            break;
        default:
            for(let i in arr) {
                if(arr[i].eng == word.value) {
                    result = arr[i].eng + " : " + arr[i].vie;
                }
            }
            if(result === "") alert("We do not know seriously!");
          }

    document.getElementById("result").innerHTML = result;
    word.value="";
}
