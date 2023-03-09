import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/appbar";
import { Button, Card, TextField } from "@mui/material";
import ActionAreaCard from "./components/card";

const temparray = [1, 2, 3];

function App() {
  const [nume, setNume] = useState<string>();
  const [prenume, setPrenume] = useState<string>();
  const [grupa, setGrupa] = useState<string>();

  return (
    <div className="app">
      <header>
        <ResponsiveAppBar />
      </header>
      <main className="contents">
        <div>
          <h1>Content</h1>
        </div>
        <div className="cards">
          {temparray.map((id) => (
            <div className="card" key={id}>
              <ActionAreaCard />
            </div>
          ))}
        </div>
        <div>
          <h1>Formular</h1>
        </div>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(
                `Nume= ${nume} \nPrenume= ${prenume} \nGrupa= ${grupa}`
              );
              alert(`Nume= ${nume} \nPrenume= ${prenume} \nGrupa= ${grupa}`);
            }}
          >
            <TextField
              required
              id="nume"
              label="Nume"
              value={nume}
              onChange={(event) => {
                setNume(event.target.value);
              }}
            />
            <TextField
              required
              id="prenume"
              label="Prenume"
              value={prenume}
              onChange={(event) => {
                setPrenume(event.target.value);
              }}
            />
            <TextField
              required
              id="grupa"
              label="Grupa"
              value={grupa}
              onChange={(event) => {
                setGrupa(event.target.value);
              }}
            />
            <Button type="submit" variant="contained">
              Transmite
            </Button>
          </form>
          <div>
            <span>Nume:{nume} </span>
          </div>
          <div>
            <span>Prenume:{prenume}</span>
          </div>
          <div>
            <span>Grupa:{grupa}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
