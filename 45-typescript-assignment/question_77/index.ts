function greets(name?: string){
    if(name === 'Hammad'){
        console.log(`Hi ${name}`);
    }else{
        console.log(`Hi Anonymous`);
    }
}

greets('Hammad')
greets()