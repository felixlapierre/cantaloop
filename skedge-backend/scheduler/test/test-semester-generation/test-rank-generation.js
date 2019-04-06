// var expect = require('chai').expect;
// var rankGeneration = require("../../semester-generation/fitness.js").rankGeneration;
// var individual = require("../../semester-generation/individual.js");

// var semester = [];
// semester[0] = // pure single conflict
// {
//     "COMP346" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
//         "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
//     },
//     "SOEN341" : {
//         "LEC" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
//     },
//     "SOEN331" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict
//     }
// };
// semester[1] = // pure double conflict
// {
//     "COMP346" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
//         "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
//     },
//     "SOEN341" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
//     },
//     "SOEN331" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
//     }
// };
// semester[2] = // partial single conflict
// {
//     "COMP346" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
//         "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
//     },
//     "SOEN341" : {
//         "LEC" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
//         "TUT" : { "time_start":"15:45","time_end":"17:00","days":"Fr" } //conflict
//     },
//     "SOEN331" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } //conflict 
//     }
// };
// semester[3] = // partial double conflict
// {
//     "COMP346" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" }, //conflict
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
//         "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
//     },
//     "SOEN341" : {
//         "LEC" : { "time_start":"9:45","time_end":"10:15","days":"TuTh" },//conflict
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
//     },
//     "SOEN331" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
//     }
// };
// semester[4] = // GOOD
// {
//     "COMP346" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"TuTh" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"We" },
//         "LAB" : { "time_start":"10:15","time_end":"11:30","days":"Mo" }
//     },
//     "SOEN341" : {
//         "LEC" : { "time_start":"10:15","time_end":"11:30","days":"TuTh" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Fr" } 
//     },
//     "SOEN331" : {
//         "LEC" : { "time_start":"8:45","time_end":"10:00","days":"MoWe" },
//         "TUT" : { "time_start":"14:45","time_end":"16:00","days":"Mo" } 
//     }
// };

// describe('rankGeneration', function(){
//     it('should set a fitness for all members in a generation', function(){
      
//         // arrange
//         var generation = [];
//         for (let i = 0; i < 4; i++) {
//             generation[i] = new individual(semester[0]);
//             generation[i+4] = new individual(semester[1]);
//             generation[i+8] = new individual(semester[2]);
//             generation[i+12] = new individual(semester[3]);
//             generation[i+16] = new individual(semester[4]);
            
//         }

//         // act
//         rankGeneration(generation);  

//         // assert
//         expect(generation).to.satisfy( function(generation ){
//             return generation.every(function(val){
//                     return val.hasOwnProperty("fitness");         
//             });
//         });


//     });
// });