// ============================================================
// ONLINE MARKETPLACE REPUTATION GAME
// Three rounds × three information conditions
// Client-side only
// ============================================================


// ------------------------------------------------------------
// GAME DATA
// ------------------------------------------------------------

const rounds = [

    {
        product: "Wireless Headphones",
        trueValue: 80,
        seller: "Seller A",

        recentSuccess: 3,
        recentFail: 0,

        fullSuccess: 42,
        fullFail: 3,

        // Hidden from player until results are revealed
        askPrice: 65
    },

    {
        product: "Used Statistics Textbook",
        trueValue: 45,
        seller: "Seller B",

        recentSuccess: 1,
        recentFail: 2,

        fullSuccess: 31,
        fullFail: 14,

        askPrice: 35
    },

    {
        product: "Smartphone",
        trueValue: 90,
        seller: "Seller C",

        recentSuccess: 1,
        recentFail: 2,

        fullSuccess: 58,
        fullFail: 7,

        askPrice: 72
    }

];


// ------------------------------------------------------------
// GAME STATE
// ------------------------------------------------------------

let currentRound = 0;

let gameData = {
    noHistory: [],
    recentHistory: [],
    fullHistory: []
};


// ------------------------------------------------------------
// SCREEN MANAGEMENT
// ------------------------------------------------------------

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


// ------------------------------------------------------------
// START GAME
// ------------------------------------------------------------

document.getElementById("start-btn").addEventListener("click", function () {

    currentRound = 0;

    gameData = {
        noHistory: [],
        recentHistory: [],
        fullHistory: []
    };

    loadRound();

    showScreen("game-screen");
});


// ------------------------------------------------------------
// LOAD ROUND
// ------------------------------------------------------------

function loadRound() {

    const round = rounds[currentRound];

    document.getElementById("round-number").textContent =
        currentRound + 1;

    document.getElementById("product-name").textContent =
        round.product;

    document.getElementById("true-value").textContent =
        "$" + round.trueValue;

    document.getElementById("seller-name").textContent =
        round.seller;


    // Recent history

    document.getElementById("recent-success").textContent =
        round.recentSuccess;

    document.getElementById("recent-fail").textContent =
        round.recentFail;


    // Full history

    document.getElementById("full-success").textContent =
        round.fullSuccess;

    document.getElementById("full-fail").textContent =
        round.fullFail;


    // Clear previous inputs

    document.getElementById("bid-no-history").value = "";
    document.getElementById("bid-recent").value = "";
    document.getElementById("bid-full").value = "";

    document.getElementById("validation-message").textContent = "";

    document.getElementById("submit-bids-btn").disabled = false;
}


// ------------------------------------------------------------
// VALIDATE BID
// ------------------------------------------------------------

function getBid(inputId) {

    const input = document.getElementById(inputId);

    const value = Number(input.value);

    if (
        input.value === "" ||
        !Number.isFinite(value) ||
        value < 0 ||
        value > 100
    ) {
        return null;
    }

    return Math.round(value);
}


// ------------------------------------------------------------
// SUBMIT ALL THREE BIDS
// ------------------------------------------------------------

document.getElementById("submit-bids-btn").addEventListener("click", function () {

    const noBid = getBid("bid-no-history");
    const recentBid = getBid("bid-recent");
    const fullBid = getBid("bid-full");

    const message = document.getElementById("validation-message");


    // Check that all three bids exist

    if (
        noBid === null ||
        recentBid === null ||
        fullBid === null
    ) {

        message.textContent =
            "Please enter a valid bid from $0 to $100 in all three conditions.";

        return;
    }


    // --------------------------------------------------------
    // IMPORTANT:
    // All three bids are locked BEFORE ANY RESULTS ARE SHOWN.
    // --------------------------------------------------------

    const round = rounds[currentRound];

    const noResult =
        calculateResult(noBid, round);

    const recentResult =
        calculateResult(recentBid, round);

    const fullResult =
        calculateResult(fullBid, round);


    // Save data

    gameData.noHistory.push(noResult);
    gameData.recentHistory.push(recentResult);
    gameData.fullHistory.push(fullResult);


    // Disable inputs

    document.getElementById("bid-no-history").disabled = true;
    document.getElementById("bid-recent").disabled = true;
    document.getElementById("bid-full").disabled = true;

    this.disabled = true;


    // Show results

    displayRoundResults(
        noResult,
        recentResult,
        fullResult,
        round.askPrice
    );

});


// ------------------------------------------------------------
// CALCULATE TRANSACTION
// ------------------------------------------------------------

function calculateResult(bid, round) {

    const trade = bid >= round.askPrice;

    let surplus = 0;

    if (trade) {

        surplus = round.trueValue - bid;

    }

    return {
        bid: bid,
        trade: trade,
        surplus: surplus
    };
}


