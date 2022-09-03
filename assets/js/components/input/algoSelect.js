export default function selectedAlgorithm(){

    const algoType = document.getElementById('algoType');
    const algoTypesContainer = algoType.firstElementChild;
    const algorithm = algoTypesContainer.querySelector('input[type=radio]:checked').id;

    updateInputUi(algorithm);

    return algorithm;
}


function displayField(field,display){
    display ?
    field.style.display="block":(
    field.style.display="none",
    field.querySelector('input').value = '' 
    )

}

export function updateInputUi(algo){

    switch(algo){
        case 'RR':{
            displayField(quantomTimeField,true);
            displayField(prioritiesField, false);
        }
        break;

        case 'PP':
        case 'NPP':{
            displayField(prioritiesField,true);
            displayField(quantomTimeField, false);
        }
        break;

        default:{
            displayField(quantomTimeField, false);
            displayField(prioritiesField, false);

        }
        break;
    }
}