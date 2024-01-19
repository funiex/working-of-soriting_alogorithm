function waitforme(ms) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, ms);
        })
    }
    
    async function bubbleSort() {
        let arr = document.getElementsByClassName("bar");
        let len = document.querySelector("#arr_sz").value;
        let start = Math.floor((100 - len) / 2);
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) {
    
    
                //swaping code starts
                let el1 = arr[j + start];
                let el2 = arr[j + 1 + start];
                let sty1 = window.getComputedStyle(el1);
                let sty2 = window.getComputedStyle(el2);
                let transform1 = sty1.getPropertyValue("height");
                let transform2 = sty2.getPropertyValue("height");
                transform1 = transform1.substr(0, transform1.length - 2);
                transform2 = transform2.substr(0, transform2.length - 2);
                let num1 = parseInt(transform1);
                let num2 = parseInt(transform2);
    
                if (num1 > num2) {
                    el1.style.height = transform2 + "px";
                    el2.style.height = transform1 + "px";
                    await waitforme(delay);
                    el1.style.background = "#E84545";           //transition color
                    el2.style.background = "#E84545";
                    await waitforme(delay);
                    arr[j + start].style.background = "#17D7A0";        //original color
    
                    arr[j + 1 + start].style.background = "#17D7A0";
                }
    
                // swaping code ends
    
            }
            arr[len - i - 1 + start].style.background = "#206A5D";          //final color
        }
        arr[0 + start].style.background = "#206A5D";
    }
    const bubbtn = document.querySelector("#BubbleSort");
    bubbtn.addEventListener("click", async function () {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await bubbleSort();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });