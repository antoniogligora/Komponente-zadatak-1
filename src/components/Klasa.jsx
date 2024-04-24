import React from "react";

export default class Klasna extends React.Component {
  render() {
    const { Ime } = this.props;

    return <p>{Ime}</p>;
  }
}
