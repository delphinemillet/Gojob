import React from 'react';

import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Login extends React.Component {

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = () => {
    const { email, password } = this.state
    this.props.submit(email, password)
  }

  render() {
    const { error } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
      <Typography color="primary" variant="main-title">
        gojob
      </Typography>
      <div>
      <Typography variant="main-title">Connexion</Typography>
      <Typography style={{ width: "290px", lineHeight: '1.67', paddingTop: '17px'}}>Merci d’utiliser l’adresse email et le mot de passe que vous avez indiqués lors de votre inscription.</Typography>
      </div>
      <form onSubmit={this.onSubmit}>
        <Typography variant="label" htmlFor="email">Adresse email</Typography>
        <Input placeholder="nom@domaine.com" id="email" onChange={this.onChange} />

        <Typography variant="label" htmlFor="password">Mot de passe</Typography>
        <Input id="password" type="password" onChange={this.onChange} />
      </form>
      <Typography variant="link">J’ai oublié mon mot de passe</Typography>
      <button type="submit">Continuer</button>
      {error && <Typography>{error}</Typography>}
      </div>
    );
  }
};

export default Login;

