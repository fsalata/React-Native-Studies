import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { Container } from '../components/Container';
import { EmployeesListItem } from '../components/EmployeesListItem';
// import { CustomSearch } from '../components/CustomSearch';

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  render() {
    return (
      <Container>
        <EmployeesListItem />
      </Container>
    );
  }
}

export default Employees;
