import { createContext, useContext } from "react";
import { observable, action } from "mobx";

export class MyStore {
  @observable myData: any = [];

  constructor() {
    // La prima rulare, dacă localStorage este gol, salvăm un obiect vid
    const localStorageData = localStorage.getItem("myData");
    if (!localStorageData) {
      localStorage.setItem("myData", JSON.stringify([]));
    } else {
      this.setMyData(JSON.parse(localStorageData));
    }
  }

  @action setMyData(data: any) {
    this.myData = data;
    // Salvăm datele actualizate în localStorage
    localStorage.setItem("myData", JSON.stringify(data));
  }

  @action addObject(data: any) {
    this.myData.push(data);
    // Salvăm datele actualizate în localStorage
    localStorage.setItem("myData", JSON.stringify(this.myData));
  }

  @action deleteObject(index: number) {
    this.myData.splice(index, 1);
    // Salvăm datele actualizate în localStorage
    localStorage.setItem("myData", JSON.stringify(this.myData));
  }

  @action editObject(editIndex: number, localData: any) {
    const newData = [...this.myData];
    newData[editIndex] = localData;
    this.setMyData(newData);
  }
}

const StoreContext = createContext(new MyStore());
export const useStore = () => useContext(StoreContext);
