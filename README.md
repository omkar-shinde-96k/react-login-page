# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)










import './App.css';

function App() {
  return (
    <div class="box">
      <div class="content">
        <h1> hello </h1>
      </div>
      <div class="imagebox">
        <form className='login-form'>
          <label>Your email</label>
          <input type="email" placeholder='Enter your email'></input>
          <label>Password</label>
          <input type="email" placeholder='Enter your password'></input>
          <div className='third-sec'>
            <div className='remeberme'>
              <input type="checkbox"></input>
              <span>Remeber me</span>
            </div>
            <a href="" >Forget password</a>
          </div>
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default App;



*{
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
  /* display: flex;  */
}
.box{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:90vw;
  height: 500px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex; 
}
.content{
  width: calc(50% - 50px);
  height: 100%; 
}
.imagebox{
  width: calc(50% + 200px);
  height: 100%;
  background-color: rgb(29,83,161);
  border-left: 100px solid white;
  border-bottom: 500px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
 .login-form{
  width: 25%; 
  color:white;
  position: absolute;
  top:50%;
  right: 0%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;  
}
input , label{
  height:40px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  outline: none;
  border: none;
}
.login-form .third-sec{
  display:flex;
  align-items: center; 
  justify-content:space-between; 
}
.login-form .third-sec .remeberme{
  display: flex;
  justify-content: center;
  align-items: center;
}
a{
  color:rgb(0, 157, 255);
}
button{
  width: 100%;
  height: 50px;
  background-color: rgb(77,124,254);
  border-radius: 3px; 
  border: none;
  color:white;
  /* outline: none !important; */
  cursor: pointer;
}