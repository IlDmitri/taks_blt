import React from 'react';
import './App.scss';
import Container from "./components/Container";
import Header from "./components/Header"
import Content from "./components/Content"
import DriverForm from "./components/DriverForm"

const  navItems: Array<string> = [
        'Ride',
        'Become a driver',
        'Fleet',
        'Business',
        'Scooters',
        'Drive',
        'Food',
        'Cities'
];

const title = 'Make money driving with Bolt';
const desc = 'Become a Bolt driver, set your schedule and earn extra money by driving!';

function App() {
  return (
      <Container className="container-fluid px-0">
          <Header
              navMenu={navItems}
          />
          <Content
              title={title}
              desc={desc}
          >
            <DriverForm />
          </Content>
      </Container>
  );
}

export default App;
