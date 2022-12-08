// December 7th, 2022
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    const commands = data.toString().split('\r\n');
    class Node{
        constructor(name, storage){
            this.name = name;
            this.storage = storage;
            this.parent = null;
            this.children = [];
        }
    };

    class Tree {
        constructor(name){
            let node = new Node(name);
            this.root = node;
        }
        
        find(name, node = this.root){
            if(node.name == name)   return node;
            
            for(let child of node.children){
                if(this.find(name, child)) return child;
            }
        
            return null;
        
        }

        add(name, parent){
            let node = new Node(name, 0);
            parent.children.push(node);
            node.parent = parent;
            return node;
        }

        forEach(callback, node = this.root) {

            for (let child of node.children) {
                this.forEach(callback, child);
            }   
            
            callback(node);
        }



    }

    let tree = new Tree('x');

    
    let currentNode = tree.root;
    
    commands.forEach(command => {
        const cmd = command.split(' ')
        if(command.includes('$ cd')){
            if(cmd[2] === '..') currentNode = currentNode.parent;
            else{
                let child = currentNode.children.find(e=>e.name === cmd[2]);
                if(child === undefined){
                    let childNode = tree.add(cmd[2], currentNode)
                    currentNode = childNode;
                }
                else{
                    currentNode = child;
                }
            }
        }
        if(cmd[0] > 0 && !command.includes('$ ls')){
            let parentNode = currentNode;
            currentNode.storage
            while(parentNode){
                parentNode.storage += Number(cmd[0]);
                parentNode = parentNode.parent;
            }
        }
        
    })
    
    
    //console.log(tree)
    //console.log(tree.root.children)

    tree.forEach(node => console.log(" - " + node.name + " : " + node.storage))
    let sum = 0;
    tree.forEach(node => {
        if(node.storage <= 100000){
            sum += node.storage;
        }
    })
    console.log("Sum : " + sum)
});
