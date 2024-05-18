/**
 * 
 * @param experiences : number[]
 * @param isMostExperienced : boolean
 * @returns array []
 */
function formTeam(experiences, isMostExperienced){
    experiences.sort();
    if(isMostExperienced){
        return experiences.slice(-2);
    }
    return experiences.slice(0,2);
}

console.log(formTeam([1,4,3,2,8], true));