// ------------------------------------------------------------
// DISPLAY ROUND RESULTS
// ------------------------------------------------------------

function displayRoundResults(
    noResult,
    recentResult,
    fullResult,
    askPrice
) {

    document.getElementById("seller-ask-result").textContent =
        "$" + askPrice;


    // No History

    document.getElementById("result-no-bid").textContent =
        "$" + noResult.bid;

    document.getElementById("result-no-trade").textContent =
        noResult.trade ? "✓ Trade" : "× No trade";

    document.getElementById("result-no-surplus").textContent =
        noResult.trade
            ? "$" + noResult.surplus
            : "—";


    // Recent History

    document.getElementById("result-recent-bid").textContent =
        "$" + recentResult.bid;

    document.getElementById("result-recent-trade").textContent =
        recentResult.trade ? "✓ Trade" : "× No trade";

    document.getElementById("result-recent-surplus").textContent =
        recentResult.trade
            ? "$" + recentResult.surplus
            : "—";


    // Full History

    document.getElementById("result-full-bid").textContent =
        "$" + fullResult.bid;

    document.getElementById("result-full-trade").textContent =
        fullResult.trade ? "✓ Trade" : "× No trade";

    document.getElementById("result-full-surplus").textContent =
        fullResult.trade
            ? "$" + fullResult.surplus
            : "—";


    // Change button text on final round

    if (currentRound === rounds.length - 1) {

        document.getElementById("next-round-btn").textContent =
            "See Final Results";

    } else {

        document.getElementById("next-round-btn").textContent =
            "Next Round";

    }


    showScreen("round-results-screen");
}


// ------------------------------------------------------------
// NEXT ROUND
// ------------------------------------------------------------

document.getElementById("next-round-btn").addEventListener("click", function () {

    if (currentRound < rounds.length - 1) {

        currentRound++;

        // Re-enable inputs for the next round

        document.getElementById("bid-no-history").disabled = false;
        document.getElementById("bid-recent").disabled = false;
        document.getElementById("bid-full").disabled = false;

        loadRound();

        showScreen("game-screen");

    } else {

        displayFinalResults();

    }

});


// ------------------------------------------------------------
// FINAL RESULTS
// ------------------------------------------------------------

function displayFinalResults() {

    const noSummary =
        summarize(gameData.noHistory);

    const recentSummary =
        summarize(gameData.recentHistory);

    const fullSummary =
        summarize(gameData.fullHistory);


    // No History

    document.getElementById("avg-no-bid").textContent =
        "$" + noSummary.averageBid;

    document.getElementById("rate-no").textContent =
        noSummary.tradeRate + "%";

    document.getElementById("avg-no-surplus").textContent =
        "$" + noSummary.averageSurplus;


    // Recent History

    document.getElementById("avg-recent-bid").textContent =
        "$" + recentSummary.averageBid;

    document.getElementById("rate-recent").textContent =
        recentSummary.tradeRate + "%";

    document.getElementById("avg-recent-surplus").textContent =
        "$" + recentSummary.averageSurplus;


    // Full History

    document.getElementById("avg-full-bid").textContent =
        "$" + fullSummary.averageBid;

    document.getElementById("rate-full").textContent =
        fullSummary.tradeRate + "%";

    document.getElementById("avg-full-surplus").textContent =
        "$" + fullSummary.averageSurplus;


    showScreen("final-screen");
}


// ------------------------------------------------------------
// SUMMARIZE RESULTS
// ------------------------------------------------------------

function summarize(results) {

    const numberOfRounds = results.length;

    if (numberOfRounds === 0) {

        return {
            averageBid: 0,
            tradeRate: 0,
            averageSurplus: 0
        };

    }


    const totalBid =
        results.reduce(
            (sum, result) => sum + result.bid,
            0
        );


    const trades =
        results.filter(
            result => result.trade
        ).length;


    const totalSurplus =
        results.reduce(
            (sum, result) => sum + result.surplus,
            0
        );


    return {

        averageBid:
            Math.round(totalBid / numberOfRounds),

        tradeRate:
            Math.round(
                (trades / numberOfRounds) * 100
            ),

        averageSurplus:
            Math.round(
                totalSurplus / numberOfRounds
            )
    };
}


// ------------------------------------------------------------
// RESTART
// ------------------------------------------------------------

document.getElementById("restart-btn").addEventListener("click", function () {

    currentRound = 0;

    gameData = {
        noHistory: [],
        recentHistory: [],
        fullHistory: []
    };

    document.getElementById("bid-no-history").disabled = false;
    document.getElementById("bid-recent").disabled = false;
    document.getElementById("bid-full").disabled = false;

    loadRound();

    showScreen("game-screen");

});
