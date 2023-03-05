const selected = document.querySelector('.input')
const btn = document.querySelector('.header-btn')

const DomElement = function(values, ){
this.selector=values
this.height=values
this.width=values
this.bg=values
this.fontSize=values

}

//   let b =new DomElement()
//

DomElement.prototype.createElement = function () {
    const newBlock= document.querySelector('.section')
    let b =new DomElement
    b.selector=selected.value
   
    
  if(b.selector.indexOf('.')==0&& !Number(b.selector)){
    b.selector= b.selector.substring(1);
   console.dir(b)
   
    newBlock.insertAdjacentHTML(`afterbegin`,`<div class="${b.selector} block">
    этот блок имеет class ${b.selector} </div>`)
  } else if (b.selector.indexOf('#')==0){
    b.selector= b.selector.substring(1);
 
        newBlock.insertAdjacentHTML(`afterbegin`,`<div id="${b.selector}" class="block">
        <span>этот блок имеет id ${b.selector}</span></span></div>`)
      
  }
 
 

    
    
}
btn.addEventListener('click',()=>{
  
   
   
   const newDomElement = new DomElement();
   newDomElement.createElement();
   console.dir(newDomElement)
   selected.value=""
})
