/* 
    an individual is a schedule for a single semester
    individual constructor must copy parent's semester

*/
function individual(semester){
    this.fitness = 0;
    this.genome = []; //array of course name and codes
    this.semester = semester;

    for (const key in semester) {
        if (semester.hasOwnProperty(key)) {
            this.genome.push(key);
        }
    }
}