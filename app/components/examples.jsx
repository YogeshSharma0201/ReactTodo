var React = require('react');
var {Link} = require('react-router');

var examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=New%20Delhi'>New Delhi</Link>
        </li>
        <li>
          <Link to='/?location=Gurugram'>Gurugram</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = examples;
