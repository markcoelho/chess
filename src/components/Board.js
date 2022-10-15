import React from "react";
import Tile from "./Tile";
/*
let piece={
    image: string,
    x: number,
    y: number
}
*/
let pieces = [];
let i=8;
while(i--){
 pieces.push({image:"assets/w_pawn.svg",x:i,y:1});
 pieces.push({image:"assets/b_pawn.svg",x:i,y:6});
 if(i===0 || i===7){
    pieces.push({image:"assets/w_castle.svg",x:i,y:0});
    pieces.push({image:"assets/b_castle.svg",x:i,y:7});
 }else if(i===1 || i===6){
    pieces.push({image:"assets/w_knight.svg",x:i,y:0});
    pieces.push({image:"assets/b_knight.svg",x:i,y:7});
 }else if(i===2 || i===5){
    pieces.push({image:"assets/w_bishop.svg",x:i,y:0});
    pieces.push({image:"assets/b_bishop.svg",x:i,y:7});
 }else if(i===3){
    pieces.push({image:"assets/w_queen.svg",x:i,y:0});
    pieces.push({image:"assets/b_queen.svg",x:i,y:7});
 }else if(i===4){
    pieces.push({image:"assets/w_king.svg",x:i,y:0});
    pieces.push({image:"assets/b_king.svg",x:i,y:7});
 }
}
console.log(pieces);
export default function Board(){
    let cells=[];

    let osc=true;

    for(let i=7; i>=0;i--){
        for(let j=0; j<8;j++){
            if(j===0){
                osc=i%2===0?true:false;
            }
            let image=undefined;
            pieces.forEach( (elem) => {
                if(elem.x===j && elem.y===i){
                    image=elem.image;
                }
            });
            cells.push(<Tile black={osc} image={image} />);

            osc=!osc;
    }
    }

    return <div className="text-3xl bg-[#20C20E] w-96 h-96 flex flex-wrap">
        {cells}
        </div>;
}