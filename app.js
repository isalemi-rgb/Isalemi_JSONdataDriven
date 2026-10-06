//const apple = document.querySelector('#apple');
//const banana = document.querySelector('#banana');
//const plum = document.querySelector('#plum');
const wrapper = document.querySelector('#wrapper');
const ninput = document.querySelector('#name');

//const list = ["apples", " banana", "grapes", " plums", "oranges"];

const list = [
    {
        name: 'apples'
    }
    {
        name: 'kale'
    }
];

//list.splice(0,1);
// removes items - the second input is how many items you want to remove(it should only ever be 1)

//apple.innerHTML = list[0];
//banana.innerHTML = list[1];
//plum.innerHTML = list[2];

//this is apparently "unrealistic" and "archaic"


//this allows you to add to the list indirectly
//list.push("lemons");


//So in this lesson of html-- No more using html!! ALL JS!!
function render () {
    //this stops it from repeating by resetting the wrapper to null
    //you can't just render a new item
    wrapper.innerHTML = ' ';
    //(item, idx) the name doesn't actually matter, but "idx" will get you the index of the list item you hit
    //and then in .splice(idx, 1) will then delete the list number of the specified index #
    list.forEach((item) => {
        const ele = document.createElement("div");
        //const header = document.createElement("h1");
        //const deleteEle = document.createElement("button");
        //lost it, it broke
        //deleteEle function(){}

        ele.style.color = "grey"
        ele.innerHTML = item.name;
        //now nothing show up....
        wrapper.appendChild(ele);
    })
}

render();

document.getElementById("add").addEventListener("click", () => {
    //you can't just render a new item
    list.push(ninput)
    render();
})