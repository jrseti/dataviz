
var i;

function redClick() {
    d3.select(".p1").style("color", "red");
    d3.select(".p2").style("color", "red");
    console.log(i);
}

function greenClick() {
    d3.select(".p1").style("color", "green");
    d3.select(".p2").style("color", "green");
}

function count() {

    for(i = 0; i<10; i++) {
        console.log(i);
        //alert(i);
    }
    console.log(i);
}

function fe() {

    

    let nums = [1,2,3,4,5];
    nums.forEach(fe2);
    //for(let i = 0; i<5; i++) {
     //   fe2(nums[i]);
    //}

}

function fe2(num) {
    console.log(num);
}

function const_example() {
    const x = 5;
    console.log(x);
    x = 6;
    console.log(x);
}


// Attach an event to listen for the form button
d3.selectAll("#red-btn").on("click", redClick);
d3.selectAll("#green-btn").on("click", greenClick);
d3.selectAll("#count-btn").on("click", count);
d3.selectAll("#fe-btn").on("click", fe);
d3.selectAll("#const-btn").on("click", const_example);
