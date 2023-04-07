import React, { useState } from "react";
import { useStore } from "./MyStore";
import "./index.css";

function MyComponent() {
  const store = useStore();

  // local state
  const [localData, setLocalData] = useState<any>({
    nume: "",
    prenume: "",
    clasa: "",
    varsta: "",
    diriginte: "",
  });

  // folosim datele din MobX store
  const myData = store.myData;

  // refresh la date
  // adaugam un obiect nou  la MobX store
  const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !localData.nume ||
      !localData.prenume ||
      !localData.clasa ||
      !localData.varsta ||
      !localData.diriginte
    ) {
      alert("Introduceti toate campurile.");
      return;
    }
    store.addObject(localData);
    setLocalData({
      nume: "",
      prenume: "",
      clasa: "",
      varsta: "",
      diriginte: "",
    });
  };

  // stergem obiectul din MobX store si  facem update la  local state
  const handleDeleteObject = (index: number) => {
    store.deleteObject(index);
    setLocalData({
      nume: "",
      prenume: "",
      clasa: "",
      varsta: "",
      diriginte: "",
    });
  };

  return (
    <div className="container">
      <h1 className="title">Evidenta claselor primare</h1>
      <form className="form" onSubmit={handleAddObject}>
        <input
          className="input"
          type="text"
          placeholder="Nume"
          value={localData.nume}
          onChange={(e) => setLocalData({ ...localData, nume: e.target.value })}
        />
        <input
          className="input"
          type="text"
          placeholder="Prenume"
          value={localData.prenume}
          onChange={(e) =>
            setLocalData({ ...localData, prenume: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="Clasa"
          value={localData.clasa}
          onChange={(e) =>
            setLocalData({ ...localData, clasa: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="Varsta"
          value={localData.varsta}
          onChange={(e) =>
            setLocalData({ ...localData, varsta: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="Diriginte"
          value={localData.diriginte}
          onChange={(e) =>
            setLocalData({ ...localData, diriginte: e.target.value })
          }
        />
        <button className="button" type="submit">
          Trimite
        </button>
      </form>
      <div>
        <div className="grid">
          {myData.map((data: any, index: number) => (
            <div key={index} className="object">
              <p>Nume: {data.nume}</p>
              <p>Prenume: {data.prenume}</p>
              <p>Clasa: {data.clasa}</p>
              <p>Varsta: {data.varsta}</p>
              <p>Diriginte: {data.diriginte}</p>
              <button onClick={() => handleDeleteObject(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
