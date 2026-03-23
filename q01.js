const products = ["Electronics", "Furniture", "Stationary"]
const [p1, p2, p3] = products


const p1_details = {p1id: 101, p1price:11111}
const {p1id, p1price} = p1_details
const p2_details = {p2id: 102, p2price:22222}
const {p2id, p2price} = p2_details
const p3_details = {p3id: 103, p3price:33333}
const {p3id, p3price} = p3_details


console.log(p1+" "+p1id+" "+p1price);
console.log(p2+" "+p2id+" "+p2price);
console.log(p3+" "+p3id+" "+p3price);