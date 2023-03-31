import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AdvancedUser from "./domain/AdvancedUser";

const user1: AdvancedUser = {
  name: "Roman",
  surname: "Visterniceanu",
  mail: "roman.visterniceanu@iis.utm.md",
  group: "CR-212",
  isOnline: true,
  age: 21,
  status: "student",
};

const user2: AdvancedUser = {
  name: "Daniel",
  surname: "Rata",
  mail: "daniel.rata@iis.utm.md",
  group: "CR-221",
  isOnline: false,
  age: 20,
  status: "student",
};

function Card({ user }: { user: AdvancedUser }) {
  return (
    <div className="card">
      <p>
        <span className="label">Nume: </span>
        <span className="value">{user.name}</span>
      </p>{" "}
      <p>
        <span className="label">Prenume: </span>
        <span className="value">{user.surname}</span>
      </p>
      <p>
        <span className="label">E-mail: </span>
        <span className="value">{user.mail}</span>
      </p>
      <p>
        <span className="label">Grupa: </span>
        <span className="value">{user.group}</span>
      </p>
      <p>
        <span className="label">OnlineStatus: </span>
        <span className="value">{user.isOnline.toString()}</span>
      </p>
      <p>
        <span className="label">Virsta: </span>
        <span className="value">{user.age}</span>
      </p>
      <p>
        <span className="label">Statut: </span>
        <span className="value">{user.status}</span>
      </p>
    </div>
  );
}

function Lab4() {
  return (
    <div className="container">
      <h1 className="title">Date Personale</h1>
      <Card user={user1} />
      <Card user={user2} />
    </div>
  );
}

export default Lab4;
