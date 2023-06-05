 const digin = {
    sum: '+',
    substract: '-',
    multy: '*',
    divison: '/'
};

function calculate({a, b, operation}) {
    let result = null;

    switch (operation) {
        case digin.sum:
            result = sum(a, b);
            break;
        case digin.substract:
            result = substract(a, b);  

            break;   
        case digin.multy:
            result = multy(a, b);
            
            break;

        case digin.divison:
            result = divison(a, b);

            break;
    
    
        default:
            break;
    }
 return result;
}
     
