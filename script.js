// script.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultCode,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  render() {
    return (
      <div className="main">
        <div>
          <TitleBar title="Editor" class="left" />
          <TitleBar title="Previewer" class="right" />
        </div>
        <div>
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

// Editor
const TitleBar = (props) => {
  return (
    <div className={"titlebar column " + props.class}>
      <h2>{props.title}</h2>
    </div>
  );
};

// Editor
const Editor = (props) => {
  return (
    <div className="editor column left">
      <textarea id="editor" value={props.markdown} onChange={props.onChange} type="text" />
    </div>
  );
};

// Previewer
const Previewer = (props) => {
  return (
    <div className="previewer column right">
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown),
        }}
      />
    </div>
  );
};

const defaultCode = `# Welcome to my React Markdown Previewer!

// Markdown code...

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

ReactDOM.render(<App />, document.getElementById("root"));
