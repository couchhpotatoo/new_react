function customRender(reactEle,mainC){
    const domEle=document.createElement{reactEle.type}
    domEle.innerHTML=reactEle.children
}
const reactEle={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const mainC=document.querySelector('#root')
customRender(reactEle,mainC)