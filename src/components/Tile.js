import Piece
 from "./Piece";
export default function Tile({black,image}){
    if(black){
        return <div className=" bg-black w-[12.5%] h-[12.5%] flex flex-wrap justify-around">
            <Piece image={image} />
        </div>;
    }else{
        return <div className=" bg-red-900 w-[12.5%] h-[12.5%] flex flex-wrap">
            <Piece image={image} />
        </div>;
    }
}