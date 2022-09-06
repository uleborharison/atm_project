    let totalAmount = 20000;

    let withdarawalBtn = document.getElementById('withdarawal');
    let billPay = document.getElementById('billPay');
    let balanceInquiryBtn = document.getElementById('balanceInquiry');
    let ref = document.getElementById('ref');
    let btnReff = document.getElementById('btnReff');

    let transferBtn = document.getElementById('transfer');
    let depositBtn = document.getElementById('deposit');
    let otherTransaction = document.getElementById('otherTransaction');
    let firstText = document.getElementById('firstText');
    let firstText2 = document.getElementById('firstText2');
    let Exit = document.getElementById('Exit');
    let btnOK = document.getElementById('btnOK');
    let btnOK2 = document.getElementById('btnOK2');
    let amounts = document.getElementById('amounts');
    let secondText = document.getElementById('secondText');
    let secondText2 = document.getElementById('secondText2');
    let amount = document.getElementById('amount');
    let amount2 = document.getElementById('amount2');
    let doubleTransactions = document.getElementById('doubleTransactions');
    let amountIn = document.getElementById('amountIn').value;
    let back = document.getElementById('back');
    let lin1 = document.getElementById('lin1');
    let lin2 = document.getElementById('lin2');
    let transactions = document.getElementById('transactions');
    let btnsSecreen = document.getElementById('btnsSecreen');
    let pin1 = document.getElementById('pin1').value;
    let btnEnter = document.getElementById('btnEnter');
    let pas = document.getElementById('pas');
    let num = document.getElementById('num');
    let pinMsg = document.getElementById('pinMsg');
    let billPayDiv = document.getElementById('billPayDiv');
    let pinDiv = document.getElementById('pinDiv');
    let pinHeading = document.getElementById('pinHeading');

    let incard = document.getElementById("incard");
    let slotEnter = document.getElementById("slotEnter");

    withdarawalBtn.onclick = withdarawal;

    function withdarawal() {
        btnsSecreen.style.display = "none";
        transactions.style.display = "block";
        firstText.innerHTML = "Please enter your amount ";
    }

    btnOK.onclick = OK;
    function OK() {
        let amountIn = document.getElementById('amountIn').value;
        if (amountIn < totalAmount) {
            secondText.innerHTML = "Transaction successful #" + amountIn;
            amount.innerHTML = "Your Remaining balance is #" + (totalAmount - amountIn);
            back.innerHTML = "Back to main screen";
        }
        else {
            secondText.innerHTML = "You have't enough credit";
            amount.innerHTML = "Your total balance is #" + totalAmount;
            back.innerHTML = "Back to main screen";
        }
    }


    btnOK2.onclick = OK2;
    function OK2() {
        let amountIn2 = document.getElementById('amountIn2').value;
        if (amountIn2 < totalAmount) {
            secondText2.innerHTML = "Transaction successful #" + amountIn2;
            amount2.innerHTML = "Your remaining balance is #" + (totalAmount - amountIn2);
            back.innerHTML = "Back to main screen";
        }
        else {
            secondText2.innerHTML = "Insufficient balance";
            amount2.innerHTML = "Your total balance is #" + totalAmount;
            back.innerHTML = "Back to main screen";
        }
    }


    lin2.onclick = Back;
    function Back() {
        billPayDiv.style.display = "none";
        billPayDiv.style.display = "none";
        btnsSecreen.style.display = "block";
    }

    slotEnter.onclick= slot;
        function slot() {
            incard.style.display = "none";
            pas.style.display= "block";
            
    }


    btnEnter.onclick = login;
    function login() {
        let pin1 = document.getElementById('pin1').value;

        if (pin1 == 1234) {
            pas.style.display = "none";
            btnsSecreen.style.display = "block";

        }
        else {
            pinMsg.innerHTML = "**Password not matched";
        }
    }

    billPay.onclick = billPayment;
    function billPayment() {
        firstText2.innerHTML = "Please enter bill reference no";
        btnsSecreen.style.display = "none";
        billPayDiv.style.display = "block";
    }

    btnReff.onclick = change;
    function change() {
        ref.style.display = "none";
        billIn.style.display = "block";
        firstText2.innerHTML = "Please enter your total Bill";
    }


    balanceInquiry.onclick = billInquiry;
    function billInquiry() {
        btnsSecreen.style.display = "none";
        billPayDiv.style.display = "none";
        transactions.style.display = "block";
        ref.style.display = "none";
        amounts.style.display = "none";
        firstText.innerHTML = "Balance inquiry";
        secondText.innerHTML = "Your total balance is #" + totalAmount;

    }

    transferBtn.onclick = transferMoney;
    function transferMoney() {
        transactions.style.display = "none";
        btnsSecreen.style.display = "none";
        billPayDiv.style.display = "block";
        firstText2.innerHTML = "Enter the account number";
    }

    depositBtn.onclick = depositMoney;
    function depositMoney() {
        transactions.style.display = "block";
        btnsSecreen.style.display = "none";
        billPayDiv.style.display = "none";
        firstText.innerHTML = "Enter your amount";
        btnOK.onclick = function () {
            let pin1 = document.getElementById('pin1').value;
            secondText.innerHTML = "Succesfully added #" + pin1;
            amount.innerHTML = "Your new balance is #" + (totalAmount + Number(pin1));
        }
    }

    Exit.onclick = exit;
    function exit() {
        transactions.style.display = "none";
        billPayDiv.style.display = "none";
        btnsSecreen.style.display = "none";
        pas.style.display = "block";
        pinDiv.style.display = "none";
        pinHeading.innerHTML = "Thanks for choosing us :)";
        pinMsg.innerHTML = "We don't compromise on client safety !";
    }

    back.onclick = Back;
    function Back() {
        location.reload();
        //btnsSecreen.style.display= "block";
        transactions.style.display = "none";
        billPayDiv.style.display = "none";
        pas.style.display = "block";
    }




    // #E1E4E2

    // #d6ca1d