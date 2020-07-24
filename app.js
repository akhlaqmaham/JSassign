// alert("started")
// function leapYear(y){
//     if(y%4===0 && (y%100!==0 ||y % 400 == 0)){
//         console.log(y + " is a leap year")
//     }else{
//         console.log(y + " is not a leap year")

//     }
// }

// leapYear(2022)

// function sides(a,b,c){
//     var S=(a+b+c)/2
//     console.log(S)
//     var area=(S*(S-a)*(S-b)*(S-c))
//     console.log(Math.sqrt(area))
// }
// sides(2,3,2)



// function findIndexOf(array,findOf){
//     x=0
//     for (var i=0; i<= array.length ; i++){
//         if(array[i]===findOf){
//             alert(`the index of ${findOf} is ${i}`)
//             x=1
//         }
//     }
//     if(x!=1){
//         alert(`the index of ${findOf} is -1`)
//     }
    
// }
// var li=['a','b','c','d','e','f']
// findIndexOf(li,"l")


// function RemoveVowel(string){
//     var checkPoint="";
//     string=string.toLowerCase()
//     for(var i=0; i<string.length; i++){
//         if(string[i]!=="a" && string[i]!=="e" && string[i]!=="i" && string[i]!=="o" && string[i]!=="u"){
//             checkPoint+=string[i]
//         }
//     }
//     return checkPoint
// }
// console.log(RemoveVowel("hello This IS ABDUL basit"))

// function occuranceOfvowel(str){
//     str=str.toLowerCase().split('')
//     console.log(str)
//     for (var i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" ){
//             if(str[i+1]==="a" || str[i+1]==="e" || str[i+1]==="i" || str[i+1]==="o" || str[i+1]==="u" ){
//                 console.log(str[i] , str[i+1])
//             }
//         }
//     }
// }
// occuranceOfvowel('His ACQUAINTANCE, even if some of the vowel sounds are a shade tight, is also exemplary. ADIEU')

// function deleteRow(e){
//     var pr=e.parentNode.parentNode
//     pr.remove()
// }
// var img=document.getElementById('img')
// function imageChange(){
//     img.src='https://www.pakmobizone.pk/wp-content/uploads/2019/12/VgoTel-Smart-7-Blue-1.jpg'
// }

// function restoreImage(){
//      img.src='https://static.toiimg.com/thumb/msid-70072353,width-640,resizemode-4/70072353.jpg'

// }
// var counter=document.getElementById('counter').innerHTML

// function increment(){
//     counter=parseInt(counter)+1
//     document.getElementById('counter').innerHTML=counter
// }

// function decrement(){
//     counter=parseInt(counter)-1
//     document.getElementById('counter').innerHTML=counter

// }

// function submit(){
//     var name= document.getElementById('name')
//     var email= document.getElementById('email')
//     alert("your name is "+name.value)
//     alert("your email is "+email.value)
// }


// function seemore(){
//     var seemore=document.getElementById('seemore')
//     var btn=document.getElementById('btn')
//     if(btn.innerHTML==="see more"){
//         seemore="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!"
//         console.log(seemore)
//         document.getElementById('seemore').innerHTML=seemore
//         btn.innerHTML="see less"
//         btn.style.color="red"
//     }else{
//         seemore="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!"
//         console.log(seemore)
//         document.getElementById('seemore').innerHTML=seemore
//         btn.innerHTML="see more"
//         btn.style.color="aqua"

        
//     }

// }

// alert("please open the console and find the out puts")
// var mianContent=document.getElementById('main-content')
// for (var i = 0; i < mianContent.childNodes.length; i++) {
//      if (mianContent.childNodes[i].nodeType === 1 ) {
//          console.log(mianContent.childNodes[i].nodeName)
//     }
    
// }

// var render=document.getElementsByClassName('render')
// for(var i=0; i<render.length; i++){
//     console.log(render[i].firstChild)
// }
// document.getElementById('first-name').value="First Name"
// document.getElementById('last-name').value="Last Name"
// document.getElementById('email').value="mail@mail.com"

// var formContent=document.getElementById('form-content')
// console.log("form-content node type is ",formContent.nodeType)
// var lastName=document.getElementById('lastName')
// console.log("the node type of lastName is ",lastName.nodeType)

// console.log("lastName having first child of node type" , lastName.firstChild)
// lastName.textContent="Node Updated"
// lastName.style.color="red"

// var len=mianContent.length

// console.log("mianContent having first child of node type" , mianContent.firstElementChild.innerHTML)

// console.log("mianContent having last child of node type" , mianContent.lastElementChild.innerHTML ) 

// console.log("lastName having next child of node type" , lastName.nextElementSibling)

// console.log("lastName having previous child of node type" , lastName.previousElementSibling)