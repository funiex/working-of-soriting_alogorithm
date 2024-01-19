function waitforme(ms) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, ms);
        })
    }
    
    async function insertionSort() {
        let arr = document.getElementsByClassName("bar");
        let len = parseInt(document.querySelector("#arr_sz").value);
        let start = Math.floor((100 - len) / 2);
        let i, key, j;
        for (i = 1; i < len; i++) {
            // key = arr[i];
            j = i - 1;
            let el1 = arr[start + i];         //key
            let el2 = arr[start + j];
            let sty1 = window.getComputedStyle(el1);
            let sty2 = window.getComputedStyle(el2);
            let transform1 = sty1.getPropertyValue("height");
            let transform2 = sty2.getPropertyValue("height");
            transform1 = transform1.substr(0, transform1.length - 2);
            transform2 = transform2.substr(0, transform2.length - 2);
            let num1 = parseInt(transform1);           //key
            let num2 = parseInt(transform2);           //arr[start+j]
            key = num1;
            await waitforme(delay);
            while (j >= 0 && num2 > key) {
    
                // arr[start+j + 1] = arr[start+j];    
                let el1 = arr[start + j + 1];
                let el2 = arr[start + j];
                let sty2 = window.getComputedStyle(el2);
                let transform2 = sty2.getPropertyValue("height");
                el1.style.height = transform2;
                el1.style.background = "#E84545";           //transition color
                await waitforme(delay);
                el1.style.background = "#206A5D";           //final color
    
                j = j - 1;
                if (j >= 0) {
                    sty2 = window.getComputedStyle(arr[start + j]);
                    transform2 = sty2.getPropertyValue("height");
                    transform2 = transform2.substr(0, transform2.length - 2);
                    num2 = parseInt(transform2);
                }
            }
            await waitforme(delay);
            // arr[start+j + 1] = key;
            let el3 = arr[start + j + 1];
            el3.style.height = transform1 + "px";
    
        }
    }
    let insbtn=document.querySelector("#InsertionSort");
    insbtn.addEventListener("click", async function(){
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await insertionSort();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });