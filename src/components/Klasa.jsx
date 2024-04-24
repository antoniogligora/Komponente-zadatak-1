import React from "react";

export default class Klasna extends React.Component {
  render() {
    const { ime } = this.props;

    return <p>{ime}</p>;
  }
}
