function addClass(element,value){  
    if(!element.className){  
        element.className=value;  
    }else{  
        newClassName=element.className;  
        newClassName+=" ";  
        newClassName=value;  
        element.className=newClassName;  
    }  
}  
function getNextElement(node){
				if(node.nodeType==1){//如果为1则是元素节点，如果为3则是文本节点
					return node;
				}
				if(node.nextSibling){
					return getNextElement(node.nextSibling);
				}
				return null;
			}
function styleElementSiblings(tag,theclass){
	var elems=document.getElementsByTagName(tag);
	var elem;
	for(var i=0;i<elems.length;i++){
		elem=getNextElement(elems[i].nextSibling);
		addClass(elem,theclass);
	}
}
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(function(){
	styleElementSiblings("h1","intro");
})
