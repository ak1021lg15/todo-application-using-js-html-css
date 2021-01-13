//    alert('Everthing is connected')
// create text node in todo js 

/*var h= document.createElement('h1')
var myValue=document.createTextNode("Hello world!")
h.appendChild(myValue)
document.querySelector('h1').appendChild(h);
*/

// while
var val = 5
while(val>0){
    console.log(val);
    val--;
}
   //   remove done todo's and assignment

   var ul =  document.getElementById('list');
   var li;

  var addButton = document.getElementById('add');
  addButton.addEventListener('click',addItem);
   
  var removeButton = document.getElementById('remove');
  removeButton.addEventListener('click',removeItem);

  // function addItem(){
  //     console.log('Add button clicked');
  //   }

  // function removeItem()
  // {
  //   console.log('delete item after clicked or delete also checked list');
  // }


// adding todo with fade inv-47

  function addItem(){
      var input=document.getElementById('input')
      var item = input.value;
      ul=document.getElementById('list')
      var textnode = document.createTextNode(item)

      if(item ==='') {
          return false;
      } else {
        //   create li 
          li = document.createElement('li')

        //   create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
  // set atrribute takes two parameter

        // create label
        var label = document.createElement('label');
        label.setAttribute('for','item')//optional

        // add these elements on web page 

        ul.appendChild(label);  /*without this line also label add*/
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        // li.className='visual';
        
        setTimeout(() =>{
            li.className='visual';
        },3);
         

        input.value='';


      }
  }

  // remove todo 
  function removeItem(){
    li =  ul.children
    console.log(li);
    console.log('delete item after clicked or delete also checked list');
    
    for (let index = 0; index < li.length; index++) {
             /* // const element=li[index];
              // console.log(element); checking for all list */
           while( li[index] && li[index].children[0].checked){
               ul.removeChild(li[index])
              
           }
      }
  }    



// Assignment 
// remove removeEverthing ka button banana hai aur sabko delete karna hai 