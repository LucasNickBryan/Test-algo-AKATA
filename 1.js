
/**
 * 
 * @param {*} html 
 * @returns bool
 */
function isValidHtml(html){
    let isValid = true;
    
    // separate all balises
    let baliseContainer = html.split('<');
    baliseContainer = baliseContainer.slice(1);
    const openBalise = []; // listing openener html balise
    const closeBalise = []; // listing html balise for close
    baliseContainer.forEach((balise, index) => {
        if(balise.includes('/')){
            closeBalise.push((balise.replace('/', '')).replace('>', ''))
        }
        else{
            openBalise.push((balise.replace('>', '')))
        }
        baliseContainer[index] = (balise.replace('/', '')).replace('>', '')
    });
    
    // first time checking html validity
    const len = openBalise.length
    for(i=0; i< len; i++){
        if(openBalise[len-(i+1)] !== closeBalise[i]){
            isValid = false
        }
    }
    
    // check if balises are going per to per
    if(!isValid){
        let successiveValid = true
        for(i=0; i< baliseContainer.length; i+=2){
            if(baliseContainer[i] !== baliseContainer[i+1]){
                successiveValid = false
            }
        } 
    
        return successiveValid;
    }
    
    return isValid;
}



htmlDocument = "<p><span></p>"
console.log(isValidHtml(htmlDocument)); 