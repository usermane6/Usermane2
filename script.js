//boring
//amounts of things
//BRONION = Swiggity Swoogity
const grassAmounts = document.querySelector("#grass-amounts");
const rockAmounts = document.querySelector("#rock-amounts");
const goldAmounts = document.querySelector("#gold-amounts");
const moneyAmounts = document.querySelector("#money-amounts");
const clippingsAmounts = document.querySelector("#clippings-amounts");
const seedsAmounts = document.querySelector("#seeds-amounts");
const ironAmounts = document.querySelector("#iron-amounts");

//buttons
const gatherBtn = document.querySelector("#gather-btn"); 
const upgradeGtrBtn = document.querySelector("#gather-upgrade-btn");
const upgradeRfnBtn = document.querySelector("#refine-upgrade-btn")
const rockRefineBtn = document.querySelector("#rock-refine-btn");
const goldSellerBtn = document.querySelector("#gold-seller");
const dissectGrsBtn = document.querySelector("#dissect-grass-btn");
const grassGatherer = document.querySelector("#buy-grass-gatherer-btn");
const rockGatherer = document.querySelector("#buy-rock-gatherer-btn");


// game variables
let grass = 1006550;
let rocks = 0;
let gold = 0;
let money = 0;
let iron = 0;
let clippings = 0;
let grassSeeds = 0;

let goldPrice = 1;

let autoGrassCost = 15;
let autoRockCost = 50;

let gatherRocks = false;
let refineIron = false;

let gatherUpgradeLvl = 1;

// x gtr amt means gather amount
let grassGtrAmt = 1;
let rocksGtrAmt = 1;

let grassGathererAmt = 0;
let rockGathererAmt = 0;

let time = 10000;

//functions
//function for what happens when the gather button is pushed
function gather() {
    grass += grassGtrAmt;
    grassAmounts.innerHTML = `grass: ${grass}`; 
    if (grass >= 10) {
        upgradeGtrBtn.classList.remove('hidden');
    }
    if (gatherRocks == true) {
        rocks += rocksGtrAmt;
        rockAmounts.innerHTML = `rocks: ${rocks}`
    }
}

//upgrading the gather function
function upgradeGather() {
    //level one increase
    //first upgrade - simp(AGAINST TWITCH TOS)ly makes grass go up faster
    if (gatherUpgradeLvl == 1) {
        if(grass >= 50) {
            grassGtrAmt ++;
            grass -= 50
            grassAmounts.innerHTML = `grass: ${grass}`;
            upgradeGtrBtn.innerHTML = `gather better: 100 grass`
            gatherUpgradeLvl ++  
        } 
    //level two increase
    // makes rocks fr 
    } else if (gatherUpgradeLvl == 2) {
        if (grass >= 100) {
            gatherRocks = true;
            grass -= 100;
            grassAmounts.innerHTML = `grass: ${grass}`;   
            rockAmounts.innerHTML = `rocks: ${rocks}`;
            upgradeGtrBtn.innerHTML = `gather better: 200 grass 50 rock`  
            gatherUpgradeLvl ++
            if (gatherUpgradeLvl == 3) {
                rockAmounts.classList.remove('hidden');
            }
        } 
    //level three ingreeze
    //all around stat upgrader for grass and rocks
    } else if (gatherUpgradeLvl == 3) {
        if (grass >= 200 && rocks >= 75){
            grass -= 200;
            rocks -= 75;
            grassGtrAmt ++;
            rocksGtrAmt ++;
            grassAmounts.innerHTML = `grass: ${grass}`;   
            rockAmounts.innerHTML = `rocks: ${rocks}`; 
            upgradeGtrBtn.innerHTML = `gather better: 500 grass 250 rock`
            gatherUpgradeLvl ++
        }
    //level four ingrease
    //makes gathering rocks better and unlocks refining
    } else if (gatherUpgradeLvl == 4) {
        if (grass >= 500 && rocks >= 250) {
            grass -= 500;
            rocks -= 250;
            rocksGtrAmt ++;
            grassAmounts.innerHTML = `grass: ${grass}`;   
            rockAmounts.innerHTML = `rocks: ${rocks}`; 
            upgradeGtrBtn.innerHTML = `gather better: 750 grass`;
            gatherUpgradeLvl ++;
            rockRefineBtn.classList.remove("hidden");
        }
    //level five uncrease
    //ups grass gathering amount to 5 per click
    } else if (gatherUpgradeLvl == 5) {
        if (grass >= 750) {
            grass -= 750;
            grassGtrAmt += 2;
            grassAmounts.innerHTML = `grass: ${grass}`;
            upgradeGtrBtn.innerHTML = `gather better: 1250 grass 500 rock`;
            gatherUpgradeLvl ++;
        } 
    // level six increase
    // general upgrade
    } else if (gatherUpgradeLvl == 6) {
        if (grass >= 1250 && rock >= 500) {
            grass -= 1250;
            rocks -= 500;
            grassGtrAmt += 2;
            rocksGtrAmt += 2;
            grassAmounts.innerHTML = `grass: ${grass}`;   
            rockAmounts.innerHTML = `rocks: ${rocks}`; 
            upgradeGtrBtn.innerHTML = `gather better: 1750 grass`;
            gatherUpgradeLvl ++;
        } 
    } else if (gatherUpgradeLvl == 7) {
        if (grass >= 1750) {
            grass -= 1750;
            grassGtrAmt ++;
            dissectGrsBtn.classList.remove("hidden");
            clippingsAmounts.classList.remove("hidden");
            seedsAmounts.classList.remove("hidden");
            grassAmounts.innerHTML = `grass: ${grass}`;
            upgradeGtrBtn.innerHTML = `gather better: 2500 grass 800 rock`;
            gatherUpgradeLvl ++;
        }
    } else if (gatherUpgradeLvl == 8) {
        if (grass >= 2500 && rocks >= 800) {
            grass -= 2500;
            rocks -= 800;
            grassGtrAmt ++;
            rocksGtrAmt ++;
            grassAmounts.innerHTML = `grass: ${grass}`;
            rocksAmounts.innerHTML = `rocks: ${rocks}`;
            upgradeGtrBtn.innerHTML = `gather better: 3250 grass 1200 rock`;
        }
    }
}

