import q = require("q");



function test(val) {
    let def = q.defer(); // this is mendatory // or ye hamesha yaheen py rahay ga
    

    switch (val) {
        case 1:
            def.reject("val is 1"); // return with err
            break;
        case 2:
            def.resolve("val is 2"); // return with success
            break;
        case 3:
            def.reject("val is 3"); // return with err
            break;
        case 4:
            def.resolve("val is 4"); // return with success
            break;

        default:
            def.resolve("val is unknown"); // return with success
            break;
    }

    return def.promise; //ye b hamesha aisy he rahay ga // this will always in the end of function
    
}// here is decleration of function ended



test(1)

    .then((data) => {
            console.log("this is data",data);
    },
    
    (err) => {
            console.log("this is err",err);
    });