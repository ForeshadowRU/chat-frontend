import React from "react";

import "./App.css";
import { getMessages, sendMessage } from "./actions";
import openSocket from "socket.io-client";

export class App extends React.Component {
  async componentDidMount() {
    const userName = localStorage.getItem("username");
    if (userName) this.setState({ nickname: userName });
    const messages = await getMessages();
    this.setState({ messages });

    console.warn(messages);
    this.socket.on("events", event => {
      console.log(event, "da");
      this.setState({ messages: [...this.state.messages, event] });
    });
  }
  socket = openSocket("http://95.189.145.106:35565", { transports: ["websocket"] });
  state = {
    nickname: undefined,
    messages: []
  };
  inp = React.createRef();
  renderForm() {
    return (
      <div>
        <label>
          Nickname
          <input ref={inp => (this.inp = inp)} type="text"></input>
        </label>
        <button
          type="button"
          onClick={e => {
            this.setState({ nickname: this.inp.value });
            localStorage.setItem("username", this.inp.value);
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  renderChat() {
    return (
      <div className="chat">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.socket.emit("events", { text: this.message.value, sender: this.state.nickname });
          }}
        >
          <section className="chat__messages">
            {this.state.messages.map(message => (
              <article className="chat__message">
                <span>
                  {message.sender}: {message.text}{" "}
                </span>
                <span className="chat__date">{new Date(message.created_at).toDateString()}</span>
              </article>
            ))}
          </section>
          <div className="chat__layer"></div>
          <section className="chat__controll">
            <input
              ref={message => (this.message = message)}
              type="textaria"
              placeholder="Message"
              className="chat__input"
            ></input>
            <button className="chat__submit" type="submit"></button>
          </section>
        </form>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        {!this.state.nickname && this.renderForm()}
        {this.state.nickname && this.renderChat()}
      </div>
    );
  }
}

export default App;
