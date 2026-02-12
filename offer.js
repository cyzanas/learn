let price=[250,645,300,900,50]

for (let i=0;i<price.length;i++){
    console.log(`price=${price[i]}`)
    let offer=(price[i]/10)
    let offerMoney=(price[i]-offer)
    console.log(`New offer Money=${offerMoney}`)
}