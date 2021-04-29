import { providers, signIn } from 'next-auth/client'
import { useEffect } from 'react';


const SignIn = ({ providers }) => {
  let redirectUrl = "http://location:3000/dashboard";

useEffect(() => {
  const url = new URL(location.href);
  redirectUrl = url.searchParams.get("callbackUrl");
});
  return (
    <div className="page-signin">
      <div className="page-signin__wrapper">
        <h1>Sign in</h1>
        <img className="page-signin__img" src={`/images/login.svg`} />
        <div className="page-signin__providers">
          {Object.values(providers).map(provider => (
            <div key={provider.name} className="page-signin__provider">
              <button onClick={() => signIn(provider.id)}>
                <img src={`/images/${provider.name.toLowerCase()}.svg`} />
                <span>Sign with {provider.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context)
  }
}

export default SignIn