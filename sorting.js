let delay = 10;
let flag = 1;


function createArray() {
    let arr = [];
    let arr_sz = document.querySelector("#arr_sz").value;
    console.log(arr_sz);
    for (let i = 1; i <= arr_sz; i++) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
    console.log(arr);

    for (let i = 0; i < arr_sz; i++) {
        var bar = document.createElement("div");                    //creating a new div using createElement
        // let classname = "bar" + i;                               //creating a new class name as bar +i i.e bar0,bar1,...bar99
        let classname = "bar";
        bar.classList.add(classname);                               //adding partiular classname to an element 
        let barcmp = document.getElementsByClassName("bars");       //getElementsbyclassname returns array of elements in that sequence
        barcmp[0].appendChild(bar);                                 //appended in that component
        bar.style.height = (arr[i]) + "px";
        bar.style.width = "0.8%";
        bar.style.backgroundColor = "#17D7A0";                       //background-color will not work here use camel cases for - words in css
        //color is for text color ,but here we used bgcolor
        bar.style.margin = "0.1%";
        bar.style.display = "inline-block";                          //use this to align divs horizontally
        bar.style.borderRadius = "5px";
    }

}
createArray()
async function newArray() {
    let arr = document.getElementsByClassName("bar");

    let arr_size = document.querySelector("#arr_sz").value;
    let x = Math.floor((100 - arr_size) / 2);
    for (let i = 0; i < 100; i++) {
        arr[i].style.height = 0 + "px";
    }
    for (let i = 0; i < arr_size; i++) {
        arr[x + i].style.height = Math.floor(Math.random() * 400) + 1 + "px";
        arr[x + i].style.backgroundColor = "#17D7A0";
    }

}

function speed() {
    delay = document.querySelector("#arr_speed").value;
    delay = 1000 - delay;
}
speed();
function disableSortingBtn() {
    document.querySelector("#BubbleSort").disabled = true;
    document.querySelector("#InsertionSort").disabled = true;
    document.querySelector("#MergeSort").disabled = true;
    document.querySelector("#QuickSort").disabled = true;
    document.querySelector("#SelectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
    document.querySelector("#BubbleSort").disabled = false;
    document.querySelector("#InsertionSort").disabled = false;
    document.querySelector("#MergeSort").disabled = false;
    document.querySelector("#QuickSort").disabled = false;
    document.querySelector("#SelectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
    document.querySelector("#newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
    document.querySelector("#newArray").disabled = false;
}
// createArray();
let newarrbtn2 = document.querySelector("#arr_sz");
newarrbtn2.addEventListener("input", async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await newArray();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

document.querySelector("#arr_speed").addEventListener("input", speed);
let newarrbtn = document.querySelector("#newArray");
newarrbtn.addEventListener("click", async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await newArray();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});