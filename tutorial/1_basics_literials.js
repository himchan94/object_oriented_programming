const book1 = {
  title: "Book One",
  author: "Jane Doe",
  year: "2016",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: "Book Two",
  author: "Jane Doe",
  year: "2016",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

//console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));

//getSummary 를 살펴보면 같은 메서드가 두 번 선언된 걸 확인할 수 있다.
// 여기서 constructor 아이디어가 나옴
