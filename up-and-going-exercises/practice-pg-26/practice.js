const TAX = .08;
const CHECKING_BALANCE = prompt('Account balance?');
const PHONE_PRICE = 99.99;
const ACCESORY_PRICE = 9.99;
const SPENDING_THRESHOLD = prompt('Spending threshold? (Acct balance: ' + CHECKING_BALANCE + ')'); //CHECKING_BALANCE * .8;

function phonePurchase() {
  let cost = 0;
  let numPhones = 0;
  let numAcc = 0;
  let costA = 0;
  let affordable = '';

  while (cost < SPENDING_THRESHOLD) {
    ++numPhones;
    cost += numPhones + PHONE_PRICE;
    costA = cost + ACCESORY_PRICE;

    if (costA < SPENDING_THRESHOLD) {
      ++numAcc;
      cost += ACCESORY_PRICE;
    } else {
      break;
    }
  }

  cost = cost + (cost * TAX);
  affordable = (cost <= CHECKING_BALANCE) ? 'YES':'NO';
  return 'purchased: ' + numPhones + ' acc: ' + numAcc + ' Total Cost: $' + cost.toFixed(2) + ' Affordable?: ' + affordable;
}

document.write('Checking balance: $' + CHECKING_BALANCE + ' Threshold: $' + SPENDING_THRESHOLD + '<br>' + phonePurchase());
