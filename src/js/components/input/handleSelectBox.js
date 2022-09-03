import selectedAlgo from "./selectedAlgo.js"

// handle custom select box
export default function handleSelectBox(){
    algoType.addEventListener('click',function(e){
        if(e.target.checked)
            algoType.toggleAttribute('open')
    })
    algoType.onchange = selectedAlgo
}