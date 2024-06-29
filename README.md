
# react-signIn-page
npm-signin-page is a reusable React component designed to provide a simple and customizable sign-in page for your web applications. This package allows you to quickly integrate a professional-looking sign-in interface without the hassle of building one from scratch.






## Features

- **Easy Integration**: Seamlessly add the sign-in page component to your existing React projects.
- **Customization**: Style the sign-in page according to your application's theme using custom CSS.
- **Lightweight**: Minimal dependencies ensure that your application remains fast and efficient.
- show password feature


## Installation
Install the package using npm:

```bash
npm i react-signin-page
        OR
yarn add react-signin-page
``` 

## Usage

```javascript
import React from "react";
import Login from "react-signin-page";

function App() {
    const onValueChange = (e) =>{
        // write function for handleing the user input
        // e.target.email is email
        // e.target.passoword is password
    }

    const handleloginUser = (e) =>{
        //write function for handeling the sign in function
    }

    return (
        <div className="App">
            <Login onValueChange={onValueChange} handleSubmit={handleloginUser}/>
        </div>
    );
}

export default App;
```
#### props and their definition
|Props|Required|Function|Default Value|
|:---:|:------:|:------:|:------------:|
|bg|No|change background image|![image](src/assets/images/bg.jpg)|
|onValueChange|Yes|handle user input e.g. email and password|NULL|
|handleSubmit|Yes|handle user sign-in|NULL|
|height|No|set height of the Login page|100vh| 


## Example

```javascript
import React,{useState} from "react";
import Login from "react-signin-page";

const loginInitials = {
  email: "",
  password: "",
};

const LoginComponent = () =>{
    const [login, setLogin] = useState(loginInitials);

    const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });

    const handleloginUser = async(e) =>{
        let response = await authenticateLogin(login);
        console.log(response);
        // This is just a demo function. make sure to write your own function according to your requirements.
    };

    return (
        <Login onValueChange={onValueChange} handleSubmit={handleloginUser}/>
    )
  };

};

export default LoginComponent;
```


## Screenshots

![App Screenshot](https://res.cloudinary.com/do1a50mmk/image/upload/fl_preserve_transparency/v1718000819/Screenshot_2024-06-10_114320_tvvvux.jpg?_s=public-apps)


## Contributing

Contributions are always welcome ! If you have any suggestions or improvements, please submit a pull request or open an issue on GitHub.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Feedback

If you have any feedback, please reach out to us at pradipramjnv@gmail.com

