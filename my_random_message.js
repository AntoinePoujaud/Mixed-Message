const myFinalMessage = {
    myMessageFirstPart: ["Ce qui me dérange avec toi, ", "Ce qui est drôle avec les extraterrestres, ", "Ce qui est fascinant dans la mode, "],
    myMessageSecondPart: ["c’est la liberté d’expression, ", "c’est l’humour qui s’en dégage, ", "c’est la rotation terrestre, "],
    myMessageThirdPart: ["Margoulin!", "Saltimbanque.", "Petit chérubin!!!"]
}

const chooseRandomMessagePart = (arrayOfMessages) => {
    const myRandomMessage = arrayOfMessages[Math.floor(Math.random() * arrayOfMessages.length)];

    return myRandomMessage;
}

const assembleMessage = () => {
    let myAssembleMessage = "";
    
    for (let part in myFinalMessage) {
        myAssembleMessage += chooseRandomMessagePart(myFinalMessage[part]);
    }

    console.log(myAssembleMessage);
}

assembleMessage();