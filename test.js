function mouseProducer(type) {
    return type === 'forGames' ? gameMouseFactory : officeMouseFactory;
}

function gameMouseFactory() {
    return new GameMouse();
}

function officeMouseFactory() {
    return new OfficeMouse();
}

class OfficeMouse {
    info() {
        return 'This mouse is for office!'
    }
}

class GameMouse {
    info() {
        return 'This mouse is for games!'
    }
}

const producer = mouseProducer('forGames');

const mouse =  producer();

console.log(mouse.info());
// "This mouse is for games!"


/*
class Mouse {
    constructor(firm, price, MaxDPI) {
        this.firm = firm;
        this.price = price;
        this.MaxDPI = MaxDPI;
    }
}

class MouseFactory {
    buy(type) {
        if (type === 'J90')
            return new Mouse('Bloody', 48, 5000);
        if (type === 'V8')
            return new Mouse('Bloody', 44, 3200);
    }
}

const factory = new MouseFactory();

const J90 = factory.buy('J90');
const V8 = factory.buy('V8');

console.log(J90);

/!*Mouse {
    firm: 'Bloody',
    price: 48,
    MaxDPI: 5000
}*!/

console.log(V8);

/!*Mouse {
    firm: 'Bloody',
    price: 44,
    MaxDPI: 3200
}*!/
*/
