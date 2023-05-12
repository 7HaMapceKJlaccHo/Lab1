import React, { useState } from "react";
import { useStore } from "./MyStore";
import "./App.css";
export function MyComponent() {
  const store = useStore();

  // local state
  const [localData, setLocalData] = useState<any>({
    nume: "",
    prenume: "",
    clasa: "",
    varsta: "",
    diriginte: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  // folosim datele din MobX store
  const myData = store.myData;

  // refresh la date
  // adaugam un obiect nou la MobX store sau actualizam unul existent
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

    setLocalData({ ...localData, isLoading: true });

    setTimeout(() => {
      if (isEditing) {
        store.editObject(editIndex, localData);
        setIsEditing(false);
        setEditIndex(-1);
      } else {
        store.addObject(localData);
      }
      setLocalData({
        nume: "",
        prenume: "",
        clasa: "",
        varsta: "",
        diriginte: "",
        isLoading: false, // hide loading state
      });
    }, 2000);
  };

  // stergem obiectul din MobX store si facem update la local state
  const handleDeleteObject = (index: number) => {
    store.deleteObject(index);
    setLocalData({
      nume: "",
      prenume: "",
      clasa: "",
      varsta: "",
      diriginte: "",
    });
    setIsEditing(false);
    setEditIndex(-1);
  };

  // editam obiectul din MobX store si facem update la local state
  const handleEditObject = (index: number) => {
    const objToEdit = myData[index];
    setLocalData(objToEdit);
    setIsEditing(true);
    setEditIndex(index);
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
        <button className="btn" type="submit">
          {isEditing ? "Actualizeaza" : "Adauga"}
        </button>
        {localData.isLoading && <div className="loading">Se proceseaza...</div>}
      </form>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nume</th>
              <th>Prenume</th>
              <th>Clasa</th>
              <th>Varsta</th>
              <th>Diriginte</th>
              <th>Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {myData.map(
              (
                data: {
                  nume: string;
                  prenume: string;
                  clasa: string;
                  varsta: string;
                  diriginte: string;
                },
                index: number
              ) => (
                <tr key={index}>
                  <td>{data.nume}</td>
                  <td>{data.prenume}</td>
                  <td>{data.clasa}</td>
                  <td>{data.varsta}</td>
                  <td>{data.diriginte}</td>
                  <td>
                    <button
                      className="btn btn-edit"
                      onClick={() => handleEditObject(index)}
                    >
                      Editeaza
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDeleteObject(index)}
                    >
                      Sterge
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MyComponent;
