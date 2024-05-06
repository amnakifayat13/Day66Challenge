type FirstType = {
    name: string,
    age: number,
}

type SecondType = {
    address: string,
    email: string,
}

type CombinedType = FirstType & SecondType;

const person: CombinedType ={
    name: "John",
    age: 30,
    address: "123 Saddar Karachi",
    email:"abc gmail.com,"
}

console.log(person);
