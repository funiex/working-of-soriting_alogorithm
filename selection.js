function waitforme(ms) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, ms);
        })
    }
    
    async function selectionSort() {
        let arr = document.getElementsByClassName("bar");
        let len = parseInt(document.querySelector("#arr_sz").value);
        let start = Math.floor((100 - len) / 2);
        let min_index;
        for (let i = 0; i < len - 1; i++) {
            min_index = i;
            // await waitforme(delay);
            for (let j = i + 1; j < len; j++) {
                let sty1 = window.getComputedStyle(arr[j + start]);
                let sty2 = window.getComputedStyle(arr[min_index + start]);
                let transform1 = sty1.getPropertyValue("height");
                let transform2 = sty2.getPropertyValue("height");
                transform1 = transform1.substr(0, transform1.length - 2);
                transform2 = transform2.substr(0, transform2.length - 2);
                let num1 = parseInt(transform1);
                let num2 = parseInt(transform2);
                if (num1 < num2) {
                    min_index = j;
                }
            }
            let el1 = arr[i + start];
            let el2 = arr[min_index + start];
            let sty1 = window.getComputedStyle(el1);
            let sty2 = window.getComputedStyle(el2);
            let transform1 = sty1.getPropertyValue("height");
            let transform2 = sty2.getPropertyValue("height");
    
            el1.style.background = "#E84545";
            el2.style.background = "#E84545";                   //transition color
            await waitforme(delay); 
            el1.style.height = transform2 ;
            el2.style.height = transform1 ;
            await waitforme(delay);
            el1.style.background = "#17D7A0";                   //original color
            el2.style.background = "#17D7A0";
    
            arr[i + start].style.background = "#206A5D";        //final color
        }
        console.log(len, typeof len);
        arr[len - 1 + start].style.background = "#206A5D";
    }
    
    const selbtn=document.querySelector("#SelectionSort");
    selbtn.addEventListener("click", async function(){
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await selectionSort();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });