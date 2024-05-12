fruits=["Apple","Banana","Mango"]
document.write(fruits)

fruits.push("Orange")
document.write("<br>"+fruits)

deleted=fruits.pop()
document.write("<br>"+fruits)

document.write("<br> The deleted item is: "+deleted)

firstdel=fruits.shift()
document.write("<br>"+fruits)
document.write("<br> The deleted item is: "+firstdel)

fruits.unshift("Hello")
document.write("<br>"+fruits)

vegetables=["Brinjal","Carrot"]

conct=fruits.concat(vegetables)
document.write("<br>"+conct)

joinc=conct.join(">")
document.write("<br>"+joinc)

sliced=conct.slice(0,3)
document.write("<br>"+sliced)


spliced=conct.splice(0,3,"My Besty")
document.write("<br>"+spliced)
