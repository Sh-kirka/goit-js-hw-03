/*Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в
котором необходимо реализовать методы для работы с балансом и историей
транзакций.
//
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */
// let currentTransaction;
// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.

//    * Принимает сумму и тип транзакции.
//    */

//   createTransaction(amount, type = Transaction) {
//     currentTransaction = {
//       id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
//       quantity: amount,
//       trans: type,
//     };
//     return console.log(currentTransaction);
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму тpанзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;

//     this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(currentTransaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return console.log(`Снятие ${amount} не возможно, недостаточно средств`);
//     }
//     this.balance -= amount;

//     this.createTransaction(amount, Transaction.WITHDRAW);

//     this.transactions.push(currentTransaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (this.transactions[i].id === id) {
//         return this.transactions[i];
//       }
//     }
//     return `Такого id: ${id} не обнаружено!`;
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (this.transactions[i].trans === type) {
//         total += this.transactions[i].quantity;
//       }
//     }
//     return total;
//   },
// };
// account.createTransaction(100, Transaction.WITHDRAW); //{id: "f4be2e7c", quantity: 100, trans: "withdraw"}
// account.deposit(200); //[{id: "f237adaa", quantity: 200, trans: "deposit"}]
// account.withdraw(100); //100(Balance)
// account.withdraw(500); //Снятие 500 не возможно, недостаточно средств
// // console.log(account.balance); //100
// console.log(account.transactions); //[{id: "f237adaa", quantity: 200, trans: "deposit"},{id: "f322a9be", quantity: 100, trans: "withdraw"}]
// console.log(account.getBalance()); //100
// account.deposit(200); //{id: "f13da989", quantity: 200, trans: "deposit"}
// console.log(account.getTransactionDetails('f58701e0')); //Такого id: f58701e0 не обнаружено!
// console.log(account.getTransactionDetails(account.transactions[1].id)); //использован такой id,чтобы хоть что-то найти
// console.log(account.getTransactionTotal('withdraw')); //100
// console.log(account.getTransactionTotal('deposit')); //400
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
// Создаем переменную под счетчик, чтобы для удобства тестирования создавать последовательные айди.
let counter = 0;
const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    let transId = (counter += 1);
    return {
      id: transId,
      amount: amount,
      type: type,
    };
  },
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Снятие ${amount} не возможно, недостаточно средств`);
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    }
  },
  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    // for (let i = 0; i < this.transactions.length; i += 1) {
    //   if (this.transactions[i].id === id) {
    //     return this.transactions[i];
    //   }
    // }
    return `Такого id: ${id} не обнаружено!`;
  },
  getTransactionTotal(type) {
    let total = 0;
    // for (let i = 0; i < this.transactions.length; i += 1) {
    //   if (this.transactions[i].type === type) {
    //     total += this.transactions[i].amount;
    //   }
    // }
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
// console.log(account.createTransaction(200, Transaction.DEPOSIT));
// console.log(account.createTransaction(600, Transaction.DEPOSIT));
account.deposit(200);
console.log(account.getBalance());
console.log(account.transactions);
account.withdraw(500);
account.withdraw(100);
console.log(account.getBalance());
console.log(account.transactions);
account.withdraw(50);
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(10));
account.deposit(400);
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
