(async function () {
    try {
        let res = await fetch('https://b42-web-025-pixel-pioneers-default-rtdb.firebaseio.com/projects.json')
        let result = await res.json()
        console.log(result)
        myProjects(result)
    } catch (error) {
        console.error(error)
    }
})()

function myProjects(arr) {
    let pro = document.getElementById("projects")
    pro.innerHTML=''

    arr.forEach((element) => {
        const card = document.createElement("div")
        card.setAttribute("class", "card")
        card.innerHTML = `
                        <button id="folder"><i class="fa-regular fa-folder-open"></i> Save</button>
                        <img class="image" src="${element.image}" alt="">

                        <div class="line" style="display:flex; justify-content:space-between">
                            <h4 class="title" style="max-width:60%;">${element.title}</h4>
                            <div class="social">
                                <p><i class="fa-solid fa-thumbs-up"></i>
                                ${element.likes}
                                </p>
                                <p><i class="fa-solid fa-eye"></i>
                                ${element.views}
                                </p>
                            </div>
                        </div>
                        <p class="own">
                        ${element.owners} <i class="fa-solid fa-caret-down"></i><span>PRO</span>
                        </p>
                        `
                    
                        if (element.owners !== "Multiple Owners") {
                            const caretIcon = card.querySelector(".fa-caret-down");
                            
                            if (caretIcon) {
                                caretIcon.style.display = "none";
                            }
                        }
                        else if(!element.ispro  ){
                            const pro= card.querySelector("span");
                            if(pro){
                                pro.style.display ="none"
                            }
                        }
                        
        pro.appendChild(card)
    });
}

const sort = document.getElementById("sort")

sort.addEventListener("input" , ()=>{
    (async function () {
        try {
            let res = await fetch('https://b42-web-025-pixel-pioneers-default-rtdb.firebaseio.com/projects.json')
            let result = await res.json()
            console.log(result)
            if(sort.value== "pro"){
                result=result.filter((ele) => ele.ispro == true)
                myProjects(result)
            }
            else myProjects(result)
        } catch (error) {
            console.error(error)
        }
    })()
})


const search = document.querySelector(".search-input")

search.addEventListener("input" , ()=>{
    (async function () {
        try {
            let res = await fetch('https://b42-web-025-pixel-pioneers-default-rtdb.firebaseio.com/projects.json')
            let result = await res.json()
            console.log(result)
            let arr = result.filter(el => el.title.toLowerCase().includes(search.value.toLowerCase()) )
            myProjects(arr)
        } catch (error) {
            console.error(error)
        }
    })()
})



const cut = document.getElementById("s-head")
const s_bar = document.querySelector("#side-bar")
const filter = document.querySelector("#ft")
const pro = document.getElementById("projects")

filter.addEventListener("click",()=>{
    s_bar.style.display="block"
    s_bar.style.transform = "translateX(0)"
    pro.style.gridTemplateColumns = "repeat(3, 1fr)";
})


cut.addEventListener("click", () =>{
    s_bar.style.display="none"
    pro.style.gridTemplateColumns = "repeat(4, 1fr)";
})