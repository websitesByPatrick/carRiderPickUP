import React from "react";

export const Form = ({ name, action, children }) => {
  return (
    <form action={action}>
      <h1>{name}</h1>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </form>
  );
};

export const Section = ({children}) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
       <p key={index}>{child}</p> 
      ))}
    </div>
  )}

export const Label = ({ name, text }) => {
  return (
    <label htmlFor={name}>{text}</label>
  );
};

export const Input = ({ type, name, id, placeholder }) => {
  return (
    
      <input type={type} name={name} id={id} placeholder={placeholder} />
    
  );
};

export const Button = ({text}) => {
return (
    <button type='submit'>{text}</button>
)

}