//Refining Rocks to Gold
function rockRefine() {
    //Check Amount
    if (rocks >= 1) {
        //annoying math
        //going to get annoyinger (Math.random) 
        //(factual)
        random = Math.round(Math.random * 101)
        gold = ((gold * 5) + rocks) / 5;
        if (refineIron == true) {
            if (random >= 50) {
                iron = ((iron * 10) + rocks) / 10;
            }
        }
        rocks -= rocks
        rockAmounts.innerHTML = `rocks: ${rocks}`; 
        goldAmounts.innerHTML = `gold: ${gold}`;
        ironAmounts.innerHTML = `iron: ${iron}`
        if (gold > 0) {
            goldAmounts.classList.remove('hidden');
        } 
        if (gold >= 25) {
            goldSellerBtn.classList.remove('hidden');
        }
    }
}

function upgradeRefine() {
    if (money >= 100) {
        money -= 100;
        refineIron = true;
        moneyAmounts.innerHTML = `money: ${money}`;
    }
}

//function for selling gold
function sellGold() {
    if (gold >= 10) {
        gold = ((gold * 10) - 100) / 10;
        money += 1;
        goldAmounts.innerHTML = `gold: ${gold}`;
        moneyAmounts.innerHTML = `money: ${money}`;
        moneyAmounts.classList.remove("hidden");
        grassGatherer.classList.remove("hidden");
        rockGatherer.classList.remove("hidden");
    }
}

function dissectGrass() {
    if (grass >= 50) {
        grass -= 50;
        clippings += 10;
        grassSeeds += 5;
        grassAmounts.innerHTML = `grass: ${grass}`;
        clippingsAmounts.innerHTML = `clippings: ${clippings}`
        seedsAmounts.innerHTML = `grass seeds: ${grassSeeds}`
        clippingsAmounts.classList.remove('hidden');
        seedsAmounts.classList.remove("hidden");
    }
}

function buyAutoGrass() {
    if (money >= autoGrassCost) {
        money -= autoGrassCost;
        autoGrassCost = Math.round(autoGrassCost * 1.40);
        grassGathererAmt ++;
        grassGatherer.innerHTML = `hire grass gatherer: ${autoGrassCost} money`;
        moneyAmounts.innerHTML = `money: ${money}`;
    }
}

function buyAutoRock() {
    if (money >= autoRockCost){
        money -= autoRockCost;
        autoRockCost = Math.round(autoRockCost * 1.40);
        rockGathererAmt ++;
        rockGatherer.innerHTML = `hire rock gatherer: ${autoRockCost} money`
        moneyAmounts.innerHTML = `money: ${money}`;
    }
}

//the function for auto grass collection
function autoGrassGtr() {
    if (grassGathererAmt >= 1) {
        grass += grassGtrAmt * grassGathererAmt;
        grassAmounts.innerHTML = `grass: ${grass}`;
    }
}

//the fuction for he automatic rock collection
function autoRockGtr() {
    if (rockGathererAmt >= 1) {
        rocks += rocksGtrAmt * rockGathererAmt;
        rockAmounts.innerHTML = `rocks: ${rocks}`;
    }
}

//runs all automatic functions
function allAutos () {
    autoGrassGtr()
    autoRockGtr()
}

// event listener
gatherBtn.addEventListener("click", gather);
upgradeGtrBtn.addEventListener("click", upgradeGather);
rockRefineBtn.addEventListener("click", rockRefine);
goldSellerBtn.addEventListener("click", sellGold);
grassGatherer.addEventListener("click", buyAutoGrass);
rockGatherer.addtEventListener("click", buyAutoRock);
dissectGrsBtn.addEventListener("click", dissectGrass);
upgradeRfnBtn.addEventListener("click", upgradeRefine);

// time loop
setInterval(allAutos, time);
setInterval();














































































































































































































//This is the funny Number, Tim does not know of the funny Number. The funny number knows all. Nobody may know of his past, Colonel... Sanders. It flashes before his eyes, 1940s, KGB, high ranking officials, fried chicken. It all comes back to him now. He remembers. The clouds, rolling over. The thunderous bangs as lightning touched down in the street. The creaking and rumbling over the 51st Panzer Division rolling along their patrol route. 



