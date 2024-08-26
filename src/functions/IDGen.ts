import 'dotenv';
import {getData} from "../functions/GetData";
export async function IDGen(){
    let newID: number = 0;
    let pos: number = 0;
    const list = await getData(
      `${process.env.API}products/all/`,
    );
    while (pos < list.length) {
      if(list[pos].id > newID){
        newID = list[pos].id
      };
      pos++;
    }
      return newID +1
    }